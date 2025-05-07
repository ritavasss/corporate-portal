import { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Divider,
  Tooltip,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useStyles } from "./EmployeesPageModal.styles";
import { GarbageIcon, ResetIcon } from "@/assets/icons";
import {
  Employee,
  filtersDataProps,
} from "@services/Employees/employeesService.types";
import {
  ConfirmModal,
} from "@modules/common/components";
import { FormController } from "./FormController";
import { useAuth } from "@/modules/authentication/AuthContext";
import { createAuthApi } from "@/services/Auth/authApi";

interface EmployeeModalProps {
  isOpen: boolean;
  filtersData: filtersDataProps;
  employee: Employee | null;
  newEmloyeee?: any;
  isAddMode?: boolean;
  refresh: () => void;
  onClose: () => void;
}

const formatDateToLocal = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

type FormValues = {
  email: string;
  telegram: string;
  birth: string | null;
  additionalInfo: string | null;
  department: { id: number; name: string };
  position: { id: number; name: string };
  vacationStart: string | null;
  vacationEnd: string | null;
};

const EmployeeModal = ({
  isOpen,
  filtersData,
  employee,
  newEmloyeee,
  isAddMode = false,
  refresh,
  onClose,
}: EmployeeModalProps) => {
  const { classes } = useStyles();
  const { token, isAuthenticated } = useAuth();
  const enableEdit = isAuthenticated ? true : false;

  const [confirmModal, setConfirmModal] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  useEffect(() => {
    if (employee?.photo) {
      setPhotoPreview(employee.photo);
    } else {
      setPhotoPreview(null);
    }
  }, [employee]);

  const objectShape = {
    id: yup.number().required(),
    name: yup.string().required(),
  };
  const requiredText = "Поле обязательно для заполнения";
  const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
    email: yup.string().email("Введите корректный email адрес").required(requiredText),
    telegram: yup.string().required(requiredText),
    birth: yup.string().nullable().defined(),
    additionalInfo: yup.string().nullable().defined(),
    department: yup.object(objectShape).required(requiredText),
    position: yup.object(objectShape).required(requiredText),
    vacationStart: yup
      .string()
      .nullable()
      .defined()
      .test(
        "both-dates-required",
        "Укажите дату начала отпуска",
        function (value, { parent }) {
          return !parent.vacationEnd || !!value;
        }
      ),

    vacationEnd: yup
      .string()
      .nullable()
      .defined()
      .test(
        "both-dates-required",
        "Укажите дату окончания отпуска",
        function (value, { parent }) {
          return !parent.vacationStart || !!value;
        }
      )
      .test(
        "is-after-start",
        "Дата окончания должна быть после даты начала",
        function (value, { parent }) {
          if (!value || !parent.vacationStart) return true;
          return value > parent.vacationStart;
        }
      ),
  });

  const getDefaultValues = () => ({
    email: isAddMode ? newEmloyeee?.email : employee?.email || "",
    telegram: employee?.telegram || "",
    birth: employee?.birth,
    additionalInfo: employee?.additionalInfo || "",
    department: employee?.department,
    position: employee?.position,
    vacationStart: employee?.vacationStart || null,
    vacationEnd: employee?.vacationEnd || null,
  });

  const formMethods = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: getDefaultValues(),
  });  

  useEffect(() => {
    formMethods.reset(getDefaultValues());
  }, [employee, newEmloyeee, isAddMode, formMethods.reset]);

  const handleClose = () => {
    formMethods.clearErrors();
    setPhotoPreview(null);
    onClose();
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setPhotoPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit = async (formData: FormValues) => {
    if (!token) return;

    const authApi = createAuthApi(token);

    const payloadForUpdate = {
      email: formData.email,
      telegram: formData.telegram,
      vacationStart: formData.vacationStart
        ? formatDateToLocal(new Date(formData.vacationStart))
        : null,
      vacationEnd: formData.vacationEnd
        ? formatDateToLocal(new Date(formData.vacationEnd))
        : null,
      onVacation: formData.vacationStart && formData.vacationEnd ? true : false,
      additionalInfo: formData.additionalInfo,
      birth: formData.birth,
      departmentId: formData.department.id,
      positionId: formData.position.id,
    };

    if (isAddMode) {
      const payloadForAdd = {
        ...payloadForUpdate,
        photo: photoPreview || "",
        birth: formData.birth,
        name: newEmloyeee.name,
        surname: newEmloyeee.surname,
        redmineId: newEmloyeee.redmineId,
      };
      try {
        await authApi.addEmployee(payloadForAdd);
        refresh();
        handleClose();
      } catch (error) {
        console.error("Ошибка при добавлении сотрудника:", error);
      }
    } else {
      if (!employee) return;

      try {
       await authApi.updateEmployee(employee.id, payloadForUpdate);
       refresh();
       handleClose();
     } catch (error) {
       console.error("Ошибка при обновлении данных сотрудника:", error);
     }
   }
  };

  const handleDelete = async () => {
    if (!employee || !token) return;
    const authApi = createAuthApi(token);
    
    try {
      await authApi.deleteEmployee(employee.id);
      refresh();
      handleClose();
    } catch (error) {
      console.error("Ошибка при удалении сотрудника:", error);
    }
    setConfirmModal(false);
  };

  useEffect(() => {
  }, [formMethods.formState.errors])

  return (
    <FormProvider {...formMethods}>
      <Modal open={!!isOpen} onClose={handleClose}>
        <Box className={classes.modal}>
          <>
            <Button
              onClick={handleClose}
              sx={{ position: "absolute", right: 24, top: 24, minWidth: 0 }}
            >
              <ResetIcon />
            </Button>
            <div className={classes.headerRow}>
              <Typography variant="h6" component="h2">
                {isAddMode ? `${newEmloyeee?.surname || ""} ${newEmloyeee?.name || ""}` : `${employee?.surname || ""} ${employee?.name || ""}`}
              </Typography>
            </div>
            <div className={classes.container}>
              <div className={classes.column1}>
                <div>
                  {isAddMode || !photoPreview ? (
                    <div className={classes.attachmentFileBlock}>
                      <label
                        htmlFor="attachmentInput"
                        className={classes.attachLabel}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          Выбрать файл
                        </div>
                      </label>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        id="attachmentInput"
                        className={classes.fileInput}
                        onChange={handlePhotoChange}
                      />
                    </div>
                  ) : (
                    <img
                      src={photoPreview || ""}
                      alt={employee?.name || "Новый сотрудник"}
                      className={classes.image}
                      style={photoPreview ? {} : { display: "none" }}
                    />
                  )}
                </div>
                {(employee?.onVacation || enableEdit) && !isAddMode && (
                  <>
                    <FormController
                      id="vacationStart"
                      label="Дата начала отпуска"
                      data
                      readOnly={!enableEdit}
                    />
                    <FormController
                      id="vacationEnd"
                      label="Дата окончания отпуска"
                      data
                      readOnly={!enableEdit}
                    />
                  </>
                )}
              </div>

              <div className={classes.column2}>
                <div className={classes.row1}>
                  <div className={classes.customAutocomplete}>
                    <span className="subtitle">Департамент: </span>
                    <FormController
                      id="department"
                      items={filtersData.departments}
                      readOnly={!enableEdit}
                    />
                  </div>
                  <div className={classes.customAutocomplete}>
                    <span className="subtitle">Должность: </span>
                    <FormController
                      id="position"
                      items={filtersData.positions}
                      readOnly={!enableEdit}
                    />
                  </div>
                </div>

                <div className={classes.item}>
                  <span className="subtitle">Email: </span>
                  <FormController
                    id="email"
                    label="Email"
                    placeholder="Введите email"
                    readOnly={!enableEdit}
                  />
                </div>

                <div className={classes.item}>
                  <span className="subtitle">Telegram: </span>
                  <FormController
                    id="telegram"
                    label="Telegram"
                    placeholder="Введите Telegram"
                    readOnly={!enableEdit}
                  />
                </div>
                <Divider />

                <div className={classes.item}>
                  <span className="subtitle">День рождения: </span>
                  <FormController
                    id="birth"
                    label="День рождения"
                    placeholder="Введите день рождения"
                    readOnly={!enableEdit}
                  />
                </div>

                <div className={classes.item}>
                  <span className="subtitle">О себе:</span>
                  <FormController
                    id="additionalInfo"
                    label="О себе"
                    multiline
                    rows={3}
                    placeholder="Дополнительная информация"
                    readOnly={!enableEdit}
                  />
                </div>
              </div>
            </div>

            {enableEdit && (
              <div className={classes.buttons} style={isAddMode ? { justifyContent: "flex-end" } : {}}>
                {!isAddMode && (
                  <div className={classes.buttonsGroup1}>
                    <Tooltip title="Удалить сотрудника" placement="bottom" classes={{ tooltip: classes.tooltip }}>
                      <button
                        className={classes.deleteButton}
                        onClick={() => setConfirmModal(true)}
                      >
                        <GarbageIcon fill="#D21111" />
                      </button>
                    </Tooltip>
                  </div>
                )}
                <div className={classes.buttonsGroup2}>
                  <Button className={classes.cancelButton} onClick={handleClose}>
                    Закрыть
                  </Button>
                  <Button className={classes.saveButton} onClick={formMethods.handleSubmit(onSubmit)}>
                    {isAddMode ? "Добавить" : "Сохранить"}
                  </Button>
                </div>
              </div>
            )}
          </>
        </Box>
      </Modal>

      {confirmModal && (
        <ConfirmModal
          text="Вы действительно хотите удалить сотрудника?"
          isOpenModal={confirmModal}
          onCloseModal={() => setConfirmModal(false)}
          handlerDelete={handleDelete}
        />
      )}
    </FormProvider>
  );
};

export { EmployeeModal };
