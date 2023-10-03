const database = require('./database.js'); // Ajusta la ruta según la ubicación de tu archivo

// Ejemplo de uso
/* const newData = { idGuion: 103, text: 'Texto de ejemplo 3', path: '/path/to/video3.mp4',status: 'false', type: 'v' };
database.createData(newData); */
console.log('Datos actualizados:', database.getAllData());

