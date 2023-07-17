# Projeto de Automação com Cypress

Este é um projeto de automação de testes utilizando Cypress.

## Pré-requisitos

Antes de executar os testes, verifique se você possui o seguinte instalado em seu ambiente de desenvolvimento:

- Node.js: [Baixar e instalar o Node.js](https://nodejs.org)
- Cypress: Execute o seguinte comando para instalar o Cypress globalmente:
    
    npm install -g cypress

## Configuração do Projeto

1. Clone o repositório para sua máquina local: 
    git clone https://github.com/Adriano1lp/automacao_blog_agi.git

2. Navegue até o diretório do projeto:
    cd automacao_blog_agi

3. Instale as dependências do projeto:
    npm install


## Executando os Testes

Para executar os testes, siga as etapas abaixo:

1. Abra o Cypress Test Runner:
    npx cypress open

2. O Cypress Test Runner será aberto. Clique no arquivo de teste que você deseja executar na janela do Test Runner.

3. Os testes serão executados no navegador especificado e você poderá visualizar os resultados no Test Runner.

## Executando Testes em Modo Headless (sem interface gráfica)

Se você preferir executar os testes em modo headless (sem interface gráfica do Test Runner), siga estas etapas:

1. Execute o seguinte comando para executar todos os testes em modo headless:
    npx cypress run

2. Os testes serão executados no modo headless e você poderá ver os resultados no terminal o no relatorio que fica em:
    cypress/report

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

- **cypress**: Pasta raiz do projeto do Cypress.
- **cypress/e2e**: Pasta onde estão localizados os arquivos de teste.
- **cypress/fixtures**: Pasta onde estão localizados o mapeamento dos elementos
- **cypress/support**: Pasta onde você pode adicionar arquivos de suporte, como comandos personalizados.
- **cypress.config.json**: Arquivo de configuração do Cypress.
