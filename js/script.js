let carritoCompra = new Carrito()

let inventario = obtenerInventario()
let articleProductos = document.getElementById('articleProductos')
let sectionProductos = document.getElementById('sectionProductos')
let pageAnt = document.getElementById('pageAnt')
let page1 = document.getElementById('page1')
let pageSig = document.getElementById('pageSig')
let page2 = document.getElementById('page2')
let pagProducto = document.getElementById('pagProducto')
//let elegirProducto = document.getElementById('inventario${indice}')
let botonComprar = document.getElementById('botonComprar')
let formProducto = document.getElementById('formProducto')
let cantidadProducto = document.getElementById('cantidad')
let precioProducto = document.getElementById('precioProducto')


if(window.location.href.includes("index.html"))
{
    imprimirProductosIndex(0, 6)
}

if( window.location.href.includes("productos.html"))
{
    imprimirProductos(0, 6)
    pageAnt.addEventListener("click", () => {
        limpiarProductos()
        imprimirProductos(0, 6)
    })
    page1.addEventListener("click", () => {
        limpiarProductos()
        imprimirProductos(0, 6)
    })
    pageSig.addEventListener("click", () => {
        limpiarProductos()
        imprimirProductos(7, 9)
    })
    page2.addEventListener("click", () => {
        limpiarProductos()
        imprimirProductos(7, 9)
    })
}


/*elegirProducto.addEventListener("click", () => {
    inventario.forEach((producto, indice) {
        pagProducto.innerHTML += `
            <article class="col-lg-4 col-md-6 col-sm-4" id="inventario${indice}">
                <div class="position-relative hiddenProduct">
                    <div>
                        <img src="../assets/${producto.nombreImg}.jpg" class="d-block w-100 border-img position-relative imgProducto" alt="${producto.nombre}">
                    </div>
                </div>
                <div class="text-center OverProducto">
                    <div class="textProducto">
                        <h5 class="display-5">${producto.nombre}</h5>
                        <p class="fs-5">Vienen en gris, amarillo, blanco y negro. El diseño es personalizable.</p>
                    </div>
                </div>
            </article>
            <article class="col-lg-4 col-md-6 col-sm-3 mb-5">
                <div>
                    <h4 class="display-4 m-5 text-center" id="tituloProducto">${producto.nombre}</h4>
                    <p class="text-center m-5 fs-3 lh-base">Diseño personalizable</p>
                </div>
                <div class="text-center gy-5">
                    <form action="#" method="#" id="formProducto">
                        <div class="row mb-3 position">
                            <label class="fs-4" for="cantidad">Cantidad:</label>
                            <select class="form-select fs-4 text-center w-sm-100 position casillero" name="cantidad" id="cantidad">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div class="row mb-3 position">
                            <label class="form-label fs-4" for="color">Color:</label>
                            <select class="form-select fs-4 text-center w-sm-100 position casillero" name="color" id="color">
                                <option value="gris">Gris</option>
                                <option value="amarillo">Amarillo</option>
                                <option value="blanco">Blanco</option>
                                <option value="negro">Negro</option>
                            </select>
                        </div>
                        <div class="d-inline-flex p-3   justify-content-center align-items-center w-100 gx mt-3">
                            <p class="fs-1 wdth text-center lh-base" id="precioProducto">$ ${producto.precio} 900</p>
                            <button class="btn btnProducto btn-lg buttonComprar m-3 id="botonComprar${indice}">Comprar</button>
                        </div>
                    </form>
                </div>
            </article>
        `
    }
)})*/

function imprimirProductosIndex(desde, hasta) {
    inventario.slice(desde, hasta).forEach((producto, indice) => {
        if (articleProductos != null) {
            articleProductos.innerHTML += `
                <article class="col-lg-3 col-md-4 col-sm-4 col-8 cardProducto" id="inventario${indice}">
                    <div class="card text-center bg-transparent">
                        <div>
                            <a href="./vistas/${producto.nombreHTML}.html"><img class="card-img-top cardImgBorder" src="../assets/${producto.nombreImg}.jpg" alt="${producto.nombre}"></a>
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

function limpiarProductos() {
    sectionProductos.innerHTML = ""
}

function imprimirProductos(desde, hasta) {
    inventario.slice(desde, hasta).forEach((producto, indice) => {
        if (sectionProductos != null) {
            sectionProductos.innerHTML += `
                <article class="col-lg-3 col-md-4 col-sm-4 col-8 cardProducto" id="inventario${indice}">
                    <div class="card text-center bg-transparent">
                        <div>
                            <a href="../vistas/${producto.nombreHTML}.html" id="elegirProducto"><img class="card-img-top cardImgBorder" src="../assets/${producto.nombreImg}.jpg" alt="${producto.nombre}"></a>
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

cantidadProducto.addEventListener("change", () => {
    if (cantidadProducto != null) {
        let nombreProducto = document.getElementById('tituloProducto').textContent
        let precio = inventario.filter(producto => producto.nombre == nombreProducto)[0].precio
        let cantidad = parseInt(document.getElementById('cantidad').value)
        document.getElementById('precioProducto').textContent = `$ ${cantidad * precio}`
    }
})



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