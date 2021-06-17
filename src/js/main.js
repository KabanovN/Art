import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import checkInputText from './modules/checkInputText';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    sliders('.feedback-slider-item', '', '.main-next-btn', '.main-prev-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    checkInputText('[name = "name"]');
    checkInputText('[name = "message"]');
    mask('[name = "phone"]');
    showMoreStyles('.button-styles', '#styles .row');
});