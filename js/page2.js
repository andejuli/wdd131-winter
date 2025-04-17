import { games } from "./games.js";

function gameTemplate(game) {
  return `
              <h2>"${game.name}"</h2>
              <img src="${game.image}" alt="${game.name}" />
              <h3>Game Description</h3>
              <p>
                "${game.gameDescription}"
              </p>
              <h3>Fun Rating</h3>
              <p>"${game.funRating}"</p>
              <h3>Pain Rating</h3>
              <p>"${game.painRating}"</p>
              <h3>Skill Ceiling</h3>
              <p>"${game.skillCeiling}"</p>
             `;
}
function renderGameByName(gameName) {
    console.log(gameName);
  const game = games.find(
    (g) => g.name.toLowerCase() === gameName.toLowerCase()
  );

  if (!game) {
    console.error("Game not found!");
    return;
  }


  gameDisplay.innerHTML = gameTemplate(game); 
};


let gameDisplay = document.querySelector(".gameDisplay");
let button = document.getElementById('searchButton');

button.addEventListener("click", function () {
  const gameName = document.getElementById("searchInput").value;
  renderGameByName(gameName)
});

function init() {
    renderGameByName('minecraft');
}
init();