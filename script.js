function contar() {
    var res = document.querySelector('p#result')
    var tinicio = document.querySelector('input#txtinicio')
    var tfim = document.querySelector('input#txtfim')
    var tpulo = document.querySelector('input#txtpulo')
    
    if (tinicio.value.length == 0 || tfim.value.length == 0 || tpulo.value.length == 0) {
        res.innerHTML = `Impossível contar, faltam informações. \u{1FAE0}`
        //window.alert(`[ERRO] Faltam dados!`)
    } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(tinicio.value)
        var f = Number(tfim.value)
        var p = Number(tpulo.value)

        if (p <= 0) {
            window.alert(`[ERRO] Intervalo inválido! Vamos calcular pulando 1 número.`)
            p = 1
        }
        
        if (i < f) {
            // Contagem crescente
            for (c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1F914} ` // no site unicode.org/emoji tem os códigos de todos os emojis, é só tirar o "U+" e colocar o "\u{}"
            }
        } else {
            // Contagem regressiva
            for (c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F914}` 
            }
        }
                res.innerHTML += `<br>FIM \u{1F973}`
    }
    
    /* Essa foi minha tentativa de fazer sozinha... :(
    for (var resultado = inicio ; result<=fim ; result=pulo+inicio) {
        res.innerHTML = `${resultado}`
    }*/
}