# Teste de software 

Esse projeto é um CRUD simples com front e back integrado e funcional. O intuito do sistema é prover um ambiente para praticar e aprender a ferramenta de teste end-to-end chamada protactor (https://www.protractortest.org/#/). 

## Versão do CLI 

Esse projeto foi gerado com versão 7.1.2. 

## Como iniciar o projeto

Para rodar esse projeto é necessário ter uma instância do mySQL rodando com a tabela criada 'Product'; 
Para rodar o projeto é necessário digitar o comando `npm install` após isso digitar o comando `ng serve`. Acesse o link `http://localhost:4200/` ele redirecionará para a url correta automaticamente. 
Para rodar os testes automatizados é necessário digitar o comando `ng e2e`.

## O que é o Protractor?

Protractor é um framework de teste automatizado de ponta a ponta para aplicativos Angular e AngularJS. Protractor executa testes contra seu aplicativo em execução em um navegador real, interagindo com ele como um usuário faria. O Protractor é baseado em selenium.

## O que é teste end-to-end?

O teste end-to-end é uma metodologia utilizada para testar se o fluxo de um aplicativo está sendo executado de forma correta do início ao fim. É um forma de realizar testes nas quais visam provar o sistema de uma forma mais completa simulando o ambiente real.

## Processo de automatização.

Foi feito um simulçação aonde o usuário faria as seguntes atividades:

    √ Cadastrar um produto
    √ Direcionar para a tela de listagem de produtos, e verificar se o item foi adicionado
    √ Clickar no botão de editar e editar os dados do valor do produto
    √ Deletar o dado inserido de forma automatizada
