
let display = document.querySelector('#show_time')
let [hours, second, minute] = [0, 0, 0]
let watchStart=document.querySelector('#watchStart')
let invlidTime=null;
const stopWatch = () => {
    second++;
    if (second == 60) {
        second = 0;
        minute++; 
        if (minute == 60) {
        minute = 0;
        hours++;
    }
    }
   
    let h = hours < 10 ? '0' + hours : hours;
    let m = minute < 10 ? '0' + minute : minute;
    let s = second < 10 ? '0' + second : second;

    display.innerHTML = `${h}:${m}:${s}`;
}

watchStart.addEventListener('click',() =>{
    if(!invlidTime){
        setInterval(stopWatch,1000)
    }
})
// watchStart();