document.getElementById('connect-btn').addEventListener('click', function() {

    const connectionStatus = document.getElementById('connection-status');
    connectionStatus.textContent = "Estado: Conectado";
    connectionStatus.style.color = "green";
   
    simulateSensorData();
});


function simulateSensorData() {
    const sensorValues = document.getElementById('sensor-values');
    sensorValues.innerHTML = "<p>Temperatura: 22°C</p><p>Humedad: 45%</p>";
    

    let ctx = document.getElementById('trend-chart').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Tiempo 1', 'Tiempo 2', 'Tiempo 3', 'Tiempo 4', 'Tiempo 5'],
            datasets: [{
                label: 'Temperatura (°C)',
                borderColor: 'green',
                data: [22, 23, 21, 22, 24]
            }]
        },
        options: {
            responsive: true
        }
    });
}