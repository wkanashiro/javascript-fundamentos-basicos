// Callback function
// Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function exibeMensagem(nome) {
    alert(`Oi ${nome}`);
}

function fazAlgumaCoisa7(funcaoCallBack) {
    let nomeUsuario = prompt('Insira seu nome:');
    //exibeMensagem(nomeUsuario);
    funcaoCallBack(nomeUsuario);
}

fazAlgumaCoisa7(exibeMensagem);

function fazAlgumaCoisa8(funcaoCallBack) {
    funcaoCallBack();
}

fazAlgumaCoisa8(
    () => {
        console.log('Também posso receber como parâmetro uma arrow function');
    }
)