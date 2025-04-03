package com.lab2.aluguel.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.lab2.aluguel.model.Usuario;

@NoRepositoryBean
public interface IUsuarioRepository<T extends Usuario> extends JpaRepository<T, Long> {
    Optional<T> findByEmail(String email);
    Optional<T> findByEmailAndSenha(String email, String senha);
    void deleteByEmail(String email);
}