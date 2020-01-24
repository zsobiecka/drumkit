window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.drumkey[data-key="${e.keyCode}"]`)
  if (!audio) return //stop the function from executing
  audio.currentTime = 0
  audio.play()
  key.classList.add("playing")
})

function removeTransition(e) {
  if (e.propertyName !== "transform") return //skip it if it's not transform
  this.classList.remove("playing")
}

const keys = document.querySelectorAll(".drumkey")
keys.forEach(drumkey =>
  drumkey.addEventListener("transitionend", removeTransition)
)

/*window.addEventListener("keydown", function(event) {
    const drumkey = document.querySelector(`.drumkey[data-key="${e.keyCode}"]`)
    if (event.keyCode === drumkey {
    audio.play()
    } else {
        if (!audio) return;
    }
})*/
