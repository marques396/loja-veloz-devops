const express = require('express');
const app = express();
const port = 3005; // Mantendo a porta 3005 conforme seu docker-compose.yaml

// Middleware para permitir que o serviço entenda JSON
app.use(express.json());

// Rota Principal (Health Check) 
app.get('/', (req, res) => {
    res.send('🚚 Serviço de Frete: Operacional para a Loja Veloz! Frete Grátis a partir de $49,90');
});

// Rota de Simulação de Frete
app.get('/calcular-frete/:cep', (req, res) => {
    const cep = req.params.cep;
    res.json({
        origem: "01001-000",
        destino: cep,
        valor: 15.90,
        prazo_entrega: "3 dias úteis",
        empresa: "Veloz Logística"
    });
});

app.listen(port, () => {
    console.log(`🚀 Serviço de FRETE rodando na porta ${port}`);
    console.log(`🔗 Teste aqui: http://localhost:${port}`);
});