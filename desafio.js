let chart;
    let conectado = false;

    // Función para crear el gráfico
    function crearGrafico() {
        const ctx = document.getElementById('grafico-sensor').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [], // Etiquetas de tiempo
                datasets: [{
                    label: 'Temperatura',
                    data: [],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false
                }, {
                    label: 'Humedad',
                    data: [],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'second'
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Función para simular la recepción de datos del sensor
    function actualizarDatos() {
        if (!conectado) return;
        
        // Datos simulados (en una aplicación real, estos vendrían del sensor)
        const temperatura = Math.random() * (30 - 15) + 15;
        const humedad = Math.random() * (100 - 40) + 40;
        const tiempo = new Date();

        // Actualizar tabla
        document.getElementById('valor-temperatura').innerText = temperatura.toFixed(2) + ' °C';
        document.getElementById('valor-humedad').innerText = humedad.toFixed(2) + ' %';

        // Añadir datos al gráfico
        chart.data.labels.push(tiempo);
        chart.data.datasets[0].data.push(temperatura);
        chart.data.datasets[1].data.push(humedad);
        chart.update();
    }

    // Simular conexión al dispositivo
    document.getElementById('btn-conectar').addEventListener('click', () => {
        if (!conectado) {
            conectado = true;
            document.getElementById('estado-conexion').innerText = 'Estado: Conectado';
            setInterval(actualizarDatos, 2000); // Actualizar datos cada 2 segundos
        }
    });

    // Inicializar gráfico
    crearGrafico();