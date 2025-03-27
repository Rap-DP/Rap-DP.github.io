function showMenu(menuId) {
    document.getElementById('menuOptions').style.display = 'none'; 

    let menuContainers = document.querySelectorAll('.menu-container');
    menuContainers.forEach(container => container.style.display = 'none');

    let selectedMenu = document.getElementById(menuId);
    if (selectedMenu) {
        selectedMenu.style.display = 'flex';
    }
}

function showMainMenu() {
    document.getElementById('menuOptions').style.display = 'flex'; 

    let menuContainers = document.querySelectorAll('.menu-container');
    menuContainers.forEach(container => container.style.display = 'none');
}

