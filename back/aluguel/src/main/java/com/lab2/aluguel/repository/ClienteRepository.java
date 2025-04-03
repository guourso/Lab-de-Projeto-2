package com.lab2.aluguel.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.lab2.aluguel.model.Cliente;

@Repository
public interface ClienteRepository extends IUsuarioRepository<Cliente> {
    Optional<Cliente> findByCpf(String cpf);
}