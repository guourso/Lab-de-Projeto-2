package com.lab2.aluguel.mapper;

import org.springframework.stereotype.Component;
import com.lab2.aluguel.dto.UsuarioDTO;
import com.lab2.aluguel.model.Usuario;

@Component
public class UsuarioMapper {
    public UsuarioDTO toDto(Usuario usuario) {
        // TODO: Implementar mapeamento
        return new UsuarioDTO();
    }

    public Usuario toEntity(UsuarioDTO dto) {
        // TODO: Implementar mapeamento
        return new Usuario();
    }
}
