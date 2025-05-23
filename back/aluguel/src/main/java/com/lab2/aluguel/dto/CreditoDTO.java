package com.lab2.aluguel.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class CreditoDTO {
    private Long id;
    private BigDecimal valor;
    private BigDecimal taxaJuros;
    private String concedenteCnpj;
    private String concedenteNome;
}