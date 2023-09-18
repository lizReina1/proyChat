const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  params: {q: 'love'},
  headers: {
    'X-RapidAPI-Key': '8bd659402dmshe559efd781ea6cbp16a2ddjsn74cdc58576d7',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};
async function music(){
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};




music();

/* module.exports = {
  searchTracks,
}; */
