// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output, если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector('#name-input');
const spanById = document.querySelector('#name-output');
inputRef.addEventListener('input', checkInputText)
function checkInputText(event) {  
    
 spanById.textContent = event.target.value === "" ?  'незнакомец': event.target.value; 
 }