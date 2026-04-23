// Поточний час у шапці сторінки

// Контекст:
// У шапці сайту потрібно постійно показувати актуальний час без перезавантаження сторінки.

// Базовий HTML:

// <header class="page-header">
//   <p class="current-time" aria-live="polite">00:00:00</p>
// </header>

// Розширене ТЗ:
// · Створи функцію, яка отримує поточний час через new Date().
// · У .current-time потрібно виводити години, хвилини та секунди у
//   форматі HH:MM:SS.
// · Час має оновлюватися щосекунди через setInterval.
// · Початкове значення потрібно відмалювати одразу після завантаження
//   сторінки, не чекаючи першої секунди.
// · Для чисел з однією цифрою потрібно додавати нуль на початок.

import { refs } from "./refs.js";

const vrapper = (value) => {
    return String(value).padStart(2, "0")
}

const getNewDate = () => {
    const nowTime = new Date();
    // console.log("🚀 ~ getNewDate ~ nowTime:", nowTime);
    const hours = vrapper(nowTime.getHours());
    // console.log("🚀 ~ getNewDate ~ hours:", hours)
    
    const minutes = vrapper(nowTime.getMinutes());
    // console.log("🚀 ~ getNewDate ~ minutes:", minutes)
    
    const seconds = vrapper(nowTime.getSeconds());
    // console.log("🚀 ~ getNewDate ~ seconds:", seconds)
    refs.currentTimer.textContent = `${hours}:${minutes}:${seconds}`
    
}
getNewDate();


setInterval(getNewDate, 1000);
