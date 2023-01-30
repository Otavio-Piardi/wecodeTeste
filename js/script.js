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
    if(abrirMenu){
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
    if(abrirMenuPesquisa){
        document.querySelector('#menu-pesquisa').style.display = 'block'
        return
    } 
    document.querySelector('#menu-pesquisa').style.display = 'none'
}

const linkGavetaDepartamento2 = document.getElementById('link-gaveta-departamento-2')
const linkGavetaDepartamento3 = document.getElementById('link-gaveta-departamento-3')
const linkGavetaDepartamento4 = document.getElementById('link-gaveta-departamento-4')
const linkGavetaDepartamento5 = document.getElementById('link-gaveta-departamento-5')
const linkGavetaDepartamento6 = document.getElementById('link-gaveta-departamento-6')
const linkGavetaDepartamento7 = document.getElementById('link-gaveta-departamento-7')

//uma função para cada?? :/
function toggleGavetaDepartamento2(){
    const ulGavetaDepartamento2 = document.getElementById('elementos-gaveta-departamento-2')
    const liParteMenuDepartamento2 = document.getElementById('departamento-2')
    ulGavetaDepartamento2.classList.toggle('ul-ativo')
    liParteMenuDepartamento2.classList.toggle('li-ativo')
    linkGavetaDepartamento2.classList.toggle('link-ativo')
}

function toggleGavetaDepartamento3(){
    const ulGavetaDepartamento3 = document.getElementById('elementos-gaveta-departamento-3')
    const liParteMenuDepartamento3 = document.getElementById('departamento-3')
    ulGavetaDepartamento3.classList.toggle('ul-ativo')
    liParteMenuDepartamento3.classList.toggle('li-ativo')
    linkGavetaDepartamento3.classList.toggle('link-ativo')
}
function toggleGavetaDepartamento4(){
    const ulGavetaDepartamento4 = document.getElementById('elementos-gaveta-departamento-4')
    const liParteMenuDepartamento4 = document.getElementById('departamento-4')
    ulGavetaDepartamento4.classList.toggle('ul-ativo')
    liParteMenuDepartamento4.classList.toggle('li-ativo')
    linkGavetaDepartamento4.classList.toggle('link-ativo')
}

function toggleGavetaDepartamento5(){
    const ulGavetaDepartamento5 = document.getElementById('elementos-gaveta-departamento-5')
    const liParteMenuDepartamento5 = document.getElementById('departamento-5')
    ulGavetaDepartamento5.classList.toggle('ul-ativo')
    liParteMenuDepartamento5.classList.toggle('li-ativo')
    linkGavetaDepartamento5.classList.toggle('link-ativo')
}

function toggleGavetaDepartamento6(){
    const ulGavetaDepartamento6 = document.getElementById('elementos-gaveta-departamento-6')
    const liParteMenuDepartamento6 = document.getElementById('departamento-6')
    ulGavetaDepartamento6.classList.toggle('ul-ativo')
    liParteMenuDepartamento6.classList.toggle('li-ativo')
    linkGavetaDepartamento6.classList.toggle('link-ativo')
}

function toggleGavetaDepartamento7(){
    const ulGavetaDepartamento7 = document.getElementById('elementos-gaveta-departamento-7')
    const liParteMenuDepartamento7 = document.getElementById('departamento-7')
    ulGavetaDepartamento7.classList.toggle('ul-ativo')
    liParteMenuDepartamento7.classList.toggle('li-ativo')
    linkGavetaDepartamento7.classList.toggle('link-ativo')
}

linkGavetaDepartamento2.addEventListener('click', toggleGavetaDepartamento2)
linkGavetaDepartamento3.addEventListener('click', toggleGavetaDepartamento3)
linkGavetaDepartamento4.addEventListener('click', toggleGavetaDepartamento4)
linkGavetaDepartamento5.addEventListener('click', toggleGavetaDepartamento5)
linkGavetaDepartamento6.addEventListener('click', toggleGavetaDepartamento6)
linkGavetaDepartamento7.addEventListener('click', toggleGavetaDepartamento7)

//Menu de Níveis footer
const linkGavetaSobre = document.getElementById('link-gaveta-sobre')
const linkGavetaConta = document.getElementById('link-gaveta-conta')
const linkGavetaPoliticas = document.getElementById('link-gaveta-politicas')
const linkGavetaContato = document.getElementById('link-gaveta-contato')

function toggleGavetaSobre(){
    const ulGavetaSobre = document.getElementById('elementos-gaveta-sobre')
    const pGavetaSobre = document.getElementById('p-mais-menos-sobre')
    pGavetaSobre.innerHTML = "-"
    ulGavetaSobre.classList.toggle('ul-ativo')
    linkGavetaSobre.classList.toggle('link-ativo-footer')
    if((pGavetaSobre.innerHTML = "+") && ulGavetaSobre.classList.contains('ul-ativo')) {
        pGavetaSobre.innerHTML = "-"
    }
}

function toggleGavetaConta(){
    const ulGavetaConta = document.getElementById('elementos-gaveta-conta')
    const pGavetaConta = document.getElementById('p-mais-menos-conta')
    pGavetaConta.innerHTML = "-"
    ulGavetaConta.classList.toggle('ul-ativo')
    linkGavetaConta.classList.toggle('link-ativo-footer')
    if((pGavetaConta.innerHTML = "+") && ulGavetaConta.classList.contains('ul-ativo')) {
        pGavetaConta.innerHTML = "-"
    }
}

function toggleGavetaPoliticas(){
    const ulGavetaPoliticas = document.getElementById('elementos-gaveta-politicas')
    const pGavetaPoliticas = document.getElementById('p-mais-menos-politicas')
    pGavetaPoliticas.innerHTML = "-"
    ulGavetaPoliticas.classList.toggle('ul-ativo')
    linkGavetaPoliticas.classList.toggle('link-ativo-footer')
    if((pGavetaPoliticas.innerHTML = "+") && ulGavetaPoliticas.classList.contains('ul-ativo')) {
        pGavetaPoliticas.innerHTML = "-"
    }
}

function toggleGavetaContato(){
    const ulGavetaContato = document.getElementById('elementos-gaveta-contato')
    const pGavetaContato = document.getElementById('p-mais-menos-contato')
    pGavetaContato.innerHTML = "-"
    ulGavetaContato.classList.toggle('ul-ativo')
    linkGavetaContato.classList.toggle('link-ativo-footer')
    if((pGavetaContato.innerHTML = "+") && ulGavetaContato.classList.contains('ul-ativo')) {
        pGavetaContato.innerHTML = "-"
    }
}

linkGavetaSobre.addEventListener('click', toggleGavetaSobre)
linkGavetaConta.addEventListener('click', toggleGavetaConta)
linkGavetaPoliticas.addEventListener('click', toggleGavetaPoliticas)
linkGavetaContato.addEventListener('click', toggleGavetaContato)