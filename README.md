# Projeto Loja Veloz - Modernização Cloud-Native 🚀

Este projeto representa a evolução da plataforma **Pedidos Veloz**, migrando de uma estrutura legada para uma **Arquitetura de Microsserviços** resiliente, escalável e conteinerizada.

## 🛠️ Stack Tecnológica e Portas do Sistema

Abaixo, os serviços ativos na infraestrutura e suas portas de acesso (padronizadas para Docker e Kubernetes):

| Serviço | Porta | Descrição |
| :--- | :--- | :--- |
| **Gateway de API** | 3000 | Ponto de entrada central para todas as requisições. |
| **Srv. Pedidos** | 3001 | Gestão de pedidos e integração com DummyJSON. |
| **Srv. Pagamentos** | 3002 | Processamento de transações financeiras. |
| **Srv. Estoque** | 3003 | Gerenciamento de inventário e produtos. |
| **Srv. Frete** | 3005 | Cálculo de logística com suporte a frete grátis. |
| **PostgreSQL** | 5432 | Banco de Dados Relacional (`pedidos_db`). |
| **RabbitMQ** | 15672 | Painel de gestão de mensageria (`guest`/`guest`). |

## 🏗️ Soluções Implementadas

* **Conteinerização**: Dockerfiles multiestágio para otimização de build e segurança.
* **Orquestração K8s**: Manifestos de Deployment, Service e HPA em `k8s/`.
* **CI/CD Automatizado**: Pipeline via GitHub Actions validando builds e compatibilidade com Node 24.
* **Mensageria**: RabbitMQ garantindo desacoplamento e resiliência do fluxo de dados.
* **Healthchecks**: Verificações de saúde garantindo que os serviços aguardem a prontidão do banco de dados.

## 🚦 Como Rodar o Projeto

### 1. Preparação
Certifique-se de que o **Docker Desktop** está rodando e acesse a raiz do projeto:

```powershell
cd loja-veloz-devops

2. Opção A: Via Docker Compose (Desenvolvimento)
Suba toda a infraestrutura rapidamente:
docker compose up -d --build

3. Opção B: Via Kubernetes (Homologação)
Aplique os manifestos no cluster local:
kubectl apply -f k8s/base/configmap.yaml
kubectl apply -f k8s/base/deployment.yaml
kubectl apply -f k8s/base/deployment-estoque.yaml
kubectl apply -f k8s/base/deployment-frete.yaml
kubectl apply -f k8s/base/deployment-pagamentos.yaml
kubectl apply -f k8s/base/deployment-pedidos.yaml
kubectl apply -f k8s/base/service.yaml
kubectl apply -f k8s/base/hpa.yaml
kubectl apply -f k8s/base/postgres.yaml

✅ Validação e Testes
Inicializar e validar banco de dados
Get-Content "init.sql" | docker exec -i loja-veloz-devops-postgres-1 psql -U postgres -d pedidos_db
docker exec -it loja-veloz-devops-postgres-1 psql -U postgres -d pedidos_db -c "\dt"

Verificar logs do Gateway

docker logs -f loja-veloz-devops-api-gateway-1

 Endpoints de Acesso
Gateway Principal: http://localhost:3000
Serviço de Pedidos: http://localhost:3001
Serviço de Pagamentos: http://localhost:3002
Serviço de Estoque: http://localhost:3003
Serviço de Frete: http://localhost:3005
Painel RabbitMQ: http://localhost:15672

Desenvolvedor: Osmar Marques (marques396)