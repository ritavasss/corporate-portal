package com.dfs.corporate_portal.repository;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "department")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "short_name", nullable = false, unique = true)
    private String shortName;

    @Column(name = "director")
    private String directorName;

    public Department() {}

    public Department(String name, String shortName, String directorName) {
        this.name = name;
        this.shortName = shortName;
        this.directorName = directorName;
    }

    @Override
    public String toString() {
        return "Department{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", shortName='" + shortName + '\'' +
                ", directorName='" + directorName + '\'' +
                '}';
    }
}
