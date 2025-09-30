# Formulário de Registro de Vendas (Didático)
Aplicação frontend desenvolvida em React com o objetivo de simular o registro de vendas realizadas por consumidores. O formulário coleta dados essenciais sobre o produto e o canal de venda, enviando essas informações para um backend em Python (Flask), que persiste os dados em um banco de dados MySQL para posterior análise.

### ⚠️ Importante: 
Todos os dados registrados são fictícios e utilizados exclusivamente para fins didáticos e de aprendizado.


## Funcionalidades
Registro de vendas com os seguintes campos:

Nome completo do consumidor

Nome do produto

Categoria do produto

Valor unitário

Quantidade

Canal da venda (ex: online, presencial)

Observações adicionais

Envio dos dados via fetch para uma API Flask hospedada no Render

Validação básica dos campos

Interface simples e intuitiva

Preparada para rodar localmente e ser hospedada no GitHub Pages


## Tecnologias Utilizadas
React (Create React App)

fetch API para comunicação com o backend

CSS para estilização (Futura atualização para Tailwind)

Flask no backend (não incluso neste repositório)

MySQL como banco de dados relacional


## Como Rodar Localmente
Clone o repositório:

bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm run dev
Certifique-se de que o backend Flask está rodando e acessível na URL configurada no fetch.


## Deploy no GitHub Pages
Para simular um ambiente real e desenvolver habilidades de deploy, a aplicação será hospedada no GitHub Pages. Para isso, você pode usar bibliotecas como gh-pages e configurar o package.json com o campo "homepage".

## Objetivo Didático 🎯
Este projeto tem como finalidade o desenvolvimento de habilidades práticas em frontend React, integração com APIs REST, persistência de dados e deploy de aplicações web. Os dados simulados permitem testar funcionalidades reais sem comprometer informações sensíveis.
