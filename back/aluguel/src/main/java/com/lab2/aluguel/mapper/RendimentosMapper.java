package com.lab2.aluguel.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.lab2.aluguel.dto.RendimentoDTO;
import com.lab2.aluguel.dto.create.RendimentoCreateDTO;
import com.lab2.aluguel.model.Rendimento;

@Component
public class RendimentosMapper {
    public Rendimento toEntity(RendimentoCreateDTO rendimento) {
        return Rendimento.builder()
                .nome(rendimento.getNome())
                .cnpj(rendimento.getCnpj())
                .atual(rendimento.isAtual())
                .renda(rendimento.getRenda())
                .dataInicio(rendimento.getDataInicio())
                .dataFim(rendimento.getDataFim())
                .build();

    }

    public List<Rendimento> toEntity(List<RendimentoCreateDTO> rendimento) {
        return rendimento.stream().map(this::toEntity).toList();
    }

    public RendimentoDTO toDTO(Rendimento model){
        return RendimentoDTO.builder()
                .id(model.getId())
                .nome(model.getNome())
                .cnpj(model.getCnpj())
                .atual(model.isAtual())
                .renda(model.getRenda())
                .dataInicio(model.getDataInicio())
                .dataInicio(model.getDataFim())
                .build();
    }

    public List<RendimentoDTO> toDTO(List<Rendimento> rendimentos) {
        return rendimentos.stream().map(this::toDTO).toList();
    }
}