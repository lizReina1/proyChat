const  sdk =  require("@audius/sdk");

const audiusSdk = sdk({
  apiKey: "Your API Key goes here",
  apiSecret: "Your API Secret goes here",
});

const track = await audiusSdk.tracks.getTrack({ trackId: "D7KyD" });
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