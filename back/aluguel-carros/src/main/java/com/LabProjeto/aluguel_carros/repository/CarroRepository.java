package com.LabProjeto.aluguel_carros.repository;

import com.LabProjeto.aluguel_carros.model.Carro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CarroRepository extends JpaRepository<Carro, String> { // ID é a matrícula (String)

    // Busca por placa (para evitar duplicatas)
    boolean existsByPlaca(String placa);

    // Busca por marca (ex: listar todos os carros da marca "Ford")
    List<Carro> findByMarca(String marca);

    // Busca por modelo (ex: listar todos os carros do modelo "Fiesta")
    List<Carro> findByModelo(String modelo);

    // Busca por ano (ex: listar carros fabricados em 2023)
    List<Carro> findByAno(int ano);
}