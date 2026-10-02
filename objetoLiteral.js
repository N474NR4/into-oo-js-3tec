const user = {
  nome: "natan",
  email: "n@g.com",
  nascimento: "2009/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}

const admin = {
  nome: "junior",
  email: "j@h.com",
  role: "admin",
  criarCurso() {
    console.log('curso criado!')
  }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()