# 📌 Projeto de Testes com Node.js, Jest e JavaScript

## 📖 Descrição
Este projeto tem como objetivo a prática de **testes de software** utilizando **Node.js** e o framework **Jest**.  
Foram implementadas funções em JavaScript acompanhadas de seus respectivos testes automatizados.

---

## 🛠️ Tecnologias Utilizadas
- **Node.js** (ambiente de execução JavaScript)  
- **Jest** (framework de testes)  
- **JavaScript (ES6+)**

---

## 2. Pré-requisitos

- **Node.js** instalado 

---

## 📂 Estrutura do Projeto



---

## ⚙️ Instalação e Configuração
1. Clone o repositório:
   ```bash
    git clone https://github.com/usuario/projeto-testes.git
    cd projeto-testes

    npm install
   ```

2. Execute os testes:
    ```bash
    npm run test
    ```


# Guia de Git Flow para Windows

Este guia explica como instalar e usar o **Git Flow** em projetos colaborativos no Windows.

---

## 1. Instalação do Git Flow

1. Baixe e instale o Git Flow AVH para Windows:  
   [https://github.com/petervanderdoes/gitflow-avh](https://github.com/petervanderdoes/gitflow-avh)

2. Verifique se a instalação funcionou:

```bash
git flow version
```

2. Criando e Finalizando Branches
Criar uma nova feature

```bash
git flow feature start nome-da-feature
```

Finalizar a feature

```bash
git flow feature finish nome-da-feature
```

3. Boas Práticas

Sempre crie novas features a partir de develop.

Nunca faça commits diretos em master.

Use nomes claros e descritivos para features, releases e hotfixes.

Antes de iniciar qualquer branch, atualize develop:

```bash
git checkout develop
git pull origin develop
```

Sempre envie as branches para o repositório remoto:

```bash
git push origin develop
git push origin main
git push origin feature/nome-da-feature
```