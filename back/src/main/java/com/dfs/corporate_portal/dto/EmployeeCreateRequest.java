package com.dfs.corporate_portal.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Objects;

@Setter
@Getter
public class EmployeeCreateRequest {
    private String surname;
    private String name;
    private String photo;
    private Long positionId;
    private Long departmentId;
    private String email;
    private String telegram;
    private String birth;
    private String additionalInfo;
    private Boolean onVacation;
    private LocalDate vacationStart;
    private LocalDate vacationEnd;
    private Integer redmineId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmployeeCreateRequest that = (EmployeeCreateRequest) o;
        return Objects.equals(surname, that.surname) &&
                Objects.equals(name, that.name) &&
                Objects.equals(photo, that.photo) &&
                Objects.equals(positionId, that.positionId) &&
                Objects.equals(departmentId, that.departmentId) &&
                Objects.equals(email, that.email) &&
                Objects.equals(telegram, that.telegram) &&
                Objects.equals(birth, that.birth) &&
                Objects.equals(additionalInfo, that.additionalInfo) &&
                Objects.equals(onVacation, that.onVacation) &&
                Objects.equals(vacationStart, that.vacationStart) &&
                Objects.equals(vacationEnd, that.vacationEnd) &&
                Objects.equals(redmineId, that.redmineId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(surname, name, photo, positionId, departmentId, email, telegram, birth, additionalInfo, onVacation, vacationStart, vacationEnd, redmineId);
    }

    @Override
    public String toString() {
        return "EmployeeCreateRequest{" +
                "surname='" + surname + '\'' +
                ", name='" + name + '\'' +
                ", photo='" + photo + '\'' +
                ", positionId=" + positionId +
                ", departmentId=" + departmentId +
                ", email='" + email + '\'' +
                ", telegram='" + telegram + '\'' +
                ", birth=" + birth + '\'' +
                ", additionalInfo='" + additionalInfo + '\'' +
                ", onVacation=" + onVacation +
                ", vacationStart=" + vacationStart +
                ", vacationEnd=" + vacationEnd +
                ", redmineId=" + redmineId +
                '}';
    }
}