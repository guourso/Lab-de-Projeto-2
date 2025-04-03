package com.lab2.aluguel.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class Login {
    private String email;
    private String senha;
}