function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 6
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#323B4A'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#C42B00'
    } else {
        //boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#4F3958'
    }
}