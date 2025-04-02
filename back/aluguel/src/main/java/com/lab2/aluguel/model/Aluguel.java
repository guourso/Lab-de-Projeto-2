package com.lab2.aluguel.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Aluguel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    private Usuario usuario;
    
    @ManyToOne
    private Carro carro;
    
    private LocalDateTime dataInicio;
    private LocalDateTime dataFim;
    private Double valorTotal;
    private String status;
}
