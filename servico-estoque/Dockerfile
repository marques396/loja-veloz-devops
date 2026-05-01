# ESTÁGIO 1: Build (Construção)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ESTÁGIO 2: Runtime (Produção - Imagem leve)
FROM node:18-alpine
WORKDIR /app

# Copia apenas o necessário (node_modules e código) do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

# SEGURANÇA: Usa o usuário 'node' (não-root)
USER node

# Porta que o seu serviço de estoque usa
EXPOSE 3003

# Mantendo o caminho src/index.js que você já usa
CMD ["node", "src/index.js"]