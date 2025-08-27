// criando um objeto
let cachorro = {
    nome: "Laica",
    raca: "pastor alemão",
    idade: 5,
    dono: "Alisson",

    latir: function(){
        console.log("Au au!")
    },

    informe: function(){
        console.log(`Dono do cachorro: ${this.dono} e o nome do cachorro é: ${this.nome}`)
    }

}

// acessando os elementos e metodos de um objeto

cachorro.nome // acessado propriedades
cachorro.dono

cachorro.latir() // acessando métodos
cachorro.informe()