function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade < 65) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria} de 
    ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
}

const pessoa1 = {
    nome: "João",
    idade: 25,
    profissao: "estudante",
    altura: 1.9
};

apresentar(pessoa1);