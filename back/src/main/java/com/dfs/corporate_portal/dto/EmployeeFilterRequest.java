package com.dfs.corporate_portal.dto;

import java.util.List;

public class EmployeeFilterRequest {

    private Filters filters;
    private Sorting sorting;

    public Filters getFilters() {
        return filters;
    }

    public void setFilters(Filters filters) {
        this.filters = filters;
    }

    public Sorting getSorting() {
        return sorting;
    }

    public void setSorting(Sorting sorting) {
        this.sorting = sorting;
    }

    public static class Filters {
        private String name;
        private List<Long> position;
        private List<Long> department;
        private Boolean onVacation;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public List<Long> getPosition() {
            return position;
        }

        public void setPosition(List<Long> position) {
            this.position = position;
        }

        public List<Long> getDepartment() {
            return department;
        }

        public void setDepartment(List<Long> department) {
            this.department = department;
        }

        public Boolean getOnVacation() {
            return onVacation;
        }

        public void setOnVacation(Boolean onVacation) {
            this.onVacation = onVacation;
        }
    }

    public static class Sorting {
        private List<Order> orders;

        public List<Order> getOrders() {
            return orders;
        }

        public void setOrders(List<Order> orders) {
            this.orders = orders;
        }

        public static class Order {
            private String sortedField;
            private Integer order;  // Используем Integer для 0 и 1

            public String getSortedField() {
                return sortedField;
            }

            public void setSortedField(String sortedField) {
                this.sortedField = sortedField;
            }

            public Integer getOrder() {
                return order;
            }

            public void setOrder(Integer order) {
                this.order = order;
            }
        }
    }
}
