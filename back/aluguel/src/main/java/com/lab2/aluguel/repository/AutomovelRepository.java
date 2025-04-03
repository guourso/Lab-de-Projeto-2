package com.lab2.aluguel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lab2.aluguel.model.Automovel;

@Repository
public interface AutomovelRepository extends JpaRepository<Automovel, Long> {
}