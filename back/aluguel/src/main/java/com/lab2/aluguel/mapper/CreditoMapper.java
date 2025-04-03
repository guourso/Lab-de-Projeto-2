package com.lab2.aluguel.mapper;

import org.springframework.stereotype.Component;

import com.lab2.aluguel.dto.CreditoDTO;
import com.lab2.aluguel.model.Credito;
import com.lab2.aluguel.model.FuncionarioBanco;

@Component
public class CreditoMapper {

    public CreditoMapper() {
    }

    public CreditoDTO toDTO(Credito credito) {
        if (credito == null) return null;
        FuncionarioBanco funcionarioBanco = credito.getConcedente();
        return CreditoDTO.builder()
                .id(credito.getId())
                .valor(credito.getValor())
                .taxaJuros(credito.getTaxaJuros())
                .concedenteCnpj(funcionarioBanco != null ? funcionarioBanco.getCnpj() : null)
                .concedenteNome(funcionarioBanco != null ? funcionarioBanco.getBanco() : null)
                .build();
    }
}