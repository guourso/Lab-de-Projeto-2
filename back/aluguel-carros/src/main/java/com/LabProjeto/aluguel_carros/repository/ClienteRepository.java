package com.LabProjeto.aluguel_carros.repository;

import com.LabProjeto.aluguel_carros.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    Cliente findByCpf(String cpf); // Busca por CPF
}
