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
let elementosGavetaSobre = document.getElementById('elementos-gaveta-sobre')
let linkGavetaSobreFechado = document.getElementById('link-gaveta-sobre-fechado')
let linkGavetaSobreAberto = document.getElementById('link-gaveta-sobre-aberto')

let elementosGavetaConta = document.getElementById('elementos-gaveta-conta')
let linkGavetaContaFechado = document.getElementById('link-gaveta-conta-fechado')
let linkGavetaContaAberto = document.getElementById('link-gaveta-conta-aberto')

let elementosGavetaPoliticas = document.getElementById('elementos-gaveta-politicas')
let linkGavetaPoliticasFechado = document.getElementById('link-gaveta-politicas-fechado')
let linkGavetaPoliticasAberto = document.getElementById('link-gaveta-politicas-aberto')

let elementosGavetaContato = document.getElementById('elementos-gaveta-contato')
let linkGavetaContatoFechado = document.getElementById('link-gaveta-contato-fechado')
let linkGavetaContatoAberto = document.getElementById('link-gaveta-contato-aberto')

elementosGavetaSobre.classList.add('invisivel')
linkGavetaSobreFechado.classList.add('visivel-link')
linkGavetaSobreAberto.classList.add('invisivel')

elementosGavetaConta.classList.add('invisivel')
linkGavetaContaFechado.classList.add('visivel-link')
linkGavetaContaAberto.classList.add('invisivel')

elementosGavetaPoliticas.classList.add('invisivel')
linkGavetaPoliticasFechado.classList.add('visivel-link')
linkGavetaPoliticasAberto.classList.add('invisivel')

elementosGavetaContato.classList.add('invisivel')
linkGavetaContatoFechado.classList.add('visivel-link')
linkGavetaContatoAberto.classList.add('invisivel')

linkGavetaSobreFechado.addEventListener('click', e => {
    elementosGavetaSobre.classList.replace('invisivel', 'visivel-ul')
    linkGavetaSobreFechado.classList.replace('visivel-link', 'invisivel')
    linkGavetaSobreAberto.classList.replace('invisivel', 'visivel-link')
})

linkGavetaSobreAberto.addEventListener('click', e => {
    elementosGavetaSobre.classList.replace('visivel-ul', 'invisivel')
    linkGavetaSobreFechado.classList.replace('invisivel', 'visivel-link')
    linkGavetaSobreAberto.classList.replace('visivel-link', 'invisivel')
})

linkGavetaContaFechado.addEventListener('click', e => {
    elementosGavetaConta.classList.replace('invisivel', 'visivel-ul')
    linkGavetaContaFechado.classList.replace('visivel-link', 'invisivel')
    linkGavetaContaAberto.classList.replace('invisivel', 'visivel-link')
})

linkGavetaContaAberto.addEventListener('click', e => {
    elementosGavetaConta.classList.replace('visivel-ul', 'invisivel')
    linkGavetaContaFechado.classList.replace('invisivel', 'visivel-link')
    linkGavetaContaAberto.classList.replace('visivel-link', 'invisivel')
})

linkGavetaPoliticasFechado.addEventListener('click', e => {
    elementosGavetaPoliticas.classList.replace('invisivel', 'visivel-ul')
    linkGavetaPoliticasFechado.classList.replace('visivel-link', 'invisivel')
    linkGavetaPoliticasAberto.classList.replace('invisivel', 'visivel-link')
})

linkGavetaPoliticasAberto.addEventListener('click', e => {
    elementosGavetaPoliticas.classList.replace('visivel-ul', 'invisivel')
    linkGavetaPoliticasFechado.classList.replace('invisivel', 'visivel-link')
    linkGavetaPoliticasAberto.classList.replace('visivel-link', 'invisivel')
})

linkGavetaContatoFechado.addEventListener('click', e => {
    elementosGavetaContato.classList.replace('invisivel', 'visivel-ul')
    linkGavetaContatoFechado.classList.replace('visivel-link', 'invisivel')
    linkGavetaContatoAberto.classList.replace('invisivel', 'visivel-link')
})

linkGavetaContatoAberto.addEventListener('click', e => {
    elementosGavetaContato.classList.replace('visivel-ul', 'invisivel')
    linkGavetaContatoFechado.classList.replace('invisivel', 'visivel-link')
    linkGavetaContatoAberto.classList.replace('visivel-link', 'invisivel')
})