
const botonTema = document.querySelector('#alternar-tema');


botonTema.addEventListener('click', () => {
   
    document.body.classList.toggle('modo-oscuro');
    
    if (document.body.classList.contains('modo-oscuro')) {
        botonTema.textContent = "Modo Claro";
    } else {
        botonTema.textContent = "Modo Oscuro";
    }
});

const mostrarProyectos = () => {
    const tarjetas = document.querySelectorAll('.tarjeta');
    const alturaPantalla = window.innerHeight * 0.8;

    tarjetas.forEach(tarjeta => {
        const distanciaTop = tarjeta.getBoundingClientRect().top;
        
        if (distanciaTop < alturaPantalla) {
            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', mostrarProyectos);