
"use strict";
const items = [...document.querySelectorAll('li.item')];
console.log(`В списке ${items.length} категории`);
 items.map(item => {
    const title = item.querySelector("h2");
      const list = item.querySelectorAll("ul, li");
     //  return { title: title.textContent, count: list.length };
      console.log(title.textContent,list.length)
}  
 )
//       .forEach(entire => {
//      console.log(entire.title, entire.count);    
// });




