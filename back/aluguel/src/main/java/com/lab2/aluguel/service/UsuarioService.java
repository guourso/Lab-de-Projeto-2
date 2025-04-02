package com.lab2.aluguel.service;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import com.lab2.aluguel.repository.UsuarioRepository;

@Service
@RequiredArgsConstructor
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
}
