export interface Employee {
  id: number;
  surname: string;
  name: string;
  photo: string;
  position: { id: number; name: string };
  department: { id: number; name: string };
  email: string;
  telegram: string;
  onVacation: boolean;
  vacationStart: string | null;
  vacationEnd: string | null;
  additionalInfo: string;
  birth: string;
};

export type DepartmentProps = {
  id: number;
  name: string;
  shortName: string;
  director: string;
};

export type PositionProps = {
  id: number;
  name: string;
};

export enum FilterSortOrderEnum {
  ASCENDING,
  DESCENDING,
};

export enum FilterSortFieldEnum {
  surname = "surname",
  department = "department",
  position = "position",
};

export type FiltersValueProps = {
  name?: string;
  department?: number[];
  position?: number[];
  onVacation?: boolean;
};

export type SortingItemProps = {
  order: FilterSortOrderEnum;
  sortedField?: FilterSortFieldEnum;
};
export type SortingValueProps = {
  orders: SortingItemProps[];
};

export type EmployeesSearchFindDataProps = {
  filters: FiltersValueProps;
  sorting: SortingValueProps;
};
