package com.lab2.aluguel.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import com.lab2.aluguel.config.JwtService;
import com.lab2.aluguel.dto.FuncionarioBancoDTO;
import com.lab2.aluguel.dto.create.FuncionarioBancoCreateDTO;
import com.lab2.aluguel.model.FuncionarioBanco;
import com.lab2.aluguel.mapper.FuncionarioBancoMapper;
import com.lab2.aluguel.repository.FuncionarioBancoRepository;

@Service
public class FuncionarioBancoService
        extends AbstractUsuarioService<FuncionarioBanco, FuncionarioBancoCreateDTO, FuncionarioBancoDTO> {
    public FuncionarioBancoService(FuncionarioBancoRepository repository, FuncionarioBancoMapper mapper,
            AuthenticationManager authenticationManager, JwtService jwtService, UsuarioService usuarioService) {
        super(repository, mapper, authenticationManager, jwtService, usuarioService);
    }

    @Override
    public FuncionarioBancoDTO getCurrentUser() {
        return mapper.toDTO(usuarioService.getCurrentFuncionarioBanco());
    }
}