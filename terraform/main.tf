# Define que vamos usar o Kubernetes local como provedor
terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config" # Usa a sua configuração local do Minikube/Docker
}

# Exemplo: Criando o Namespace do projeto via Terraform
resource "kubernetes_namespace" "projeto_osmar" {
  metadata {
    name = "pedidos-veloz"
  }
}