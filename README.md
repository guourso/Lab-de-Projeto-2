[JAVA_BADGE]:https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[SPRING_BADGE]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
[REACT__BADGE]: https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript

# Laboratório-de-Projeto-2 Sistema de Aluguel de Carros
## Sumário
- [Sobre](#sobre)
- [Instalação](#instalacao)
- [Histórias do usuário](#historias-de-usuario)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Contribuidores](#contribuidores)

## Sobre
##### Esse repositório tem como objetivo cumprir os requisitos parciais para aprovação na disciplina de Láboratório de Projetos- 2025/1, do curso de Engenharia de Software da PUC MINAS.

O projeto se propõe a criar um sistema de aluguem de automóveis que permita efetuar, cancelar e modificar pedidos através da Internet.

## Instalação

Este sistema foi desenvolvido utilizando **Java com Spring Boot** no backend e **React com Tailwind CSS** no frontend. O gerenciamento de dependências do backend é feito com **Maven**.

## 🚀 Pré-requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados:

- [Java 17+](https://adoptium.net/)
- [Maven](https://maven.apache.org/download.cgi)
- [Node.js 18+](https://nodejs.org/)
- [Docker](https://www.docker.com/) (opcional, caso deseje rodar o banco de dados em um contêiner)

## 📦 Backend (Spring Boot)

### 1️⃣ Clonando o repositório

```sh
git clone https://github.com/guourso/Lab-de-Projeto-2
cd labProjetos2/backend
```

### 2️⃣ Rodando o Backend

Para compilar e rodar o projeto:

```sh
mvn clean install
mvn spring-boot:run
```

O backend estará disponível em `http://localhost:8080`.

---

## 🎨 Frontend (React + Tailwind)

### 1️⃣ Navegue até a pasta do frontend

```sh
cd ../frontend
```

### 2️⃣ Instale as dependências

```sh
npm install
```

### 3️⃣ Execute o projeto

```sh
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

---


## Histórias de Usuário

| ID   | História de Usuário |
|------|---------------------|
| HU01 | Como **cliente**, quero **me cadastrar no sistema**, para que eu possa acessar os serviços de aluguel de automóveis. |
| HU02 | Como **cliente**, quero **fazer um pedido de aluguel de um automóvel**, para utilizá-lo por um período específico. |
| HU03 | Como **cliente**, quero **modificar um pedido de aluguel**, para ajustar informações como datas e tipo de veículo. |
| HU04 | Como **cliente**, quero **cancelar um pedido de aluguel**, caso não precise mais do automóvel. |
| HU05 | Como **cliente**, quero **consultar meus pedidos de aluguel**, para acompanhar o status e os detalhes. |
| HU06 | Como **agente (empresa/banco)**, quero **avaliar pedidos de aluguel**, para verificar se o cliente tem condições financeiras de realizar o aluguel. |
| HU07 | Como **agente (empresa/banco)**, quero **modificar pedidos de aluguel**, para ajustar informações financeiras e contratuais antes da aprovação. |
| HU08 | Como **administrador**, quero **gerenciar contratos de aluguel**, para garantir que todas as operações sejam seguras e bem documentadas. |
| HU09 | Como **administrador**, quero **gerenciar o sistema**, para garantir seu bom funcionamento e realizar ajustes conforme necessário. |

## Funcionalidades
### 📌 Funcionalidades para Clientes

- **Cadastro de Clientes:** Permite que novos usuários criem uma conta no sistema. *(HU01)*
- **Solicitação de Aluguel:** Usuários podem realizar pedidos de aluguel de veículos para um período específico. *(HU02)*
- **Edição de Pedidos:** Clientes podem modificar um pedido de aluguel para ajustar datas ou trocar de veículo. *(HU03)*
- **Cancelamento de Pedidos:** Clientes podem cancelar um pedido de aluguel caso não precisem mais do veículo. *(HU04)*
- **Consulta de Pedidos:** Permite visualizar e acompanhar o status dos pedidos de aluguel. *(HU05)*

### 🏢 Funcionalidades para Agentes (Empresas/Bancos)

- **Avaliação de Pedidos:** Agentes podem analisar as solicitações de aluguel e verificar a elegibilidade do cliente. *(HU06)*
- **Modificação de Pedidos:** Possibilidade de ajustar informações financeiras e contratuais antes da aprovação do aluguel. *(HU07)*

### 🔧 Funcionalidades para Administradores

- **Gestão de Contratos:** Administradores podem gerenciar os contratos de aluguel, garantindo segurança e documentação adequada. *(HU08)*
- **Gerenciamento do Sistema:** Controle total sobre as operações, permitindo ajustes e melhorias contínuas. *(HU09)*

## Tecnologias
![react][REACT__BADGE]
![typescript][TYPESCRIPT__BADGE]
![spring][SPRING_BADGE]
![java][JAVA_BADGE]

## Contribuidores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/BryanAbreu21">
        <img src="https://avatars.githubusercontent.com/u/127118299?v=4)" width="100px;" alt="Foto de Bryan"/><br>
        <sub>
          <b>Bryan Rosenberg de Abreu</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/guourso">
        <img src="https://avatars.githubusercontent.com/u/62347484?v=4" width="100px;" alt="Foto de Gustavo"/><br>
        <sub>
          <b>Gustavo Henrique Alves Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/VictorFonseca17">
        <img src="https://avatars.githubusercontent.com/u/113562134?v=4" width="100px;" alt="Foto de Victor"/><br>
        <sub>
          <b>Victor Alexandre Peters Fonseca</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

