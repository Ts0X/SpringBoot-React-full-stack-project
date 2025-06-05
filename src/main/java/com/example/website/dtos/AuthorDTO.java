package com.example.website.dtos;

import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

public class AuthorDTO {

    private Long id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private String nationality;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    // Getters and Setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getNationality() { return nationality; }
    public void setNationality(String nationality) { this.nationality = nationality; }

    public LocalDate getBirthDate() { return birthDate; }
    public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }
}
