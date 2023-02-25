const dinosaur = document.getElementById("dinosaur");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

function jump() {
  let position = 0;
  let timerId = setInterval(() => {
    if (position === 150) {
      clearInterval(timerId);
      let downTimerId = setInterval(() => {
        if (position === 0) {
          clearInterval(downTimerId);
        }
        position -= 10;
        dinosaur.style.bottom = position + "px";
      }, 20);
    }
    position += 10;
    dinosaur.style.bottom = position + "px";
  }, 20);
}

let isAlive = setInterval(() => {
  let dinosaurBottom = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("bottom")
  );
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinosaurBottom <= 60) {
    alert("Game over!");
    clearInterval(isAlive);
  }
}, 10);
