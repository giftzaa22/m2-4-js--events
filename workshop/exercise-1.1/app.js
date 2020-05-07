// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let body = document.querySelector('body');
let result = document.getElementById('result');
let youwin = false;

function OnClick(){
   youwin = true;
   result.innerText = 'Congratulation';

   body.removeEventListener('click',OnClick);
}

setTimeout(function(){
  if(!youwin){
      result.innerText = 'try again';
      body.removeEventListener('click',OnClick);
  }
},5000);

body.addEventListener('click', OnClick);
