// Agrega un listener al botón 'connect-btn' para gestionar la acción de clic
document.getElementById('connect-btn').addEventListener('click', function () {
    // Obtener el elemento que muestra el estado de la conexión
    var connectionStatus = document.getElementById('connection-status');
    // Cambiar el texto del elemento para reflejar que ahora está conectado
    connectionStatus.textContent = "Estado: Conectado";
    // Cambiar el color del texto a verde para indicar que la conexión es exitosa
    connectionStatus.style.color = "green";
    // Llamar a la función que simula la recepción de datos del sensor
    simulateSensorData();
});
// Función para simular la recepción de datos de un sensor
function simulateSensorData() {
    // Obtener el elemento que muestra los valores de los sensores
    var sensorValues = document.getElementById('sensor-values');
    // Establecer el contenido HTML del elemento con los valores actuales de los sensores
    sensorValues.innerHTML = "<p>Concentracion : 22m3</p><p>Gas : 45%</p>";
    // Obtener el contexto del canvas donde se graficará la tendencia de la temperatura
    var ctx = document.getElementById('trend-chart').getContext('2d');
    // Crear una nueva gráfica de línea en el contexto obtenido
    var chart = new Chart(ctx, {
        type: 'line', // Tipo de gráfica: línea
        data: {
            labels: ['Tiempo 1', 'Tiempo 2', 'Tiempo 3', 'Tiempo 4', 'Tiempo 5'], // Etiquetas del eje X
            datasets: [{
                    label: 'Concentracion de Gas (m3)', // Etiqueta del conjunto de datos
                    borderColor: 'green', // Color de la línea de la gráfica
                    data: [22, 23, 21, 22, 24] // Datos de temperatura
                }]
        },
        options: {
            responsive: true // Hace que la gráfica sea responsiva
        }
    });
}
