const mySpecialButton = document.getElementById('my-special-button');
const theSection = document.getElementById('my-special-section');
const theInput = document.getElementById('my-special-input');

mySpecialButton.addEventListener('click', () => {
    theSection.textContent = theInput.value;
    theInput.value = '';
});






const blueBtn = document.getElementById('blue');
blueBtn.addEventListener('click', () => {
    document.body.style.background = 'blue';
});


const darkgreenBtn = document.getElementById('darkgreen');
darkgreenBtn.addEventListener('click', () => {
    document.getElementById('my-special-section').style.background = 'darkgreen';
});

