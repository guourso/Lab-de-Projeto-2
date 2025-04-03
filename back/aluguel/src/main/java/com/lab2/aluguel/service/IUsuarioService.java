package com.lab2.aluguel.service;

import org.apache.coyote.BadRequestException;

import com.lab2.aluguel.dto.Login;
import com.lab2.aluguel.dto.UsuarioDTO;
import com.lab2.aluguel.dto.create.UsuarioCreateDTO;
import com.lab2.aluguel.model.Usuario;

public interface IUsuarioService<T extends Usuario, D extends UsuarioCreateDTO, K extends UsuarioDTO> {
    void create(D user) throws BadRequestException;
    String login(Login user);
    K getCurrentUser();
    void delete();
}