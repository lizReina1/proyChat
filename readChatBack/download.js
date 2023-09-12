const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Función para descargar un archivo MP4 desde una URL y guardarlo en el directorio raíz
async function descargarArchivoMP4(url) {
  try {
    const response = await axios.get(url, { responseType: 'stream' });

    if (response.status === 200) {
      // Obtén el nombre del archivo desde la URL
      const nombreArchivo = path.basename(url);
      
      const directorioDestino = 'public/videos/'; // Ruta al directorio donde deseas guardar el archivo
      // Combina el directorio y el nombre del archivo para obtener la ruta completa
      const rutaCompleta = path.join(directorioDestino, nombreArchivo);
      
      // Crea un flujo de escritura para guardar el archivo
      const archivoDestino = fs.createWriteStream(rutaCompleta);

      // Piped (redirecciona) el flujo de lectura al flujo de escritura
      response.data.pipe(archivoDestino);

      // Maneja los eventos de finalización y error
      archivoDestino.on('finish', () => {
        console.log(`Archivo ${nombreArchivo} descargado y guardado en el directorio raíz.`);
      });

      archivoDestino.on('error', (err) => {
        console.error('Error al guardar el archivo:', err);
      });
    } else {
      console.error('Error al descargar el archivo. Código de estado:', response.status);
    }
  } catch (error) {
    console.error('Error en la solicitud HTTP:', error.message);
  }
}

// Ejemplo de uso
const urlArchivoMP4 = 'https://www.shutterstock.com/shutterstock/videos/1080319025/preview/stock-footage-abstract-tech-earth-globalization-in-d-motion-graphic-concept-transmit-ai-networking-on-fiber.mp4';
descargarArchivoMP4(urlArchivoMP4);

module.exports = {descargarArchivoMP4};