const InputNum = document.getElementById("guess");
const Button = document.querySelector(".submit");
const result = document.querySelector(".result");

const randomNumber = Math.floor(Math.random() *10)+1;

Button.addEventListener('click', function (event) {
  event.preventDefault();
  if(InputNum.value == randomNumber) {
    result.textContent = "Congratulations! You guessed the number!";
  } else {
    result.textContent = "Sorry, that's not correct. Try again!";
  }
});
function resetGame() {
  InputNum.value = '';
  result.textContent = '';
  randomNumber = Math.floor(Math.random() *10)+1;
}
Button.addEventListener('dblclick', resetGame);
function updatecursor(){
    if(InputNum.value.trim() === ""){
        Button.style.cursor = "not-allowed";
        Button.disabled = true;
    }
    else{
        Button.style.cursor = "pointer";
        Button.disabled = false;
    }
}
Button.addEventListener('mouseover', updatecursor);