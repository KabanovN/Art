const modals = () => {
    let triggerPressed = false; //переменная для отслеживания нажатия триггера

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }

                triggerPressed = true;

                // переменная для удаления триггера при true - для кнопки gift
                if (destroy) {
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn'); //добавляем анимацию
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; //фикс от прокручивания при открытом попап
                document.body.style.marginRight = `${scroll}px`; //отступ от "скачка" окна при закрытии попапа
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = ''; 
            document.body.style.marginRight = '0px'; //отступ от "скачка" окна при закрытии попап
        });

        modal.addEventListener('click', (evt) => {
            if (evt.target && evt.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        });        
    }

    function openModalByTime(selector, time) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }, time);
    }

    // функция расчета отступа появляющегося скролла страницы
    function calcScroll() {
        const div = document.createElement('div');
        div.style.visibility = 'hidden';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    // функция для открытия попап при скролле страницы до конца
    function openModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!triggerPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }
    
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openModalByScroll('.fixed-gift');
    openModalByTime('.popup-consultation', 60000);
};

export default modals;