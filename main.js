let display=document.querySelector('#show_time')
let [hours,second,minute]=[0,0,0]

const stopWatch=()=>{
    second++;
    if(second==60){
        second=0;
        minute++;
    }
    if(minute==60){
        minute=0;
        hours++;
    }
    display.innerHTML=`${hours}:${minute}:${second}`
}

const watchStart=()=>{
    setInterval(stopWatch,1000)
}
watchStart();