const fs = require('fs');
const path = require('path');

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

module.exports = {obtenerUltimoArchivoEnDirectorio};