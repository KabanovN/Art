const pictureSizes = (blocksSelector) => {
    const blocks = document.querySelectorAll(blocksSelector);

    function showImg(block) {
        const img = block.querySelector('img'),
              p = block.querySelectorAll('p');

        img.src = `${img.src.slice(0, -4)}-1.png`;

        p.forEach(item => {
            if (!item.classList.contains('sizes-hit')) {
                item.style.display = 'none';
            }
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img'),
              p = block.querySelectorAll('p');

        img.src = `${img.src.slice(0, -6)}.png`;

        p.forEach(item => {
            item.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });

        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSizes;

// логика:
// 1. создаю функцию по отображению изображения в блоке
// 2. созадю функцию по скрытию изображения
// 3. создаю обработчик событий mouseover и mouseout с использованием п.1/п.2