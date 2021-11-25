let carritoCompra = new Carrito()

let inventario = obtenerInventario()
let articleProductos = document.getElementById('articleProductos')
let formProducto = document.getElementById('formProducto')
let cantidadProducto = document.getElementById('cantidad')
let precioProducto = document.getElementById('precioProducto')

imprimirProductos(0, 6)

cantidadProducto.addEventListener("change", () => {
    let nombreProducto = document.getElementById('tituloProducto').textContent
    let precio = inventario.filter(producto => producto.nombre == nombreProducto)[0].precio
    let cantidad = parseInt(document.getElementById('cantidad').value)
    document.getElementById('precioProducto').textContent = `$ ${cantidad * precio}`
})



function imprimirProductos(desde, hasta) {
    inventario.slice(desde, hasta).forEach((producto, indice) => {
        if (articleProductos != null) {
            articleProductos.innerHTML += `
                <article class="col-lg-3 col-md-4 col-sm-4 col-8 cardProducto" id="inventario${indice}">
                    <div class="card text-center bg-transparent">
                        <div>
                            <a href="../vistas/${producto.nombreHTML}.html"><img class="card-img-top cardImgBorder" src="../assets/${producto.nombreImg}.jpg" alt="${producto.nombre}"></a>
                        </div>
                        <div class="card-body cardBorder text-center text-dark pt-5 cardFondo lh-lg">
                            <h4 class="card-title fs-3">${producto.nombre}</h4>
                            <p class="card-text fs-4">$ ${producto.precio}</p>
                        </div>
                    </div>
                </article>
            `
        }
    })
}

/*formProducto.addEventListener("submit", (e) => {
    e.preventDefault()
    let cantidad = document.getElementById('cantidad').value
    let precio = document.getElementById('precioProducto').value
    document.getElementById('precioProducto').value = cantidad * precio
})*/

/*function cargarProdCarrito() {
    inventario.forEach((producto, indice) => {
        articleProductos.innerHTML += `
        <article class="col-lg-3 col-md-4 col-sm-4 col-8 cardProducto" id="inventario${indice}">
            <div class="card text-center bg-transparent">
                <div>
                    <a href="../vistas/${producto.nombreHTML}.html"><img class="card-img-top cardImgBorder" src="../assets/${producto.nombreImg}.jpg" alt="${producto.nombre}"></a>
                </div>
                <div class="card-body cardBorder text-center text-dark pt-5 cardFondo lh-lg">
                    <h4 class="card-title fs-3">${producto.nombre}</h4>
                    <p class="card-text fs-4">$ ${producto.precio}</p>
                </div>
            </div>
        </article>
        `
    })
}

/*let tabla = document.getElementById("tabla")
function cargarSubtotales() {
    for(let i = 1, row; row = tabla.rows[i]; i++) {
        let subtotalLinea = tabla.rows[i].cells[2].textContent.replace("$","").trim() * tabla.rows[1].cells[3].textContent.replace("$","").trim()
        
        let ivaLinea = Producto.valorIVA()
        tabla.rows[i].cells[4].textContent = "$ "+ ivaLinea
        tabla.rows[i].cells[5].textContent = "$ " + (subtotalLinea + ivaLinea)
    }
}


/*let continuar = prompt("Quiere agregar un producto? (Y/N)")
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

    /*while(continuar.toUpperCase() != "Y" && continuar.toUpperCase() != "N") {
        continuar = prompt("Quiere agregar otro producto? (Y/N)")
    }
}*/

/*function cargarProducto(producto, cantidad) {
    let producto = prompt("Que producto quiere comprar?")

}*/

/*function imprimirProductos(desde, hasta) {
    inventario.slice(desde, hasta).forEach((producto, indice) => {
        articleProductos.innerHTML += `
        <article class="col-lg-3 col-md-4 col-sm-4 col-8 cardProducto" id="inventario${indice}">
            <div class="card text-center bg-transparent">
                <div>
                    <a href="../vistas/${producto.nombreHTML}.html"><img class="card-img-top cardImgBorder" src="../assets/${producto.nombreImg}.jpg" alt="${producto.nombre}"></a>
                </div>
                <div class="card-body cardBorder text-center text-dark pt-5 cardFondo lh-lg">
                    <h4 class="card-title fs-3">${producto.nombre}</h4>
                    <p class="card-text fs-4">$ ${producto.precio}</p>
                </div>
            </div>
        </article>
        `
    })
}

imprimirProductos(0, 6)*/


/*function cargarProdCarrito() {
    inventario.forEach((producto, indice) => {
        articleProductos.innerHTML += `
        <article class="col-lg-3 col-md-4 col-sm-4 col-8 cardProducto" id="inventario${indice}">
            <div class="card text-center bg-transparent">
                <div>
                    <a href="../vistas/${producto.nombreHTML}.html"><img class="card-img-top cardImgBorder" src="../assets/${producto.nombreImg}.jpg" alt="${producto.nombre}"></a>
                </div>
                <div class="card-body cardBorder text-center text-dark pt-5 cardFondo lh-lg">
                    <h4 class="card-title fs-3">${producto.nombre}</h4>
                    <p class="card-text fs-4">$ ${producto.precio}</p>
                </div>
            </div>
        </article>
        `
    })
}

/*let tabla = document.getElementById("tabla")
function cargarSubtotales() {
    for(let i = 1, row; row = tabla.rows[i]; i++) {
        let subtotalLinea = tabla.rows[i].cells[2].textContent.replace("$","").trim() * tabla.rows[1].cells[3].textContent.replace("$","").trim()
        
        let ivaLinea = Producto.valorIVA()
        tabla.rows[i].cells[4].textContent = "$ "+ ivaLinea
        tabla.rows[i].cells[5].textContent = "$ " + (subtotalLinea + ivaLinea)
    }
}


/*let continuar = prompt("Quiere agregar un producto? (Y/N)")
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

    /*while(continuar.toUpperCase() != "Y" && continuar.toUpperCase() != "N") {
        continuar = prompt("Quiere agregar otro producto? (Y/N)")
    }
}*/

/*function cargarProducto(producto, cantidad) {
    let producto = prompt("Que producto quiere comprar?")

}*/
















/*
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
    /*
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

alert(`Su compra será enviada a ${provincia}, en ${tiempoEntrega} hs. Esto representa un costo de envío de $${costoDeEnvio}. En total deberá abonar $${carritoCompra.obtenerTotal() + costoDeEnvio}`)*/