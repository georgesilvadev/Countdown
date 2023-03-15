(function () {
  const countdownDate = new Date('Mar 15, 2023 16:31:00');

  let daysLeftLabel = document.getElementById('daysLeft')
  let hoursLeftLabel = document.getElementById('hoursLeft')
  let minutesLeftLabel = document.getElementById('minutesLeft')
  let secondsLeftLabel = document.getElementById('secondsLeft')

  let rocket = document.getElementById('rocket')

  function startCountdown() {
     
    let timer = setInterval(() => {
      const today = new Date();

      let distance = countdownDate.getTime() - today.getTime();

      let seconds = Math.floor((distance % (1000 * 60)) / 1000)
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      
      daysLeftLabel.innerHTML = days.toString().padStart(2, '0')
      hoursLeftLabel.innerHTML = hours.toString().padStart(2, '0')
      minutesLeftLabel.innerHTML = minutes.toString().padStart(2, '0')
      secondsLeftLabel.innerHTML = seconds.toString().padStart(2, '0')

      console.log(days, hours, minutes, seconds)
      
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown-title').innerHTML = "Missão Cumprida"
        document.getElementById('timer').innerHTML = '<h2 style="text-align: center; width: 100%; color: #fff"> O foguete foi lançado! 🚀 </h2>'
        rocket.classList.add('rocketfly')
      }


    }, 1000)
  }

  startCountdown();
})();
