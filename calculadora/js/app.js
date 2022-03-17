let operacionPrevia = document.getElementById('operacionPrevia')
let operacionActual = document.getElementById('operacionActual')
let botones = document.getElementById('teclas')
const tecla = document.querySelectorAll('#teclas button')

let numero1;
let numero2;
const contenedorNumero = []
const ejecucionDeOperacion = (e) => {
    switch (e.target.name) {
        case 'uno':
            pintatarOperracion(1)
            break;
        case 'dos':
            pintatarOperracion(2)
            break;
        case 'tres':
            pintatarOperracion(3)
            break;
        case 'cuatro':
            pintatarOperracion(4)
            break;
        case 'cinco':
            pintatarOperracion(5)
            break;
        case 'seis':
            pintatarOperracion(6)
            break;
        case 'siete':
            pintatarOperracion(7)
            break;
        case 'ocho':
            pintatarOperracion(8)
            break;
        case 'nueve':
            pintatarOperracion(9)
            break;
        case 'cero':
            pintatarOperracion(0)
            break;
        case 'dobleCero':
            pintatarOperracion(0)
            break;
        case 'sumar':
            singno('+')
            pintatarOperracionPrevia("+")
            break;
        case 'dividir':
            pintatarOperracionPrevia("÷")
            singno("/")
            break;
        case 'mul':
            pintatarOperracionPrevia("×")
            singno("*")
            break;
        case 'rest':
            pintatarOperracionPrevia("-")
            singno("-")
            break;
        case 'punto':
            pintatarOperracion(".")
            break;
        case 'igual':
            solucionDeOperacion()
            break;
        case 'AC':
            eliminar()
            break;
    }

}

const pintatarOperracion = (dijito) => {
    let numero = dijito;
    operacionActual.value += numero
    pintatarOperracionPrevia(dijito)
}

const pintatarOperracionPrevia = (g) => {
    let mm = g
    operacionPrevia.innerHTML += mm
}

const singno = (o) => {
    numero1 = operacionActual.value;
    contenedorNumero.push(parseFloat(numero1))
    operacionActual.value = ''
    numero2 = o
}

function operaciones() {
    if (contenedorNumero.length >= 2 && numero2 == '+') {

        const valor = (a, b) => a + b;
        const suma = contenedorNumero.reduce(valor);
        operacionActual.value = suma;
    }
    if (contenedorNumero.length >= 2 && numero2 == "-") {
        const valor = (a, b) => a - b;
        const resta = contenedorNumero.reduce(valor);
        operacionActual.value = resta;
    }
    if (contenedorNumero.length == 2 && numero2 == "/") {
        let divicion = contenedorNumero[0] / contenedorNumero[1]
        operacionActual.value = divicion;
    }
    if (contenedorNumero.length >= 2 && numero2 == "*") {
        const valor = (a, b) => a * b;
        const mul = contenedorNumero.reduce(valor);
        operacionActual.value = mul;
    }
}

const solucionDeOperacion = () => {
    numero1 = operacionActual.value;
    contenedorNumero.push(parseFloat(numero1))
    operacionActual.value = ''
    operaciones()
    operacionPrevia.innerHTML += "="
}

const eliminar = () => {
    contenedorNumero.splice(0)
    operacionActual.value = ''
    operacionPrevia.innerHTML = ''
}

tecla.forEach((input) => {
    input.addEventListener('click', ejecucionDeOperacion);
});