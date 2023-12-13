const express = require("express");
const app = express();
const twilio = require("./twilio");
const chat = require("./chat");
const did =require("./did.js");
const download = require("./download.js");
const utilities = require("./utilities.js");
const path = require('path');
const buscarPista  = require("./music.js");
const { Console } = require("console");
const cors = require('cors');
const database = require('./database.js');

// Configura CORS para permitir solicitudes desde http://localhost:5173
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // algunos navegadores pueden enviar un status 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Ruta para enviar el archivo HTML al cliente
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/download', (req, res) => {
/*   did.getVidetoDID();
 */  res.json({ resultado: resultadoBusqueda });
});

app.post('/downloadContents', (req, res) => {
 // const jsonData = JSON.parse(req.body);
 const auxA=[];

 req.body.forEach(item => {
    console.log('idGuion:', item.idGuion);
    console.log('text:', item.text);
    console.log('type:', item.type);
    console.log('orden:', item.orden);

    const newData = { idGuion: 1, text: item.text, path: '',status: 'false', type: item.type, orden : item.orden};
    const aux= database.createData(newData);
    aux.idKey= item.idKey;
    console.log(aux);
    auxA.push(aux); 
  });
    res.json( auxA ); 
  });

/* 
app.get('/datos', (req, res) => {
  // Simula la obtención de datos desde una base de datos u otra fuente
  const datos = {
    video: 'any',
  };
 */
 /*  const directorio = 'public/videos/'; // Reemplaza esto con la ruta de tu directorio
  utilities.obtenerUltimoArchivoEnDirectorio(directorio, (error, ultimoArchivo) => {
    if (error) {
      console.error('Error:', error);
    } else if (ultimoArchivo) {
      datos.video="/videos/" + ultimoArchivo;
      console.log('El último archivo subido en el directorio es:', datos.video);
      res.json(datos);
    } else {
      console.log('No hay archivos en el directorio.');
    }
  });
  


}); */

//input message
app.post("/webhook",function (req, res) {
 
  pista=  req.body.Body ;
  console.log(pista)
  
 //recibir y mandar la respuesta de chatgpt
 //const answerchat = await chat.questionAndAnswer(req.body.Body);
 /* twilio.sendTextMessage(req.body.WaId, req.body.Body);
 res.status(200).json({ ok: true, msg: "Mensaje enviado correctamente" });

*/ //did para obtener el link del video
 /*did.enviar(req.body.Body)
 .then((result_url) => {
   //descargar video
   download.descargarArchivoMP4(result_url);
   console.log('result_url:', result_url);
 })
 .catch((error) => {
   console.error('Error:', error);
 });*/

 //pedir musica

}); 

app.post('/buscarYEnviarMusica', (req, res) => {
  
  buscarPista.music('bruno mars')
    .then(resultadoBusqueda => {
      // Enviar la respuesta al cliente
      res.json({ resultado: resultadoBusqueda });
    })
    .catch(error => {
      console.error("Error en la búsqueda de música:", error);
      res.status(500).json({ error: 'Hubo un error en la búsqueda de música.' });
    });
});





app.listen(3000, () => {
  console.log("servidor montado en el puerto 3000");
});