package com.LabProjeto.aluguel_carros.service;

import com.LabProjeto.aluguel_carros.model.Cliente;
import com.LabProjeto.aluguel_carros.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> buscarPorId(Long id) {
        return clienteRepository.findById(id);
    }

    public Cliente cadastrarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente atualizarCliente(Long id, Cliente dadosAtualizados) {
        return clienteRepository.findById(id)
            .map(cliente -> {
                cliente.setNome(dadosAtualizados.getNome());
                cliente.setCpf(dadosAtualizados.getCpf());
                cliente.setEndereco(dadosAtualizados.getEndereco());
                cliente.setTelefone(dadosAtualizados.getTelefone());
                return clienteRepository.save(cliente);
            }).orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
    }

    public void excluirCliente(Long id) {
        clienteRepository.deleteById(id);
    }
}
