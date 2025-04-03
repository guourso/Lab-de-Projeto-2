package com.lab2.aluguel.mapper;

import org.springframework.stereotype.Component;

import com.lab2.aluguel.dto.UsuarioDTO;
import com.lab2.aluguel.model.Usuario;

@Component
public class UsuarioMapper {

    public UsuarioMapper() {
    }

    public UsuarioDTO toDTO(Usuario usuario) {
        if (usuario == null) return null;
        return UsuarioDTO.builder()
                .id(usuario.getId())
                .nome(usuario.getNome())
                .email(usuario.getEmail())
                .tipo(usuario.getTipo())
                .build();
    }
}