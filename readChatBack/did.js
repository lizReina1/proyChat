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

 const request = require('request');

function enviarMensaje(mensaje) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: 'https://api.d-id.com/talks',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Basic Wld4d2NtOXdhVzh5TURFemMybEFaMjFoYVd3dVkyOXQ6aWV1Rkh5V2Qyd3hVb1BSYzdBRzZo'
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
        console.log("es un error");
        return reject(error);
      }
      console.log(" post id"+ body.id),
      resolve(body.id); // Devuelve el result_url en la resolución de la promesa
    });  
  }); 
}

function enviar(mensaje) {
  return new Promise((resolve, reject) => {
    
    const options1 = {
      method: 'GET',
      url: 'https://api.d-id.com/talks/'+ enviarMensaje(mensaje),
      headers: {
        accept: 'application/json',
        authorization: 'Basic Wld4d2NtOXdhVzh5TURFemMybEFaMjFoYVd3dVkyOXQ6aWV1Rkh5V2Qyd3hVb1BSYzdBRzZo'
      }
    };
    
    request(options1, function (error, response, body) {
      if (error) {
        console.log("es un error");
        return reject(error);
      }
      console.log("cuerpo" + body),
      resolve(body); // Devuelve el result_url en la resolución de la promesa
    }); 
  }); 
}


enviar("hola q hace");
module.exports = {enviarMensaje};
 