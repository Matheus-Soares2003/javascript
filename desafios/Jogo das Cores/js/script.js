//Funções
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function verificar(quadrado){
    var resultado = document.getElementById("resultado")
    if (quadrado.style.background === display.innerHTML){
        acertou()
    } else {
        resultado.innerHTML = "ERROU! Tente Novamente"
        resultado.style.visibility = "visible"
        quadrado.style.background = 'transparent'
        quadrado.style.cursor = "default"
    }
}


function gerarCor(){
    botao.innerHTML = "NOVAS CORES"
    resultado.style.visibility = "hidden"
    menu.style.background = "rgb(0, 175, 175)"
    menu.style.transition = "200ms"
    gerarResposta()
}


function gerarResposta(){
    var resposta =  `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
    display.innerHTML = resposta
    for (var i = 0; i <= 5; i++) {
        square[i].style.background = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
    }
    square[getRandomInt(0, 5)].style.background = resposta
}


function acertou(){
    resultado.style.visibility = 'visible'
    resultado.innerHTML = 'ACERTOU!'
    for (var i = 0; i <= 5; i++) {
        square[i].style.background = display.innerHTML
        square[i].style.cursor = "pointer"
    }
    botao.innerHTML = "PLAY AGAIN"
    menu.style.background = display.innerHTML
}

var menu = document.getElementById("menu")
var resultado = document.getElementById("resultado")
var square = document.querySelectorAll(".cor")
var display = document.getElementById("display")
var botao = document.getElementById("botao")



