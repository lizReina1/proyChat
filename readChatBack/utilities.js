const fs = require('fs');
const path = require('path');

const axios = require('axios');


// Función para obtener el último archivo subido en un directorio
function obtenerUltimoArchivoEnDirectorio(directorio, callback) {
  fs.readdir(directorio, (error, archivos) => {
    if (error) {
      return callback(error, null);
    }

    if (archivos.length === 0) {
      return callback(null, null); // No hay archivos en el directorio
    }

    // Ordena los archivos por fecha de modificación en orden descendente
    archivos = archivos.map((archivo) => ({
      nombre: archivo,
      fechaModificacion: fs.statSync(path.join(directorio, archivo)).mtime.getTime(),
    }));

    archivos.sort((a, b) => b.fechaModificacion - a.fechaModificacion);

    const ultimoArchivo = archivos[0].nombre;
    callback(null, ultimoArchivo);
  });
}

// Ejemplo de uso
const directorio = 'public/videos/'; // Reemplaza esto con la ruta de tu directorio
obtenerUltimoArchivoEnDirectorio(directorio, (error, ultimoArchivo) => {
  if (error) {
    console.error('Error:', error);
  } else if (ultimoArchivo) {
    console.log('El último archivo subido en el directorio es:', ultimoArchivo);
  } else {
    console.log('No hay archivos en el directorio.');
  }
});



//const url = 'https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C6511d378aee7d667e0dcb60c/tlk_Gj29G5iuip1qL-6QwG-GG/1695670856943.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1695757273&Signature=dfViG8Zu4UlySBvAaasY1LQoOK8%3D&X-Amzn-Trace-Id=Root%3D1-6511e259-1f995b347b8b8b567d0e35ec%3BParent%3Dbe9200e6b388f6f3%3BSampled%3D1%3BLineage%3D6b931dd4%3A0';
const url = 'https://live-par-2-abr.livepush.io/vod/bigbuckbunnyclip.mp4';

const outputPath = path.join(__dirname, 'public/videos/nombre_archivo.mp4');

const downloadFile = async (url) => {

  const outputPath = path.join(__dirname, 'public/videos/'+ extractFileName(url) +'.mp4');
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    response.data.pipe(fs.createWriteStream(outputPath));

    return new Promise((resolve, reject) => {
      response.data.on('end', () => {
        resolve(outputPath);
      });

      response.data.on('error', (err) => {
        reject(err);
      });
    });
  } catch (error) {
    throw new Error(`Error downloading file: ${error.message}`);
  }
};


function extractFileName(url) {
  const regex = /\/([^/]+)\.mp4\?/;
  const match = url.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

downloadFile(url, outputPath)
  .then(() => console.log('Archivo descargado exitosamente.'))
  .catch((error) => console.error('Error al descargar el archivo:', error));


module.exports = {obtenerUltimoArchivoEnDirectorio,downloadFile, extractFileName};