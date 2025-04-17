//  arrays.js
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
//document.querySelector("#myList").innerHTML = stepsHtml.join('');

let grades = ['A', 'B', 'A', 'C'];
let point;
let gpaPoints = grades.map(function(grade) {
    switch (grade){
        case 'A':
            point = 4;
            break;
        case 'B':
            point = 3;
            break;
        case 'C':
            point= 2;
            break;
        case 'D':
            point = 1;
            break;
        case 'F':
            point = 0;
        default:
            alert('not a valid grade');
    }
    return point;
})

//console.log(gpaPoints);

let totalPoint = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}
//console.log(totalPoint);

let gpaAverage = totalPoint/gpaPoints.length;

//console.log(gpaAverage);

let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let shortWords = fruit.filter(function(item){
    return item.length < 6;
})

let shortFruit = fruit.filter((item)=> item.length < 6);

//console.log(shortWords);

const myArray = [12, 34, 21, 54];

let luckyNumber = 54;

let luckyIndex = myArray.indexOf(luckyNumber);

//console.log(luckyIndex);

const nums = [1, 2, 3, 4];
const dbNums = nums.map(double);

function double(num) {
    return num * 2;
}

//console.log(dbNums);


const sum = nums.reduce((total, item)=> total + item);

//console.log(sum); //results in 10

let person = {
    name: 'Jacob',
    age: 25,
    job: 'Developer'
};

console.log(person.job);

let title = document.querySelector('h1');

title.textContent = person.name;

let car = {
    brand: "Honda",
    model: "Passport",
    start: function() {
      console.log("Car is starting...");
    }
  };

  car.start();

  let product = {
    id: 101,
    name: "Lamp",
    price: 9.99,
    quantity: 2,
    getTotal: function() {
      return this.price * this.quantity;
    }
  };

  let total = product.getTotal();

  console.log(total);



