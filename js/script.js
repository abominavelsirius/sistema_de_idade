function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')

//  var res = document.getElementById('res')
    var res = document.querySelector('div#res') // mesma coisa só que mais moderno

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) { // se o cara não digitou o ano ou se o formularioAno for maior qeu o ano atual
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        // res.innerHTML = `Idade calculada: ${idade}`  // vai conferir se a idade tá sendo calculada certinho com o ano ou não
        var gênero = ''
        var img = document.createElement('img') // ele vai criar uma tag img
        img.setAttribute('id', 'foto') // coloca um id pra img, tudo através do js
        // e nós vamos carregar a imagem, de acordo com o sexo e a idade


        if (fsex[0].checked) { // se oque tiver marcado for o fsex 0, é sinal que é masculino
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
            } else if (idade >= 10 && idade < 21) {

            }
            
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.getElementsByClassName.textAling = 'center' // text-align pelo js
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}