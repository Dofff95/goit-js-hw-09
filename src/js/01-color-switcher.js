const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let isActive = false;

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
        // isActive = true;
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
});

stopBtn.addEventListener("click", () => {
    startBtn.removeAttribute('disabled');
    clearInterval(color);
})
