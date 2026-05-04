CREATE TABLE IF NOT EXISTS pedidos (
    id SERIAL PRIMARY KEY,
    produto VARCHAR(255),
    quantidade INTEGER,
    valor DECIMAL(10,2),
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
