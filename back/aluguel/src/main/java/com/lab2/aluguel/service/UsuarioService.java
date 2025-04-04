package com.lab2.aluguel.service;

import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.lab2.aluguel.model.Cliente;
import com.lab2.aluguel.model.FuncionarioBanco;
import com.lab2.aluguel.model.FuncionarioEmpresa;
import com.lab2.aluguel.model.Usuario;
import com.lab2.aluguel.enums.TipoUsuario;
import com.lab2.aluguel.exception.UnauthorizedException;
import com.lab2.aluguel.repository.ClienteRepository;
import com.lab2.aluguel.repository.FuncionarioBancoRepository;
import com.lab2.aluguel.repository.FuncionarioEmpresaRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final ClienteRepository clienteRepository;
    private final FuncionarioBancoRepository funcionarioBancoRepository;
    private final FuncionarioEmpresaRepository funcionarioEmpresaRepository;

    public Usuario loadUserByUsername(String email) {
        Cliente cliente;
        FuncionarioBanco funcionarioBanco;
        FuncionarioEmpresa funcionarioEmpresa;

        Optional<Cliente> clienteOptional = clienteRepository.findByEmail(email);
        if (clienteOptional.isPresent()) {
            cliente = clienteOptional.get();
            return cliente;
        }

        Optional<FuncionarioBanco> funcionarioBancoOptional = funcionarioBancoRepository.findByEmail(email);
        if (funcionarioBancoOptional.isPresent()) {
            funcionarioBanco = funcionarioBancoOptional.get();
            return funcionarioBanco;
        }

        Optional<FuncionarioEmpresa> funcionarioEmpresaOptional = funcionarioEmpresaRepository.findByEmail(email);
        if (funcionarioEmpresaOptional.isPresent()) {
            funcionarioEmpresa = funcionarioEmpresaOptional.get();
            return funcionarioEmpresa;
        }

        throw new UsernameNotFoundException("Usuário não encontrado");
    }

    public Cliente getCurrentCliente() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new UnauthorizedException("Usuário não autenticado");
        }

        String email = authentication.getName();
        Usuario usuario = loadUserByUsername(email);

        if (!TipoUsuario.CLIENTE.equals(usuario.getTipo())) {
            throw new UnauthorizedException("Usuário atual não é um Cliente");
        }

        return clienteRepository.findByEmail(email).get();
    }

    public FuncionarioBanco getCurrentFuncionarioBanco() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new UnauthorizedException("Usuário não autenticado");
        }

        String email = authentication.getName();
        Usuario usuario = loadUserByUsername(email);

        if (!TipoUsuario.FUNCIONARIO_BANCO.equals(usuario.getTipo())) {
            throw new UnauthorizedException("Usuário atual não é um Funcionário de Banco");
        }

        return funcionarioBancoRepository.findByEmail(email).get();
    }

    public FuncionarioEmpresa getCurrentFuncionarioEmpresa() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new UnauthorizedException("Usuário não autenticado");
        }

        String email = authentication.getName();
        Usuario usuario = loadUserByUsername(email);

        if (!TipoUsuario.AGENTE.equals(usuario.getTipo())) {
            throw new UnauthorizedException("Usuário atual não é um Funcionário de Empresa");
        }

        return funcionarioEmpresaRepository.findByEmail(email).get();
    }

    @Transactional
    public void deleteCurrent() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new UnauthorizedException("Usuário não autenticado");
        }

        String email = authentication.getName();
        Usuario usuario = loadUserByUsername(email);

        switch (usuario.getTipo()) {
            case CLIENTE:
                clienteRepository.deleteByEmail(email);
                break;
            case FUNCIONARIO_BANCO:
                funcionarioBancoRepository.deleteByEmail(email);
                break;
            case AGENTE:
                funcionarioEmpresaRepository.deleteByEmail(email);
                break;
            default:
                throw new UnauthorizedException("Tipo de usuário inválido");
        }

        logout();
    }

    public void logout() {
        SecurityContextHolder.clearContext();
    }
}