package com.LabProjeto.aluguel_carros.repository;

import com.LabProjeto.aluguel_carros.enums.Role;
import com.LabProjeto.aluguel_carros.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Busca por CPF (para evitar duplicatas)
    Optional<Usuario> findByCpf(String cpf);

    // Busca por RG (para evitar duplicatas)
    Optional<Usuario> findByRg(String rg);

    // Busca por role (ex: listar todos os agentes de banco)
    List<Usuario> findByRole(Role role);

    // Busca por username (para login)
    Optional<Usuario> findByUsername(String username);

    // Verifica se CPF já existe (útil para validação no cadastro)
    boolean existsByCpf(String cpf);

    // Verifica se RG já existe (útil para validação no cadastro)
    boolean existsByRg(String rg);

    boolean existsByUsername(String username);
}