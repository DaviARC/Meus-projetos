// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5

let inputHomens = document.getElementById("homens")
let inputCriancas = document.getElementById("crianças")
let inputDuracao = document.getElementById("duração")
let resultado = document.getElementById("resultado")

function Calcular () {

    homens = inputHomens.value
    criancas = inputCriancas.value
    duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * homens  + (carnePP(duracao) / 2 * criancas)
    let qtdTotalCerveja = cervejPP(duracao) * homens
    let qtdTotalBebidas = bebidaPP(duracao) * homens + (bebidaPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's 2l de Bebidas</p>`
}

function carnePP(duracao) {

    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejPP(duracao) {
    if (duracao >= 6){
        return 2000
    } else {
        return 1200
    }
}
function bebidaPP(duracao) {
    if (duracao >= 6){
        return 1500
    } else {
        return 1000        
    }
}
