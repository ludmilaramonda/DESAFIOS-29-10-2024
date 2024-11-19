// Añade un listener al botón 'connect-btn' para manejar la acción de clic.
document.getElementById('connect-btn').addEventListener('click', function () {
    var connectionStatus = document.getElementById('connection-status');
    var portsSelect = document.getElementById('ports');
});
document.getElementById('disconnect-btn').addEventListener('click', function () {
    var connectionStatus = document.getElementById('connection-status');
    var disconnectButton = document.getElementById('disconnect-btn');
    var connectButton = document.getElementById('connect-btn');
    // Verificar si se ha seleccionado un puerto válido.
    var portsSelect = document.getElementById('ports');
    if (portsSelect.value !== "" && portsSelect.value !== "Elige un puerto") {
        connectionStatus.textContent = "Estado: Conectado";
        connectionStatus.style.color = "green";
        alert("Puerto ".concat(portsSelect.value, " seleccionado y conectado."));
    }
    else {
        connectionStatus.textContent = "Estado: Desconectado";
        connectionStatus.style.color = "red";
        alert("Por favor, selecciona un puerto válido.");
    }
});
// Agrega un listener al elemento select 'ports' para manejar la selección de un puerto.
document.getElementById('ports').addEventListener('change', function () {
    var selectedPort = this.value;
    if (selectedPort !== "Elige un puerto") {
        alert("Puerto ".concat(selectedPort, " seleccionado."));
    }
});
document.getElementById('desconnect-btn').addEventListener('click', function () {
    // Desconectar puerto (si fuera necesario, agrega lógica específica aquí)
    console.log("Puerto desconectado.");
    // Reiniciar la página
    location.reload();
});
