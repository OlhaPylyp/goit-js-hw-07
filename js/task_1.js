
const itemsRef = document.querySelectorAll("li.item")
console.log(`В списке ${itemsRef.length} категории.`);
itemsRef.forEach(item =>  {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  const categoryCount = item.querySelector("ul").children.length;
  console.log(`Количество элементов: ${categoryCount}`);

});


// const items = [...document.querySelectorAll('li.item')];
// console.log(`В списке ${items.length} категории`);
//  items.map(item => {
//     const title = item.querySelector("h2");
//     const list = item.querySelectorAll("ul, li");
//      //  return { title: title.textContent, count: list.length };
//     console.log(title.textContent,list.length)
// }  
//  )
// //       .forEach(entire => {
// //      console.log(entire.title, entire.count);    
// // });




