const user = {
  nome: "Natan",
  email: "n@@g.com", 
  nascimento: "2009/01/01",
  role: "admin",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}

user.exibirInfos()

