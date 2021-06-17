const sliders = (slidesSelector, direction, next, prev) => {
    let slideIndex = 1,
        paused = false; //переменная для установки паузы при наведении
    const slides = document.querySelectorAll(slidesSelector);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated');
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function changeSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevButton = document.querySelector(prev),
              nextButton = document.querySelector(next);

        prevButton.addEventListener('click', () => {
            changeSlides(-1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });

        nextButton.addEventListener('click', () => {
            changeSlides(1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e){}

    function activateAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(function(){
                changeSlides(1);
                slides[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function(){
                changeSlides(1);
                slides[slideIndex - 1].classList.remove('slideInRight');
                slides[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    activateAnimation();

    // при наведении родителя любого слайда - пауза
    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    // при отводе курсора - продолжении анимации
    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;