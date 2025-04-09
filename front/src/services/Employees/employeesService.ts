import axios from "axios";
import { DepartmentProps, EmployeesSearchFindDataProps, PositionProps } from "./employeesService.types";

export const fetchDepartments = async (): Promise<DepartmentProps[]> => {
  const response = await axios.get("http://localhost:8080/api/departments");
  return response.data;
};

export const fetchPositions = async (): Promise<PositionProps[]> => {
  const response = await axios.get("http://localhost:8080/api/positions");
  return response.data;
};

export const fetchFilteredEmployees = async (payload: EmployeesSearchFindDataProps): Promise<any> => {
  const response = await axios.post("http://localhost:8080/api/employee/filter", payload);
  return response.data;
};

export const updateEmployee = async (id: number, payload: any): Promise<void> => {
  await axios.put(`http://localhost:8080/api/employee/${id}`, payload);
};

export const deleteEmployee = async (id: number) => {
  await axios.delete(`http://localhost:8080/api/employee/${id}`);
};