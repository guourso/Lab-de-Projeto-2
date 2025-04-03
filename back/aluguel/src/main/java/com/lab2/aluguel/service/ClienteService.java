package com.lab2.aluguel.service;

import java.util.Optional;

import org.apache.coyote.BadRequestException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import com.lab2.aluguel.config.JwtService;
import com.lab2.aluguel.dto.ClienteDTO;
import com.lab2.aluguel.dto.create.ClienteCreateDTO;
import com.lab2.aluguel.model.Cliente;
import com.lab2.aluguel.exception.EntityExistsException;
import com.lab2.aluguel.mapper.ClienteMapper;
import com.lab2.aluguel.repository.ClienteRepository;

import jakarta.validation.ConstraintViolationException;

@Service
public class ClienteService extends AbstractUsuarioService<Cliente, ClienteCreateDTO, ClienteDTO> {    
    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository repository, ClienteMapper mapper, AuthenticationManager authenticationManager, JwtService jwtService, UsuarioService usuarioService) {
        super(repository, mapper, authenticationManager, jwtService, usuarioService);
        this.clienteRepository = repository;
    }

    @Override
    public void create(ClienteCreateDTO user) throws BadRequestException {
        Optional<Cliente> userExists = clienteRepository.findByCpf(user.getCpf());
        if (userExists.isPresent()) {
            throw new EntityExistsException("Usuário já cadastrado com o mesmo CPF");
        }
        if(!correctNumberOfRendimentos(user)){
            throw new BadRequestException("É possível cadastrar apenas 3 rendimentos");
        }
        Cliente usuario = mapper.toEntity(user);

        try {
            repository.save(usuario);
        } catch (ConstraintViolationException e){
            logger.error(e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new RuntimeException("Erro ao salvar usuário");
        }
    }

    private boolean correctNumberOfRendimentos(ClienteCreateDTO user) {
        return user.getRendimentos().size() <= 3;
    }

    @Override
    public ClienteDTO getCurrentUser() {
        return mapper.toDTO(usuarioService.getCurrentCliente());
    }
}