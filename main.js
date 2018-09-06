'use strict';

document.addEventListener('DOMContentLoaded', () => {
    var button = document.querySelector('.aside__menu-button');

    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('aside_open');
    });
});