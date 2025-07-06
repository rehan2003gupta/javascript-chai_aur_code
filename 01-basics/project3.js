const InputNum = document.getElementById("guess");
const Button = document.querySelector(".submit");
const result = document.querySelector(".result");
let times = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;
const remain = document.querySelector(".remain");
const resetButton = document.querySelector(".reset");
Button.addEventListener('click', function (event) {
  event.preventDefault();
  times++;
  if( InputNum.value.trim() === "") {
    result.textContent = "Please enter a number between 1 and 10."; 
    times--;
  }
  else if (times < 10) {
    if (InputNum.value.trim()  == randomNumber) {
      result.textContent = "Congratulations! You guessed the number!";
    } else {
      result.textContent = "Sorry, that's not correct. Try again!";
      remain.textContent = ` Remaining chances ${10-times}`;
    }
  }
  else {
    remain.textContent = '';
    result.textContent = "Game Over! You've used all your chances.";
  }
  InputNum.value = ''; // Clear the input field after each guess
});
function resetGame() {
  InputNum.value = '';
  times = 0;
  result.textContent = '';
  remain.textContent = '';
  randomNumber = Math.floor(Math.random() * 10) + 1;
}
resetButton.addEventListener('click', resetGame);

function updatecursor() {
  if (InputNum.value.trim() === "") {
    Button.style.cursor = "not-allowed";
    Button.disabled = true;
  }
  else {
    Button.style.cursor = "pointer";
    Button.disabled = false;
  }
}
Button.addEventListener('mouseover', updatecursor);