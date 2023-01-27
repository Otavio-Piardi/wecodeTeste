const menuTamanho = '269px'

let abrir = true

document.querySelector('#btnAbrirMenuLateral').addEventListener('click', e => {
    abrir = !abrir
    menuSwitch()
})

document.querySelector('#btnFecharMenuLateral').addEventListener('click', e => {
    abrir = false
    menuSwitch()
})

function menuSwitch() {
    if(abrir){
        document.querySelector('#menuLateral').style.marginLeft = 0
        return
    } 
    document.querySelector('#menuLateral').style.marginLeft = `-${menuTamanho}`;
}

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