var sec = 0
var min = 0
var cronometro = document.getElementById("cronometro")
var intervalo;


function comecar(){

    intervalo = setInterval(() => {
        sec++
        if (sec == 60){
            min++
            sec = 0
        }

       if (sec < 10 && min < 10){
            cronometro.innerHTML = `0${min}:0${sec}`
       } else if (sec >= 10 && min < 10){
            cronometro.innerHTML = `0${min}:${sec}`
       } else if (sec < 10 && min >= 10){
            cronometro.innerHTML = `${min}:0${sec}`
       } else {
            cronometro.innerHTML = `${min}:${sec}`
       }    


    }, 1000)

}

function parar(){
    clearInterval(intervalo)
}

function resetar(){
    clearInterval(intervalo)
    cronometro.innerHTML = `00:00`
    min = 0
    sec = 0
}

document.getElementById("comeco").addEventListener("click", comecar)
document.getElementById("parar").addEventListener("click", parar)
document.getElementById("reset").addEventListener("click", resetar)