'use strict';

const processDOM = document.querySelector('.process');
const mainDOM = document.querySelector('.main');

let process = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const blurring = () => {
    process++;

    if (process > 99) {
        clearInterval(interval);
    }

    processDOM.innerHTML = `${process}%`;
    processDOM.style.opacity = scale(process, 0, 100, 1, 0);

    mainDOM.style.filter = `blur(${scale(process, 0, 100, 30, 0)}px)`;
}

const interval = setInterval(blurring, 30);