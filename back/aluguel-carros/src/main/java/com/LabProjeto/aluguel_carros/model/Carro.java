package com.LabProjeto.aluguel_carros.model;


import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Carro {
    @Id
    private String matricula;
    private int ano;
    private String marca;
    private String modelo;
    private String placa;
}