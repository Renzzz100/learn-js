function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    const borderColor = seconds % 2 === 0 ? 'red' : 'blue';

    document.getElementById('clock').textContent = (`${hours}:${minutes}:${seconds}`);
    document.getElementById('clock').style.borderColor = borderColor; 
}

setInterval(updateClock,1000);

