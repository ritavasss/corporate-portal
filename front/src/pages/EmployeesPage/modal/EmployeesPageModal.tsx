import { useEffect, useState } from "react";
import { Modal, Box, Typography, Button, Divider, InputBase, Tooltip } from "@mui/material";

import { useStyles } from "./EmployeesPageModal.styles";
import { GarbageIcon, ResetIcon } from "../../../assets/icons";
import { CustomAutocomplete } from "../../../components/common/CustomAutocomplete";
import { CustomDate } from "../../../components/common/CustomDate";
import { Employee, filtersDataProps } from "../../../services/Employees/employeesService.types";
import { deleteEmployee, updateEmployee } from "../../../services";
import { ConfirmModal } from "../../../components/common/ConfirmModal/ConfirmModal";

interface EmployeeModalProps {
  filtersData: filtersDataProps;
  employee: Employee | null;
  refresh: () => void;
  onClose: () => void;
}

const EmployeeModal = ({ filtersData, employee, refresh, onClose }: EmployeeModalProps) => {
  const {classes} = useStyles();
  const enableEdit = true;

  const [editedEmployee, setEditedEmployee] = useState<Employee | null>(employee);
  const [confirmModal, setConfirmModal] = useState<boolean>(false);

  useEffect(() => {
    setEditedEmployee(employee);
  }, [employee]);

  const handleSave = async () => {
    if (!editedEmployee) return;
    
    refresh();
    const payload = {
      email: editedEmployee.email,
      telegram: editedEmployee.telegram,
      vacationStart: editedEmployee.vacationStart,
      vacationEnd: editedEmployee.vacationEnd,
      onVacation: editedEmployee.vacationStart && editedEmployee.vacationEnd ? true : false,
      additionalInfo: editedEmployee.additionalInfo,
      departmentId: editedEmployee.department.id,
      positionId: editedEmployee.position.id,
    };
    try {
      await updateEmployee(editedEmployee.id, payload);
      onClose();
    } catch (error) {
      console.error("Ошибка при обновлении сотрудника:", error);
    }
  };

  const handleDelete = async () => {
    if (!editedEmployee) return;
    refresh();

    try {
      await deleteEmployee(editedEmployee.id);
      onClose();
    } catch (error) {
      console.error("Ошибка при удалении сотрудника:", error);
    }
    setConfirmModal(false);
    onClose();
  };
  
  return (
    <>
      <Modal open={!!employee} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "white",
            p: 4,
            pb: 3,
            borderRadius: "8px",
          }}
        >
          {employee && (
            <>
              <Button
                  onClick={onClose}
                  sx={(theme) => ({
                    position: "absolute",
                    right: 24,
                    top: 24,
                    color: theme.palette.grey[500],
                    minWidth: "0",
                    padding: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  })}
                >
                <ResetIcon />
              </Button>
              <div className={classes.headerRow}>
                <Typography variant="h6" component="h2">
                  {employee.surname + " " + employee.name}
                </Typography>
              </div>
              <div className={classes.container}>
                
                <div className={classes.column1}>
                  <img src={employee.photo} alt={employee.name} className={classes.image} />
                  {(employee.onVacation || enableEdit) &&
                    <>
                      <CustomDate
                        label="Дата начала отпуска"
                        value={editedEmployee?.vacationStart}
                        onChange={(newDate) => {
                          setEditedEmployee((prev) => prev ? { ...prev, vacationStart: newDate || null } : prev)
                        }}
                        readOnly={!enableEdit}
                      />
                      <CustomDate
                        label="Дата окончания отпуска"
                        value={editedEmployee?.vacationEnd}
                        onChange={(newDate) => {
                          setEditedEmployee((prev) => prev ? { ...prev, vacationEnd: newDate || null } : prev)
                        }}
                        readOnly={!enableEdit}
                      />
                    </>
                  }
                </div>
                
                <div className={classes.column2}>
                  <div className={classes.row1}>
                    <div className={classes.customAutocomplete}>
                      <span className="subtitle">Департамент</span>
                      {enableEdit ? (
                        <CustomAutocomplete
                          options={filtersData.departments || []}
                          values={editedEmployee?.department}
                          setValues={(newDepartment) =>
                            setEditedEmployee((prev) =>
                              prev ? { ...prev, department: newDepartment } : prev
                            )
                          }
                        />
                      ) :
                      (
                        <span>{employee.department.name}</span>
                      )
                      }
                    </div>
                    <div className={classes.customAutocomplete}>
                      <span className="subtitle">Должность</span>
                      {enableEdit ? (
                        <CustomAutocomplete
                          options={filtersData.positions || []}
                          values={editedEmployee?.position}
                          setValues={(newPosition) =>
                            setEditedEmployee((prev) =>
                              prev ? { ...prev, position: newPosition } : prev
                            )
                          }
                        />
                      ) : (
                        <span>{employee.position.name}</span>
                      )}
                    </div>
                  </div>
                  <Divider />
                  <div>
                    <span className="subtitle">День рождения: </span>
                    <span>
                      {new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' }).format(new Date(employee.birth))}
                    </span>
                  </div>
                  <Divider />
                
                  <div className={classes.item}>
                    <span className="subtitle">Email: </span>
                    {enableEdit ? (
                      <InputBase
                        className={classes.input}
                        value={editedEmployee?.email}
                        onChange={(e) => setEditedEmployee(prev => prev ? { ...prev, email: e.target.value } : prev)}
                      />
                    ): (
                      <span>{employee.email}</span>
                    )}
                  </div>
                  <div className={classes.item}>
                    <span className="subtitle">Telegram: </span>
                    {enableEdit ? (
                      <InputBase
                        className={classes.input}
                        value={editedEmployee?.telegram}
                        onChange={(e) => setEditedEmployee(prev => prev ? { ...prev, telegram: e.target.value } : prev)}
                      />
                    ) : (
                      <span>{employee.telegram}</span>
                    )}
                  </div>
                  <Divider />
                  <div className={classes.item}>
                    <span className="subtitle">О себе:</span>
                    {enableEdit ? (
                      <InputBase 
                        className={classes.input}
                        placeholder="Введите данные"
                        multiline
                        value={editedEmployee?.additionalInfo}
                        onChange={(e) => setEditedEmployee(prev => prev ? { ...prev, additionalInfo: e.target.value } : prev)}
                        rows={3}
                        sx={{
                          paddingTop: "8px !important",
                          borderRadius: "20px !important",
                        }}
                      />
                    ) : (
                      <span>{employee.additionalInfo || "-"}</span>
                    )}
                  </div>
                </div>
              </div>
              {enableEdit && (
                <div className={classes.buttons}>
                  <div className={classes.buttonsGroup1}>
                    <Tooltip title="Удалить сотрудника" placement="bottom" classes={{ tooltip: classes.tooltip}}>
                      <button 
                        className={classes.deleteButton}
                        onClick={() => setConfirmModal(true)}
                      >
                        <GarbageIcon fill="#D21111"/>
                      </button>
                    </Tooltip>
                  </div>
                  <div className={classes.buttonsGroup2}>
                    <Button
                      className={classes.cancelButton}
                      onClick={onClose}
                    >
                      Закрыть
                    </Button>
                    <Button
                      className={classes.saveButton}
                      onClick={handleSave}
                    >
                      Сохранить
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
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
    </>
  );
};

export { EmployeeModal };
