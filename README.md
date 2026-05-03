# Projeto Loja Veloz - Modernização Cloud-Native 🚀

Este projeto representa a evolução da plataforma "Pedidos Veloz", migrando de uma estrutura legada para uma **Arquitetura de Microsserviços** resiliente, escalável e conteinerizada.

## 🛠️ Stack Tecnológica e Portas do Sistema

Abaixo estão os serviços ativos na infraestrutura e suas portas de acesso (Padronizadas para Docker e Kubernetes):

| Serviço | Porta | Descrição |
| :--- | :--- | :--- |
| **API Gateway** | 3000 | Ponto de entrada central (Entrypoint). |
| **Srv. Pedidos** | 3001 | Gestão de ordens e integração DummyJSON. |
| **Srv. Pagamentos** | 3002 | Processamento de transações financeiras. |
| **Srv. Estoque** | 3003 | Gerenciamento de inventário e produtos. |
| **Srv. Frete** | 3005 | Cálculo de logística e prazos de entrega. |
| **PostgreSQL** | 5432 | Banco de Dados relacional (`pedidos_db`). |
| **RabbitMQ** | 15672 | Painel de gestão de mensageria (guest/guest). |

## 🏗️ Soluções Implementadas

* **Conteinerização:** Dockerfiles multi-stage para otimização de build e segurança (Non-root user).
* **Orquestração K8s:** Preparado para Kubernetes com manifestos de Deployment, Service e HPA em `k8s/base`.
* **CI/CD Automatizado:** Pipeline via GitHub Actions validando builds e compatibilidade com Node 24 (2026).
* **Mensageria:** RabbitMQ garantindo o desacoplamento e a resiliência do fluxo de dados.
* **Healthchecks:** Verificações de saúde garantindo que os serviços aguardem a prontidão do banco de dados.

---

## 🚦 Como Rodar o Projeto

### 1. Preparação
Certifique-se de que o **Docker Desktop** está rodando e acesse a raiz do projeto no terminal:
```powershell
# Certifique-se de estar na pasta principal
cd loja-veloz-devops

2. Opção A: Via Docker Compose (Desenvolvimento)
Suba a infraestrutura completa de forma rápida:

PowerShell
docker compose up -d --build
3. Opção B: Via Kubernetes (Homologação)
Aplique os manifestos corrigidos para rodar no cluster local:

PowerShell
# Aplicar manifestos de deployment e service
kubectl apply -f k8s/base/deployment.yaml -n pedidos-veloz
kubectl apply -f k8s/base/service.yaml -n pedidos-veloz
kubectl apply -f k8s/base/deployment-frete.yaml -n pedidos-veloz
✅ Validação e Testes
Validar Banco de Dados:

PowerShell
docker exec -it loja-veloz-devops-postgres-1 psql -U postgres -d pedidos_db -c "\dt"
Verificar Logs do Gateway:

PowerShell
kubectl logs -l app=api-gateway -n pedidos-veloz -f
🔗 Endpoints de Acesso
Gateway Principal: http://localhost:3000

Serviço de Frete: http://localhost:3005

RabbitMQ: http://localhost:15672

Desenvolvedor: Osmar Marques (marques396)
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas - UniFECAF