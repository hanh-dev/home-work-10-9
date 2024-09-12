const redButton = document.getElementById('red-button');
const greenButton = document.getElementById('green-button');
const yellowButton = document.getElementById('yellow-button');
const redBright = document.getElementById('red-lamp');
const greenBright = document.getElementById('green-lamp')
const yellowBright = document.getElementById('yellow-lamp')

redButton.addEventListener('click', function() {
    redBright.style.backgroundColor = 'red';
    greenBright.style.backgroundColor = 'rgb(5, 58, 5)';
    yellowBright.style.backgroundColor = 'rgb(61, 61, 4)';
});
greenButton.addEventListener('click', function(){
    greenBright.style.backgroundColor = 'green';
    redBright.style.backgroundColor = 'rgb(70, 6, 6)';
    yellowBright.style.backgroundColor = 'rgb(61, 61, 4)';
})
yellowButton.addEventListener('click', function(){
    yellowBright.style.backgroundColor = 'yellow';
    greenBright.style.backgroundColor = 'rgb(5, 58, 5)';
    redBright.style.backgroundColor = 'rgb(70, 6, 6)';
})
