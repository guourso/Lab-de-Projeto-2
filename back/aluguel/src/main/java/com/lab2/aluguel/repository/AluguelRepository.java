package com.lab2.aluguel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.lab2.aluguel.model.Aluguel;

@Repository
public interface AluguelRepository extends JpaRepository<Aluguel, Long>, JpaSpecificationExecutor<Aluguel> {
}