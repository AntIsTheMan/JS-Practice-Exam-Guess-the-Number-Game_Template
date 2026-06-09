let compNum = Math.floor(Math.random() * 5) + 1;
let resultText = document.getElementById('result')

function guess(userGuess){  //sends in the button’s name

  //If the button name matches the compNum then win
  if (userGuess == compNum){
    resultText.textContent = "You Win"
  }
  else {
    resultText.textContent = "Keep Guessing"
  }
  obj.style.visibility ="hidden";  // keeps the element on the screen but not visible
}

