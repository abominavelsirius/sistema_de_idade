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
            if (idade >= 0 && idade <= 0 && idade <= 0) {
                // bebe1
                img.setAttribute('src', './img/homem-bebe1.png')
            } else if (idade >= 1 && idade <= 1) {
                // bebe 2
                img.setAttribute('src', './img/homem-bebe2.png')
            } else if (idade >= 2 && idade < 8) {
                // bebe 3 
                img.setAttribute('src', './img/homem-bebe3.png')
            } else if (idade < 13) {
                // criança
                img.setAttribute('src', './img/homem-crianca.png')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src', './img/homem-adolescente.png')
            }  else if (idade < 24) {
                // jovem adulto
                img.setAttribute('src', './img/homem-jovem-adulto.png')
            } else if (idade < 35) {
                // adulto1
                img.setAttribute('src', './img/homem-adulto1.png')
            } else if (idade < 48) {
                // adulto2
                img.setAttribute('src', './img/homem-adulto2.png')
            } else if (idade < 68) {
                // velho1
                img.setAttribute('src', './img/homem-velho1.png')
            } else if (idade < 122){ // se não for nem entre 0 e 68 é esse
                //velho 2
                img.setAttribute('src', './img/homem-velho2.png')
            } else {
                //morto
                img.setAttribute('src', './img/anjo.png')
            }


        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade <= 0) {
                // bebe1
                img.setAttribute('src', './img/mulher-bebe1.png')
            } else if (idade >= 1 && idade <= 1) {
                // bebe 2
                img.setAttribute('src', './img/mulher-bebe2.png')
            } else if (idade >= 2 && idade < 8) {
                // bebe 3 
                img.setAttribute('src', './img/mulher-bebe3.png')
            } else if (idade < 13) {
                // criança
                img.setAttribute('src', './img/mulher-crianca.png')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src', './img/mulher-adolescente.png')
            }  else if (idade < 24) {
                // jovem adulto
                img.setAttribute('src', './img/mulher-jovem-adulta.png')
            } else if (idade < 35) {
                // adulto1
                img.setAttribute('src', './img/mulher-adulta1.png')
            } else if (idade < 52) {
                // adulto2
                img.setAttribute('src', './img/mulher-adulta2.png')
            } else if (idade < 68) {
                // velho1
                img.setAttribute('src', './img/mulher-velha1.png')
            } else if (idade < 122){ // se não for nem entre 0 e 68 é esse
                //velho 2
                img.setAttribute('src', './img/mulher-velha2.png')
            } else {
                //morto
                img.setAttribute('src', './img/anjo.png')
            }
        }

        res.getElementsByClassName.textAling = 'center' // text-align pelo js
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // adicina um elemento, que no caso é o img 
    }
}