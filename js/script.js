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

// -----------------------------------------------------------------------------------------

$(document).ready(function ($) {
    $('.parte-menu ul').addClass('invisivel');
    $('.parte-menu').click(function () {
        $(this).toggleClass('parte-menu-ativo')
        $(this).children('ul').toggleClass('invisivel')
        $(this).siblings().children('ul').hide('fast')
        
        // $(this).children('ul').slideToggle('fast')
        // $(this).toggleClass('parte-menu-ativo')
        // if($(this).siblings().children().hasClass('hidden')){
            //fechado = removeClass('parte-menu-ativo')
        // }
    });
});

// -----------------------------------------------------------------------------------------

$('#btnEnviarNewsletter').click(enviarDadosNewsletter)

function enviarDadosNewsletter() {
    const nome = $('#nomeNewsletter').val()
    const tel = $('#telNewsletter').val()
    const email = $('#emailNewsletter').val()

    if (nome == "" || email == "" || tel == "") {
        $('#resultadoNewsletterInvalido').removeClass('invisivel').addClass('visivel')
        console.log('erro')
        if ($('#resultadoNewsletterValido').hasClass('visivel')) {
            $('#resultadoNewsletterValido').removeClass('visivel').addClass('invisivel')
        }
    } else {
        $('#resultadoNewsletterValido').removeClass('invisivel').addClass('visivel')
        $('#mensagemNewsletterResultado').text("Dados enviados! \n")
        $('#nomeNewsletterResultado').text("Nome: " + nome)
        $('#telNewsletterResultado').text("Telefone: " + tel)
        $('#emailNewsletterResultado').text("E-mail: " + email)
        if ($('#resultadoNewsletterInvalido').hasClass('visivel')) {
            $('#resultadoNewsletterInvalido').removeClass('visivel').addClass('invisivel')
        }
    }
}