import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import checkInputText from './modules/checkInputText';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSizes from './modules/picture';
import accordion from './modules/accordion';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let priceState = {};

    modals();
    sliders('.feedback-slider-item', '', '.main-next-btn', '.main-prev-btn');
    sliders('.main-slider-item', 'vertical');
    forms(priceState);
    checkInputText('[name = "name"]');
    checkInputText('[name = "message"]');
    mask('[name = "phone"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', priceState);
    filter();
    pictureSizes('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger', '.burger-menu');
});