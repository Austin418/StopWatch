let milsec = 00
let sec = 00
let min = 00
let clockRun = false;
let interval;
let lapTime

function runClock() {
    interval = setInterval(function () {
        milsec++

        if (milsec == 100) {
            sec++
            milsec = 00
        }
        if (sec == 60) {
            min++
            sec = 00
        }

        let tempMS
        let tempS
        let tempM

        if (milsec < 10) tempMS = `0${milsec}`;
        else tempMS = milsec;

        if (sec < 10) tempS = `0${sec}`;
        else tempS = sec;

        if (min < 10) tempM = `0${min}`;
        else tempM = min;

        $('.running').text(`${tempM}:${tempS}:${tempMS}`)
        lapTime = $('.running').text()
    }, 10)
}





$('.startStop').on('click', function () {
    if (clockRun == true) {
        this.textContent = 'Start'
        clockRun = false
        clearInterval(interval);
    } else {
        this.textContent = 'Stop'
        clockRun = true
        runClock()
    }
})
let lapNum = 1
$('.lapButton').on('click', function () {
    if (lapNum < 41) {
        $('.lap').append('<br>' + 'Lap ' + lapNum + " | " + lapTime)
        lapNum++
    }
})