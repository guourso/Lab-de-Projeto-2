package com.lab2.aluguel.mapper;

import org.springframework.stereotype.Component;

import com.lab2.aluguel.dto.ClienteDTO;
import com.lab2.aluguel.dto.create.ClienteCreateDTO;
import com.lab2.aluguel.model.Cliente;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ClienteMapper
        implements IUsuarioMapper<Cliente, ClienteCreateDTO, ClienteDTO> {

    private final RendimentosMapper rendimentosMapper;

    @Override
    public Cliente toEntity(ClienteCreateDTO dto) {
        return Cliente.builder()
                .nome(dto.getNome())
                .email(dto.getEmail())
                .senha(dto.getSenha())
                .tipo(dto.getTipo())
                .rg(dto.getRg())
                .cpf(dto.getCpf())
                .profissao(dto.getProfissao())
                .endereco(dto.getEndereco())
                .rendimentos(rendimentosMapper.toEntity(dto.getRendimentos()))
                .build();
    }

    @Override
    public ClienteDTO toDTO(Cliente model) {
        return ClienteDTO.builder()
                .id(model.getId())
                .nome(model.getNome())
                .email(model.getEmail())
                .tipo(model.getTipo())
                .rg(model.getRg())
                .cpf(model.getCpf())
                .profissao(model.getProfissao())
                .endereco(model.getEndereco())
                .rendimentos(rendimentosMapper.toDTO(model.getRendimentos()))
                .build();
    }
}