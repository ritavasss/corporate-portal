package com.dfs.corporate_portal.repository;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("SELECT e FROM Employee e WHERE " +
            "(:name IS NULL OR :name = '' OR " +
            "LOWER(e.name) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(e.surname) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(CONCAT(e.name, ' ', e.surname)) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(CONCAT(e.surname, ' ', e.name)) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(e.position.name) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(e.department.name) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(e.department.shortName) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(e.email) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(e.telegram) LIKE LOWER(CONCAT('%', :name, '%')) OR " +
            "LOWER(CASE WHEN e.onVacation = true THEN 'отпуск в отпуске' ELSE 'работает' END) LIKE LOWER(CONCAT('%', :name, '%'))) AND " +
            "(:positionIds IS NULL OR e.position.id IN :positionIds) AND " +
            "(:departmentIds IS NULL OR e.department.id IN :departmentIds) AND " +
            "(:onVacation IS NULL OR e.onVacation IN :onVacation)")
    List<Employee> findFilteredEmployees(
            @Param("name") String name,
            @Param("positionIds") List<Long> positionIds,
            @Param("departmentIds") List<Long> departmentIds,
            @Param("onVacation") Boolean onVacation,
            PageRequest pageRequest);
}
