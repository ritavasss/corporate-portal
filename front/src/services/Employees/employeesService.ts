import axios from "axios";
import { 
  DepartmentProps, 
  EmployeesDataProps, 
  EmployeesSearchFindDataProps, 
  PositionProps
} from "./employeesService.types";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchDepartments = async (): Promise<DepartmentProps[]> => {
  try {
    const response = await api.get("/departments");
    return response.data;
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
};

export const fetchPositions = async (): Promise<PositionProps[]> => {
  try {
    const response = await api.get("/positions");
    return response.data;
  } catch (error) {
    console.error("Error fetching positions:", error);
    throw error;
  }
};

export const fetchFilteredEmployees = async (
  payload: EmployeesSearchFindDataProps
): Promise<EmployeesDataProps> => {
  try {
    const response = await api.post("/employee/filtered-list", payload);
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered employees:", error);
    throw error;
  }
};