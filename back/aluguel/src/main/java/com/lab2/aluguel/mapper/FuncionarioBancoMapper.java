package com.lab2.aluguel.mapper;
import org.springframework.stereotype.Component;

import com.lab2.aluguel.dto.FuncionarioBancoDTO;
import com.lab2.aluguel.dto.create.FuncionarioBancoCreateDTO;
import com.lab2.aluguel.model.FuncionarioBanco;

@Component
public class FuncionarioBancoMapper
        implements IUsuarioMapper<FuncionarioBanco, FuncionarioBancoCreateDTO, FuncionarioBancoDTO> {
    @Override
    public FuncionarioBanco toEntity(FuncionarioBancoCreateDTO dto) {
        return FuncionarioBanco.builder()
                .nome(dto.getNome())
                .email(dto.getEmail())
                .senha(dto.getSenha())
                .tipo(dto.getTipo())
                .cnpj(dto.getCnpj())
                .cargo(dto.getCargo())
                .banco(dto.getBanco())
                .build();
    }

    @Override
    public FuncionarioBancoDTO toDTO(FuncionarioBanco model) {
        return FuncionarioBancoDTO.builder()
                .id(model.getId())
                .nome(model.getNome())
                .email(model.getEmail())
                .tipo(model.getTipo())
                .cnpj(model.getCnpj())
                .cargo(model.getCargo())
                .banco(model.getBanco())
                .build();
    }
}