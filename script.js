const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');


if (bar){
    bar.addEventListener('click', () => {
       nav.classList.add('active');
})
}

if (close){
    close.addEventListener('click', () => {
       nav.classList.remove('active');
})
}

/*clock */
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;
}
// Update the clock every second
setInterval(updateClock, 1000);
// Initialize the clock immediately
updateClock();



