import { useEffect, useState } from "react";
import { SortingState } from "@tanstack/react-table";

import { useStyles } from "./EmployeesPage.styles";
import { BackButton } from "@modules/common/components";
import { EmployeesTable } from "./EmployeesPageTable";
import { EmployeesSearch } from "./EmployeesPageSearch";
import { EmployeesPageCard } from "./EmployeesPageCard";
import { EmployeesPageFilters } from "./EmployeesPageFilters";

import {
  DepartmentProps,
  Employee,
  EmployeesSearchFindDataProps,
  filtersDataProps,
  FilterSortFieldEnum,
  FilterSortOrderEnum,
  FiltersValueProps,
  PositionProps
} from "../../services/Employees/employeesService.types";
import { fetchDepartments, fetchFilteredEmployees, fetchPositions } from "../../services";
import { Button, SnackbarContent } from "@mui/material";
import { AddEmployeeModal } from "./modal/AddEmployeeModal";
import { newEmployees, deletedEmployees } from "@/data/newEmployees";
import { WarningCircleIcon } from "@/assets";
import { useAuth } from "@/modules/authentication/AuthContext";
import { createAuthApi } from "@/services/Auth/authApi";

const EmployeesPage = () => {
  const {classes} = useStyles();
  const { token, isAuthenticated } = useAuth();
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [view, setView] = useState("table");

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isCollapsedFilters, setIsCollapsedFilters] = useState(true);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [isUpdateTable, setIsUpdateTable] = useState<boolean>(false);
  const hasAdded = newEmployees?.filter(newEmp => !allEmployees?.some(oldEmp => oldEmp.redmineId === newEmp.redmineId)) || [];
  const hasDeleted = allEmployees?.filter(e => !deletedEmployees?.some(d => d.redmineId === e.redmineId)) || [];
  
  const [filtersData, setFiltersData] = useState<filtersDataProps>({})
  const [searchText, setSearchText] = useState<string>("");
  const [selectedDepartments, setSelectedDepartments] = useState<DepartmentProps[]>([]);
  const [selectedPositions, setSelectedPositions] = useState<PositionProps[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<boolean>();
  const [sorting, setSorting] = useState<SortingState>([
    { id: "surname", desc: false },
  ]);

  const filtersValueDefault: FiltersValueProps = {};
  
  const [filtersValue, setFiltersValue] = useState<FiltersValueProps>(filtersValueDefault);
  const filtersTouched = filtersValue.name?.length || 
                         filtersValue.department?.length || 
                         filtersValue.position?.length ||
                         filtersValue.onVacation !== undefined;

  const getPayloadFilters = () => {
    const payload: EmployeesSearchFindDataProps = {
      filters: filtersValueDefault,
      sorting: {
        orders: sorting.map(s => ({
          sortedField: s.id as FilterSortFieldEnum,
          order: s.desc ? FilterSortOrderEnum.DESCENDING : FilterSortOrderEnum.ASCENDING,
        }))
      }
    };

    if (searchText && searchText.length > 0) {
      payload.filters.name = searchText;
    }

    if (selectedPositions.length > 0) {
      payload.filters.position = filtersValue.position;
    }

    if (selectedDepartments.length > 0) {
      payload.filters.department = filtersValue.department;
    }

    if (selectedStatus !== undefined) {
      payload.filters.onVacation = filtersValue.onVacation;
    }

    return payload;
  }
  const loadEmployees = async () => {
    try {
      const payload = getPayloadFilters();
      const response = await fetchFilteredEmployees(payload);

      setTimeout(() => {
        setEmployees(response.data);
        setIsLoading(false);
      }, 800);

    } catch (error) {
      console.error("Ошибка при получении данных о сотрудниках:", error);
    }
  };

  const getAllEmployees = async () => {
    if (!token) return;
  
    const authApi = createAuthApi(token); // Создаём авторизованный API
  
    try {
      const response = await authApi.fetchEmployees();
      setAllEmployees(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных о сотрудниках:", error);
    }
  };
  
  useEffect(() => {
    setIsRefresh(true);
    getAllEmployees();
  }, [])

  useEffect(() => {
    if (isRefresh) {
      setIsLoading(true);
      setIsRefresh(false);
      loadEmployees();
    }
  }, [searchText, filtersValue, sorting, isRefresh]);

  useEffect(() => {
    if (isUpdateTable) {
      getAllEmployees();
      setIsUpdateTable(false);
    }
  }, [isUpdateTable]);
  
  const getFiltersData = async () => {
    try {
      const [departmentsData, positionsData] = await Promise.all([
        fetchDepartments(),
        fetchPositions(),
      ]);
      setFiltersData({
        departments: departmentsData,
        positions: positionsData
      })
    } catch (error) {
      console.error("Error fetching filters data:", error);
    }
  };
  
  useEffect(() => {
    getFiltersData();
  }, []);
  
  const clear = () => {
    setSearchValue("");
    setSearchText("");
    setIsRefresh(true);
  };
  const search = () => {
    setSearchText(searchValue);
    setIsRefresh(true);
  };

  const action = (
    <Button 
      className={classes.snackbarButton}
      onClick={() => setIsOpenUpdateModal(true)}
    >
      Посмотреть
    </Button>
  );

  return (
    <div className={classes.pageContainer}>
      <div style={{ display: "flex", flex: "none", alignItems: "center", justifyContent: "space-between" }}>
        <BackButton path="/company-info" width="83.5px" height="38px"/>
        {isAuthenticated && (hasAdded.length > 0 || hasDeleted.length > 0) &&
          <SnackbarContent 
            className={classes.snackbar} 
            message={
              <div className={classes.snackContent}>
                <WarningCircleIcon />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span> Доступны новые данные о сотрудниках </span>
                </div>
              </div>
            }
            action={action}
          />
        }
      </div>
      <EmployeesSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isCollapsedFilters={isCollapsedFilters}
        setIsCollapsedFilters={setIsCollapsedFilters}
        filtersTouched={filtersTouched}
        filtersData={filtersData}
        view={view}
        setView={setView}
        clear={clear}
        search={search}
      />
      {!isCollapsedFilters && 
        <EmployeesPageFilters
          filtersData={filtersData}
          selectedDepartments={selectedDepartments}
          setSelectedDepartments={setSelectedDepartments}
          selectedPositions={selectedPositions}
          setSelectedPositions={setSelectedPositions}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          apply={() => {
            setFiltersValue({
              department: selectedDepartments.map(x => x.id),
              position: selectedPositions.map(x => x.id),
              onVacation: selectedStatus,
            })
            setIsRefresh(true);
          }}
          clear={() => {
            setFiltersValue(filtersValueDefault);
            setSelectedDepartments([]);
            setSelectedPositions([]);
            setSelectedStatus(undefined);
            clear();
            setIsRefresh(true);
          }}
        />
      }
      {/*<div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: "20px", gap: "83.5px" }}>
        <div className={classes.tabContainer}>
          <div style={{ width: "12px", height: "46px", marginLeft: "83.5px", backgroundColor: "#3798EA" }}>
            <div style={{ width: "100%", height: "100%", borderBottomRightRadius: "12px", backgroundColor: "white" }}></div>
          </div>
          <div className={classes.tab}>Сотрудники</div>
          <div style={{ width: "12px", height: "46px", backgroundColor: "#3798EA" }}>
            <div style={{ width: "100%", height: "100%", borderBottomLeftRadius: "12px", backgroundColor: "white" }}></div>
          </div>
        </div>
      </div>*/}
      <div className={classes.contentContainer} style={{ opacity : isLoading ? 0.5 : 1 }}>
        {view === "table" ? 
          <EmployeesTable
            filtersData={filtersData}
            data={employees}
            isLoading={isLoading}
            sorting={sorting}
            onSortingChange={setSorting}
            setIsRefresh={setIsRefresh}
            refresh={() => setIsRefresh(true)}
          /> :
          <EmployeesPageCard
            filtersData={filtersData}
            data={employees}
            isLoading={isLoading}
            setIsRefresh={setIsRefresh}
          />
        }
      </div>
      <AddEmployeeModal
        allEmployees={allEmployees}
        newEmployees={hasAdded}
        deletedEmployees={hasDeleted}
        filtersData={filtersData}
        refresh={() => {
          setIsRefresh(true);
          setIsUpdateTable(true);
        }}
        isOpen={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
      />
    </div>
  )
}

export { EmployeesPage };