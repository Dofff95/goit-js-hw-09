import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");
form.addEventListener("submit", onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (delay === 0) {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    } else {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    }
  });
}

function onPromiseCreate(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  if (inputStep <= 0 || inputDelay < 0 || inputAmount <= 0) {
    Notify.failure("❌ Invalid input values");
    return;
  }

  for (let i = 1; i <= inputAmount; i += 1) {
    createPromise(i, i === 1 ? 0 : inputDelay)
      .then(({ position, delay }) => {
        return Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  evt.currentTarget.reset();
}
