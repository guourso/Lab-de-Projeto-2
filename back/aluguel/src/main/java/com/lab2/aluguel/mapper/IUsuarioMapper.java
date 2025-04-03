package com.lab2.aluguel.mapper;

import com.lab2.aluguel.dto.UsuarioDTO;
import com.lab2.aluguel.dto.create.UsuarioCreateDTO;
import com.lab2.aluguel.model.Usuario;

public interface IUsuarioMapper<T extends Usuario, D extends UsuarioCreateDTO, K extends UsuarioDTO> {
    T toEntity(D dto);

    K toDTO(T model);
}