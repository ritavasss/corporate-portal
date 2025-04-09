package com.dfs.corporate_portal.dto;

import com.dfs.corporate_portal.repository.Employee;
import java.util.List;

public class EmployeeListResponse {

    private List<Employee> data;
    private int total;

    public EmployeeListResponse(List<Employee> data, int total) {
        this.data = data;
        this.total = total;
    }

    public List<Employee> getData() {
        return data;
    }

    public void setData(List<Employee> data) {
        this.data = data;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}
