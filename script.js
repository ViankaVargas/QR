// Importar la biblioteca QRCode.js
const script = document.createElement('script');
script.src = 'https:                                                     
document.head.appendChild(script);

                                      
const generarQR = (texto) => {
    try {
                                          
        if (!texto) {
            throw new Error('//cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js';
document.head.appendChild(script);

// Función para generar el código QR
const generarQR = (texto) => {
    try {
        // Verificar si el texto es vacío
        if (!texto) {
            throw new Error('El texto no puede estar vacío');
        }

                              
        const qrCode = new QRCode(document.getElementById('// Crear el código QR
        const qrCode = new QRCode(document.getElementById('contenedor-qr'), {
            text: texto,
            width: 200,
            height: 200,
            colorDark: '#000',
            colorLight: '#fff',
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (error) {
        console.error(error);
        alert('Error al generar el código QR: ' + error.message);
    }
};

                                                       
const handleButtonClick = () => {
    try {
                                     
        const texto = document.getElementById('// Función para manejar el evento de clic en el botón
const handleButtonClick = () => {
    try {
        // Obtener el texto del input
        const texto = document.getElementById('texto-qr').value.trim();

                                
        generarQR(texto);
    } catch (error) {
        console.error(error);
        alert('// Generar el código QR
        generarQR(texto);
    } catch (error) {
        console.error(error);
        alert('Error al generar el código QR: ' + error.message);
    }
};

                                   
document.getElementById('// Agregar evento de clic al botón
document.getElementById('generar-qr').addEventListener('click', (e) => {
    e.preventDefault();
    handleButtonClick();
});
