const AudiusSDK = require('audius-sdk');

const audiusSdk = sdk({
  apiKey: "b02d4024060dc8552da745a42b40072287992844",
  apiSecret: "8aab31893ecbb1aa454228b4f885ee1e57720301c1732ca1f00ab3c2570d8b9a",
});

/*const track = await audiusSdk.tracks.getTrack({ trackId: "D7KyD" });
console.log(track, "Track fetched!");
const userId = (
  await audiusSdk.users.getUserByHandle({
    handle: "Your Audius handle goes here",
  })
).data?.id;

const track1 = await audiusSdk.tracks.favoriteTrack({
  trackId: "D7KyD",
  userId,
});
console.log("Track favorited!");

// buscar pista
const { data: tracks } = await audiusSdk.tracks.searchTracks({
    query: "skrillex",
  });
  console.log(tracks);*/

// reproducir pista
async function reproducirPista() {
    try {
      const url = await audiusSdk.tracks.streamTrack({
        trackId: "PjdWN"
      });
      
      const audio = new Audio(url);
      audio.play();
    } catch (error) {
      console.error(error);
    }
  }
  
  reproducirPista();
  