// 1. target the first paragraph and use .style.backgroundColor to assign it the color #f2c556

let introPara = document.querySelector('#intro');
introPara.style.backgroundColor = '#f2c556';

//OR

document.querySelector('#intro').style.backgroundColor = '#f2c556';


// 2. target <em> in the first paragraph assign it the color #acbfcc

document.querySelector('em').style.backgroundColor = '#acbfcc';

// 3. target the <em> but now change the text to read 'USS Voyager Starship'
// see how the const might have come in handy, you dont have to to querySelector again if you'd made a const

document.querySelector('em').textContent = 'USS Voyager Starship';

// 4. add an image dynamically through JS under the first paragraph in the existing empty div with the id of starship.

let image = document.createElement('img');
image.setAttribute('src', 'https://bit.ly/3RfG4sY');
image.setAttribute('alt', 'starship Voyager'); //always need an alt even dynamically
 let container = document.querySelector('#starship');
container.appendChild(image);

// //OR

// // container.innerHTML = `<img src='https://bit.ly/3RfG4sY'>`


// 5. give that image an id dynamically of ship 

image.id = "ship";

// 6. add the class of rounded to that image

let img1 = document.querySelector('#ship');
img1.classList.add('rounded');

