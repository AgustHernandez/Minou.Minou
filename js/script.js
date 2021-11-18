let carritoCompra = new carrito()
let taza = new producto("Taza", 900, 5)
let cesto = new producto("Cesto", 1200, 2)
let macetero = new producto("Macetero", 1500, 4)
let buzoMascotas = new producto("Buzo Mascotas", 1000, 8)
let camaMascotas = new producto("Cama Mascotas", 1900, 1)

//Productos que hay en stock
let productosStock = []
productosStock.push(taza)
productosStock.push(cesto)
productosStock.push(macetero)
productosStock.push(buzoMascotas)
productosStock.push(camaMascotas)

let continuar = prompt("Quiere agregar un producto? (Y/N)")
// Si no ingresa ni un Y (mayuscula o minuscula) ni una N (mayuscula o minuscula), pide que lo ingreses nuevamente 
while(continuar.toUpperCase() != "Y" && continuar.toUpperCase() != "N") {
    continuar = prompt("Quiere agregar un producto? (Y/N)")
}

while (continuar.toUpperCase() == "Y") 
{
    let compra = prompt("Que producto quiere comprar? (Taza / Cesto / Macetero / Buzo Mascotas / Cama Mascotas)")
    while(compra != productosStock[0].nombre && compra != productosStock[1].nombre && compra != productosStock[2].nombre && compra != productosStock[3].nombre && compra != productosStock[4].nombre) {
        alert("Por favor ingrese un producto válido")
        compra = prompt("Que producto quiere comprar? (Taza / Cesto / Macetero / Buzo Mascotas / Cama Mascotas)")
    }
    let posicionProducto = -1
    if (compra == productosStock[0].nombre) {
         posicionProducto = 0
    }

    if (compra == productosStock[1].nombre) {
         posicionProducto = 1
    }

    if (compra == productosStock[2].nombre) {
         posicionProducto = 2
    }

    if (compra == productosStock[3].nombre) {
         posicionProducto = 3
    }

    if (compra == productosStock[4].nombre) {
         posicionProducto = 4
    }

    if (productosStock[posicionProducto].stock > 0) {
        let cantidad = parseInt(prompt(`Cuantas unidades quiere comprar? (Max ${productosStock[posicionProducto].stock} unidades)`))

        while (cantidad > productosStock[posicionProducto].stock) {
            cantidad = parseInt(prompt(`No hay suficiente stock. Cuantas unidades quiere comprar? (Max ${productosStock[posicionProducto].stock} unidades)`))
            }
            carritoCompra.agregarProductos(productosStock[posicionProducto], cantidad)
    }
    
    else {
        alert("Producto sin stock")
    }
    continuar = prompt("Quiere agregar otro producto? (Y/N)")
    /* Si no ingresa ni un Y (mayuscula o minuscula) ni una N (mayuscula o minuscula), pide que lo ingreses nuevamente*/
    
    while(continuar.toUpperCase() != "Y" && continuar.toUpperCase() != "N") {
        continuar = prompt("Quiere agregar otro producto? (Y/N)")
    }
}

alert(`El total de su compra, sin envio, es ${carritoCompra.obtenerTotal()}. Para continuar con el cobro, le vamos a preguntar donde enviarlo y en que tiempo. Por favor, presione "Aceptar".`)

let provincia = prompt("Provincia a enviar [CABA / Gran Buenos Aires]:")
while(provincia != "CABA" && provincia != "Gran Buenos Aires") {
    alert("Por favor ingrese una provincia válida")
    provincia = prompt("Provincia a enviar:")
}

let tiempoEntrega = parseInt(prompt("Tiempo de entrega [24 / 72 hs]:"))
while(tiempoEntrega != 24 && tiempoEntrega != 72) {
    alert("Por favor ingrese un tiempo de entrega válido")
    tiempoEntrega = parseInt(prompt("Tiempo de entrega [24 / 72 hs]:"))
}

let costoDeEnvio = costoEnvio(carritoCompra.obtenerTotal(), provincia, tiempoEntrega)

alert(`Su compra será enviada a ${provincia}, en ${tiempoEntrega} hs. Esto representa un costo de envío de $${costoDeEnvio}. En total deberá abonar $${carritoCompra.obtenerTotal() + costoDeEnvio}`)

// Funciones costo envío

function costoEnvio (costoProducto, provincia, tiempoEntrega) {
    return costoSubtotal(costoProducto) + costoDistancia(provincia) + costoTiempoEntrega(tiempoEntrega, provincia)
}

function costoDistancia (provincia) {
    if (provincia === "CABA") {
        return 0
    }
    else {
        return 200
    }
}

function costoTiempoEntrega(tiempoEntrega, provincia) {
    if (provincia === "CABA") {
        return 0
    }
    if (tiempoEntrega === 24) {
        return 500
    }
    else {
        return 200
    }
}

function costoSubtotal(costoProducto) {
    if (costoProducto < 1000) {
        return 300
    }
    if (costoProducto >= 1000 && costoProducto < 5000) {
        return 200
    }
    if (costoProducto >= 5000) {
        return 0
    }
}

/*function cargarSubtotales()
{
    
    let table = document.getElementById("tabla")
    for(var i = 1,row; row = table.rows[i];i++)
    {
        let subtotalLinea = table.rows[i].cells[2].textContent.replace("$","").trim() * table.rows[1].cells[3].textContent.replace("$","").trim()
        let ivaLinea = producto.valorIVA()

        table.rows[i].cells[4].textContent = "$ "+ ivaLinea

        table.rows[i].cells[5].textContent = "$ " + (subtotalLinea + ivaLinea)
    }
}*/