'use strict';
// testing the js file
// console.log('hello I am working')
var ctx = document.getElementById('productChart').getContext('2d');
var xlabels= [];

var ynumbers= [];
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: xlabels,
    datasets: [{
      label: 'Number Of Clicks',
      data: ynumbers,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
    }]
  },
});
console.log(myChart);
var firstImage = document.getElementById('first-image');
var secondImage = document.getElementById('second-image');
var thirdImage = document.getElementById('third-image');

// var testArray =[-1,-1,-1];

var selections = [];
console.log(selections);
var totalClicks = 0;
function Product(name, link) {
  this.name = name;
  this.link = link;
  this.clicks = 0;
  this.dispalyTimes = 0;

  selections.push(this);

}
var firstImageIndex = 0;
var secondImageIndex = 0;
var thirdImageIndex = 0;
var newArray =[-1,-1,-1];
function getRandomImage() {
  // the new conditions for the testArray lab12 not working
  // do {
  //   firstImageIndex = Math.floor((Math.random() * selections.length));
  // }while (firstImageIndex === testArray[0] || secondImageIndex === testArray[1] || thirdImageIndex === testArray[2]);
  // do {
  //   secondImageIndex = Math.floor((Math.random() * selections.length));
  // }
  // while (secondImageIndex === firstImageIndex && secondImageIndex === testArray[0] || secondImageIndex === testArray[1] || secondImageIndex === testArray[2] );

  // do {
  //   thirdImageIndex = Math.floor(Math.random() * selections.length);
  //   while (thirdImageIndex === secondImageIndex && thirdImageIndex === firstImageIndex);}

  // while ( thirdImageIndex === testArray[0] || thirdImageIndex === testArray[1] || thirdImageIndex === testArray[2] );{
  //   thirdImageIndex = Math.floor(Math.random() * selections.length);

  // }
  newArray = [firstImageIndex, secondImageIndex, thirdImageIndex];
  firstImageIndex = Math.floor((Math.random() * selections.length)); 
  do {
    secondImageIndex = Math.floor((Math.random() * selections.length));
  }
  while (firstImageIndex === secondImageIndex);
  do{
    thirdImageIndex = Math.floor((Math.random() * selections.length));
  }
  while (thirdImageIndex === secondImageIndex || thirdImageIndex === firstImageIndex );
  function compareIndex(){
    if 
  }
  console.log(firstImageIndex);
  console.log(secondImageIndex);
  console.log(thirdImageIndex);
  displayImages(firstImageIndex, secondImageIndex, thirdImageIndex);
  // testArray=[];
  // testArray.push(firstImageIndex, secondImageIndex, thirdImageIndex);

}
// firstImageIndex
var currentRightImage;
var currentCenteredImage;
var currentLeftImage;
function displayImages(leftIndex, centerIndex, rightIndex) {
  currentRightImage = selections[leftIndex];
  currentCenteredImage = selections[centerIndex];
  currentLeftImage = selections[rightIndex];
  currentRightImage.dispalyTimes++;
  currentCenteredImage.dispalyTimes++;
  currentLeftImage.dispalyTimes++;

  firstImage.setAttribute('src', currentRightImage.link);

  secondImage.setAttribute('src', currentCenteredImage.link);

  thirdImage.setAttribute('src', currentLeftImage.link);
}
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

getRandomImage();

var imageSection = document.getElementById('imageSection');
imageSection.addEventListener('click', calculateSelections);

function calculateSelections(event) {
  // totalClicks++;
  // console.log(event.target);
  if (event.target.id === 'first-image') {
    currentRightImage.clicks++;
    totalClicks++;

    getRandomImage();
  } else if (event.target.id === 'second-image') {
    currentCenteredImage.clicks++;
    totalClicks++;
    getRandomImage();
  } else if (event.target.id === 'third-image') {
    currentLeftImage.click++;
    totalClicks++;
    getRandomImage();

  }
  if (totalClicks >= 25) {
    imageSection.removeEventListener('click', calculateSelections);
    displayResults();
  }


}
// console.log(currentRightImage.clicks);
var ulEL = document.getElementById('list');
function displayResults() {
  for (var i = 0; i < selections.length; i++) {
    var listItems = document.createElement('li');
    ulEL.appendChild(listItems);
    listItems.textContent = selections[i].name +' Number of votes ' + selections[i].clicks + '. Displaying times for this image ' + selections[i].dispalyTimes;
    var productName = selections[i].name;

    xlabels.push(productName);
  }

}

