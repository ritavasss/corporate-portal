import {
  Modal,
  Box,
  Button,
  Tooltip,
} from "@mui/material";
import { GarbageIcon, PlusIcon, ResetIcon } from "@/assets";
import { useStyles } from "./AddEmployeeModal.styles";
import { useState } from "react";
import { EmployeeModal } from "./EmployeesPageModal";
import { Employee, filtersDataProps } from "@/services/Employees/employeesService.types";
import { ConfirmModal } from "@/modules/common/components";
import { useAuth } from "@/modules/authentication/AuthContext";
import { createAuthApi } from "@/services/Auth/authApi";

interface EmployeeModalProps {
  allEmployees?: Employee[];
  newEmployees?: any;
  deletedEmployees?: any;
  filtersData: filtersDataProps;
  isOpen: boolean;
  onClose: () => void;
  refresh: () => void;
}

interface EmployeesProps {
  employee: any;
  filtersData: filtersDataProps;
  isDelete?: boolean
  refresh: () => void;
}
const Employees = ({ employee, filtersData, isDelete, refresh }: EmployeesProps) => {
  const { classes } = useStyles();
  const { token } = useAuth();
  
  const [isOpen, setIsOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const handleDelete = async () => {
    if (!employee || !token) return;
    
    const authApi = createAuthApi(token); // Создаём авторизованный API
    
    try {
      await authApi.deleteEmployee(employee.id);
      refresh();
    } catch (error) {
      console.error("Ошибка при удалении сотрудника:", error);
    }
    setConfirmModal(false);
  };

  return (
    <div 
      style={{
        border: isDelete ? "1px solid red" : "1px solid #3798EA",
        borderRadius: "8px",
        padding: "12px",
      }}
    >
      <div 
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{employee.surname + " " + employee.name}</div>
        {isDelete ? 
          <Tooltip title="Удалить сотрудника" placement="bottom" classes={{ tooltip: classes.tooltip }}>
            <button
              className={classes.deleteButton}
              onClick={() => setConfirmModal(true)}
            >
              <GarbageIcon fill="#D21111" />
            </button>
          </Tooltip>
          :
          <Tooltip title={"Добавить сотрудника"} placement="bottom" classes={{ tooltip: classes.tooltip }}>
            <button 
              className={classes.addButton}
              onClick={() => setIsOpen(true)}
            >
              <PlusIcon fill={"#2E8AD3"} />
            </button>
          </Tooltip>
        }
      </div>
      <EmployeeModal
        isOpen={isOpen}
        filtersData={filtersData}
        employee={null}
        newEmloyeee={employee}
        isAddMode={true}
        onClose={() => setIsOpen(false)}
        refresh={refresh}
      />
      <ConfirmModal
        text="Вы действительно хотите удалить сотрудника?"
        isOpenModal={confirmModal}
        onCloseModal={() => setConfirmModal(false)}
        handlerDelete={handleDelete}
      />
    </div>
  );
}

const AddEmployeeModal = ({ allEmployees, newEmployees, deletedEmployees, filtersData, isOpen, onClose, refresh }: EmployeeModalProps) => {
  const { classes } = useStyles();
  //const hasDeleted = deletedEmployees?.map((employee: any) => employee.id).some((value: number) => allEmployees?.map((employee: any) => employee.id).includes(value));

  return (
    <Modal open={isOpen && (newEmployees.length > 0 || deletedEmployees.length > 0)} onClose={onClose}>
      <Box className={classes.modal}>
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
          <div className={classes.container} style={{ marginTop: 32 }}>
            <div className={classes.column1} style={{ flex: 1 }}>
              {newEmployees.length > 0 &&
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontWeight: 600 }}>
                  <span style={{ marginBottom: "8px" }}>Новые сотрудники</span>
                  {newEmployees.map((employee: any, index: number) => (
                    <Employees
                      key={index}
                      employee={employee}
                      filtersData={filtersData}
                      refresh={refresh}
                    />
                  ))}
                </div>
              }
              {deletedEmployees.length > 0 &&
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontWeight: 600 }}>
                   <span style={{ marginBottom: "8px" }}>Уволенные сотрудники</span>
                  {allEmployees?.map((employee: any, index: number) => (
                    deletedEmployees?.find((item: any) => item.id === employee.id) &&
                    <Employees
                      key={index}
                      employee={employee}
                      filtersData={filtersData}
                      isDelete
                      refresh={refresh}
                    />
                  ))}
                </div>
              }
            </div>
          </div>
          <div className={classes.buttons}>
            <div className={classes.buttonsGroup1}></div>
            <div className={classes.buttonsGroup2}>
              <Button
                className={classes.cancelButton}
                onClick={onClose}
              >
                Закрыть
              </Button>
            </div>
          </div>
          </>
      </Box>
    </Modal>
  );
};

export { AddEmployeeModal };
