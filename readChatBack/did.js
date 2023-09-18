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

function enviarMensaje(mensaje) {
   return new Promise((resolve, reject) => {
     const options = {
       method: 'POST',
       url: 'https://api.d-id.com/talks',
       headers: {
         accept: 'application/json',
         'content-type': 'application/json',
         authorization: 'Basic ZG10bWR5NTZjMlZuY3pkQWJIVm9aV011WTI5dDprV1JPWUdxNDQ4SDYyQmhwZzFQY0c='
                },
       body: {
         script: {
           type: 'text',
           input: mensaje
         },
         source_url: 's3://d-id-images-prod/auth0|65007dad3ba1462df710e26c/img_LzW0X8Tz01dArY3PNhIeI/MESSI.jpg'
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
 
/*function enviar(mensaje) {
   return new Promise((resolve, reject) => {
     enviarMensaje(mensaje)
       .then((messageId) => {
         const options1 = {
           method: 'GET',
           url: `https://api.d-id.com/talks/${messageId}`,
           headers: {
             accept: 'application/json',
             authorization: 'Basic ZG10bWR5NTZjMlZuY3pkQWJIVm9aV011WTI5dDprV1JPWUdxNDQ4SDYyQmhwZzFQY0c='                       } 
         };
 
         // Realiza la solicitud GET
         request(options1, function (error, response, body) {
           if (error) {
             console.error("Hubo un error en la solicitud GET:", error);
             reject(error);
           } else {

            const obj = JSON.parse(body);
             console.log("Respuesta de la solicitud GET mendsje:",body);



             resolve(body); // Resuelve la promesa con la respuesta de la solicitud GET
           }
         });
       })
       .catch((error) => {
         console.error("Hubo un error al enviar el mensaje:", error);
         reject(error);
       });
   });
 }*/
 function enviar(mensaje) {
  return new Promise((resolve, reject) => {
    enviarMensaje(mensaje)
      .then((messageId) => {
        const options1 = {
          method: 'GET',
          url: `https://api.d-id.com/talks/${messageId}`,
          headers: {
            accept: 'application/json',
            authorization: 'Basic ZG10bWR5NTZjMlZuY3pkQWJIVm9aV011WTI5dDprV1JPWUdxNDQ4SDYyQmhwZzFQY0c='
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
 /*enviar("Hola te habla messi")
   .then((response) => {
     console.log("Respuesta final:", response);
   })
   .catch((error) => {
     console.error("Error en el proceso:", error);
   });*/
 
module.exports = {enviar};
 