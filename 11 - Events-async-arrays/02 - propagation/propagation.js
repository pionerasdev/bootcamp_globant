// Events - targets, bubbling, propagation and capture
const superPowerButtons = document.querySelectorAll('button.enable'); // Botones con la clase "enable"

function handleSuperPowerButtonClick() {
    console.log('Superpoder Activado! 👊');
}

superPowerButtons.forEach(function(button) {
    button.addEventListener('click', handleSuperPowerButtonClick);
});
