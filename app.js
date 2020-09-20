'use strict';
// testing the js file
// console.log('hello I am working')
var firstImage = document.getElementById('first-image');
var secondImage = document.getElementById('second-image');
var thirdImage = document.getElementById('third-image');

var selections = [];
console.log(selections);

function Product(name, link) {
  this.name = name;
  this.link = link;
  selections.push(this);
}
var firstImageIndex=0;
function getRandomImage() {
  
  firstImageIndex = Math.floor((Math.random() * selections.length));
  console.log(firstImageIndex);

  var secondImageIndex = Math.floor((Math.random() * selections.length));
  console.log(secondImageIndex);

  //   do {
  //     var thirdImageIndex = Math.floor(Math.random() * selections.length);
  //   } while (thirdImageIndex === secondImageIndex);
  //   thirdImageIndex = Math.floor(Math.random() * selections.length);
  //   if (thirdImageIndex !== secondImageIndex && thirdImageIndex !== firstImageIndex) {
  //   displayImages(firstImageIndex, secondImageIndex, thirdImageIndex);

//   } else {
//     thirdImageIndex = Math.floor(Math.random() * selections.length);
}


// function displayImages(leftIndex, centerIndex, rightIndex) {
//   var currentFirstImage = selections[leftIndex];
//   var currentCenteredImage = selections[centerIndex];
//   var currentLeftImage = selections[rightIndex];


//   firstImage.setAttribute('src', currentFirstImage.link);

//   secondImage.setAttribute('src', currentCenteredImage.link);

//   thirdImage.setAttribute ('src', currentLeftImage.link);
// }
getRandomImage();
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots');
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

// var imageSection=document.getElementById('imageSection');
