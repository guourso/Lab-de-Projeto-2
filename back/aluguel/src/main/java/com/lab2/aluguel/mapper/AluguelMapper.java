package com.lab2.aluguel.mapper;

import org.springframework.stereotype.Component;

import com.lab2.aluguel.dto.AluguelDTO;
import com.lab2.aluguel.dto.create.AluguelCreateDTO;
import com.lab2.aluguel.model.Aluguel;
import com.lab2.aluguel.model.Usuario;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AluguelMapper {
    private final ContratoAluguelMapper contratoAluguelMapper;
    private final AutomovelMapper automovelMapper;

    public Aluguel toEntity(AluguelCreateDTO aluguelCreateDTO) {
        return Aluguel.builder()
                .prazo(aluguelCreateDTO.getPrazo())
                .dataInicio(aluguelCreateDTO.getDataInicio())
                .adquirirPropriedade(aluguelCreateDTO.isAdquirirPropriedade())
                .build();
    }
    
    public AluguelDTO toDTO(Aluguel savedAluguel, Usuario usuario) {
        return AluguelDTO.builder()
                .id(savedAluguel.getId())
                .prazo(savedAluguel.getPrazo())
                .status(savedAluguel.getStatus())
                .contrato(contratoAluguelMapper.toDTO(savedAluguel.getContrato(), savedAluguel.isAdquirirPropriedade(), usuario))
                .automovel(automovelMapper.toDTO(savedAluguel.getAutomovel(), savedAluguel.getCliente()))
                .build();
    }
}