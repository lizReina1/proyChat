const accountSid = 'AC891712d12e70aa1c8db092bfd37d7947';
const authToken = 'ba103600388f01d9d12a2717f50e929e';

const client = require("twilio")(accountSid, authToken);

function sendTextMessage(sender, message) {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        from: "whatsapp:+14155238886",
        body: message,
        to: "whatsapp:+" + sender,
      })
      .then((message) => resolve())
      .catch((err) => reject(err));
  });
}

module.exports = {
  sendTextMessage,
};