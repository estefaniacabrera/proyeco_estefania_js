let nombreUsuario = prompt("Como te llamás?");
let apellidoUsuario = prompt("Cuál es tu apellido?")

function saludar(nombre, apellido) {
    alert(" Bienvenido/a " + nombre + " " + apellido);
}

saludar(nombreUsuario, apellidoUsuario);

let driverTaylor = "1 = Driver Taylormade Sim";
let wedge = "2 = Wedge Titleist SM8";
let putterSpider = "3 = Putter Taylormade Spider FCG"
let hierrosTaylorM2 = "4= Set Hierros Taylor Made M2"
let hierrosSim2 = "5= Set De Hierros Taylor Made Sim Max Os"
let bolsaTitleist = "6= Bolsa Titleist Players 4 Plus"

function comprar(precio1, precio2, precio3, precio4, precio5, precio6) {
    let buscar = prompt("Que querés comprar? Ingrese el número correspondiente: " + driverTaylor + " / " + wedge + " / " + putterSpider + " / " + hierrosTaylorM2 + " / " + hierrosSim2 + " / " + bolsaTitleist);
    switch (buscar) {
        case "1":
            return precio1;
        case "2":
            return precio2;
        case "3":
            return precio3;
        case "4":
            return precio4;
        case "5":
            return precio5;
        case "6":
            return precio6;
        default:
            alert("No existe el producto ingresado");
            break;
    }
}

primerCompra = true;
let precioInicial = 0;

while (primerCompra) {
    let nuevaCompra = comprar(87990, 24150, 45900, 130830, 179850, 44000);
    precioInicial = precioInicial + nuevaCompra;
    console.log(precioInicial);
    primerCompra = confirm("Usted desea comprar otro producto?");

}

alert("El total de su carrito es de $ " + precioInicial);