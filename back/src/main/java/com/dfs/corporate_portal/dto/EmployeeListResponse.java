package com.dfs.corporate_portal.dto;

import com.dfs.corporate_portal.repository.Employee;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class EmployeeListResponse {

    private List<Employee> data;
    private int total;

    public EmployeeListResponse(List<Employee> data, int total) {
        this.data = data;
        this.total = total;
    }

}
