var audio = new Audio('beep.wav');
let isCountdownRunning = false;
    
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', function() {
      countdown(25,false);
      document.getElementById('reset').addEventListener('click', function() {
        refresh()});
    })});
    function refresh(){
        location.reload()

    }
    
    

    
    const notificationSound = document.getElementById('notificationSound');
    
    function countdown(minutes, isRestTime = false) {
      if (isCountdownRunning) {
        return; // Exit if countdown is already running
      }
    
      let seconds = minutes * 60;
      isCountdownRunning = true;
    
      const timer = setInterval(function() {
        const displayMinutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;
    
       document.getElementById('Minutes').innerText = displayMinutes.toString().padStart(2, '0');
            document.getElementById('Seconds').innerText = displaySeconds.toString().padStart(2, '0');
            document.getElementById('Status').innerText='Status:Working'
            document.getElementById('Status').style.color='#00cc00';
        if (--seconds < 0) {
          clearInterval(timer);
          isCountdownRunning = false;
          playNotificationSound(); // Play the notification sound
    
          if (isRestTime) {
            alert('Rest time is over. Work time begins now!');
            countdown(25, false); // Start the work time countdown
            document.getElementById('Status').innerText='Status:Working';
            document.getElementById('Status').style.color='#00cc00';
            
          } else {
            alert('Good job! You finished worktime. Resting for 5 minutes now.');
            countdown(5, true); // Start the rest time countdown
            document.getElementById('Status').innerText='Status:Resting'
            document.getElementById('Status').style.color='#ff69b4';
          }
        }
      }, 1000);
    }
    
    function playNotificationSound() {
        audio.play();
    }
