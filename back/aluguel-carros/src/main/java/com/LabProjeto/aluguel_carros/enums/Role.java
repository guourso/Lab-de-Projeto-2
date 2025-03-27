package com.LabProjeto.aluguel_carros.enums;

public enum  Role {
    CLIENTE (1),
    AGENTE_BANCO(2),
    AGENTE_EMPRESA(3);

        private final int value;

        Role(int valor) {
        this.value = valor;
    }

    public static Role getFromValue(int valor) {
        for (Role role : Role.values()) {
            if (role.value == valor) {
                return role;
            }
        }
        throw new IllegalArgumentException("Valor inválido: " + valor);
    }
}