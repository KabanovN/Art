const burger = (burgerSelector, menuSelector) => {
    const burgerItem = document.querySelector(burgerSelector),
          menu = document.querySelector(menuSelector);
    
    menu.style.display = 'none';

    burgerItem.addEventListener('click', () => {
        if (menu.style.display === 'none' && window.screen.availWidth <= 992) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menu.style.display = 'none';
        }
    });
};

export default burger;