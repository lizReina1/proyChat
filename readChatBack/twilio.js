const accountSid = 'AC891712d12e70aa1c8db092bfd37d7947';
const authToken = '2d284c3f7761bb8088094e5246c1d1f4';

import client  from  "twilio";

export function sendTextMessage(sender, message) {
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

