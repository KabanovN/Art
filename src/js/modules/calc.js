const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, totalSelector, state) => {
    const size = document.querySelector(sizeSelector),
          material = document.querySelector(materialSelector),
          options = document.querySelector(optionsSelector),
          promocode = document.querySelector(promocodeSelector),
          total = document.querySelector(totalSelector);

    function calcSum() {
        let prop = this.getAttribute('id');
        state[prop] = this.value;

        let sum = Math.round((+size.value) * (+material.value) + (+options.value));

        if (size.value == 0 || material.value == 0) {
            total.style.color = 'red';
            total.textContent = 'Выберите размер и материал картины';
        } else if (promocode.value === 'IWANTPOPART') {
            total.textContent = Math.round(sum * 0.7);
            total.style.color = '';
        } else {
            total.textContent = sum;
            total.style.color = '';
        }

        const price = 'price';
        state[price] = sum;
    }

    size.addEventListener('change', calcSum);
    material.addEventListener('change', calcSum);
    options.addEventListener('change', calcSum);
    promocode.addEventListener('input', calcSum);
};

export default calc;