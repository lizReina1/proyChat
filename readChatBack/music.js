const axios = require('axios');

async function music(query) {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: query },
    headers: {
      'X-RapidAPI-Key': '8bd659402dmshe559efd781ea6cbp16a2ddjsn74cdc58576d7',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    // Devuelve la data obtenida
    return response.data;
    //console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Ejemplo de uso
/* const consulta = 'love';  // Puedes cambiar esto por cualquier consulta que desees
music(consulta); */
module.exports = {music};