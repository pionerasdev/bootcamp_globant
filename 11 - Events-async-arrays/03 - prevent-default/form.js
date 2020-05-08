const homepage = document.querySelector('.homepage');
const form = document.querySelector('[name="signup"]');

homepage.addEventListener('click', function(event){
    const shoulChange = confirm('Quieres comprar cositas?');
    if (!shoulChange) {
        event.preventDefault();
    }
});


// Agreagmos un evento para que permita hacer submit del formulario
// sólo si el nombre contiene 'paula' en el
form.addEventListener('submit', function(event){
    const name = event.currentTarget.name.value;
    if (!name.includes('paula')) {
        event.preventDefault();
        alert('Sorry :(');
    }
});

