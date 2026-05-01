# Estágio 1: Build (Construção)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Estágio 2: Runtime (Produção - Leve e segura)
FROM node:18-alpine
WORKDIR /app

# Copia apenas o necessário do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

# Boa prática: Usar o usuário 'node' que já vem na imagem alpine (segurança)
USER node

EXPOSE 3000

# Garanta que o caminho src/index.js existe na sua pasta
CMD ["node", "src/index.js"]