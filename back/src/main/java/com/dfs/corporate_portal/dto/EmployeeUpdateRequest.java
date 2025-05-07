package com.dfs.corporate_portal.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public class EmployeeUpdateRequest {
    private String email;
    private String telegram;
    private boolean onVacation;
    private LocalDate vacationStart;
    private LocalDate vacationEnd;
    private Long positionId;
    private Long departmentId;
    private String additionalInfo;
    private String birth;
}
