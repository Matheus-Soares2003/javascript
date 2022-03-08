function calcular(){
    var txtini = document.querySelector('#txtinicio')
    var txtf = document.querySelector('#txtfim')
    var txtp = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    
    if (txtini.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = "Contando: "
        var inicio = Number(txtini.value)
        var fim = Number(txtf.value)
        var passo = Number(txtp.value)
        
        if (passo <= 0){
            window.alert("Passo inválido. Considerando passo 1")
            passo = 1
        }

        if (inicio < fim){
            for (var c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if (fim < inicio){
            for (var c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
        
    }
}

