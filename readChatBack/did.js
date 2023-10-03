/* const request = require('request');


const options = {
  method: 'POST',
  url: 'https://api.d-id.com/talks',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Basic ZG10bWR5NTZjMlZuY3pkQWJIVm9aV011WTI5dDprV1JPWUdxNDQ4SDYyQmhwZzFQY0c'
  },
  body: {
    script: {
      type: 'text',
      //Colocar la frase
      input: 'hola que haces'
    },
    
    //url del avatar
    source_url: 's3://d-id-images-prod/google-oauth2|113133489368781835558/img_NaS7SE4WPAJ85DQaYFvNj/WIN_20220206_13_39_16_Pro.jpg'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
   //const id_avatar= body.id
  console.log(body);
});


const options1 = {
  method: 'GET',
  url: 'https://api.d-id.com/talks/tlk_fWR6IOQje6g40gN5vpYME',
  headers: {
    accept: 'application/json',
    authorization: 'Basic YUc5aVpYYzJNemcxTUVCcGNHNTFZeTVqYjIwOlV0cWxpaFN3WTEwcnNyZHAzamtaaw=='
  }
};

request(options1, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
}); */
 const request = require('request'); // Asegúrate de que tienes 'request' instalado
 const utilities = require("./utilities.js");

function enviarMensaje(mensaje) {
   return new Promise((resolve, reject) => {
     const options = {
       method: 'POST',
       url: 'https://api.d-id.com/talks',
       headers: {
         accept: 'application/json',
         'content-type': 'application/json',
         authorization:'Basic  Y1hkbGNuUkFlSFZ3YVhZdVkyOXQ6YXoxWmlsVkdIOTVYUzA5R20taUp0'
                },
       body: {
         script: {
           type: 'text',
           input: mensaje
         },
         source_url: 'https://cdn.pixabay.com/photo/2021/12/09/15/24/woman-6858360_960_720.jpg'
       },
       json: true
     };
 
     // Realiza la solicitud
     request(options, function (error, response, body) {
       if (error) {
         console.error("Hubo un error en la solicitud:", error);
         reject(error);
       } else {
         console.log("ID de la solicitud:", body.id);
         resolve(body.id); // Resuelve la promesa con el ID de la solicitud
       }
     });
   });
 }
 
function getVidetoDID(idVideo){
  const options1 = {
    method: 'GET',
    url: `https://api.d-id.com/talks/${idVideo}`,
    headers: {
      accept: 'application/json',
      authorization: 'Basic  Y1hkbGNuUkFlSFZ3YVhZdVkyOXQ6YXoxWmlsVkdIOTVYUzA5R20taUp0'
    }
  };
    // Realiza la solicitud GET
    console.log(options1.url);

    return new Promise((resolve,reject)=>{
      request(options1, function (error, response, body) {
        console.log("entre peticion");
        if (error) {
          console.error("Hubo un error en la solicitud GET:", error);
          reject(error);
        } else {
          // Parsea el cuerpo JSON
          
          const responseBody = JSON.parse(body);
                    
            if (responseBody && responseBody.result_url != 'undefined' ) {
              console.log(responseBody.result_url);
              utilities.downloadFile(responseBody.result_url)
              .then((outputPath) =>{ 
                console.log('Archivo descargado exitosamente.');
                resolve(outputPath);

              }).catch((error) => {
              console.error('Error al descargar el archivo:', error);  
              reject("undefined");
            });
            }
        }
      });
    });
}


 function enviar(mensaje) {
  return new Promise((resolve, reject) => {
    enviarMensaje(mensaje)
      .then((messageId) => {
        const options1 = {
          method: 'GET',
          url: `https://api.d-id.com/talks/${messageId}`,
          headers: {
            accept: 'application/json',
            authorization: 'Basic ZG10bWR5NTZjMlZuY3pkQWJIVm9aV011WTI5dDpxRTdzdm9OZnpMaFBjd3RMQ1BQSnU='
          }
        };

        // Realiza la solicitud GET
        request(options1, function (error, response, body) {
          if (error) {
            console.error("Hubo un error en la solicitud GET:", error);
            reject(error);
          } else {
            // Parsea el cuerpo JSON
            const responseBody = JSON.parse(body);
            if (responseBody && responseBody.pending_url) {
              console.log("Respuesta de la solicitud GET (result_url):", responseBody.result_url);
              resolve(responseBody.result_url); // Resuelve la promesa con result_url
            } else {
              reject("No se encontró result_url en la respuesta");
            }
          }
        });
      })
      .catch((error) => {
        console.error("Hubo un error al enviar el mensaje:", error);
        reject(error);
      });
  });
}
 
 // Ejemplo de uso:
/*  enviar("Hola te habla messi")
   .then((response) => {
     console.log("Respuesta final:", response);
   })
   .catch((error) => {
     console.error("Error en el proceso:", error);
   });tlk_1naTc59xDvwWPFarxXuqR
  */
 
  // enviarMensaje('prueba video 2');

  getVidetoDID('tlk_H5JPcN3cg8N5kCKyWPTYa').then((response) => {
    console.log("Respuesta final:", response);
  })
  .catch((error) => {
    console.error("Error en el proceso:", error);
  });
module.exports = {enviarMensaje, getVidetoDID};
 