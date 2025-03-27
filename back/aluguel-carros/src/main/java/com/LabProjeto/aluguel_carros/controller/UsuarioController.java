package com.LabProjeto.aluguel_carros.controller;

import com.LabProjeto.aluguel_carros.model.Usuario;
import com.LabProjeto.aluguel_carros.service.UsuarioService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    // --- CRUD Básico ---

    @PostMapping("/cadastrar")
    public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody Usuario usuario) {
        Usuario novoUsuario = usuarioService.cadastrarUsuario(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoUsuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizarUsuario(
            @PathVariable Long id,
            @RequestBody Usuario usuarioAtualizado
    ) {
        Usuario usuario = usuarioService.atualizarUsuario(id, usuarioAtualizado);
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarUsuarioPorId(@PathVariable Long id) {
        Usuario usuario = usuarioService.buscarPorId(id);
        return ResponseEntity.ok(usuario);
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listarTodosUsuarios() {
        List<Usuario> usuarios = usuarioService.listarTodosUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarUsuario(@PathVariable Long id) {
        usuarioService.deletarUsuario(id);
        return ResponseEntity.noContent().build();
    }

    // --- Métodos Específicos do Documento ---

    @GetMapping("/clientes")
    public ResponseEntity<List<Usuario>> listarClientes() {
        List<Usuario> clientes = usuarioService.listarClientes();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/agentes-banco")
    public ResponseEntity<List<Usuario>> listarAgentesBancos() {
        List<Usuario> agentes = usuarioService.listarAgentesBancos();
        return ResponseEntity.ok(agentes);
    }

    @GetMapping("/agentes-empresa")
    public ResponseEntity<List<Usuario>> listarAgentesEmpresas() {
        List<Usuario> agentes = usuarioService.listarAgentesEmpresas();
        return ResponseEntity.ok(agentes);
    }

    @PostMapping("/{usuarioId}/empregadores")
    public ResponseEntity<Void> adicionarEmpregador(
            @PathVariable Long usuarioId,
            @RequestBody String empregador
    ) {
        usuarioService.adicionarEmpregador(usuarioId, empregador);
        return ResponseEntity.noContent().build();
    }

    // --- Tratamento de Exceções ---

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<String> handleIllegalState(IllegalStateException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
    }
}