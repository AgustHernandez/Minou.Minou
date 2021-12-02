class Producto {
    constructor (code,nombre, precio, stock, nombreImg, nombreHTML) {
        this.code = code;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
        this.IVA = 0.21;
        this.nombreImg = nombreImg
        this.nombreHTML = nombreHTML
    }

    valorIVA(){
        return this.precio * this.IVA;
    }

    mostrarConIva()
    {
        return this.precio + this.valorIVA();
    }

    //Actualiza el stock en base a lo vendido
    actualizarStock(cantVendida) {
        this.stock += cantVendida
    }
}

class Carrito {
    constructor () {
        this.productos = []
    }

    vaciarCarrito() {
        this.productos = []
    }

    agregarProductos(producto, unidades) {
        let unidadesDisponibles = Math.min(unidades, producto.stock)
        producto.actualizarStock(-unidadesDisponibles)
        for (let i = 1; i <= unidadesDisponibles; i++) {
            this.productos.push(producto)
        }
    }

    verproductosCarrito() {
        let productoCarrito = " "
        
        return `
            <article class="col-lg-3 col-md-4 col-sm-4 col-8 cardProducto" id="inventario${indice}">
                <div class="card text-center bg-transparent">
                    <div>
                        <img class="card-img-top cardImgBorder" src="../assets/${productos[indice].nombreImg}.jpg" alt="${productos[indice].nombre}"></a>
                    </div>
                    <div class="card-body cardBorder text-center text-dark pt-5 cardFondo lh-lg">
                        <h4 class="card-title fs-3">${productos[indice].nombre}</h4>
                        <p class="card-text fs-4">$ ${productos[indice].cantidad}</p>
                        <p class="card-text fs-4">$ ${productos[indice].precio}</p>
                    </div>
                </div>
            </article>
        `
    }

    obtenerTotal() {
        let total = 0
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].mostrarConIva()
        }
        return total
    }
}


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