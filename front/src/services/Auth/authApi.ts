import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// --- ЗАЩИЩЁННЫЕ ЗАПРОСЫ (требуют токен) ---

export const createAuthApi = (token: string) => {
  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return {
    fetchEmployees: async (): Promise<any> => {
      const response = await baseApi.get("/employee", authHeaders);
      return response.data;
    },

    updateEmployee: async (id: number, payload: any): Promise<void> => {
      await baseApi.put(`/employee/update/${id}`, payload, authHeaders);
    },

    deleteEmployee: async (id: number): Promise<void> => {
      await baseApi.delete(`/employee/delete/${id}`, authHeaders);
    },

    addEmployee: async (payload: any): Promise<void> => {
      await baseApi.post("/employee/create", payload, authHeaders);
    }
  };
};
