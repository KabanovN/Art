const mask = (selector) => {
    // установка курсора в нужную позицию строки
    // const setCursorPosition = (pos, elem) => {
    //     elem.focus();
    //     elem.setElementRange(pos, pos);

    //     if (elem.setSelectionRange) {
    //         elem.setSelectionRange(pos, pos);
    //     } else if (elem.createTextRange) {
    //         let range = elem.createTextRange();

    //         range.collapse(true);
    //         range.moveEnd('character', pos);
    //         range.moveStart('character', pos);
    //         range.select();
    //     }
    // };

    function createMask(event) {
        let pattern = '+7 (___) ___ __ __',
            i = 0,
            def = pattern.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');
        
        if (def.length >= val.length) {
            val = def;
        }

        this.value = pattern.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length === 2) {
                this.value = '';
            }
        } 
        // else {
        //     setCursorPosition(this.value.length, this);
        // }
    }

    const inputs = document.querySelectorAll(selector);

    inputs.forEach(item => {
        // item.addEventListener('click', createMask);
        item.addEventListener('input', createMask);
        item.addEventListener('focus', createMask);
        item.addEventListener('blur', createMask);
    });
};

export default mask;