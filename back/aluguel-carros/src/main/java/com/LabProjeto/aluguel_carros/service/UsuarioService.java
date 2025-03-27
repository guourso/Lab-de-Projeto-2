package com.LabProjeto.aluguel_carros.service;

import com.LabProjeto.aluguel_carros.enums.Role;
import com.LabProjeto.aluguel_carros.model.Usuario;
import com.LabProjeto.aluguel_carros.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // --- CRUD Básico ---
    
    @Transactional
    public Usuario cadastrarUsuario(Usuario usuario) {
        validarCamposUnicos(usuario); // Valida CPF, RG e username
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha())); // Criptografa senha
        return usuarioRepository.save(usuario);
    }

    @Transactional
    public Usuario atualizarUsuario(Long id, Usuario usuarioAtualizado) {
        Usuario usuarioExistente = buscarPorId(id);
        usuarioAtualizado.setId(usuarioExistente.getId());
        return usuarioRepository.save(usuarioAtualizado);
    }

    public Usuario buscarPorId(Long id) {
        return usuarioRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado!"));
    }

    public List<Usuario> listarTodosUsuarios() {
        return usuarioRepository.findAll();
    }

    @Transactional
    public void deletarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

    // --- Métodos Específicos do Documento ---

    public List<Usuario> listarClientes() {
        return usuarioRepository.findByRole(Role.CLIENTE);
    }

    public List<Usuario> listarAgentesBancos() {
        return usuarioRepository.findByRole(Role.AGENTE_BANCO);
    }

    public List<Usuario> listarAgentesEmpresas() {
        return usuarioRepository.findByRole(Role.AGENTE_EMPRESA);
    }

    @Transactional
    public void adicionarEmpregador(Long usuarioId, String empregador) {
        Usuario usuario = buscarPorId(usuarioId);
        validarLimiteEmpregadores(usuario);
        usuario.getEmpregadores().add(empregador);
        usuarioRepository.save(usuario);
    }
    // --- Validações ---

    private void validarCamposUnicos(Usuario usuario) {
        if (usuarioRepository.existsByCpf(usuario.getCpf())) {
            throw new IllegalArgumentException("CPF já cadastrado!");
        }
        if (usuarioRepository.existsByRg(usuario.getRg())) {
            throw new IllegalArgumentException("RG já cadastrado!");
        }
        if (usuarioRepository.existsByUsername(usuario.getUsername())) {
            throw new IllegalArgumentException("Username já existe!");
        }
    }

    private void validarLimiteEmpregadores(Usuario usuario) {
        if (usuario.getEmpregadores().size() >= 3) {
            throw new IllegalStateException("Limite de 3 empregadores atingido!");
        }
    }

}