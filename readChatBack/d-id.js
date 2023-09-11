const request = require('request');

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
   const id_avatar= body.id
  console.log(id_avatar);
});


const options1 = {
  method: 'GET',
  url: 'https://api.d-id.com/talks/'+id_avatar,
  headers: {
    accept: 'application/json',
    authorization: 'Basic YjNOallYSmtaV3h5YVc4NE9VQm5iV0ZwYkM1amIyMDpFUEVDUXpDMDJFUHZqb0pNaTVnTl8='
  }
};

request(options1, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});