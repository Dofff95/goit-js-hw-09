const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let isActive = false;
let color = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener("click", () => {
    if (isActive) {
        return;
    } else{
        startBtn.setAttribute('disabled', true);
    }
    color = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
});

stopBtn.addEventListener("click", () => {
    clearInterval(color);
    startBtn.removeAttribute('disabled');
})
