let precioUnitario = 900
let cantProducto = 2
let IVA = calculoIVA(precioUnitario * cantProducto)
let subtotalProd = sumaSubtotal(cantProducto, precioUnitario)

let provincia = "CABA"
let tiempoEntrega = 24
let costoDeEnvio = costoEnvio(subtotalProd, provincia, tiempoEntrega)

function calculoIVA(producto) {
    const IVA = 0.21
    return producto * IVA
}

function sumaSubtotal (cantProducto, precioUnitario) {
    let subtotalSinIVA = cantProducto * precioUnitario
    return subtotalSinIVA + calculoIVA(subtotalSinIVA)
}

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

function cargarSubtotales()
{
    
    let table = document.getElementById("tabla")
    for(var i = 1,row; row = table.rows[i];i++)
    {
        let subtotalLinea = table.rows[i].cells[2].textContent.replace("$","").trim() * table.rows[1].cells[3].textContent.replace("$","").trim()
        let ivaLinea = calculoIVA(subtotalLinea)

        table.rows[i].cells[4].textContent = "$ "+ ivaLinea

        table.rows[i].cells[5].textContent = "$ " + (subtotalLinea + ivaLinea)
    }
}

console.log(sumaSubtotal(producto1,calculoIVA(producto1)))

