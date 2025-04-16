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

const EmployeesPage = () => {
  const {classes} = useStyles();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [view, setView] = useState("table");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isCollapsedFilters, setIsCollapsedFilters] = useState(true);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
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
                         filtersValue.onVacation;

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
        setIsRefresh(false);
      }, 800);

    } catch (error) {
      console.error("Ошибка при получении данных о сотрудниках:", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadEmployees();
  }, [searchText, filtersValue, sorting, isRefresh]);

  
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
  };
  const search = () => {
    setSearchText(searchValue);
  };

  return (
    <div className={classes.pageContainer}>
      <div style={{ flex: "none" }}><BackButton path="/company-info" width="83.5px" height="38px"/></div>
      <EmployeesSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isCollapsedFilters={isCollapsedFilters}
        setIsCollapsedFilters={setIsCollapsedFilters}
        filtersTouched={filtersTouched}
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
            }}
            clear={() => {
              setFiltersValue(filtersValueDefault);
              setSelectedDepartments([]);
              setSelectedPositions([]);
              setSelectedStatus(undefined);
              clear();
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
          /> :
          <EmployeesPageCard
            filtersData={filtersData}
            data={employees}
            setIsRefresh={setIsRefresh}
          />
        }
      </div>
    </div>
  )
}

export { EmployeesPage };