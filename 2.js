

"use strict";
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listById = document.querySelector('#ingredients'); 
const allItems = ingredients.map(item => { 
  const items = document.createElement('li');
   items.textContent = item;
  return items;
});
listById.append(...allItems);


