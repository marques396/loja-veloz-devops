# Estágio 1: Build (Construção)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Estágio 2: Runtime (Execução segura)
FROM node:18-alpine
WORKDIR /app

# Segurança: Cria o usuário específico para o serviço
RUN adduser -D osmaruser
COPY --from=builder --chown=osmaruser:osmaruser /app ./

USER osmaruser

# Porta específica do serviço de frete
EXPOSE 3005

# Garanta que o arquivo principal está em src/index.js
CMD ["node", "src/index.js"]