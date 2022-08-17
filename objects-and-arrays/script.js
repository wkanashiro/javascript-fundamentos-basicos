// Arrays

const animais = [
    'Gato',
    'Cachorro',
    'Papagaio',
    'Calopsita',
    {
        nome: 'Stella',
        tipo: 'gato',
        idade: 3
    }
]

// acessando valores em um Array
console.log(animais[0]) // "Gato"
console.log(animais[2]) // "Papagaio"
console.log(animais)

// Objects
const pessoa = {
    nome: 'Wesley',
    idade: 20,
    andar: function() {
        console.log('Andando...');
    },
    dormir: function() {
        console.log('Dormindo..');
    },
    correr: function() {
        console.log('Correndo...');
    }
}

pessoa.correr();
console.log(pessoa);