/* const request = require('request');


const options = {
  method: 'POST',
  url: 'https://api.d-id.com/talks',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Basic YjNOallYSmtaV3h5YVc4NE9VQm5iV0ZwYkM1amIyMDpFUEVDUXpDMDJFUHZqb0pNaTVnTl8='
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
    authorization: 'Basic YjNOallYSmtaV3h5YVc4NE9VQm5iV0ZwYkM1amIyMDpFUEVDUXpDMDJFUHZqb0pNaTVnTl8='
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
         authorization: 'Basic YUc5aVpYYzJNemcxTUVCcGNHNTFZeTVqYjIwOjFkRkFaeWdEdDVCcmRCZktNSGt4MA=='
       },
       body: {
         script: {
           type: 'text',
           input: mensaje
         },
         source_url: 's3://d-id-images-prod/google-oauth2|113133489368781835558/img_NaS7SE4WPAJ85DQaYFvNj/WIN_20220206_13_39_16_Pro.jpg'
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
 
 function enviar(mensaje) {
   return new Promise((resolve, reject) => {
     enviarMensaje(mensaje)
       .then((messageId) => {
         const options1 = {
           method: 'GET',
           url: `https://api.d-id.com/talks/${messageId}`,
           headers: {
             accept: 'application/json',
             authorization: 'Basic YUc5aVpYYzJNemcxTUVCcGNHNTFZeTVqYjIwOjFkRkFaeWdEdDVCcmRCZktNSGt4MA=='
           }
         };
 
         // Realiza la solicitud GET
         request(options1, function (error, response, body) {
           if (error) {
             console.error("Hubo un error en la solicitud GET:", error);
             reject(error);
           } else {
             console.log("Respuesta de la solicitud GET:", body);
             resolve(body); // Resuelve la promesa con la respuesta de la solicitud GET
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
 /*enviar("Hola, este es un mensaje de prueba")
   .then((response) => {
     console.log("Respuesta final:", response);
   })
   .catch((error) => {
     console.error("Error en el proceso:", error);
   });*/
 
module.exports = {enviar};
 