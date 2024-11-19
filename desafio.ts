// Listener para el botón 'Conectar'
document.getElementById('connect-btn')!.addEventListener('click', () => {
    const connectionStatus = document.getElementById('connection-status') as HTMLElement;
    const portsSelect = document.getElementById('ports') as HTMLSelectElement;
    const connectButton = document.getElementById('connect-btn') as HTMLButtonElement;
    const disconnectButton = document.getElementById('desconnect-btn') as HTMLButtonElement;

    if (portsSelect.value !== "" && portsSelect.value !== "Elige un puerto") {
        connectionStatus.textContent = "Estado: Conectado";
        connectionStatus.style.color = "green";
        alert(`Puerto ${portsSelect.value} seleccionado y conectado.`);

        // Habilitar botón 'Desconectar' y deshabilitar botón 'Conectar'
        connectButton.disabled = true;
        disconnectButton.disabled = false;
    } else {
        alert("Por favor, selecciona un puerto válido.");
    }
});

// Listener para el botón 'Desconectar'
document.getElementById('desconnect-btn')!.addEventListener('click', () => {
    const connectionStatus = document.getElementById('connection-status') as HTMLElement;
    const connectButton = document.getElementById('connect-btn') as HTMLButtonElement;
    const disconnectButton = document.getElementById('desconnect-btn') as HTMLButtonElement;

    connectionStatus.textContent = "Estado: Desconectado";
    connectionStatus.style.color = "red";
    alert("Conexión finalizada.");

    // Habilitar botón 'Conectar' y deshabilitar botón 'Desconectar'
    connectButton.disabled = false;
    disconnectButton.disabled = true;
});

// Listener para el cambio en el select 'ports'
document.getElementById('ports')!.addEventListener('change', function () {
    const selectedPort = (this as HTMLSelectElement).value;
    if (selectedPort !== "Elige un puerto") {
        alert(`Puerto ${selectedPort} seleccionado.`);
    }
});
