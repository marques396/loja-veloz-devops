const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 3001; 

app.use(express.json());

// Rota Principal com visual unificado
app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; padding: 20px; border: 2px solid #3498db; border-radius: 10px; max-width: 500px;">
      <h1 style="color: #2980b9;">🚀 API de Pedidos - Loja Veloz</h1>
      <p>Desenvolvedor: <strong>Osmar Marques</strong></p>
      <p>Status: <span style="color: white; background: #27ae60; padding: 3px 8px; border-radius: 5px;">ONLINE</span></p>
      <hr>
      <p>Este serviço utiliza <strong>Axios</strong> para buscar dados externos.</p>
      <a href="/pedidos" style="display: inline-block; background: #3498db; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">Visualizar Pedidos Reais</a>
    </div>
  `);
});
// Rota de Pedidos Atualizada 
app.get('/pedidos', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/carts');
    
    // Filtramos para manter apenas os IDs de 1 a 7 que você solicitou
    const carrinhosFiltrados = response.data.carts.filter(cart => cart.id >= 1 && cart.id <= 7);

    res.send(`
      <div style="font-family: sans-serif; padding: 20px; background-color: #f8f9fa;">
        <h2>🛒 Lista de Pedidos (Via DummyJSON)</h2>
        <p>Dados técnicos recuperados com sucesso para o projeto DevOps.</p>
        <hr>
        ${carrinhosFiltrados.map(cart => `
          <div style="border: 1px solid #ccc; border-radius: 8px; margin-bottom: 15px; padding: 15px; background-color: #fff;">
            <strong style="font-size: 1.1em; color: #007bff;">Pedido ID: #${cart.id}</strong><br>
            <small>Usuário ID: ${cart.userId}</small>
            
            <div style="margin-top: 10px; padding: 8px; background: #f1f1f1; border-radius: 4px;">
              <strong>Itens no Pedido:</strong>
              <ul style="margin: 5px 0;">
                ${cart.products.map(p => `
                  <li>${p.title} - <span style="color: #666;">$${p.price} (x${p.quantity})</span></li>
                `).join('')}
              </ul>
            </div>

            <div style="margin-top: 10px; display: flex; justify-content: space-between;">
              <span>Total de Produtos: <strong>${cart.totalProducts}</strong></span>
              <span style="color: green; font-weight: bold;">Valor Total: $${cart.total.toFixed(2)}</span>
            </div>
          </div>
        `).join('')}
        <br>
        <a href="/" style="text-decoration: none; color: #007bff; font-weight: bold;">⬅ Voltar</a>
      </div>
    `);

  } catch (error) {
    console.error("Erro ao buscar pedidos:", error.message);
    res.status(500).send(`
      <div style="color: red; font-family: sans-serif; padding: 20px;">
        <h3>❌ Erro ao buscar pedidos</h3>
        <p>Verifique a conexão do container com a internet.</p>
        <a href="/">Voltar</a>
      </div>
    `);
  }
});

app.listen(port, () => {
  console.log(`🚀 Serviço de PEDIDOS rodando na porta ${port}`);
  console.log(`🔗 Teste aqui: http://localhost:${port}`);
});