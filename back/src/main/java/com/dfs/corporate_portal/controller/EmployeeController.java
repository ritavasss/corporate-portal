package com.dfs.corporate_portal.controller;

import com.dfs.corporate_portal.dto.EmployeeCreateRequest;
import com.dfs.corporate_portal.dto.EmployeeFilterRequest;
import com.dfs.corporate_portal.dto.EmployeeListResponse;
import com.dfs.corporate_portal.dto.EmployeeUpdateRequest;
import com.dfs.corporate_portal.repository.Employee;
import com.dfs.corporate_portal.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Получение всех сотрудников (без фильтрации)
    @GetMapping
    public ResponseEntity<EmployeeListResponse> getAllEmployees() {
        EmployeeListResponse response = employeeService.getAllEmployees();
        return ResponseEntity.ok(response);
    }

    // Получение сотрудника по ID
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeService.getEmployeeById(id);
        return employee != null ? ResponseEntity.ok(employee) : ResponseEntity.notFound().build();
    }

    // Метод для получения списка сотрудников с фильтрацией и сортировкой
    @PostMapping("/filtered-list")
    public ResponseEntity<EmployeeListResponse> getFilteredEmployees(@RequestBody EmployeeFilterRequest filterRequest) {
        EmployeeListResponse response = employeeService.getFilteredEmployees(filterRequest);
        return ResponseEntity.ok(response);
    }

    // Метод для обновления данных сотрудника
    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody EmployeeUpdateRequest updateRequest) {
        Employee updatedEmployee = employeeService.updateEmployee(id, updateRequest);
        return updatedEmployee != null ? ResponseEntity.ok(updatedEmployee) : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    // Метод для удаления сотрудника по ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        boolean deleted = employeeService.deleteEmployee(id);
        return deleted ? ResponseEntity.ok().build() : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    // Создание нового сотрудника
    @PostMapping("/create")
    public ResponseEntity<Employee> createEmployee(@RequestBody EmployeeCreateRequest createRequest) {
        try {
            Employee newEmployee = employeeService.createEmployee(createRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(newEmployee);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}