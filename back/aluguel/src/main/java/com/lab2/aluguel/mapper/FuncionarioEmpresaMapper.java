package com.lab2.aluguel.mapper;


import org.springframework.stereotype.Component;

import com.lab2.aluguel.dto.FuncionarioEmpresaDTO;
import com.lab2.aluguel.dto.create.FuncionarioEmpresaCreateDTO;
import com.lab2.aluguel.model.FuncionarioEmpresa;

@Component
public class FuncionarioEmpresaMapper
        implements IUsuarioMapper<FuncionarioEmpresa, FuncionarioEmpresaCreateDTO, FuncionarioEmpresaDTO> {
    @Override
    public FuncionarioEmpresa toEntity(FuncionarioEmpresaCreateDTO dto) {
        return FuncionarioEmpresa.builder()
                .nome(dto.getNome())
                .email(dto.getEmail())
                .senha(dto.getSenha())
                .tipo(dto.getTipo())
                .cnpj(dto.getCnpj())
                .cargo(dto.getCargo())
                .empresa(dto.getEmpresa())
                .build();
    }

    @Override
    public FuncionarioEmpresaDTO toDTO(FuncionarioEmpresa model) {
        return FuncionarioEmpresaDTO.builder()
                .id(model.getId())
                .nome(model.getNome())
                .email(model.getEmail())
                .tipo(model.getTipo())
                .cnpj(model.getCnpj())
                .cargo(model.getCargo())
                .empresa(model.getEmpresa())
                .build();
    }
}