// function hoisting

fazAlgumaCoisa3();

function fazAlgumaCoisa3() {
    console.log('Exemplo de hoisting com function');
}

fazAlgumaCoisa4();

var fazAlgumaCoisa4 = function() {
    console.log('Em function expression o hoisting não funciona');
}

//fazAlgumaCoisa4();