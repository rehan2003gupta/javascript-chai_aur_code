const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.querySelector(".result");
const button = document.getElementById("submit");
button.addEventListener("click", function (e) {
    e.preventDefault();
    const h = height.value;
    const w = weight.value;

    if (h && w) {
        const bmi = w / ((h / 100) * (h / 100));
        result.textContent = `Your BMI is ${bmi}`;
    }
    else {
        button.style.backgroundColor = "grey";
        result.textContent = "Please enter valid height and weight.";
    }
});
// Update cursor style based on input validity
function updateCursor() {
  if (!height.value || !weight.value) {
    button.style.cursor = "not-allowed";
    button.disabled = true;
  } else {
    button.style.cursor = "pointer";
    button.disabled = false;
  }
}

// Run on mouseover and input change
button.addEventListener("mouseover", updateCursor);