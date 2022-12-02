import peliculas from './peliculas.json' assert {type: 'json'};


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')-1;


console.log('ID: ' +id)

console.log('xddd')
console.log(peliculas[id])


var imgPelicula = document.getElementById('img_pelicula');
var tituloMain = document.getElementById('tituloMain');
var titulo = document.getElementById('titulo');
var sinopsis = document.getElementById('sinopsis');
var cast = document.getElementById('cast');








if(imgPelicula){
    imgPelicula.setAttribute('src', 'assets/img/'+peliculas[id].image)
}

if(tituloMain){
    tituloMain.innerHTML = peliculas[id].titulo;
}
if(titulo){
    titulo.innerHTML = peliculas[id].titulo;
}

if(sinopsis){
    sinopsis.innerHTML = peliculas[id].sinopsis;
}

if(cast){
    console.log(peliculas[id].staff.cast)
    peliculas[id].staff.cast.forEach(element => {
        cast.innerHTML+=
        `
        <div class="col-5 pb-3" >
        <div class="actor row">
            <div class="imagen col-2">
              <img class="" src="assets/img/personas/p${element.pid}.jpg" alt="actor">
            </div>
            <div class="texto-descripcion col-6">
                <p class="nombre">${element.nombre}</p>
                <p class="papel">${element.rol}</p>
            </div>
        </div>
      </div>
        `
    });
}