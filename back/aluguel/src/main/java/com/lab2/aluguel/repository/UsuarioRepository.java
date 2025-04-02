package com.lab2.aluguel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lab2.aluguel.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
