// Obtener elementos del DOM
const formEntrada = document.getElementById('formEntrada');
const cantidadInput = document.getElementById('cantidad');
const monedaSalidaSelect = document.getElementById('monedaSalida');
const btnConvertir = document.getElementById('btnConvertir');
const resultadoInput = document.getElementById('resultado');
const errorMensaje = document.getElementById('error');

// Agregar evento de submit al formulario
formEntrada.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir envío del formulario

    // Obtener valores del formulario
    const cantidad = parseFloat(cantidadInput.value);
    const monedaSalida = parseFloat(monedaSalidaSelect.value);

    // Validar que se haya ingresado una cantidad válida
    if (isNaN(cantidad) || cantidad <= 0) {
        errorMensaje.textContent = 'Por favor, introduce una cantidad válida.';
        resultadoInput.value = '';
    } else {
        // Realizar la conversión de moneda
        let resultado = 0;
        switch (monedaSalida) {
            case 1: // USD
                resultado = cantidad * 1.1; // Tasa de cambio EUR a USD
                break;
            case 2: // GBP
                resultado = cantidad * 0.9; // Tasa de cambio EUR a GBP
                break;
            case 3: // ARS
                resultado = cantidad * 245; // Tasa de cambio EUR a ARS
                break;
            default:
                resultado = 0;
                break;
        }

        // Mostrar el resultado
        errorMensaje.textContent = '';
        resultadoInput.value = resultado.toFixed(2); // Mostrar el resultado con 2 decimales
        // Mostrar el resultado en la consola
        console.log('El resultado es:', resultado.toFixed(2));
    }
});
