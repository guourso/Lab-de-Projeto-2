package com.lab2.aluguel.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import com.lab2.aluguel.config.JwtService;
import com.lab2.aluguel.dto.FuncionarioEmpresaDTO;
import com.lab2.aluguel.dto.create.FuncionarioEmpresaCreateDTO;
import com.lab2.aluguel.model.FuncionarioEmpresa;
import com.lab2.aluguel.mapper.FuncionarioEmpresaMapper;
import com.lab2.aluguel.repository.FuncionarioEmpresaRepository;

@Service
public class FuncionarioEmpresaService
        extends AbstractUsuarioService<FuncionarioEmpresa, FuncionarioEmpresaCreateDTO, FuncionarioEmpresaDTO> {
    public FuncionarioEmpresaService(FuncionarioEmpresaRepository repository, FuncionarioEmpresaMapper mapper,
            AuthenticationManager authenticationManager, JwtService jwtService, UsuarioService usuarioService) {
        super(repository, mapper, authenticationManager, jwtService, usuarioService);
    }

    @Override
    public FuncionarioEmpresaDTO getCurrentUser() {
        return mapper.toDTO(usuarioService.getCurrentFuncionarioEmpresa());
    }
}