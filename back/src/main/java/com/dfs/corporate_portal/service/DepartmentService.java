package com.dfs.corporate_portal.service;

import com.dfs.corporate_portal.repository.Department;
import com.dfs.corporate_portal.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Department getDepartmentByName(String name) {
        return departmentRepository.findByName(name).orElse(null); // Обработка Optional
    }
}
