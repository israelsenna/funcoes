//verificar se uma pessoa e maior de idade

function verificarMaioridade(idade) {
    if (idade >= 18) {
        //eh maior de idade
        return true;
    } else {
        //nao eh maior de idade
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarMaioridade(10);
console.log(valorRetornadoPelaFuncao);