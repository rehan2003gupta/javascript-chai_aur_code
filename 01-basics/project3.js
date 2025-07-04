const InputNum = document.getElementById("guess");
const Button = document.querySelector(".submit");
const result = document.querySelector(".result");
let times = 0;
const randomNumber = Math.floor(Math.random() * 10) + 1;
const remain = document.querySelector(".remain");
Button.addEventListener('click', function (event) {
  event.preventDefault();
  times++;
  if (times < 10) {
    if (InputNum.value == randomNumber) {
      result.textContent = "Congratulations! You guessed the number!";
      times = 0; // Reset the counter after a correct guess
      resetGame(); // Reset the game for a new round
    } else {
      result.textContent = "Sorry, that's not correct. Try again!";
      remain.textContent = ` remaining chances ${10-times}`;
    }
  }
  else {
    result.textContent = "Game Over! You've used all your chances.";
    remain.textContent = '';
  }
});
function resetGame() {
  InputNum.value = '';
  result.textContent = '';
  remain.textContent = '';
  randomNumber = Math.floor(Math.random() * 10) + 1;
}
Button.addEventListener('dblclick', resetGame);

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