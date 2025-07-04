const clock = document.querySelector('.container');

setInterval(function() {
    const dates= new Date();
    const time = dates.toLocaleTimeString();
    clock.innerHTML = time;
},1000)