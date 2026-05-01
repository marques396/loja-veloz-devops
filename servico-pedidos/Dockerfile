# Estágio 1: Instalação e Preparação (Builder)
FROM node:18-alpine AS builder
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as bibliotecas (incluindo as necessárias para o build)
RUN npm install

# Copia todo o código do projeto para o estágio de build
COPY . .

# Estágio 2: Execução leve e segura
FROM node:18-alpine
WORKDIR /app

# Criando um usuário seguro para evitar rodar como root
RUN adduser -D osmaruser

# AJUSTE CHAVE: Copia os arquivos do builder já definindo o dono como osmaruser
# Isso evita erros de permissão ao tentar acessar a pasta node_modules
COPY --from=builder --chown=osmaruser:osmaruser /app ./

# Define o usuário que vai rodar os comandos a partir de agora
USER osmaruser

# Porta interna do container para o serviço de pedidos
EXPOSE 3002

# Comando para iniciar o servidor
# O caminho src/index.js deve ser relativo à raiz do projeto (/app)
CMD ["node", "src/index.js"]