var agora = new Date()
var hora = agora.getHours()
var corpo = document.body
var txthorario = document.querySelector('div#horas')

txthorario.innerHTML = `<p>Agora são ${hora} horas<p>`

if (hora < 12){
    corpo.style.background = '#6dd1d4de'
} else if (hora < 18){
    corpo.style.backgroundColor = '#dd401c'
} else {
    corpo.style.background = "blue"
}
