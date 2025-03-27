package com.LabProjeto.aluguel_carros.model;

import com.LabProjeto.aluguel_carros.enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O campo username é obrigatório")
    @Size(min = 3, max = 100, message = "Username deve ter 3-100 caracteres")
    private String username;

    @NotBlank(message = "O campo senha é obrigatório")
    @Size(min = 6, message = "Senha deve ter no mínimo 6 caracteres")
    private String senha;

    @Enumerated(EnumType.STRING)
    private Role role;

    @NotBlank(message = "CPF é obrigatório")
    @Column(unique = true)
    private String cpf;

    @NotBlank(message = "RG é obrigatório")
    @Column(unique = true)
    private String rg;

    @NotBlank(message = "Nome completo é obrigatório")
    private String nomeCompleto;

    @NotBlank(message = "Endereço é obrigatório")
    private String endereco;

    private String profissao;

    @ElementCollection
    @CollectionTable(name = "usuario_empregadores", joinColumns = @JoinColumn(name = "usuario_id"))
    @Size(max = 3, message = "Máximo de 3 empregadores")
    private List<String> empregadores = new ArrayList<>();

    @PositiveOrZero(message = "Rendimento não pode ser negativo")
    private Double rendimentoMensal;

    public void setEmpregadores(List<String> empregadores) {
        if (empregadores != null && empregadores.size() > 3) {
            throw new IllegalArgumentException("Máximo de 3 empregadores permitidos");
        }
        this.empregadores = empregadores;
    }
}