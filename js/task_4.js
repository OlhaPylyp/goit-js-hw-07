// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterValue = 0;
console.log(1);

  console.log(2);
 
 console.log(3);
  const decrementBtn = document.querySelector('button[data-action="decrement"]');
  const incrementBtn = document.querySelector('button[data-action="increment"]');
  const spanById = document.querySelector('#value');


  decrementBtn.addEventListener('click', decrement);
  incrementBtn.addEventListener('click', increment);
  function increment() {
    counterValue += 1;
    spanById.textContent = counterValue;
  }
  function decrement() {
    counterValue -= 1;
    spanById.textContent = counterValue;};
 

  
