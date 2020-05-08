// Events - targets, bubbling, propagation and capture

// Selecciono los botones
const superPowerButtons = document.querySelectorAll('button.enable'); // Botones con la clase "enable"
// console.log(superPowerButtons);

// Creo el callbak (la función que va a ejecutar la acción)
function handleSuperPowerButtonClick(event) {
    // console.log(event.target.dataset.pollito);
    // console.log(event.target, event.currentTarget );
    const power = event.target.textContent;
    console.log(`Superpoder ${power} Activado! 👊`);
    event.stopPropagation();
}

// Agrego el evento a cada uno de los botones
superPowerButtons.forEach(function(superPowerButton){
    superPowerButton.addEventListener('click', handleSuperPowerButtonClick);
});

// La misma estructura funciona para el método removeEventListener
/* superPowerButtons.forEach( (superPowerButton) => {
    superPowerButton.removeEventListener('click', handleSuperPowerButtonClick);
}); */

// Agregar un event listener al navegador como tal (window)
window.addEventListener('click', function(event){
    console.log('CLICK EN WINDOW');
});
