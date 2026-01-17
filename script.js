
const botonTema = document.querySelector('#alternar-tema');


botonTema.addEventListener('click', () => {
   
    document.body.classList.toggle('modo-oscuro');
    
    if (document.body.classList.contains('modo-oscuro')) {
        botonTema.textContent = "Modo Claro";
    } else {
        botonTema.textContent = "Modo Oscuro";
    }
});