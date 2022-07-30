import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  form: document.querySelector(".form")
}

ref.form.addEventListener('submit', onSubmitForm)

function onSubmitForm(evt) {
  evt.preventDefault()
  let delay = +ref.form.elements.delay.value
  const step = +ref.form.elements.step.value
  const amount = +ref.form.elements.amount.value
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 5000
        })
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 5000
        })
      });
    delay += step
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
}