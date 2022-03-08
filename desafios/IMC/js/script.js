var nome = document.getElementById('nome')
var talt = document.getElementById('txtaltura')
var tpeso = document.getElementById('txtpeso')
var res = document.getElementById('res')


function calcular(){
    var altura = Number(talt.value)
    var peso = Number(tpeso.value)
    var IMC = (peso / (altura ** 2))
    IMC = IMC.toFixed(2)
    if (IMC <= 18.5){
        res.innerHTML = `<p>${nome.value}, seu IMC é igual a ${IMC} e você está com <strong>Baixo Peso</strong>.</p>`
    } else if (IMC <= 24.9){
        res.innerHTML = `<p>${nome.value}, seu IMC é igual a ${IMC} e você está com <strong>Peso Normal</strong>`
    } else if (IMC <= 29.9){
        res.innerHTML = `<p>${nome.value}, seu IMC é igual a ${IMC} e você está com <strong>Sobrepeso</strong></p>`
    } else if (IMC <= 34.9){
        res.innerHTML = `<p>${nome.value}, seu IMC é igual a ${IMC} e você está com <strong>Obesidade Grau I</strong></p>`
    } else if (IMC <= 39.9){
        res.innerHTML = `<p>${nome.value}, seu IMC é igual a ${IMC} e você está com <strong>Obesidade Grau II</strong></p>`
    } else {
        res.innerHTML = `<p>${nome.value}, seu IMC é igual a ${IMC} e você está com <strong>Obesidade Grau III</strong></p>`
    }
}


