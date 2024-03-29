function log (msg) {
    console.log(msg);
}

log('1'); // Поместился в стэк вызова функций движка v8 и сразу выполнится, очистив стэк

// Поместился в стэк вызова, выполнился, поместил в очередь свой коллбек
setTimeout(() => {  
    // Колбэек сет таймаута поместился в очередь задач, зарегестрировался.
    // Попадает в стэк вызова только после того, как стек вызова очистился.
    log('timeout');
}, 1000);

log('2'); // Поместился в очередь задач движка v8 и сразу выполнится, очистив стэк

const button1 = document.createElement('button'); // Обращаемся к веб апи по работе с dom
const button2 = document.createElement('button');

button1.addEventListener('click', (event) => { // Регистрируем событие в WEB API
    console.log(event);
});

button2.addEventListener('click', (event) => {
    console.log(event);
})

// Исполнение в асинхронном режиме

// При нажатии на кнопку коллбэк помещается в очередь задач
// При пустом стэке колбэк помещается в стэк вызовов
// Стэк вызовов выполняет коллбэк
// Стэк вызовов исполняет console.log

// События будут зарегистрированы, до тех пор пока мы их явно не удалим

