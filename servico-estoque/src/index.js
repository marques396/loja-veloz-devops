const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

// Simulação de um banco de dados de produtos
const bancoDeDadosEstoque = {
    "101": { nome: "Camiseta Loja Veloz", qtd: 150 },
    "102": { nome: "Boné Aba Reta Veloz", qtd: 85 },
    "103": { nome: "Moletom Streetwear", qtd: 40 },
    "104": { nome: "Tênis Runner Pro", qtd: 12 },
    "105": { nome: "Meias Performance", qtd: 0 } // Exemplo esgotado
};

// 1. Rota principal (Visual)
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; padding: 20px; border: 2px solid #e67e22; border-radius: 10px; max-width: 500px;">
            <h1 style="color: #d35400;">📦 Estoque Loja Veloz</h1>
            <p>Desenvolvedor: <strong>Osmar Marques</strong></p>
            <p>Status: <span style="color: white; background: #27ae60; padding: 3px 8px; border-radius: 5px;">OPERACIONAL</span></p>
            <hr>
            <p>Serviço rodando via <strong>Docker</strong> na porta ${port}.</p>
            <p><strong>IDs disponíveis:</strong> 101, 102, 103, 104, 105</p>
            <div style="margin-top: 10px;">
                <a href="/estoque" style="display: inline-block; background: #2980b9; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; margin-right: 5px;">Ver Estoque Completo</a>
                <a href="/estoque/101" style="display: inline-block; background: #e67e22; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">Simular Item 101</a>
            </div>
        </div>
    `);
});

// 2. NOVA ROTA: Listagem completa (COLEI AQUI)
app.get('/estoque', (req, res) => {
    res.json({
        mensagem: "Listagem completa de estoque",
        itens: bancoDeDadosEstoque,
        desenvolvedor: "Osmar Marques"
    });
});

// 3. Rota dinâmica (FICA POR ÚLTIMO)
app.get('/estoque/:id', (req, res) => {
    const produtoId = req.params.id;
    const infoProduto = bancoDeDadosEstoque[produtoId];

    if (infoProduto) {
        res.json({
            id: produtoId,
            produto: infoProduto.nome,
            quantidade: infoProduto.qtd,
            status: infoProduto.qtd > 0 ? "em_estoque" : "esgotado",
            ultima_atualizacao: new Date().toISOString()
        });
    } else {
        res.status(404).json({
            erro: "Produto não encontrado",
            mensagem: `O ID ${produtoId} não consta no estoque da Loja Veloz.`
        });
    }
});

app.listen(port, () => {
    console.log(` Servidor de ESTOQUE rodando na porta ${port}`);
    console.log(`🔗 Teste Geral: http://localhost:${port}/estoque`);
});