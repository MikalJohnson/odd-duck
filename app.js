`use strict`

// Global DOM elements
let choices = document.getElementById('choices');
let results = document.getElementById('results');
let imgOne = document.getElementById('img-1')
let imgTwo = document.getElementById('img-2')
let imgThree = document.getElementById('img-3')

// Global variables
let clickCount = 0
let clickAllowed = 25
// When the click count = click allowed the game will end.
let productArray = []


// Create a constructor function:
//  1. Name
//  2. img path
//  3. image count = 0
//  4. timeClicked = 0
// Create instances for images in folder
// put all instances into product array (.push)
function picture (name, path) {
  this.name = name;
  this.path = path;
  this.count = 0;
  this.timesClicked = 0;
}

let bag = new picture('bag', 'img/bag.jpg');
let banana = new picture('banana', 'img/banana.jpg');
let bathroom = new picture('bathroom', 'img/bathroom.jpg');
let boots = new picture('boots', 'img/boots.jpg');
let breakfast = new picture('breakfast', 'img/breakfast.jpg');
let bubblegum = new picture('bubblegum', 'img/bubblegum.jpg');
let chair = new picture('chair', 'img/chair.jpg');
let cthulhu = new picture('cthulhu', 'img/cthulhu.jpg');
let dogDuck = new picture('dog-duck', 'img/dog-duck.jpg');
let dragon = new picture('dragon', 'img/dragon.jpg');
let pen = new picture('pen', 'img/pen.jpg');
let petSweep = new picture('pet-sweep', 'img/pet-sweep.jpg');
let scissors = new picture('scissors', 'img/scissors.jpg');
let shark = new picture('shark', 'img/shark.jpg');
let sweep = new picture('sweep', 'img/sweep.jpg');
let tauntaun = new picture('tauntaun', 'img/tauntaun.jpg');
let unicorn = new picture('unicorn', 'img/unicorn.jpg');
let waterCan = new picture('water-can', 'img/water-can.jpg');
let wineGlass = new picture('wine-glass', 'img/wine-glass.jpg');

productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep,
  scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass)


// Global Functions
//  1. Create code that generates random number between 0-18
//  2. event handler for click in the choices section
//    - what was clicked (use event target)
//    - loop for product array and find the element clicked
//    - increment times click
//    - if clicked more 25 times remove event listener on choices
//    - if count is less than 25 generate new images to keep game going.
//  3. Render function
//    - Use random generator to get three unique number
//    - confirm numbers are not the same loop
//    - use random number to access values in productArray
//  4. resultRender function
//    - create list of results


// choices event listener click when clicked it generates new images

//