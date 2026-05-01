const express = require('express');
const app = express();
const port = 3001; // Porta configurada com o docker-compose

app.use(express.json());

// Rota Principal com visual da Loja Veloz
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; padding: 20px; border: 2px solid #27ae60; border-radius: 10px; max-width: 500px;">
            <h1 style="color: #27ae60;">💳 Pagamentos Loja Veloz</h1>
            <p>Desenvolvedor: <strong>Osmar Marques</strong></p>
            <p>Status: <span style="color: white; background: #27ae60; padding: 3px 8px; border-radius: 5px;">OPERACIONAL</span></p>
            <hr>
            <p>Serviço rodando via <strong>Docker</strong> na porta ${port}.</p>
            <p style="font-size: 0.9em; color: #666;">Pronto para processar transações via RabbitMQ.</p>
        </div>
    `);
});

// Rota de Processamento de Pagamento (Mantida)
app.post('/processar', (req, res) => {
    const { valor, metodo } = req.body;
    console.log(`Processando pagamento de R$ ${valor} via ${metodo}`);
    
    res.json({
        status: "Sucesso",
        transacao_id: Math.floor(Math.random() * 1000000),
        mensagem: "Pagamento aprovado com sucesso!"
    });
});

app.listen(port, () => {
    console.log(` Serviço de PAGAMENTOS rodando na porta ${port}`);
    console.log(`🔗 Teste aqui: http://localhost:${port}`);
});