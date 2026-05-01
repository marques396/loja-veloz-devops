variable "namespace_name" {
  description = "Nome do namespace para o projeto Osmar-dev-mobile"
  type        = string
  default     = "pedidos-veloz"
}

variable "cluster_context" {
  description = "Contexto do Kubernetes local"
  type        = string
  default     = "docker-desktop"
}