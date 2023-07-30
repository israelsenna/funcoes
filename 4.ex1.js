const pessoaObj = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4
};

function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
}

apresentar(pessoaObj);