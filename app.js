var millisecond = 0, second = 0, minute = 0, hour = 0
var timer;


var display = document.querySelector(".timer-display")
var laps = document.querySelector(".laps")


function start(){
    if(!timer){
        timer = setInterval(run, 10)
    }
}

function run(){
   display.innerHTML = getTimer()
    millisecond++
    if(millisecond == 100){
        millisecond = 0
        second++
    }
    if(second == 60){
        second = 0
        minute++
    }
    if(minute == 60){
        minute = 0
        hour++
    }
    if(hour == 13){
        hour = 1
    }
}

function getTimer(){
    return (hour<10 ? "0" + hour: hour) + " : " + (minute<10 ? "0" + minute : minute) +" : " + (second<10 ? "0" + second : second) + " : " + (millisecond<10 ? "0" + millisecond : millisecond);
       
    
}

function pause(){
    stopTimer()
}

function stopTimer(){
    clearInterval(timer)
    timer = false
}



function reset(){
    stopTimer()
    millisecond = 0
    second = 0
    minute = 0
    hour = 0
    display.innerHTML = getTimer()
}

function restart(){
    if(timer){
        reset()
        start()
    }
}


function lap(){
    if(timer){
        var Li = document.createElement("Li")
        Li.innerHTML = getTimer()
        laps.appendChild(Li)
    }
}


function resetLap(){
    laps.innerHTML = ""
}