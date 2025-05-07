package com.dfs.corporate_portal.repository;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "photo")
    private String photo;

    @ManyToOne
    @JoinColumn(name = "position_id", nullable = false)
    private Position position;

    @ManyToOne
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

    private String email;
    private String telegram;

    @Column(name = "date_of_birth")
    private String birth;

    @Column(name = "additional_info")
    private String additionalInfo;

    @Column(name = "on_vacation", nullable = false)
    private Boolean onVacation = false;

    @Column(name = "vacation_start")
    private LocalDate vacationStart;

    @Column(name = "vacation_end")
    private LocalDate vacationEnd;

    @Column(name = "redmine_id", unique = true)
    private Integer redmineId;

    public Employee() {}

    public Employee(String surname, String name, Position position, Department department, String email, String telegram,
                    String birth, String additionalInfo, Boolean onVacation, LocalDate vacationStart, LocalDate vacationEnd, Integer redmineId) {
        this.surname = surname;
        this.name = name;
        this.photo = photo;
        this.position = position;
        this.department = department;
        this.email = email;
        this.telegram = telegram;
        this.birth = birth;
        this.additionalInfo = additionalInfo;
        this.onVacation = onVacation != null ? onVacation : false;
        this.vacationStart = vacationStart;
        this.vacationEnd = vacationEnd;
        this.redmineId = redmineId;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", redmineId=" + redmineId +
                ", surname='" + surname + '\'' +
                ", name='" + name + '\'' +
                ", photo=" + photo + '\'' +
                ", position=" + (position != null ? position.getId() : "null") +
                ", department=" + (department != null ? department.getId() : "null") +
                ", email='" + email + '\'' +
                ", telegram='" + telegram + '\'' +
                ", birth=" + birth + '\'' +
                ", additionalInfo='" + additionalInfo + '\'' +
                ", onVacation=" + onVacation +
                ", vacationStart=" + vacationStart +
                ", vacationEnd=" + vacationEnd +
                '}';
    }
}