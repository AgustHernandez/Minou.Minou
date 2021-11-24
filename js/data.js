function obtenerInventario() {
    let inventario = []
    inventario.push(new Producto("Taza de Ceramica", 900, 5, "taza", "producto1"))
    inventario.push(new Producto("Macetero Vertical", 1500, 4, "macetero", "producto2"))
    inventario.push(new Producto("Cesto para Guardado", 1200, 2, "cestoJuguetes", "producto3"))
    inventario.push(new Producto("Buzo para mascotas", 1000, 8, "buzoMascota", "producto4"))
    inventario.push(new Producto("Cama para mascotas", 1900, 3, "camaMascotas", "producto5"))
    inventario.push(new Producto("Camino para cama", 900, 5, "caminoCama", "producto6"))
    inventario.push(new Producto("Carameleros", 900, 10, "carameleros", "producto7"))
    inventario.push(new Producto("Maceta de Ceramica", 1200, 6, "maceta", "producto8"))
    inventario.push(new Producto("Maceta Autoriego", 700, 9, "macetaAutoriego", "producto9"))

    return inventario
}