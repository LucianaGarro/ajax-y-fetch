//Ajax: es una tecnología que nos permite hacer peticiones asíncronas a servidores sin las necesidad de recargar la página.

//1) Nos vamos a conectar a jsonplaceholder que es una API para practicar. 

const url = "https://jsonplaceholder.typicode.com/users";

//2) Crear un objeto nuevo del tipo XMLHttpRequest: este es un tipo de objeto JS diseñado por Microsoft, y facilitar la obtención de datos de una url sin tener que recargar la página completa. 

const xhr = new XMLHttpRequest (); //Así instanciamos este tipo de objeto.

//3) Crear una función manejadora: 
function manejador (){
    if(this.readyState === 4 && this.status === 200){
    //¿Qué es readyState?: es un atributo que nos indica el estado de la petición
    //si es 4, significa que la petición ha terminado
    //¿Qué es status? es un atributo que nos indica el estado de la respuesta. Si es 200, significa que la respuesta fue exitosa. 
    const datos = JSON.parse(this.response); 
    //creo una constante que se llama "datos" y que tiene como valor el objeto que me devuelve la respuesta de la petición
    console.log(datos);
    mostrarUsuarios(datos);
}
}

//4) Ahora llamamos a un evento "load" y le paso como parámetro la función manejadora.

xhr.addEventListener("load", manejador);

//5) Ahora tengo que abrir la conexión con el método "open" y pasarle como parámetro el método de la petición y la url. 

xhr.open("GET", url);

//Métodos más comunes: 
//GET: para pedir información a un servidor
// POST: para enviar información a un servidor
//PUT: para actualizar la información de un servidor
//DELETE: para eliminar información de un servidor

//6) Ahora tengo que enviar la petición con el método "send";
 xhr.send();

 //7) creamos una función para mostrar los usuarios.

 const app = document.getElementById("app");
 function mostrarUsuarios(datos){
    datos.forEach(usuario => {
        const li= document.createElement("li");
        li.textContent = ` ${usuario.id}-${usuario.name} `
        app.appendChild(li);
    })
}

//Fetch: para hacer peticiones HTTP a algún servicio externo. Como estas peticiones son asincrónicas, fetch va a trabajar con promesas. 

//Sintaxis:
//fetch (url, opciones)

//el primer parámetro es la url a la cual se le realiza la petición. 
//el segundo parámetro es opcional a la configuración. 

// const apiFotos = "https://jsonplaceholder.typicode.com/photos";
// const contenedorFotos = document.getElementById("contenedorFotos");

// fetch(apiFotos)
//     .then(respuesta => respuesta.json())
//     .then((datos) =>{
//         console.log(datos);
//         mostrarFotos(datos);
//     })
//     .catch(error =>console.log(error));

// function mostrarFotos(datos){
//     datos.forEach(foto => {
//         const img = document.createElement ("img");
//         img.src = foto.url;
//         contenedorFotos.appendChild(img);
//     })
// }
const criptoYa = "https://criptoya.com/api/dolar";
const divDolar = document.getElementById("divDolar");

setInterval(() => {
    fetch(criptoYa)
    .then (response => response.json ())
    .then(({oficial, blue, solidario, ccb, ccl, mep, qatar})=>{
        divDolar.innerHTML= `
        <h2>Tipos de Dólar: </h2>
        <p>Dolar Oficial: ${oficial}</p>
        <p>Dolar Blue: ${blue}</p>
        <p>Dolar Solidario: ${solidario}</p>
        <p>Dolar Ccb ${ccb}</p>
        <p>Dolar Ccl: ${ccl}</p>
        <p>Dolar Mep: ${mep}</p>
        <p>Dolar Qatar: ${qatar}</p>`
        
    })
    .catch(error => console.error (error))
    
}, 3000);

