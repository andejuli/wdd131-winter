const menuButton = document.querySelector(".menu-button");
console.log(menuButton);

menuButton.addEventListener("click", toggleMenu);


function toggleMenu() {

    console.log("in function");
    const menu = document.querySelector(".menu");

    menu.classList.toggle("hide");

  // if (menu.className != "hide"){
  // menu.classList.add("hide");
  // }
  // else{
  //   menu.classList.remove("hide")
  // }

}




function handleResize(){
    const menuDisp = document.querySelector('.menu')

    if (window.innerWidth > 1000){
        menuDisp.classList.remove("hide");
    }
    else{
        menuDisp.classList.add("hide")
    }
}


function viewHandler(event){

    const img = event.target.closest("img");

    let attribute = img.getAttribute('src');
    let beg = attribute.split('-');

    let full = beg[0] + '-full.jpeg';

    let body = document.querySelector('body');
    let html = viewerTemplate(full, 'random image');

    body.insertAdjacentHTML('afterbegin', html);
}


let gallery = document.querySelector(".gallery");

console.log(gallery);

gallery.addEventListener('click', viewHandler);


let modalx = document.querySelector('.close-viewer')

modalx.addEventListener('click', function(){
    let modal = document.querySelector('.viewer');
    modal.remove();
})



function viewerTemplate(path, text){
    let html = `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${path}" alt="${text}">
    </div>`;
    return html;
    }
