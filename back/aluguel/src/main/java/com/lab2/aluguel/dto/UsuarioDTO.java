package com.lab2.aluguel.dto;

import lombok.Data;

@Data
public class UsuarioDTO {
    private Long id;
    private String nome;
    private String email;
    private String cpf;
    private String telefone;
}
