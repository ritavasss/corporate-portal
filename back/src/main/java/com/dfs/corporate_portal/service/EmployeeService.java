package com.dfs.corporate_portal.service;

import com.dfs.corporate_portal.dto.EmployeeFilterRequest;
import com.dfs.corporate_portal.dto.EmployeeListResponse;
import com.dfs.corporate_portal.dto.EmployeeUpdateRequest;
import com.dfs.corporate_portal.repository.Employee;
import com.dfs.corporate_portal.repository.EmployeeRepository;
import com.dfs.corporate_portal.repository.Department;
import com.dfs.corporate_portal.repository.DepartmentRepository;
import com.dfs.corporate_portal.repository.Position;
import com.dfs.corporate_portal.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PositionRepository positionRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public EmployeeListResponse getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return new EmployeeListResponse(employees, employees.size());
    }

    public EmployeeListResponse getFilteredEmployees(EmployeeFilterRequest filterRequest) {
        EmployeeFilterRequest.Filters filters = filterRequest.getFilters();

        // Если фильтры пусты, все равно применяем сортировку
        if (filters == null ||
                (filters.getName() == null || filters.getName().isEmpty()) &&
                        (filters.getPosition() == null || filters.getPosition().isEmpty()) &&
                        (filters.getDepartment() == null || filters.getDepartment().isEmpty()) &&
                        (filters.getOnVacation() == null)) {

            // Если фильтры пусты, просто получаем всех сотрудников, но применяем сортировку
            Sort sort = getSorting(filterRequest.getSorting().getOrders());
            List<Employee> employees = employeeRepository.findAll(sort);  // Используем findAll с сортировкой
            return new EmployeeListResponse(employees, employees.size());
        }

        // Извлекаем фильтры из запроса
        String nameFilter = filters.getName();
        List<Long> positionIds = filters.getPosition();
        List<Long> departmentIds = filters.getDepartment();
        Boolean onVacation = filters.getOnVacation();

        // Создаем сортировку
        Sort sort = getSorting(filterRequest.getSorting().getOrders());

        // Получаем сотрудников с фильтрацией и сортировкой
        List<Employee> employees = employeeRepository.findFilteredEmployees(
                nameFilter, positionIds, departmentIds, onVacation, PageRequest.of(0, 100, sort)
        );

        return new EmployeeListResponse(employees, employees.size());
    }

    private Sort getSorting(List<EmployeeFilterRequest.Sorting.Order> sortingOrders) {
        if (sortingOrders == null || sortingOrders.isEmpty()) {
            return Sort.unsorted();  // Если сортировки нет, возвращаем неотсортированный список
        }

        List<Sort.Order> orders = sortingOrders.stream()
                .map(order -> {
                    // Определяем направление сортировки для каждого поля
                    if (order.getSortedField().equalsIgnoreCase("surname")) {
                        return new Sort.Order(
                                order.getOrder() == 0 ? Sort.Direction.ASC : Sort.Direction.DESC,  // 0 - ASC, 1 - DESC
                                "surname"
                        );
                    } else if (order.getSortedField().equalsIgnoreCase("position")) {
                        return new Sort.Order(
                                order.getOrder() == 0 ? Sort.Direction.ASC : Sort.Direction.DESC,  // 0 - ASC, 1 - DESC
                                "position.name"
                        );
                    } else if (order.getSortedField().equalsIgnoreCase("department")) {
                        return new Sort.Order(
                                order.getOrder() == 0 ? Sort.Direction.ASC : Sort.Direction.DESC,  // 0 - ASC, 1 - DESC
                                "department.name"
                        );
                    }
                    return null;  // Если сортировка не по известному полю, возвращаем null
                })
                .filter(order -> order != null)  // Отфильтровываем null значения
                .collect(Collectors.toList());

        return Sort.by(orders);  // Возвращаем конечную сортировку
    }

    // Метод для обновления информации о сотруднике
    public Employee updateEmployee(Long id, EmployeeUpdateRequest updateRequest) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        if (employee != null) {
            // Обновляем данные сотрудника
            employee.setEmail(updateRequest.getEmail());
            employee.setTelegram(updateRequest.getTelegram());
            employee.setOnVacation(updateRequest.isOnVacation());
            employee.setVacationStart(updateRequest.getVacationStart());
            employee.setVacationEnd(updateRequest.getVacationEnd());
            employee.setAdditionalInfo(updateRequest.getAdditionalInfo());

            // Получаем связанные сущности должности и департамента
            Position position = positionRepository.findById(updateRequest.getPositionId()).orElse(null);
            Department department = departmentRepository.findById(updateRequest.getDepartmentId()).orElse(null);

            if (position == null || department == null) {
                return null;
            }

            // Обновляем должность и департамент сотрудника
            employee.setPosition(position);
            employee.setDepartment(department);

            // Сохраняем обновленного сотрудника
            return employeeRepository.save(employee);
        }
        return null;
    }

    // Метод для удаления сотрудника
    public boolean deleteEmployee(Long id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
