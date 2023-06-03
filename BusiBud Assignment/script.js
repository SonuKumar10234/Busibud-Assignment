var menuButton = document.querySelector('.hover');
menuButton.addEventListener('click', () => {
    var menuItems = document.getElementById('menu-items');

    if (menuItems.className.includes('opened-menu')) {
        menuItems.classList.remove('opened-menu');
    }
    else {
        menuItems.classList.add('opened-menu');
    }
})