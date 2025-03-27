package com.LabProjeto.aluguel_carros.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "contratos_credito")
public class ContratoCredito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private BigDecimal valorFinanciado;

    @Column(nullable = false)
    private Integer parcelas;

    @ManyToOne
    @JoinColumn(name = "banco_id")
    private Usuario banco; // Usuário do tipo AGENTE_BANCO
}