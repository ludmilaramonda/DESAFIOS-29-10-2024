// Añade un listener al botón 'connect-btn' para manejar la acción de clic.
document.getElementById('connect-btn')!.addEventListener('click', function() {
    const connectionStatus = document.getElementById('connection-status') as HTMLElement;
    const portsSelect = document.getElementById('ports') as HTMLSelectElement;
    
    if (portsSelect.value !== "" && portsSelect.value !== "Elige un puerto") {
        connectionStatus.textContent = "Estado: Conectado";
        connectionStatus.style.color = "green";
        alert(`Puerto ${portsSelect.value} seleccionado y conectado.`);


    } else {
        connectionStatus.textContent = "Estado: Desconectado";
        connectionStatus.style.color = "red";
        alert("Por favor, selecciona un puerto válido.");
        
    }


});
document.getElementById('desconnect-btn')!.addEventListener('click', function() {
        const connectionStatus = document.getElementById('connection-status') as HTMLElement;
        const disconnectButton = document.getElementById('desconnect-btn') as HTMLButtonElement;
        const connectButton = document.getElementById('connect-btn') as HTMLButtonElement;

    
        document.getElementById('desconnect-btn')!.addEventListener('click', () => {
    
            console.log("Puerto desconectado.");
        
            // Reiniciar la página
            location.reload();
        });
});

// Agrega un listener al elemento select 'ports' para manejar la selección de un puerto.
document.getElementById('ports')!.addEventListener('change', function() {
    const selectedPort = (this as HTMLSelectElement).value;
    if (selectedPort !== "Elige un puerto") {
        alert(`Puerto ${selectedPort} seleccionado.`); 
    }
});


