// Listener para el botón 'Conectar'
document.getElementById('connect-btn').addEventListener('click', function () {
    var connectionStatus = document.getElementById('connection-status');
    var portsSelect = document.getElementById('ports');
    var connectButton = document.getElementById('connect-btn');
    var disconnectButton = document.getElementById('desconnect-btn');
    if (portsSelect.value !== "" && portsSelect.value !== "Elige un puerto") {
        connectionStatus.textContent = "Estado: Conectado";
        connectionStatus.style.color = "green";
        alert("Puerto ".concat(portsSelect.value, " seleccionado y conectado."));
        // Habilitar botón 'Desconectar' y deshabilitar botón 'Conectar'
        connectButton.disabled = true;
        disconnectButton.disabled = false;
    }
    else {
        alert("Por favor, selecciona un puerto válido.");
    }
});
// Listener para el botón 'Desconectar'
document.getElementById('desconnect-btn').addEventListener('click', function () {
    var connectionStatus = document.getElementById('connection-status');
    var connectButton = document.getElementById('connect-btn');
    var disconnectButton = document.getElementById('desconnect-btn');
    connectionStatus.textContent = "Estado: Desconectado";
    connectionStatus.style.color = "red";
    alert("Conexión finalizada.");
    // Habilitar botón 'Conectar' y deshabilitar botón 'Desconectar'
    connectButton.disabled = false;
    disconnectButton.disabled = true;
});
// Listener para el cambio en el select 'ports'
document.getElementById('ports').addEventListener('change', function () {
    var selectedPort = this.value;
    if (selectedPort !== "Elige un puerto") {
        alert("Puerto ".concat(selectedPort, " seleccionado."));
    }
});
