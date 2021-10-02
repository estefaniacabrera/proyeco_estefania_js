
class Productos {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}
const item1 = new Productos(1, "Driver Taylormade Sim", 87990);
const item2 = new Productos(2, "Wedge Titleist SM8", 24150);
const item3 = new Productos(3, "Putter Taylormade Spider FCG", 45900);
const item4 = new Productos(4, "Set Hierros Taylor Made M2", 130830);
const item5 = new Productos(5, "Set De Hierros Taylor Made Sim Max Os", 179850);
const item6 = new Productos(6, "Bolsa Titleist Players 4 Plus", 44000);
let carrito = [];
let preciosCarrito = [];
var precioInicial = 0
let btn = document.getElementById("boton-compra");
let mostrarCarrito = document.getElementById("mostrarCarrito");
function comprar() {
    var valoresCompra = document.getElementById('select').value;
    switch (valoresCompra) {
        case "1":
            carrito.push(item1);
            preciosCarrito.push(item1.precio)
            break;
        case "2":
            carrito.push(item2);
            preciosCarrito.push(item2.precio)
            break;
        case "3":
            carrito.push(item3);
            preciosCarrito.push(item3.precio)
            break;
        case "4":
            carrito.push(item4);
            preciosCarrito.push(item4.precio)
            break;
        case "5":
            carrito.push(item5);
            preciosCarrito.push(item5.precio)
            break;
        case "6":
            carrito.push(item6);
            preciosCarrito.push(item6.precio)
            break;
    }
    console.log(carrito);
    console.log(preciosCarrito);
    const sumarPrecios = () => {
        for (let index = 0; index < preciosCarrito.length; index++) {
            precioInicial += preciosCarrito[index];
            console.log(precioInicial);
        }
        return precioInicial
    }
    sumarPrecios();
    const div_nombre_bienvenida = document.querySelector('.productosCarrito');
    const div_contenedor = document.createElement('div');
    div_contenedor.className = "carrito"
    const div_precio = document.createElement('div');
    div_precio.className = "precio_pedido"
    const p_precio = document.createElement('p');
    p_precio.className = "precio_p"

    div_contenedor.appendChild(div_precio);
    div_precio.appendChild(p_precio);
    div_nombre_bienvenida.appendChild(div_contenedor);
    const renderizarPrecioFinal = (precioInicial) => {
        p_precio.textContent = `El total de su carrito es $ ${precioInicial}`;
    };
    renderizarPrecioFinal(precioInicial)
}
comprar();
btn.addEventListener("click", function () {
    let eliminoCarrito = document.querySelector('.carrito');
    let eliminoPrecio = document.querySelector('.precio_p');
    eliminoCarrito.parentNode.removeChild(eliminoCarrito);
    eliminoPrecio.parentNode.removeChild(eliminoPrecio);
    comprar()
})
