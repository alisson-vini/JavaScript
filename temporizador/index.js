let segundos = 0
let minutos = 0
let cronometro_ligado = false
let IDintervalo

function rodar_timer(){
    if (cronometro_ligado === false){
        IDintervalo = setInterval(atualizar_timer, 1000)
        cronometro_ligado = true
    }
}

function reiniciar_timer(){
    clearInterval(IDintervalo)
    segundos = 0
    minutos = 0
    document.getElementById("visu").innerHTML = `${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`
    cronometro_ligado = false
}

function atualizar_timer(){

    segundos += 1

    if(segundos >= 60){
        segundos = 0
        minutos += 1
    }

    document.getElementById("visu").innerHTML = `${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`
    
}