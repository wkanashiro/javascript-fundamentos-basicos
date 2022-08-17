// Funções construtoras

function Pessoa(nome) {
    this.nome = nome;
    this.andar = function() {
        console.log(`${this.nome} está andando...`);
    }
}

let p1 = new Pessoa("Wesley");
let p2 = new Pessoa("Manu");

console.log(p1);
p1.andar();
console.log(p2);
p2.andar();

p3 = {
    nome: "Jorge",
    andar: function() {
        console.log(`${this.nome} está andando...`);
    }
}

console.log(p3);
p3.andar();