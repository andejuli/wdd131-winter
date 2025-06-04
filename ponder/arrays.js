//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate);
console.log(stepsHtml);
document.querySelector("#myList").innerHTML = stepsHtml.join('');


// example 2
const grades = ["A", "A", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints);


let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}

console.log(totalPoints);

let gpaAverage = totalPoints/gpaPoints.length
console.log(gpaAverage);


// Filter

const words = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortWords = words.filter(function (word) {
  return word.length < 6;
});

console.log(shortWords);

//same thing with an arrow function
//const shortWords = words.filter((word) => word.length < 6);

// Index of array method

const myArray = [12, 34, 21, 54];
const luckyNumber = 54;
let luckyIndex = myArray.indexOf(luckyNumber);

console.log(luckyIndex);