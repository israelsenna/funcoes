function apresentar(pessoas) {
    if (pessoas.idade < 25) {
        console.log(`Meu nome é ${pessoas.nome}, sou um(a) jovem de ${pessoas.idade} anos e sou ${pessoas.profissao}`);
    } else if (pessoas.idade < 65) {
        console.log(`Meu nome é ${pessoas.nome}, sou um(a) adulto de ${pessoas.idade} anos e sou ${pessoas.profissao}`);
    } else {
        console.log(`Meu nome é ${pessoas.nome}, sou um(a) idoso de ${pessoas.idade} anos e sou ${pessoas.profissao}`);
    }
}

const pessoas = [
    {
        nome: "José",
        idade: 30,
        profissao: "professor"
    },

    {
        nome: "Pedro",
        idade: 65,
        profissao: "médico"
    },

    {
        nome: "Ana",
        idade: 19,
        profissao: "estudante"
    }
];

apresentar(pessoas[0]);
apresentar(pessoas[1]);
apresentar(pessoas[2]);

// for (i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade < 25) {
//         console.log(`Meu nome é ${pessoas[i].nome}, sou um(a) jovem de ${pessoas[i].idade} anos e sou ${pessoas[i].profissao}`);
//     } else if (pessoas[i].idade < 65) {
//         console.log(`Meu nome é ${pessoas[i].nome}, sou um(a) adulto de ${pessoas[i].idade} anos e sou ${pessoas[i].profissao}`);
//     } else {
//         console.log(`Meu nome é ${pessoas[i].nome}, sou um(a) idoso de ${pessoas[i].idade} anos e sou ${pessoas[i].profissao}`);
//     }
// }