let count = 0;
let btnStart = document.getElementById('start');
let stopButton = document.getElementById("stop-button");
let seconds = document.getElementById("seconds");

btnStart.addEventListener('click',function recu() {
    let interval = setTimeout(recu,1000, count);
    count++;
    seconds.innerHTML = count.toString();

    stopButton.addEventListener("click", function (){
        clearInterval(interval)
    })
});