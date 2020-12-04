const button = document.getElementById('word-button') 
const input = document.getElementById('input-section')
const value1 = document.getElementById('Anthony')

button.addEventListener('click', () => {
    value1.textContent = input.value;
    input.value = '';
})

const greenB = document.getElementById ('greenBtn');
const blueB = document.getElementById ('blueBtn');
const purpleB = document.getElementById ('purpleBtn');
const nameTag = document.getElementById ('name-tag');

greenB.addEventListener('click', () => {
    nameTag.style.background = 'green';
})


blueB.addEventListener('click', () => {
    nameTag.style.background = 'blue';
})


purpleB.addEventListener('click', () => {
    nameTag.style.background = 'purple';
})