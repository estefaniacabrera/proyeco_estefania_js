class Sugerencia {
    constructor(nombre, mail, sugerencia) {
        this.nombre = nombre;
        this.mail = mail;
        this.sugerencia = sugerencia;
    }
}

let personasSuscriptas = [];

const imprimirNota = (element) => {
    let personasSuscriptas = JSON.parse(localStorage.getItem("sugerencia"))
    personasSuscriptas.forEach(element => {
        $("#body_table").append(`
        <tr>
        <td>${element.nombre}</td>
        <td>${element.mail}</td>
        <td>${element.sugerencia}</td>
        </tr>
        `)
    });

};
$("#botonUsuario").on("click", (event) => {
    event.preventDefault();
    personasSuscriptas.push(new Sugerencia($("#nombreUsuario").val(), $("#mailUsuario").val(), $("#sugerenciaUsuario").val()));
    localStorage.setItem("sugerencia", JSON.stringify(personasSuscriptas))
    $("#nombreUsuario").val('');
    $("#mailUsuario").val('');
    $("#sugerenciaUsuario").val('');
    $('#body_table').empty();
    imprimirNota(personasSuscriptas)

})
