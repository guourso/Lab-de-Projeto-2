package com.lab2.aluguel.service;

import java.math.BigDecimal;
import java.util.Date;

import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.lab2.aluguel.dto.AluguelDTO;
import com.lab2.aluguel.dto.create.AluguelCreateDTO;
import com.lab2.aluguel.model.Aluguel;
import com.lab2.aluguel.model.Automovel;
import com.lab2.aluguel.model.Cliente;
import com.lab2.aluguel.model.ContratoAluguel;
import com.lab2.aluguel.enums.StatusAutomovel;
import com.lab2.aluguel.enums.StatusContrato;
import com.lab2.aluguel.enums.StatusPedido;
import com.lab2.aluguel.mapper.AluguelMapper;
import com.lab2.aluguel.repository.AluguelRepository;
import com.lab2.aluguel.repository.AutomovelRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AluguelService {
    private final AluguelRepository aluguelRepository;
    private final AutomovelRepository automovelRepository;
    private final AluguelMapper aluguelMapper;
    private final UsuarioService usuarioService;

    public AluguelDTO createAluguel(AluguelCreateDTO aluguelCreateDTO) throws BadRequestException {
        Automovel automovel = validateAutomovelAvailability(aluguelCreateDTO);
        Aluguel aluguel = aluguelMapper.toEntity(aluguelCreateDTO);
        ContratoAluguel contrato = createContrato(aluguelCreateDTO, automovel);
        Cliente cliente = usuarioService.getCurrentCliente();

        aluguel.setStatus(StatusPedido.PENDENTE);
        aluguel.setAutomovel(automovel);
        aluguel.setContrato(contrato);
        aluguel.setCliente(cliente);

        Aluguel savedAluguel = aluguelRepository.save(aluguel);
        return aluguelMapper.toDTO(savedAluguel, cliente);
    }

    public Page<AluguelDTO> listAlugueis(StatusPedido status, Boolean adquirirPropriedade, Date dataInicio, int page, int size, String sortBy, String sortDirection) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(sortDirection), sortBy));

        Specification<Aluguel> spec = Specification.where(null);

        if (status != null) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("status"), status));
        }

        if (adquirirPropriedade != null) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("adquirirPropriedade"), adquirirPropriedade));
        }

        if (dataInicio != null) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("dataInicio"), dataInicio));
        }

        Page<Aluguel> alugueis = aluguelRepository.findAll(spec, pageable);
        return alugueis.map(aluguel -> aluguelMapper.toDTO(aluguel, usuarioService.getCurrentCliente()));
    }

    private ContratoAluguel createContrato(AluguelCreateDTO aluguelCreateDTO, Automovel automovel) {
        return ContratoAluguel.builder()
                .status(StatusContrato.INATIVO)
                .valorTotal(calculateTotal(aluguelCreateDTO, automovel))
                .build();
    }

    private BigDecimal calculateTotal(AluguelCreateDTO aluguelCreateDTO, Automovel automovel) {
        return automovel.getValorMensal().multiply(aluguelCreateDTO.getPrazo().multiplier());
    }

    private Automovel validateAutomovelAvailability(AluguelCreateDTO aluguelCreateDTO) throws BadRequestException {
        Automovel automovel = automovelRepository.findById(aluguelCreateDTO.getAutomovelId())
                .orElseThrow(() -> new EntityNotFoundException(
                        "Automóvel não encontrado com o ID: " + aluguelCreateDTO.getAutomovelId()));

        if (!StatusAutomovel.DISPONIVEL.equals(automovel.getStatus())) {
            throw new BadRequestException(
                    "O automóvel com ID " + aluguelCreateDTO.getAutomovelId() + " não está disponível para aluguel.");
        }

        return automovel;
    }
}