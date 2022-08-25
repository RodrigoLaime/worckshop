/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app'); //seleccionamos la etiqueta donde vamos a guardar
window.fetch(`${baseUrl}/api/avo`) //conectamnos con la API
.then((respuesta) => respuesta.json())//procesamos la respuestza y la convertimos json
.then((responseJson) => {//json(data). renderisamos la informacion en browser
    const todosLosItems = [] //aqui vamos agregar todos los items
    responseJson.data.forEach((item) => {
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;
        const title = document.createElement("h2");
        title.textContent = item.name; //contenidoTexto será igual al name del ítem de data
        title.style = "font-size: 2rem";
        const price = document.createElement("div");
        price.className = "text-gray-600"; //
        price.textContent = formatPrice(item.price);
        const container = document.createElement("div") //creamos un contendor
        container.append(imagen, title, price); //agregamos los elementos al contendor
        todosLosItems.push(container) //agrega el contendor a esta varialble 
    });
    /* document.body.append(...todosLosItems); //agrega al body todos los resultados de todoLosItems */
    appNode.append(...todosLosItems); //agrega todos los resultados de todosLosItems a appNode
});
