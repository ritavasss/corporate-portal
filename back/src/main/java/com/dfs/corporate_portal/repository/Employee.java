package com.dfs.corporate_portal.repository;

import jakarta.persistence.*;
import java.time.LocalDate;

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
    private LocalDate birth;

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
                    LocalDate birth, String additionalInfo, Boolean onVacation, LocalDate vacationStart, LocalDate vacationEnd, Integer redmineId) {
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

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getSurname() { return surname; }
    public void setSurname(String surname) { this.surname = surname; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPhoto() { return photo; }
    public void setPhoto(String photo) { this.photo = photo; }
    public Position getPosition() { return position; }
    public void setPosition(Position position) { this.position = position; }
    public Department getDepartment() { return department; }
    public void setDepartment(Department department) { this.department = department; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getTelegram() { return telegram; }
    public void setTelegram(String telegram) { this.telegram = telegram; }
    public LocalDate getBirth() { return birth; }
    public void setBirth(LocalDate birth) { this.birth = birth; }
    public String getAdditionalInfo() { return additionalInfo; }
    public void setAdditionalInfo(String additionalInfo) { this.additionalInfo = additionalInfo; }
    public Boolean getOnVacation() { return onVacation; }
    public void setOnVacation(Boolean onVacation) { this.onVacation = onVacation; }
    public LocalDate getVacationStart() { return vacationStart; }
    public void setVacationStart(LocalDate vacationStart) { this.vacationStart = vacationStart; }
    public LocalDate getVacationEnd() { return vacationEnd; }
    public void setVacationEnd(LocalDate vacationEnd) { this.vacationEnd = vacationEnd; }
    public Integer getRedmineId() { return redmineId; }
    public void setRedmineId(Integer redmineId) { this.redmineId = redmineId; }

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
                ", birth=" + birth +
                ", additionalInfo='" + additionalInfo + '\'' +
                ", onVacation=" + onVacation +
                ", vacationStart=" + vacationStart +
                ", vacationEnd=" + vacationEnd +
                '}';
    }
}