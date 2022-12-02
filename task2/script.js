const consolelog = document.querySelector('#consoleLog')

consoleLog.addEventListener('click',
(e) => {
    console.log('Метод для вывода сообщения в веб-консоль.')
    alert('Метод для вывода сообщения в веб-консоль.')
})


const alert_1 = document.querySelector('#alert')

alert_1.addEventListener('click',
(e) => {
    alert('Метод для отображения информации пользователю в диалоговом окне.')
})


const prompt_1 = document.querySelector('#prompt')

prompt_1.addEventListener('click',
(e) => {
    prompt('Метод для запроса на ввод текста (информации) в диалоговом окне.')
})