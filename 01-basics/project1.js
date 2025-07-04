const buttons = document.querySelectorAll(".buttons")
const body = document.querySelector('body');

buttons.forEach(function (button){
 button.addEventListener('click',function(e){
    const color = e.target.id;
    body.style.backgroundColor = color;
 });
});
