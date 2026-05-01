# Estágio 1: Build (Construção)
FROM node:18-alpine AS builder
WORKDIR /app

# 1. Copia apenas os arquivos de dependências primeiro
COPY package*.json ./

# 2. Instala as dependências dentro do ambiente Linux do Docker
# O --frozen-lockfile ou apenas npm install garante a integridade
RUN npm install

# 3. Copia o restante do código, EXCETO o que estiver no .dockerignore
COPY . .

# Estágio 2: Runtime (Execução)
FROM node:18-alpine
WORKDIR /app

# Segurança: Cria o usuário ANTES de copiar os arquivos
RUN adduser -D osmaruser

# 4. Copia os arquivos do builder já dando a permissão para o osmaruser
# Isso evita o erro de "permission denied" no node_modules
COPY --from=builder --chown=osmaruser:osmaruser /app ./

# Define o usuário para a execução
USER osmaruser

# Porta do serviço de pedidos
EXPOSE 3001

# Comando de inicialização
CMD ["node", "src/index.js"]