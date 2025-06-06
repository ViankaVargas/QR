document.getElementById('generar-qr').addEventListener('click', () => {
    const texto = document.getElementById('texto-qr').value;
    const qrCode = new QRCode(document.getElementById('contenedor-qr'), {
        text: texto,
        width: 200,
        height: 200,
        colorDark: '#000',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.H
    });
});

document.getElementById('generar-qr').click();
