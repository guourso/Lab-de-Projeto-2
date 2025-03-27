package com.LabProjeto.aluguel_carros.model;

import com.LabProjeto.aluguel_carros.enums.OrderStatus;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private OrderStatus status = OrderStatus.PENDENTE; // Valor padrão

    private LocalDateTime dataCriacao;

    // Relacionamentos
    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Usuario cliente;

    @ManyToOne
    @JoinColumn(name = "carro_id", nullable = false)
    private Carro carro;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contrato_credito_id")
    private ContratoCredito contratoCredito; // Opcional

    // Método para definir a data de criação antes de persistir
    @PrePersist
    protected void onCreate() {
        dataCriacao = LocalDateTime.now();
    }
}