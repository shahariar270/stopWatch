let display = document.querySelector('#show_time');
let [hours, minutes, seconds] = [0, 0, 0];
let watchStart = document.querySelector('#watchStart');
let stopBtn = document.querySelector('#stopBtn');
let resetBtn = document.querySelector('#resetBtn');
let intervalId = null;

const stopWatch = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    display.innerHTML = `${h}:${m}:${s}`;
}

watchStart.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(stopWatch, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
});

resetBtn.addEventListener('click', ()=>{
    clearInterval(intervalId);
    intervalId = null;
 [hours, minutes, seconds] = [0, 0, 0];
 display.innerHTML="00:00:00"

})
