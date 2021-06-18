import {getResourse} from "./services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // cards.forEach(item => {
    //     item.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(item => {
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });

    //     btn.remove();
    // });

    btn.addEventListener('click', function() {
        getResourse('http://localhost:3000/styles')
            .then(res => createCard(res))
            .catch(() => showErrorMessage());

        this.remove();
    });

    const showErrorMessage = () => {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Что-то пошло не так...';
        errorMessage.style.textAlign = 'center';
        document.querySelector(wrapper).append(errorMessage);
    };

    const createCard = (result) => {
        result.forEach(({src, title, link}) => {
            const card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            document.querySelector(wrapper).append(card);
        });
    };
};

export default showMoreStyles;