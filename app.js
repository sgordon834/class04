//Script to obtain user input
//Start Game



// answerOne = question1();


// console.log(userName);

//Question 1

// function question1() {
// var toScor = 0;
// var userName = prompt('what\'s is your name?');
//
// alert('Hello ' + userName + '.  Thank you for visiting to my site!');
//
//
// var answerOne = prompt('Is Washington the \'Show Me State\'?');
//
// var myAnswerOne = 'no';
//
// if (answerOne === myAnswerOne) {
//   toScor += 1;
//   alert('You got it right, you rock!');
//
// } else {
//
//   alert('Sorry, that\'s wrong, try again!');
//
// }
// // // Question 2
// var answerTwo = prompt('Do you I collect comics as a hobby?');
// var myAnswerTwo = 'comics';
// if (answerTwo === myAnswerTwo) {
//   toScor += 1;
//   alert('Right again!');
//
// } else {
//
//   alert('Sorry, that\'s wrong, maybe next time!');
// }
// // Qustion 3
// var answerThree = prompt('Is the desert arid?').toLowerCase();
// var myAnswerThree = 'tan';
// if (answerThree === myAnswerThree) {
//
//   toScor += 1;
//   alert('You are a genious, right on!');
//
// } else {
//
//   alert('Oh no, that is incorrect.');
// }
//
// //Question 4
// var answerFour = prompt('Was Donkey Kong orignally called Jumpman?')
// var myAnswerFour = 'yes';
// if (answerFour === myAnswerFour) {
//
//   toScor += 1;
//   alert('Way to go, that\'s right!');
//
//
// } else {
//
//   alert('Oh no, that is incorrect.');
// }
// }
//
// question1();

// Question 5
function questionTwo() { // wrapping set of questions in a function

var whichLang = prompt('What is my favorite programming language?');
var userAnswer = ['javascript', 'python', 'java', 'c'];

if (userAnswer.indexOf(whichLang) > -1) {

  toScor += 1;
  alert('You\'re on your way to tech greatness!');
=======
// start question1 function
var toScor = 0;
var userName = prompt('what\'s is your name?');

function question1() {
  alert('Hello ' + userName + '.  Thank you for visiting to my site!');

  // Question 1

  var answerOne = prompt('Is Washington the \'Show Me State\'?');

  var myAnswerOne = 'no';

  if (answerOne === myAnswerOne) {
    toScor += 1;
    alert('You got it right, you rock!');

  } else {

    alert('Sorry, that\'s wrong, try again!');

  }
  console.log(answerOne);

 // Question 2
  var answerTwo = prompt('Do I collect comics as a hobby?').toLowerCase();
  var myAnswerTwo = 'yes';
  if (answerTwo === myAnswerTwo) {
    toScor += 1;
    alert('Right on, you have potential!');

  } else {

    alert('Sorry, that\'s wrong, maybe next time!');
  }
  console.log(answerTwo);
  // Qustion 3
  var answerThree = prompt('What color is my SUV?').toLowerCase();
  var myAnswerThree = 'tan';
  if (answerThree === myAnswerThree) {

    toScor += 1;
    alert('You are a genious, right on!');

  } else {

    alert('Oh no, that is incorrect.');
  }
  console.log(answerThree);
  //Question 4
  var answerFour = prompt('Was Donkey Kong orignally called Jumpman?')
  var myAnswerFour = 'yes';
  if (answerFour === myAnswerFour) {

    toScor += 1;
    alert('Way to go, that\'s right!');


  } else {

    alert('Oh no, that is incorrect.');
  }
  console.log(answerFour);
}

//calling question1 function
question1();

// Question 5
//start questionTwo funciton
function questionTwo() {
  var whichLang = prompt('What is my favorite programming language?');
  var userAnswer = ['javascript', 'python', 'java', 'c'];


}
console.log(arr[i]);
}
questionTwo()

//Keep score and show user results
// if (toScor === 8) {
//
//   alert('You got 8 of 8 correct, ' + userName + ' great going!');
//
// }if (toScor === 7) {
//
//   alert('You got 7 of 8 correct, ' + userName + ' strong effort!');
//
// }if (toScor === 6) {
//
//   alert('You got 6 of 8 correct, ' + userName + ' nice try.');
//
// }if (toScor === 5) {
//
//   alert('You got 5 of 8 correct, ' + userName + ' try again.');
//
// }if (toScor === 4) {
//
//   alert('You got 4 of 8 correct, ' + userName + ' try again.');
//
// }if (toScor === 3) {
//
//   alert('You got 3 of 8 correct, ' + userName + ' try again.');
//
// }if (toScor === 2) {
//
//   alert('You got 2 of 8 correct, ' + userName + ' try again.');
//
// }if (toScor === 1) {
//
//   alert('You got 1 of 8 correct, ' + userName + ' try again.');
//
// }if (toScor === 0) {
//
//   alert('You got 0 of 8 correct, ' + userName + ' try again.');
// }
// console.log(toScor);
=======
  if (toScor === 6) {

    alert('You got 6 of 8 correct, ' + userName + ' nice try.');

  }
  if (toScor === 5) {

    alert('You got 5 of 8 correct, ' + userName + ' try again.');

  }
  if (toScor === 4) {

    alert('You got 4 of 8 correct, ' + userName + ' try again.');

  }
  if (toScor === 3) {

    alert('You got 3 of 8 correct, ' + userName + ' try again.');

  }
  if (toScor === 2) {

    alert('You got 2 of 8 correct, ' + userName + ' try again.');

  }
  if (toScor === 1) {

    alert('You got 1 of 8 correct, ' + userName + ' try again.');

  }
  if (toScor === 0) {

    alert('You got 0 of 8 correct, ' + userName + ' try again.');
  }
  //Keep score and show user results
  console.log(toScor);
}
//call questionTwo function
questionTwo();

