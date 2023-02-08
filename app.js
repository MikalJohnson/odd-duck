`use strict`;

// Global DOM elements
let choices = document.getElementById("choices");
let results = document.getElementById("results");
let imgOne = document.getElementById("img-1");
let imgTwo = document.getElementById("img-2");
let imgThree = document.getElementById("img-3");
let btn = document.getElementById("my-button");

// Global variables
let clickCount = 0;
let clickAllowed = 25;
// When the click count = click allowed the game will end.
let productArray = [];

// Create a constructor function:
//  1. Name
//  2. img path
//  3. image count = 0
//  4. timeClicked = 0

function picture(name, path) {
  this.name = name;
  this.path = path;
  this.views = 0;
  this.timesClicked = 0;
}

// Create instances for images in folder
let bag = new picture("bag", "img/bag.jpg");
let banana = new picture("banana", "img/banana.jpg");
let bathroom = new picture("bathroom", "img/bathroom.jpg");
let boots = new picture("boots", "img/boots.jpg");
let breakfast = new picture("breakfast", "img/breakfast.jpg");
let bubblegum = new picture("bubblegum", "img/bubblegum.jpg");
let chair = new picture("chair", "img/chair.jpg");
let cthulhu = new picture("cthulhu", "img/cthulhu.jpg");
let dogDuck = new picture("dog-duck", "img/dog-duck.jpg");
let dragon = new picture("dragon", "img/dragon.jpg");
let pen = new picture("pen", "img/pen.jpg");
let petSweep = new picture("pet-sweep", "img/pet-sweep.jpg");
let scissors = new picture("scissors", "img/scissors.jpg");
let shark = new picture("shark", "img/shark.jpg");
let sweep = new picture("sweep", "img/sweep.png");
let tauntaun = new picture("tauntaun", "img/tauntaun.jpg");
let unicorn = new picture("unicorn", "img/unicorn.jpg");
let waterCan = new picture("water-can", "img/water-can.jpg");
let wineGlass = new picture("wine-glass", "img/wine-glass.jpg");

// put all instances into product array (.push)
productArray.push(
  bag,
  banana,
  bathroom,
  boots,
  breakfast,
  bubblegum,
  chair,
  cthulhu,
  dogDuck,
  dragon,
  pen,
  petSweep,
  scissors,
  shark,
  sweep,
  tauntaun,
  unicorn,
  waterCan,
  wineGlass
);

// Global Functions

// This will generate random number from 0 - 19
function randomGenerator() {
  return Math.floor(Math.random() * productArray.length);
}

//  resultRender function
function renderResults() {
  let resultsList = document.querySelector("ul");
  for (let i = 0; i < productArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${productArray[i].name} ${productArray[i].path} ${productArray[i].timesClicked}`;
    resultsList.appendChild(li);
  }
}

// event handler for click in the choices section
function handlePictureClick(event) {
  let clickPicture = event.target.alt;

  for (let i = 0; i < productArray.length; i++) {
    if (productArray[i].name === clickPicture) {
      productArray[i].timesClicked++;
    }
  }

  if (clickCount >= clickAllowed) {
    choices.removeEventListener("click", handlePictureClick);
    btn.addEventListener("click", renderResults);
    console.log(productArray);
  } else {
    renderPicture();
  }
}

//  Render picture function
function renderPicture() {
  let picOne = randomGenerator();
  let picTwo = randomGenerator();
  let picThree = randomGenerator();

  console.log(picOne, picTwo, picThree);

  while (picOne === picTwo || picOne === picThree || picTwo === picThree) {
    picOne = randomGenerator();
    picTwo = randomGenerator();
    picThree = randomGenerator();
  }

  imgOne.src = productArray[picOne].path;
  imgTwo.src = productArray[picTwo].path;
  imgThree.src = productArray[picThree].path;
  imgOne.alt = productArray[picOne].name;
  imgTwo.alt = productArray[picTwo].name;
  imgThree.alt = productArray[picThree].name;

  productArray[picOne].views++;
  productArray[picTwo].views++;
  productArray[picThree].views++;

  clickCount++;
}

renderPicture();
choices.addEventListener("click", handlePictureClick);
