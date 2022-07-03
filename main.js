let local = document.getElementById('puntosLocal')
let visitante = document.getElementById('puntosVisita')
let puntosDelLocal = 0
let puntosDelVisitante = 0


function aumentarPuntosLocal() {
    puntosDelLocal++;
    local.innerHTML = `
    ${puntosDelLocal}
    `
}
function disminuirPuntosLocal() {
    puntosDelLocal--;
    local.innerHTML = `
    ${puntosDelLocal}
    `
}

function aumentarPuntosVisitante() {
    puntosDelVisitante++;
    visitante.innerHTML = `
    ${puntosDelVisitante}
    `
}
function disminuirPuntosVisitante() {
    puntosDelVisitante--;
    visitante.innerHTML = `
    ${puntosDelVisitante}
    `
}

let p = document.getElementsByTagName('p')[3]
let comenzar = document.getElementById('comenzar')
let pausar = document.getElementById('pausar')
let resetear = document.getElementById('resetear')
let segundos = 0
let minutos = 30

function comenzarCronometro1(){
    function tick() {
        segundos--;
        if(segundos <= 0) {
            segundos = 59;
            minutos--;
        }
    }
    function add() {
        tick();
        p.textContent = (minutos > 9 ? minutos : "0" + minutos)
                + ":" + (segundos > 9 ? segundos : "0" + segundos)
        timer()
    }
    function timer() {
        t = setTimeout(add, 1000)
    }
    timer()
}

function pausarCronometro() {
    clearTimeout(t)
}

function resetearCronometro() {
    p.textContent = "30:00";
    segundos = 00; minutos = 30;
}