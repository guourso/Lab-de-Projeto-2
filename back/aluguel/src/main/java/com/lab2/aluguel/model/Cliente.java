package com.lab2.aluguel.model;


import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
public class Cliente extends Usuario {
    @NotBlank(message = "O RG é obrigatório")
    @Schema(description = "RG do cliente", example = "123456789")
    @Pattern(regexp = "\\d{1,9}", message = "RG inválido. Deve conter no máximo 9 dígitos")
    private String rg;

    @NotBlank(message = "O CPF é obrigatório")
    @Pattern(regexp = "\\d{11}", message = "CPF inválido")
    @Schema(description = "CPF do cliente", example = "12345678901")
    private String cpf;

    @NotBlank(message = "A profissão é obrigatória")
    @Schema(description = "Profissão do cliente", example = "Engenheiro")
    private String profissao;

    @NotBlank(message = "O endereço é obrigatório")
    @Schema(description = "Endereço do cliente", example = "Rua A, 123, Cidade X")
    private String endereco;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
    private List<Rendimento> rendimentos;
}