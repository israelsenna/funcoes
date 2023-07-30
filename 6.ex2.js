function faixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade <= 65) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

//exibindo saida da function
console.log(faixaEtaria(66));

//armazenando saida da function para uma const e exibindo-a
const valorRetornadoPelaFuncao = faixaEtaria(66);
console.log(valorRetornadoPelaFuncao);  