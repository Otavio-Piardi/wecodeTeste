const menuTamanho = '269px'

document.querySelector('#btnAbrirMenuLateral').addEventListener('click', e => {
    document.querySelector('#menuLateral').style.marginLeft = 0;
})

document.querySelector('#btnFecharMenuLateral').addEventListener('click', e => {
    document.querySelector('#menuLateral').style.marginLeft = `-${menuTamanho}`;
})