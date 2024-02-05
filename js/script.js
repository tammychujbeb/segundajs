function showMessage() {
  alert("Gracias por entrar A Burger cool")};

  let nombreUsuario = prompt("Ingrese su nombre")
  console.log()
  alert("Hola" + " " + nombreUsuario)

  let edad = prompt("Ingrese su edad para chequear si te podemos vender alcohol");

  if (edad >= 18) {
    alert("Podes comprar alcohol");
  } else {
    alert("Sos menor, no poder comprar Alcohol")
  }
  const productos = [
    {id:1, nombre:"Burger Cheese",  precio:2500},
    {id:2, nombre:"Burger Cool", precio:3250},
    {id:3, nombre:"Burger Bacon", precio:2650},
    {id:4, nombre:"Burger Juancho",  precio:2900},
    {id:5, nombre:"Coca Cola Chica", precio:1300},
    {id:6, nombre:"Coca Cola Grande",  precio:1700},
    {id:7, nombre:"Papas Chicas",  precio:1900},
    {id:8, nombre:"Papas Grandes",  precio:2100},
    {id:9, nombre:"Cerveza Lata",  precio:1000},
    {id:10, nombre:"Cerveza 1lt",  precio:1500},
    {id:11, nombre:"Champagne Chandon",  precio:2400},
    {id:12, nombre:"Champagne Baron B",  precio:4100}, ]


class Carrito {
    constructor() {
        this.productos = [];
        this.descuento = 10;
        this.maxProductosParaDescuento = 3;
        this.totalPagar = 0;
    }

    agregarProducto(id) {
        let producto = productos.find(prod => prod.id === id);
        console.log(producto);

        if (producto) {
            this.productos.push(producto);
            console.log("Agregaste el Producto #" + id + " al Carrito!");
        } else {
            console.log("No se encontró el Producto con #" + id + "!");
        }
    }

    listarCarrito() {
        let salida = "";
    
        this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
        })
    
        return salida;
    }

    calcularTotalProductos() {
        return this.productos.length;
    }

    promoDescuento() { 
        if (this.calcularTotalProductos() >= this.maxProductosParaDescuento) {
            return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
        } else {
            return 0;
        }
    }

    calcularTotalPagar() {
        let total = 0;

        this.productos.forEach(item => {
           total += item.precio;
        });

        return total;
        
       
    }
}

function listarProductos() {
    let salida = "";

    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
    })

    return salida;
}



const carrito = new Carrito();
let  pedidoCarrito= 10;

while (pedidoCarrito != 0) {
  pedidoCarrito= parseInt(prompt("Seleccione el producto a agregar al Carrito: (0 para Salir)\n\n" + listarProductos()));

    if (pedidoCarrito == 0) {
        break;
    }

    carrito.agregarProducto(pedidoCarrito);
}

let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento Por comprar mas de 3 productos: $" + carrito.promoDescuento();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.promoDescuento());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal);








//******************************** ESTO ES DE LA PRIMER ENTREGA LO SAQUE PORQUE LO AMPLIÉ Y ME GUSTO MAS LO DE ARRIBA ******************//
//   let tuTotal = 1000

//   let tuPedido = prompt("Hace tu pedido" + " " + nombreUsuario + "\n1-Burger Cheese \n2-Burger Bacon \n3-Burger Cool \n4- Tu total\n5- Presione X para salir")
//   while (tuPedido != "x" && tuPedido != "X") {
//     switch (tuPedido) {
//       case "1": alert(" Burger Cheese Buena elección")
//         console.log("burger Cheese")
//         break
//       case "2": alert("Burger Bacon, Buena elección")
//         console.log("burger Bacon")
//         break
//       case "3": alert("Burger Cool, Buena elección")
//         console.log("burger Cool")
//         break
//       case "4": pagarTutotal()
//     }
//     tuPedido = prompt("\n1-Burger cheese \n2-Burger Bacon \n3-Burger cool \n4- Tu total \n5- presione X para salir")


//     function pagarTutotal() {

//       let pago = parseInt(prompt("con cuanto abonas?"))

//       if (tuTotal <= pago || pago <= tuTotal && pago == tuPedido) {
//         pago -= tuTotal
//         alert("Tu pago fue exitoso, tu vuelto es " + pago)
//       }
//       else {
//         alert("No tenes plata")
//       }

//     }
//   }

// }


 

 