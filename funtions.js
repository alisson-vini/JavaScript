function soma(A, B){
    return A + B
}

function calcular_porcentagem(quantidade_escolhida, quantidade_total){
    (quantidade_escolhida * quantidade_total) / 100
}

function calcular_fatorial(valor){

    if (valor < 0){
        return "valor inválido"
    }

    else if (valor === 1 || valor === 0){
        return 1
    }

    else{
        return valor * calcular_fatorial(valor - 1)
    }
}