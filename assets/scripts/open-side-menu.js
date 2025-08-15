function toggleMobileMenu() {
    const menuList = document.getElementById('menuList');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;
    
    menuList.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    if (menuList.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const menuList = document.getElementById('menuList');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;
    
    menuList.classList.remove('active');
    menuOverlay.classList.remove('active');
    body.style.overflow = '';
}