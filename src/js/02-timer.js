import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
    datetimePicker: document.querySelector("#datetime-picker"),
    btnStart: document.querySelector("button[data-start]"),
    days: document.querySelector(".value[data-days]"),
    hours: document.querySelector(".value[data-hours]"),
    minutes: document.querySelector(".value[data-minutes]"),
    seconds: document.querySelector(".value[data-seconds]"),
}
let timerId = null

ref.btnStart.setAttribute("disabled", '')

const fp = flatpickr(ref.datetimePicker, {
    enableTime: true,
    locale: {
        "firstDayOfWeek": 1,
    },
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const promise = new Promise((resolve, reject) => {
            const selectedDate = selectedDates[0]
            const today = new Date()
            
            if (selectedDate > today) {
                resolve(selectedDate.getTime())
            } else {
                reject("Please choose a date in the future")
            }
        })
        
        promise
            .then(selectedDate => {
                ref.btnStart.removeAttribute("disabled")
                ref.btnStart.addEventListener("click", () => {
                    ref.btnStart.setAttribute("disabled",'')
                    timerId = setInterval(() => {
                        const today = new Date().getTime()
                        const delta = selectedDate - today
                        if (selectedDate < today) {
                            clearInterval(timerId)
                            return
                        }

                        const remainingTime = convertMs(delta)

                        ref.days.textContent = addLeadingZero(remainingTime.days)
                        ref.hours.textContent = addLeadingZero(remainingTime.hours)
                        ref.minutes.textContent = addLeadingZero(remainingTime.minutes)
                        ref.seconds.textContent = addLeadingZero(remainingTime.seconds)
                    }, 1000)
                })
            })
            .catch(error => {
                Notify.failure(error)
            })
            .finally(console.log(selectedDates[0]))
    },    
})


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, 0)
}