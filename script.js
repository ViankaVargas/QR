// No es necesario agregar nada más, este es el código completo
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generar-qr').addEventListener('click', () => {
        const texto = document.getElementById('texto-qr').value;
        document.getElementById('contenedor-qr').innerHTML = '';
        const qrCode = new QRCode(document.getElementById('contenedor-qr'), {
            text: texto,
            width: 200,
            height: 200,
            colorDark: '#000',
            colorLight: '#fff',
            correctLevel: QRCode.CorrectLevel.H
        });
    });

    // Generar el código QR automáticamente al cargar la página
    document.getElementById('generar-qr').click();
});
