package com.lab2.aluguel.dto;

import java.util.Date;

import com.lab2.aluguel.enums.PrazoAluguel;
import com.lab2.aluguel.enums.StatusPedido;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class AluguelDTO {
    private Long id;
    private PrazoAluguel prazo;
    private StatusPedido status;
    private Date dataInicio;
    private ContratoAluguelDTO contrato;
    private AutomovelDTO automovel;
}