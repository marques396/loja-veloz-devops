const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

// Redirecionamento para os serviços (Proxy) - Ajustado para as portas corretas
app.use('/pedidos', createProxyMiddleware({ 
    target: 'http://pedidos-service:3001', 
    changeOrigin: true 
}));

app.use('/pagamentos', createProxyMiddleware({ 
    target: 'http://pagamentos-service:3002', 
    changeOrigin: true 
}));

app.use('/estoque', createProxyMiddleware({ 
    target: 'http://estoque-service:3003', 
    changeOrigin: true 
}));

app.use('/frete', createProxyMiddleware({ 
    target: 'http://frete-service:3005', 
    changeOrigin: true 
}));

app.listen(port, () => {
    console.log(`📡 Gateway da Loja Veloz rodando na porta ${port}`);
});