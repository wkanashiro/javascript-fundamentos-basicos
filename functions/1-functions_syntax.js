function sintaxeDeFuncao() {
    console.log(`function nomeDaFuncao() {
        instrucao1;
        instrucao2;
        instrucaoN;
    }`)
}

sintaxeDeFuncao();

// function expression
// function anonymous
        // num1 e num2 são parâmetros
// por default, uma função retorna undefined
let soma = function(num1, num2) {
    //console.log(num1 + num2);
    return num1 + num2;
}

console.log(`A soma é: ${soma(2,3)}`); // 2 e 3 são argumentos

let a = 4;
let b = 7;
console.log(`A soma é: ${soma(a,b)}`);