const button = document.querySelector('.enable');
const button2 = document.querySelector('.hi');

// Función nombrada
function handleClick() {
    console.log('ME HICIERON CLICK!');
}

// Arrow function
const sayHi = () => console.log('Hola!!👋');

button.addEventListener('click', handleClick);
button2.addEventListener('click', sayHi);
