const request = require('request');

// Buscar pista
function buscarPista(titulo) {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    qs: { q: titulo },
    headers: {
      'X-RapidAPI-Key': 'd1cf35b25emsh223468b8fd93b97p156dd9jsn0a3671e97c80',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  return new Promise((resolve, reject) => {
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


// Función para obtener el enlace de una pista por su ID
function PistaId(idPista) {
  const options = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/track/${idPista}`,
    headers: {
      'X-RapidAPI-Key': 'd1cf35b25emsh223468b8fd93b97p156dd9jsn0a3671e97c80',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  return new Promise((resolve, reject) => {
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
  });
}


/*const idPista = '636291512'; 
PistaId(idPista)
  .then((linkPista) => {
    console.log('Enlace de la pista:', linkPista);
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });*/



/*buscarPista('Los Retros - Someone To Spend Time With')
  .then((idPista) => {
    console.log('ID de la pista:', idPista);
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });*/
