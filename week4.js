// let img = document.querySelector('img');
// let filename = img.getAttribute('src');
// console.log(filename);

// /* .split method */
// let parts = filename.split('-');
// console.log("img" + parts[1]);

// /* .insertAdjacentHTML method */
// let newPara = "<p>This is a new paragraph</p>";

// img.insertAdjacentHTML('afterend', newPara); 

// /* resize event */
// function handleResize() {
    
//     if (window.innerWidth > 1000) {
//      img.style.border="3px solid tan";
//     } else {
//       img.style.border="none";
//     }
//   }
  
//   window.addEventListener("resize", handleResize);


  /* function calling another function */

  function viewerTemplate(path, text) {
    let html = `
        <img src="${path}" alt="${text}">`;
    return html;
  }

  function viewHandler() {

      let body = document.querySelector('body');
      let html = viewerTemplate('review-icon.png', 'Review Image');
  
      body.insertAdjacentHTML('afterbegin', html)
    }

  let btn = document.querySelector('button');
  btn.addEventListener('click', viewHandler);     
  




