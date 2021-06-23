const filter = () => {
    const menu = document.querySelector('#portfolio .portfolio-menu'),
          menuItems = menu.querySelectorAll('li'),
          wrapper = document.querySelector('#portfolio .portfolio-wrapper'),
          picsAll = wrapper.querySelectorAll('.all'),
          noPics = document.querySelector('.portfolio-no');

    // фильтрация - сначала скрываем всё, затем отражаем необходимое и центруем
    function filterPics(pics) {
        picsAll.forEach(pic => {
            pic.style.display = 'none';
            pic.classList.remove('animated', 'fadeIn');
        });

        noPics.style.display = 'none';
        noPics.classList.remove('animated', 'fadeIn');

        if (pics) {
            pics.forEach(pic => {
                pic.style.display = 'block';
                pic.classList.add('animated', 'fadeIn');
            });
        } else {
            noPics.style.display = 'block';
            noPics.classList.add('animated', 'fadeIn'); 
        }

        wrapper.style.alignItems = 'center';
        wrapper.style.justifyContent = 'center';
    }

    // обработчик при клике
    menu.addEventListener('click', (evt) => {
        if (evt.target && evt.target.tagName === 'LI') {
            let currentClass = evt.target.getAttribute('class').split(' ')[0];
            if (currentClass === 'grandmother' || currentClass === 'granddad') {
                filterPics();
            } else {
                let contentItems = wrapper.querySelectorAll(`.${currentClass}`);
                filterPics(contentItems);
            }

            menuItems.forEach(item => {
                item.classList.remove('active');
                evt.target.classList.add('active');
            });
        }      
    });
};

export default filter;