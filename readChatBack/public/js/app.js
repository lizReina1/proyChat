
document.addEventListener('DOMContentLoaded', function() {
 
    function agregarMensaje(nombre, texto, clase) {
        const chatBox = document.querySelector('.chat-box');
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('message', clase);
    
        // Agregar la imagen del remitente aquí, fuera del mensajeContent
        const imagenElement = document.createElement('div');
        const imagen = document.createElement('img');
        /* imagen.src = 'https://i.imgur.com/HpF4BFG.jpg'; // Reemplaza con la URL de la imagen
        imagen.width = 30; // Tamaño de la imagen
        imagen.classList.add('img1');
    
        imagenElement.appendChild(imagen); */
    
        const mensajeContent = document.createElement('div');
        mensajeContent.classList.add('content');
    
        const nombreElement = document.createElement('span');
        nombreElement.classList.add('name');
        nombreElement.textContent = nombre;
    
        const mensajeTexto = document.createElement('p');
        mensajeTexto.classList.add('msg');
        mensajeTexto.textContent = texto;
    
        mensajeContent.appendChild(nombreElement);
        mensajeContent.appendChild(mensajeTexto);
    
        nuevoMensaje.appendChild(imagenElement); // Agregar la imagen antes del contenido
        nuevoMensaje.appendChild(mensajeContent);
    
        chatBox.appendChild(nuevoMensaje);
    }
    
    
    // Manejar el clic en el botón "Enviar"
    document.getElementById('enviar-mensaje').addEventListener('click', function() {
        const mensajeInput = document.getElementById('input-mensaje');
        const mensajeTexto = mensajeInput.value.trim();
        
        if (mensajeTexto !== '') {
            agregarMensaje('lucy', mensajeTexto, 'sent');
            mensajeInput.value = '';
        }
    });
});