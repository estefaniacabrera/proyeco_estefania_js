/////////////////////////////////////
let personasSuscriptas = [];

const inputNombre = document.getElementById('nombreUsuario');
const inputEmail = document.getElementById('mailUsuario');
const inputSugerencia = document.getElementById('sugerenciaUsuario');

const botonSubmitir = document.getElementById('botonUsuario');
const LISTADO_RENDER = document.getElementById('body_table');

botonSubmitir.addEventListener('click', function (e) {
    e.preventDefault();
    const NOMBRE = inputNombre.value;
    const EMAIL = inputEmail.value;
    const SUGERENCIA = inputSugerencia.value;
    const agregarPersona = { nombre: NOMBRE, mail: EMAIL, sugerencia: SUGERENCIA };

    if (Object.values(agregarPersona).filter((value) => !value).length > 0) {
        return alert('Completa todos los campos');
    }

    personasSuscriptas.push(agregarPersona);
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    for (const personas of personasSuscriptas) {
        guardarLocal(agregarPersona.nombre, JSON.stringify(personas));
    }
    inputNombre.value = '';
    inputEmail.value = '';
    inputSugerencia.value = '';
    RenderListado(personasSuscriptas);

});

const RenderListado = (listado) => {
    let ultimoElemento = LISTADO_RENDER.lastElementChild;

    while (ultimoElemento) {
        LISTADO_RENDER.removeChild(ultimoElemento);
        ultimoElemento = LISTADO_RENDER.lastElementChild;
    }

    return listado.forEach((persona) => {
        const crearTr = document.createElement('tr');
        const crearNombreTD = document.createElement('td');
        crearNombreTD.textContent = persona.nombre;
        const crearMailTD = document.createElement('td');
        crearMailTD.textContent = persona.mail;
        const crearSugerenciaTD = document.createElement('td');
        crearSugerenciaTD.textContent = persona.sugerencia;

        crearTr.appendChild(crearNombreTD);
        crearTr.appendChild(crearMailTD);
        crearTr.appendChild(crearSugerenciaTD);
        LISTADO_RENDER.appendChild(crearTr);

    });
};


