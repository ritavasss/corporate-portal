package com.dfs.corporate_portal.dto;

import java.time.LocalDate;

public class EmployeeUpdateRequest {
    private String email;
    private String telegram;
    private boolean onVacation;
    private LocalDate vacationStart;
    private LocalDate vacationEnd;
    private Long positionId;
    private Long departmentId;
    private String additionalInfo;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelegram() {
        return telegram;
    }

    public void setTelegram(String telegram) {
        this.telegram = telegram;
    }

    public boolean isOnVacation() {
        return onVacation;
    }

    public void setOnVacation(boolean onVacation) {
        this.onVacation = onVacation;
    }

    public LocalDate getVacationStart() {
        return vacationStart;
    }

    public void setVacationStart(LocalDate vacationStart) {
        this.vacationStart = vacationStart;
    }

    public LocalDate getVacationEnd() {
        return vacationEnd;
    }

    public void setVacationEnd(LocalDate vacationEnd) {
        this.vacationEnd = vacationEnd;
    }

    public Long getPositionId() {
        return positionId;
    }

    public void setPositionId(Long positionId) {
        this.positionId = positionId;
    }

    public Long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }
}
