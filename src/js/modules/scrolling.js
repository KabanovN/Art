const scrolling = (upSelector) => {
    const upElement = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElement.classList.add('animated', 'fadeIn');
            upElement.classList.remove('fadeOut');
        } else {
            upElement.classList.remove('fadeIn');
            upElement.classList.add('fadeOut');
        }
    });

    // RequestAnimationFrame
    // находим все ссылки, начинающиеся с '#' и устанавливаем скорость скролла
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.25;

    
    links.forEach(link => {
        link.addEventListener('click', function(evt) {
            evt.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                topBlock = document.querySelector(hash).getBoundingClientRect().top,
                startPos = null;

            requestAnimationFrame(step);

            function step(time) {
                if (startPos === null) {
                    startPos = time;
                }

                let progress = time - startPos,
                    r = (topBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + topBlock) : Math.min(widthTop + progress/speed, widthTop + topBlock));
                
                document.documentElement.scrollTo(0, r);

                if (r !== widthTop + topBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};

export default scrolling;