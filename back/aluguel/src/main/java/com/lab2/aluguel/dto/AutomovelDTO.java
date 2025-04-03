package com.lab2.aluguel.dto;

import java.math.BigDecimal;

import com.lab2.aluguel.enums.StatusAutomovel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class AutomovelDTO {
    private Long id;
    private String matricula;
    private int ano;
    private String marca;
    private String modelo;
    private String placa;
    private StatusAutomovel status;
    private BigDecimal valorMensal;
    private Long proprietarioIdentificacao;
}