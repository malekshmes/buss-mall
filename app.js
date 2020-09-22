'use strict';
// testing the js file
// console.log('hello I am working')

var firstImage = document.getElementById('first-image');
var secondImage = document.getElementById('second-image');
var thirdImage = document.getElementById('third-image');

var testArray =[-1,-1,-1];


var selections = [];
console.log(selections);
var displayData=[];
var clicksData=[];

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



function getRandomImage() {
  // the new conditions for the testArray lab12 not working
  do {
    firstImageIndex = Math.floor((Math.random() * selections.length));
  }while (firstImageIndex === testArray[0] || firstImageIndex === testArray[1] || firstImageIndex === testArray[2]);
  do {
    secondImageIndex = Math.floor((Math.random() * selections.length));
  }
  while (secondImageIndex === firstImageIndex || secondImageIndex === testArray[0] || secondImageIndex === testArray[1] || secondImageIndex === testArray[2] );

  do {
    thirdImageIndex = Math.floor(Math.random() * selections.length);
  } while (thirdImageIndex === secondImageIndex || thirdImageIndex === firstImageIndex || thirdImageIndex === testArray[0] || thirdImageIndex === testArray[1] ||thirdImageIndex === testArray[2]);

  displayImages(firstImageIndex, secondImageIndex, thirdImageIndex);
  testArray=[];
  testArray.push(firstImageIndex, secondImageIndex, thirdImageIndex);

  // firstImageIndex = Math.floor((Math.random() * selections.length));
  // do {
  //   secondImageIndex = Math.floor((Math.random() * selections.length));
  // }
  // while (firstImageIndex === secondImageIndex);
  // do {
  //   thirdImageIndex = Math.floor((Math.random() * selections.length));
  // }
  // while (thirdImageIndex === secondImageIndex || thirdImageIndex === firstImageIndex);
  // console.log(firstImageIndex);
  // console.log(secondImageIndex);
  // console.log(thirdImageIndex);

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
// imageSection.addEventListener('click', chartIt);
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
    chartIt();
    // console.log(displayData);
  }




}

var xlabels = [];
// console.log(currentRightImage.clicks);
var ulEL = document.getElementById('list');
function displayResults() {

  for (var i = 0; i < selections.length; i++) {
    var listItems = document.createElement('li');
    ulEL.appendChild(listItems);
    listItems.textContent = selections[i].name + ' Number of votes ' + selections[i].clicks + '. Displaying times for this image ' + selections[i].dispalyTimes;
    var productName = selections[i].name;
    xlabels.push(productName);
    // console.log(productName);
    var clickNum = selections[i].clicks;
    clicksData.push(clickNum);
    // console.log(clicksData);
    var displayNum = selections[i].dispalyTimes;
    displayData.push(displayNum);
    // console.log(displayData);
  }

}
// chartIt();
function chartIt() {
  var ctx = document.getElementById('productChart').getContext('2d');
  console.log(myChart);
  // var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xlabels,
      datasets: [{
        label: 'Number of Votes',
        data: clicksData,
        backgroundColor:
          ' rgb(215, 140, 245)'
        ,

        borderWidth: 1
      },
      {
        label: 'Number of Dispaly Times',
        data: displayData,
        backgroundColor:
          'rgb(220,300,120)'
        ,

        borderWidth: 1
      },
      ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
