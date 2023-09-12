const express = require("express");
const app = express();
const twilio = require("./twilio");
const chat = require("./chat");
const did =require("./did.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//input message
  app.post("/webhook",async function (req, res) {
    //const answerchat = await chat.questionAndAnswer(req.body.Body);
    /* twilio.sendTextMessage(req.body.WaId, erq.body.Body);
    res.status(200).json({ ok: true, msg: "Mensaje enviado correctamente" });
 */
    did.enviarMensaje('hola que haces')
    .then((result_url) => {
      console.log('result_url:', result_url);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });

app.listen(3000, () => {
  console.log("servidor montado en el puerto 3000");
});