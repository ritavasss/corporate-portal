import { CustomAutocomplete } from "../../components/common/CustomAutocomplete";
import { Button } from "@mui/material";
import { useStyles } from "./EmployeesPageFilters.styles";
import { DepartmentProps, filtersDataProps, PositionProps } from "../../services/Employees/employeesService.types";

type Props = {
  filtersData: filtersDataProps;
  selectedDepartments: DepartmentProps[];
  setSelectedDepartments: (selectedDepartments: DepartmentProps[]) => void;
  selectedPositions: PositionProps[];
  setSelectedPositions: (selectedPositions: PositionProps[]) => void;
  selectedStatus: boolean | undefined;
  setSelectedStatus: (selectedStatus: boolean | undefined) => void;
  apply: () => void;
  clear: () => void;
}

const EmployeesPageFilters = ({
  filtersData,
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

  return (
    <div className={classes.filtersContainer}>
      <div className={classes.filters}>
        <CustomAutocomplete
          multiple
          options={filtersData.departments || []}
          values={selectedDepartments}
          setValues={setSelectedDepartments}
          lable="Департамент"
        />
        <CustomAutocomplete
          multiple
          options={filtersData.positions || []}
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
