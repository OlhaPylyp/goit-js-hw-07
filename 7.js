// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

"use strict";

const inputRef = document.querySelector('#font-size-control');
const spanById = document.querySelector('#text');
inputRef.addEventListener('input', changeSize)
function changeSize(size) { 
    console.log( size.target.value);
    let sizeChange = size.target.value;
    spanById.style.fontSize = sizeChange +'px';
    console.log( spanById.style);
}