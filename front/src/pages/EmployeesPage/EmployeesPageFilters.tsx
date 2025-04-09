import { useEffect, useState } from "react";

import { CustomAutocomplete } from "../../components/common/CustomAutocomplete";
import { Button } from "@mui/material";
import { useStyles } from "./EmployeesPageFilters.styles";
import { fetchDepartments, fetchPositions } from "../../services";
import { DepartmentProps, PositionProps } from "../../services/Employees/employeesService.types";

type Props = {
  selectedDepartments: DepartmentProps[];
  setSelectedDepartments: (selectedDepartments: DepartmentProps[]) => void;
  selectedPositions: PositionProps[];
  setSelectedPositions: (selectedPositions: PositionProps[]) => void;
  selectedStatus: boolean | undefined;
  setSelectedStatus: (selectedStatus: boolean | undefined) => void;
  apply: () => void;
  clear: () => void
}

const EmployeesPageFilters = ({
  selectedDepartments,
  setSelectedDepartments,
  selectedPositions,
  setSelectedPositions,
  selectedStatus,
  setSelectedStatus,
  apply,
  clear,
}: Props) => {
  const { classes } = useStyles();
  
  const [departments, setDepartments] = useState<DepartmentProps[]>([]);
  const [positions, setPositions] = useState<PositionProps[]>([]);

  useEffect(() => {
    const getFiltersData = async () => {
      try {
        const [departmentsData, positionsData] = await Promise.all([
          fetchDepartments(),
          fetchPositions(),
        ]);
        setDepartments(departmentsData);
        setPositions(positionsData);
      } catch (error) {
        console.error("Error fetching filters data:", error);
      }
    };
  
    getFiltersData();
  }, []);

  return (
    <div className={classes.filtersContainer}>
      <div className={classes.filters}>
        <CustomAutocomplete
          multiple
          options={departments}
          values={selectedDepartments}
          setValues={setSelectedDepartments}
          lable="Департамент"
        />
        <CustomAutocomplete
          multiple
          options={positions}
          values={selectedPositions}
          setValues={setSelectedPositions}
          lable="Должность"
        />
        <CustomAutocomplete
          options={[
            { id: 1, name: "Да", value: true },
            { id: 2, name: "Нет", value: false },
          ]}
          values={
            selectedStatus === undefined
              ? null
              : { id: selectedStatus ? 1 : 2, name: selectedStatus ? "Да" : "Нет", value: selectedStatus }
          }
          setValues={(newValue) =>
            setSelectedStatus(newValue ? newValue.value : undefined)
          }
          lable="В отпуске"
        />
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          className={classes.applyButton}
          onClick={apply}
        >
          Применить
        </Button>
        <Button
          className={classes.resetButton}
          onClick={clear}
        >
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export { EmployeesPageFilters };
