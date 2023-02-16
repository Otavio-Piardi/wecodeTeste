const menuTamanho = '269px'

let abrirMenu = true

document.querySelector('#btn-abrir-menu-lateral').addEventListener('click', e => {
    abrirMenu = !abrirMenu
    menuSwitch()
})

document.querySelector('#btn-fechar-menu-lateral').addEventListener('click', e => {
    abrirMenu = false
    menuSwitch()
})

function menuSwitch() {
    if (abrirMenu) {
        document.querySelector('#menu-lateral').style.marginLeft = 0
        return
    }
    document.querySelector('#menu-lateral').style.marginLeft = `-${menuTamanho}`
}

let abrirMenuPesquisa = true

document.querySelector('#btn-abrir-menu-pesquisa').addEventListener('click', e => {
    abrirMenuPesquisa = !abrirMenuPesquisa
    menuPesquisaSwitch()
})

document.querySelector('#btn-fechar-menu-pesquisa').addEventListener('click', e => {
    abrirMenuPesquisa = false
    menuPesquisaSwitch()
})

function menuPesquisaSwitch() {
    if (abrirMenuPesquisa) {
        document.querySelector('#menu-pesquisa').style.display = 'block'
        return
    }
    document.querySelector('#menu-pesquisa').style.display = 'none'
}

var dadosEnviados = false

document.querySelector('#btnEnviarNewsletter').addEventListener('click', function enviarDadosNewsletter() {
    const nome = document.getElementById('nomeNewsletter').value;
    const tel = document.getElementById('telNewsletter').value;
    const email = document.getElementById('emailNewsletter').value;

    if (!dadosEnviados) {
        document.getElementById('mensagemNewsletterResultado').append('Dados enviados: \n')
        document.getElementById('nomeNewsletterResultado').append("Nome: " + nome)
        document.getElementById('telNewsletterResultado').append("Telefone: " + tel)
        document.getElementById('emailNewsletterResultado').append("E-mail: " + email)
        dadosEnviados = true
    } else {
        console.log('nao foi po')
    }

})

document.querySelector('.link-gaveta-departamento').addEventListener('click', function abrirMenuNivel () {
    $(this.style.display = "block")
})