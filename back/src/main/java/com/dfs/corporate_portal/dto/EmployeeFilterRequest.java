package com.dfs.corporate_portal.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class EmployeeFilterRequest {

    private Filters filters;
    private Sorting sorting;

    @Setter
    @Getter
    public static class Filters {
        private String name;
        private List<Long> position;
        private List<Long> department;
        private Boolean onVacation;

    }

    @Setter
    @Getter
    public static class Sorting {
        private List<Order> orders;

        @Setter
        @Getter
        public static class Order {
            private String sortedField;
            private Integer order;  // Используем Integer для 0 и 1

        }
    }
}
