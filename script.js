const menu = document.getElementById('menu')
const sidebar = document.querySelector('#sidebar')
const main = document.querySelector('main')
const logo = document.querySelector('main img')

const footerImg = document.querySelector('#photo')
const footerTexto = document.querySelector('footer span')
const logOut = document.querySelector('#logOut')

// Usando um Array.from(), pois getElementsByClassName retorna um objeto do tipo array e não um array 
const navItens = Array.from(document.getElementsByClassName('navItem'));

const navSpan = Array.from(document.getElementsByClassName('navSpan'));


menu.addEventListener('click', openSideBar)

var isSidebarOpen = true
var isSidebarClose = false

function openSideBar() {

    if (isSidebarOpen === true) {

        sidebar.style.width = '78px'

        // efeito no botão de menu
        logo.style.webkitAnimationName = 'imgHidden'
        menu.style.position = 'absolute'
        main.style.margin = '24px auto 26px auto'

        // efeito dos elementos nav no sidebar
        navItens.forEach(elemento => {
            elemento.style.webkitAnimationName = 'slidein';
        });

        navSpan.forEach(elemento => {
            elemento.style.webkitAnimationName = 'spanColor';
        });

        // efeito do footer 
        footerImg.style.webkitAnimationName = 'footerEfeito';
        footerTexto.style.webkitAnimationName = 'footerEfeito';
        logOut.style.position = 'absolute'
        logOut.style.padding = '13px'


        isSidebarOpen = false
    } else {
        sidebar.style.width = '250px'

        // retirando o efeito no botão de menu
        main.style.margin = '24px 1px 26px 16px'
        logo.style.webkitAnimationName = 'none'
        menu.style.position = 'relative'

        // retirando o efeito dos elementos nav no sidebar
        navItens.forEach(elemento => {
            elemento.style.webkitAnimationName = 'none';
        });

        navSpan.forEach(elemento => {
            elemento.style.webkitAnimationName = 'none';
        });

        //  retirando o efeito do footer 
        footerImg.style.webkitAnimationName = 'none';
        footerTexto.style.webkitAnimationName = 'none';
        logOut.style.position = 'relative'
        logOut.style.padding = '0'

        isSidebarOpen = true
    }

}