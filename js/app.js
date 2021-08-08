let driverTaylor = "1 = Driver Taylormade Sim 2";
let wedge = "2 = Wedge Titleist SM8";
let putterSpider = "3 = Putter Taylormade Spider FCG"
let hierrosTaylorM2 = "4= Set Hierros Taylor Made M2"
let hierrosSim2 = "5= Set De Hierros Taylor Made Sim Max Os"
let bolsaTitleist = "6= Bolsa Titleist Players 4 Plus"

let nombre = prompt("Como te llamás?");
let apellido = prompt("Cuál es tu apellido?")

function saludar(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    alert(" Bienvenido/a " + this.nombre + " " + this.apellido);
}

saludar(nombre, apellido);

let buscar = prompt("Que querés comprar? " + driverTaylor + " / " + wedge + " / " + putterSpider + " / " + hierrosTaylorM2 + " / " + hierrosSim2 + " / " + bolsaTitleist);

function comprar(precio1, precio2, precio3, precio4, precio5, precio6) {
    switch (buscar) {
        case "1":
            confirm("Usted desea comprar " + "" + driverTaylor + "?");
            if (comprar1 = true) {
                return precio1;
            } else {
                alert("Te esperamos en otro momento");
            }
            break;
        case "2":
            confirm("Usted desea comprar " + "" + wedge + "?");
            if (comprar2 = true) {
                return precio2;
            } else {
                alert("Te esperamos en otro momento");
            }
            break;
        case "3":
            confirm("Usted desea comprar " + "" + putterSpider);
            if (comprar3 = true) {
                return precio3;
            } else {
                alert("Te esperamos en otro momento");
            }
            break;
        case "4":
            confirm("Usted desea comprar " + "" + hierrosTaylorM2);
            if (comprar4 = true) {
                return precio4;
            } else {
                alert("Te esperamos en otro momento");
            }
            break;
        case "5":
            confirm("Usted desea comprar " + "" + hierrosSim2);
            if (comprar5 = true) {
                return precio5;
            } else {
                alert("Te esperamos en otro momento");
            }
            break;
        case "6":
            confirm("Usted desea comprar " + "" + bolsaTitleist);
            if (compra6 = true) {
                return precio6;
            } else {
                alert("Te esperamos en otro momento");
            }
            break;
        default:
            alert("No existe el producto ingresado");
            break;
    }
}
confirm("El precio total es de $" + comprar(87990, 24150, 45900, 130830, 179850, 44000));