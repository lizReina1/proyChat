export const openia = function (lenguaje) {
	const http = require("https");
  
	const options = {
	  method: "POST",
	  hostname: "chatgpt-api8.p.rapidapi.com",
	  port: null,
	  path: "/",
	  headers: {
		"content-type": "application/json",
		"X-RapidAPI-Key": "d1cf35b25emsh223468b8fd93b97p156dd9jsn0a3671e97c80",
		"X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
	  },
	};
  
	const req = http.request(options, function (res) {
	  const chunks = [];
  
	  res.on("data", function (chunk) {
		chunks.push(chunk);
	  });
  
	  res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	  });
	});
	var xml = mxUtils.getXml(ui.editor.getGraphXml());
	req.write(
	  JSON.stringify([
		{
		  content: `del siguiente codigo xml quiero que interpretes el diagrama de secuencia que esta y una vez interpretado me lo devuelvas en ${lenguaje} la interpretacion con todas las logicas que creas correctas y que tu respuesta sea el codigo java con todas las logicas este es el xml ${xml}`,
		  role: "user",
		},
	  ])
	);
    req.end();

  };