function User(nome, email) {
    this.nome = nome;
    this.email = email;
}

// Adicionando o método exibirInfos ao protótipo de User
User.prototype.exibirInfos = function() {
    return `Nome: ${this.nome}, Email: ${this.email}`;
}

function Admin(role){
    User.call(this, 'Nt', 'nrt@gmail.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

const novoUser = new Admin('admin');
console.log(novoUser.exibirInfos()); 
console.log(novoUser.role);          
