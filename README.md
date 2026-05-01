# 🚀 Projeto Loja Veloz - Modernização Cloud-Native

Este projeto representa a evolução da plataforma "Pedidos Veloz", migrando de uma estrutura legada para uma **Arquitetura de Microsserviços** resiliente, escalável e conteinerizada.

## 🛠️ Stack Tecnológica e Portas do Sistema

Abaixo estão os serviços ativos na infraestrutura e suas portas de acesso:

| Serviço | Porta Local | Descrição |
| :--- | :--- | :--- |
| **API Gateway** | 3000 | Ponto de entrada central (Entrypoint). |
| **Srv. Pagamentos** | 3001 | Processamento de transações financeiras. |
| **Srv. Pedidos** | 3002 | Dashboard e gestão de ordens (Integração DummyJSON). |
| **Srv. Estoque** | 3003 | Gerenciamento de inventário e produtos. |
| **Srv. Frete** | 3005 | Cálculo de logística e prazos de entrega. |
| **PostgreSQL** | 5432 | Banco de Dados relacional para persistência (pedidos_db). |
| **RabbitMQ (Painel)**| 15672 | Interface de gestão de mensageria (guest/guest). |

## 🏗️ Soluções Implementadas

*   **Conteinerização**: Utilização de Dockerfiles **multi-stage** para redução no tamanho das imagens e otimização de build, garantindo segurança com usuários não-root (`osmaruser`).
*   **Arquitetura de Microsserviços**: Divisão clara de responsabilidades entre Pedidos, Estoque, Pagamentos e Frete, facilitando a manutenção e escalabilidade.
*   **Resiliência (Healthchecks)**: Configuração de verificações de saúde no PostgreSQL, garantindo que os serviços dependentes iniciem apenas após o banco estar pronto.
*   **Mensageria**: Implementação do **RabbitMQ** para garantir o desacoplamento dos serviços e a resiliência do fluxo de dados.
*   **Persistência**: PostgreSQL integrado via Docker para armazenamento seguro e isolado de dados.
*   **Prontidão Cloud-Native**: Estrutura preparada para orquestração via **Kubernetes**, com suporte a estratégias de *HPA (Horizontal Pod Autoscaler)* e *RollingUpdate*.

## 🚦 Como Rodar o Projeto

Certifique-se de que o **Docker Desktop** está rodando.

1.  **Acesse a pasta do projeto via terminal:**
    ```bash
    cd loja-veloz-devops
    ```

2.  **Suba a infraestrutura completa com um único comando:**
    ```bash
    docker compose up -d --build
    ```

3.  **Valide o status dos serviços:**
    ```bash
    docker ps
    ```
4.  **Mostrar o banco de dados (A prova real):
docker exec -it loja-veloz-devops-postgres-1 psql -U postgres -d pedidos_db -c "\dt"

## 🔗 Endpoints de Acesso

*   **Pagamentos**: [http://localhost:3001]
(http://localhost:3001)

*   **Pedidos**: [http://localhost:3002]
(http://localhost:3002)

*   **Estoque**: [http://localhost:3003/estoque]
(http://localhost:3003/estoque)
*   **Frete**: [http://localhost:3005]
(http://localhost:3005)
*   **RabbitMQ**: [http://localhost:15672]
(http://localhost:15672)

---
**👨‍💻 Desenvolvedor:** Osmar Marques
**Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas - UniFECAF