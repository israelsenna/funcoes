const pessoa1 = {
    nome: "João",
    idade: 25,
    profissao: "estudante",
    altura: 1.9,

    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Olá! Meu nome é ${this.nome}, sou um(a) ${faixaEtaria} de 
        ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}.`);
    },

    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        } else if (this.idade < 65) {
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    }
};

pessoa1.apresentar();
