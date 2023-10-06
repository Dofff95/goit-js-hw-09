import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';
const flatpickr = require("flatpickr");
const input = document.querySelector("#datetime-picker");

const button = document.querySelector('button[data-start]');
button.setAttribute('disabled', true);

const refs = {
day: document.querySelector('span[data-days]'),
hour: document.querySelector('span[data-hours]'),
minut: document.querySelector('span[data-minutes]'),
second: document.querySelector('span[data-seconds]'),
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] > options.defaultDate) {
            button.removeAttribute('disabled');
            button.addEventListener("click", countdown);
function countdown() {
    setInterval(() => {
        console.log("стартуєм");
        const currentTime = Date.now();
        const countTime = selectedDates[0] - currentTime;
        const {days, hours, minutes, seconds} = convertMs(countTime);
        updateCounter();
        function updateCounter() {
            refs.day.textContent = days;
            refs.hour.textContent = hours;
            refs.minut.textContent = minutes;
            refs.second.textContent = seconds;
        };
        console.log(`${days}: ${hours}: ${minutes}: ${seconds}`);
    }, 1000)
}
        } else {
            Report.failure("Please choose a date in the future");
        }
    },
};
console.log(options.defaultDate);
flatpickr(input, options);

function addLeadingZero(v) {
    return String(v).padStart(2, '0'); 
}
function convertMs(ms) { 
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining secondss
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    return { days, hours, minutes, seconds };
}
