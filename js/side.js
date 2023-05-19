let side = document.querySelector('.sidebar');
let home_header = document.querySelector('.home');
let body_up = document.querySelector('.body');

let side_menu = document.querySelector('.side-menu-cover')

const sideToggle = () => {
    if (screen.width > 1499) {
        side.classList.toggle('side-toggle')
        home_header.classList.toggle('home-toggle')
        body_up.classList.toggle('body-toggle')
    } else {
        side_menu.classList.add('side-menu-show')
    }
}

const hideSideMenu = () => {
    side_menu.classList.remove('side-menu-show')
}

