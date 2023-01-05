let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    playSound();
    let value = event.target.dataset.num;
    screen.value += value;

    buttonAnimation(value);
  });
});

function playSound() {
  var audio = new Audio("sounds/sound.mp3");
  audio.play();
}

equal.addEventListener("click", function () {
  playSound();
  if (screen.value === "") {
    screen.value = "";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
  buttonAnimation("=");
});

clear.addEventListener("click", function () {
  playSound();
  screen.value = "";
  buttonAnimation("AC");
});

function buttonAnimation(currentkey) {
  var activeButton = document.getElementById(currentkey);
  // console.log(activeButton);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
