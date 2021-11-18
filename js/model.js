class producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
        this.IVA = 0.21;
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

class carrito {
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

    obtenerTotal() {
        let total = 0
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].mostrarConIva()
        }
        return total
    }
}