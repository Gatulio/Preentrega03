const cigarrillos = [
    {
        marca: 'Phillips Morris',
        precio: 700
    },
    {
        marca: 'Marlboro',
        precio: 750
    },
    {
        marca: 'Camel',
        precio: 650
    }
]

const cigarrosLista = document.getElementById('productos-lista')
let cigarrosComprados = []

const agregarCigarro = (index, atados) => {
    let precio = cigarrillos[index].precio
    let subtotal = precio * atados

    const cigarroAgregado = document.createElement('li')
    cigarroAgregado.textContent = `Has agregado ${atados} atado de ${cigarrillos[index].marca} por un total de $${subtotal}`
    cigarrosLista.appendChild(cigarroAgregado)

    cigarrosComprados.push({ marca: cigarrillos[index].marca, atados, subtotal })
}

const finalizarCompra = () => {
    let totalAtados = 0
    let valorTotal = 0

    for (const producto of cigarrosComprados) {
        totalAtados += producto.atados
        valorTotal += producto.subtotal
    }

    alert(`Has comprado ${totalAtados} atado(s) en total. El valor total de la compra es de $${valorTotal}.`)
    alert('Muchas gracias por su compra!')

    cigarrosLista.innerHTML = ''
    cigarrosComprados.length = 0
}

document.getElementById('btn-phillips').addEventListener('click', () => {
    agregarCigarro(0, 1)
})

document.getElementById('btn-marlboro').addEventListener('click', () => {
    agregarCigarro(1, 1)
})

document.getElementById('btn-camel').addEventListener('click', () => {
    agregarCigarro(2, 1)
})

document.getElementById('btn-finalizar').addEventListener('click', finalizarCompra)

alert('Buenas noches, esto es una tienda de cigarrillos.')