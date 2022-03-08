var quebrada = false
var img = document.getElementById('imagem')

function ligar(){
    if (quebrada == false){
        img.src = './Imagens/LampAcesa.jpg'
    }
}

function desligar(){
    if(quebrada == false){
        img.src = 'Imagens/LampDesligada.jpg'
    }
}

function quebrar(){
    quebrada = true
    img.src = 'Imagens/LampQuebrada.jpg'
}