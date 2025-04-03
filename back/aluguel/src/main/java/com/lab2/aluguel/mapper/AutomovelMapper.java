package com.lab2.aluguel.mapper;

import org.springframework.stereotype.Component;

import com.lab2.aluguel.dto.AutomovelDTO;
import com.lab2.aluguel.model.Automovel;
import com.lab2.aluguel.model.Cliente;

@Component
public class AutomovelMapper {
    public AutomovelDTO toDTO(Automovel automovel, Cliente cliente) {
        if (automovel == null) return null;
        return AutomovelDTO.builder()
                .id(automovel.getId())
                .matricula(automovel.getMatricula())
                .ano(automovel.getAno())
                .marca(automovel.getMarca())
                .modelo(automovel.getModelo())
                .placa(automovel.getPlaca())
                .status(automovel.getStatus())
                .valorMensal(automovel.getValorMensal())
                .proprietarioIdentificacao(cliente != null ? cliente.getId() : null)
                .build();
    }
}