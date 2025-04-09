import { useState } from "react";
import clsx from "clsx";

import { useStyles } from "./EmployeesPageCard.styles";
import { EmployeeModal } from "./modal/EmployeesPageModal";
import { Employee } from "../../services/Employees/employeesService.types";

const Card = ({employee, onClick } : {employee: Employee, onClick: () => void}) => {
  const {classes} = useStyles();
  
  return (
    <div className={classes.card} onClick={onClick} style={{cursor: "pointer"}}>
      <img src={employee.photo} alt={employee.name} className={classes.image} />
      <div className={classes.description}>
        <div className={classes.nameContainer}>
          <p className={classes.name}>{employee.surname + " " + employee.name}</p>
          <p className={clsx(classes.status, {active: !employee.onVacation})}>{employee.onVacation ? "В отпуске" : ""}</p>
        </div>
        <p>{employee.position.name}</p>
        <p>{employee.email}</p>
        <p>{employee.telegram}</p>
      </div>
    </div>
  )
}
const EmployeesPageCard = ({data, setIsRefresh} : {data: Employee[], setIsRefresh: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const {classes} = useStyles();
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  return (
    <>
      <div className={classes.scrollContainer}>
        <div className={classes.cardsContainer}>
          {data.map((employee: Employee, index: number) => (
            <Card 
              key={index}
              employee={employee}
              onClick={() => setSelectedEmployee(employee)}
            />
          ))}
        </div>
      </div>
      <EmployeeModal
        employee={selectedEmployee}
        onSave={() => setIsRefresh(true)}
        onClose={() => setSelectedEmployee(null)}
      />
    </>
  )
}

export { EmployeesPageCard };
