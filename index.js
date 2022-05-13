// Seletores dos botoes
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMoreTime = document.querySelector('.moreTime')
const buttonLessTime = document.querySelector('.lessTime')
const buttonPause = document.querySelector('.pause')

const soundFlorest = document.querySelector('.florest')
const soundRain = document.querySelector('.rain')
const soundCoffeShop = document.querySelector('.coffeShop')
const soundFireplace = document.querySelector('.fireplace')

soundRain.loop = true

// Eventos background sons selecionados
soundFlorest.addEventListener('click', function () {
  soundFlorest.classList.toggle('select')
  pressButton()
  florestPlay()
})

soundRain.addEventListener('click', function () {
  soundRain.classList.toggle('select')
  pressButton()
  rainAudioPlay()
})

soundCoffeShop.addEventListener('click', function () {
  soundCoffeShop.classList.toggle('select')
  pressButton()
  coffeShopPlay()
})

soundFireplace.addEventListener('click', function () {
  soundFireplace.classList.toggle('select')
  pressButton()
  firePlacePlay()
})

//timer
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      timeEnd()
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countdown()
  pressButton()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
  pressButton()
})

buttonStop.addEventListener('click', function () {
  resetControls()
  resetTimer()
})

buttonMoreTime.addEventListener('click', function () {
  let newMinutes = minutes + 5
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
  pressButton()
})

buttonLessTime.addEventListener('click', function () {
  let newMinutes = minutes - 5
  if (newMinutes <= 0) {
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
  pressButton()
})

buttonStop.addEventListener('click', function () {
  resetTimer()
  pressButton()
})

// ========= Sounds =========
let soundOn = false

const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

const florestAudio = new Audio('./sounds/florest.wav')
const firePlaceAudio = new Audio('./sounds/fireplace.wav')
const coffeShopAudio = new Audio('./sounds/coffeshop.wav')
const rainAudio = new Audio('./sounds/rain.wav')

function pauseSounds() {
  florestAudio.pause()
  firePlaceAudio.pause()
  coffeShopAudio.pause()
  rainAudio.pause()
}

function pressButton() {
  buttonPressAudio.play()
}

function timeEnd() {
  kitchenTimer.play()
}

function florestPlay() {
  if (soundOn == false) {
    soundOn = true
    florestAudio.play()
    florestAudio.loop = true
  } else {
    soundOn = false
    pauseSounds()
  }
}

function firePlacePlay() {
  if (soundOn == false) {
    soundOn = true
    firePlaceAudio.play()
    firePlaceAudio.loop = true
  } else {
    soundOn = false
    pauseSounds()
  }
}

function coffeShopPlay() {
  if (soundOn == false) {
    soundOn = true
    coffeShopAudio.play()
    coffeShopAudio.loop = true
  } else {
    soundOn = false
    pauseSounds()
  }
}

function rainAudioPlay() {
  if (soundOn == false) {
    soundOn = true
    rainAudio.play()
    rainAudio.loop = true
  } else {
    soundOn = false
    pauseSounds()
  }
}

// Dark Mode

const buttonSun = document.querySelector('.day')
const buttonMoon = document.querySelector('.dark')
const body = document.querySelector('body')

buttonSun.addEventListener('click', function () {
  buttonSun.classList.add('hide')
  buttonMoon.classList.remove('hide')
  body.classList.toggle('dark')
  pressButton()
})

buttonMoon.addEventListener('click', function () {
  buttonSun.classList.remove('hide')
  buttonMoon.classList.add('hide')
  body.classList.toggle('dark')
  pressButton()
})
