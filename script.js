document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.hamburger');
    const menu = document.querySelector('#site-menu');

    if (window.lucide) {
        window.lucide.createIcons();
    }

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'ナビゲーションを開く' : 'ナビゲーションを閉じる');
            menu.hidden = isOpen;
        });
    }
});
