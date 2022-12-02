const input = document.querySelector('#input')
const button= document.querySelector('#button')
const userText = document.querySelector('#duplicateField')

input.addEventListener('input', function(e) {
    userText.textContent = input.value;
})

button.addEventListener('click', function(e) {
    event.preventDefault();
    console.log(userText.textContent);
    input.value = "";
    userText.textContent = "";
})
