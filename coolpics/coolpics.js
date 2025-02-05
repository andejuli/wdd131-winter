let btn = document.querySelector('.menu-btn');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('hide');
}

// in case user resizes screen and menu doesn't change
function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);


  // modal
// the aria and role attribute are for accessible
function viewerTemplate(path, text) {
    let html = `
        <div class="viewer" aria-modal="true" role='dialog'>
        <button class="close-viewer">X</button>
        <img src="${path}" alt="${text}">
        </div>`;
    return html;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const img = event.target.closest("img");

	// get the src attribute from that element and 'split' it on the "-"
    let attribute = img.getAttribute('src');
    let beg = attribute.split("-");
    
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let full = beg[0] + '-full.jpeg';
    console.log(full);

	// insert the viewerTemplate into the top of the body element
    let body = document.querySelector('body');
    let html = viewerTemplate(full, 'random image');

	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    body.insertAdjacentHTML('afterbegin', html)

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    let modalx = document.querySelector('.close-viewer');
    modalx.addEventListener('click', function(){
        let modal = document.querySelector('.viewer');
        modal.remove();
    })
}
let gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);



// the following to events are for user friendliness and accessiblity
window.addEventListener("click", function (event) {
    let modal = document.querySelector('.viewer');
    // close the modal when user clicks outside the image in the modal 
    if (event.target === modal) {
        modal.remove();
    }
});

// allow the escape key to close the modal as well.
window.addEventListener("keydown", function (event) {
    let modal = document.querySelector('.viewer');
    if (event.key === "Escape") {
        modal.remove();
    }
});
