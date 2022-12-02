document.querySelector('#test').addEventListener('click',
(e) => {
    event.preventDefault();
    console.log('Переход не осуществлен.');
    const userText = prompt('Введите текст');
    const userTextField = document.querySelector('a');
    userTextField.textContent = userText;
})