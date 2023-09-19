const request = require('request');

// Buscar pista
function buscarPista(titulo) {
    return new Promise((resolve, reject) => {
    const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    qs: { q: titulo },
    headers: {
      'X-RapidAPI-Key': 'd1cf35b25emsh223468b8fd93b97p156dd9jsn0a3671e97c80',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  
    request(options, function (error, response, body) {
      if (error) {
        reject(`Error al buscar pistas por título: ${error.message}`);
      } else {
        try {
          const data = JSON.parse(body);
          if (data.data && data.data.length > 0) {
            resolve(data.data[0].id);
          } else {
            reject(`No se encontraron pistas para el título: ${titulo}`);
          }
        } catch (parseError) {
          reject(`Error al analizar la respuesta JSON: ${parseError.message}`);
        }
      }
    });
  });
}



function PistaId(pista) {
    return new Promise((resolve, reject) => {
      buscarPista(pista)
        .then((idPista) => {
            const options = {
                method: 'GET',
                url: `https://deezerdevs-deezer.p.rapidapi.com/track/${idPista}`,
                headers: {
                  'X-RapidAPI-Key': 'd1cf35b25emsh223468b8fd93b97p156dd9jsn0a3671e97c80',
                  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
               };
  
          // Realiza la solicitud GET
          request(options, function (error, response, body) {
            if (error) {
              reject(`Error al obtener información de la pista: ${error.message}`);
            } else {
              try {
                const data = JSON.parse(body);
                const linkPista = data.link; // Obtener el enlace de la pista
                resolve(linkPista);
              } catch (parseError) {
                reject(`Error al analizar la respuesta JSON: ${parseError.message}`);
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


const idPista = '636291512'; 
PistaId('Los Retros - Someone To Spend Time With')
  .then((linkPista) => {
    console.log('Enlace de la pista:', linkPista);
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });



/*buscarPista('Los Retros - Someone To Spend Time With')
  .then((idPista) => {
    console.log('ID de la pista:', idPista);
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });

  module.exports = {
	PistaId,
    buscarPista,
  };*/