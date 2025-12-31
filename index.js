const GEN_URL = "https://pokeapi.co/api/v2/generation/";
const POKE_URL = "https://pokeapi.co/api/v2/pokemon/";
const tituloPrincipal = document.querySelector(".titulo")


document.addEventListener("DOMContentLoaded", () => {

    const pokeDex = document.querySelector(".pokedex");
    const generacion1 = document.getElementById("generacion1");
    const generacion2 = document.getElementById("generacion2");
    const generacion3 = document.getElementById("generacion3");
    const generacion4 = document.getElementById("generacion4");
    const generacion5 = document.getElementById("generacion5");
    const generacion6 = document.getElementById("generacion6");
    const generacion7 = document.getElementById("generacion7");

    generacion1.addEventListener("click", ()=>{cargarGeneracion(1); tituloPrincipal.textContent= "Pokemon Gen 1"});
    generacion2.addEventListener("click", ()=>{cargarGeneracion(2); tituloPrincipal.textContent= "Pokemon Gen 2"});
    generacion3.addEventListener("click", ()=>{cargarGeneracion(3); tituloPrincipal.textContent= "Pokemon Gen 3"});
    generacion4.addEventListener("click", ()=>{cargarGeneracion(4); tituloPrincipal.textContent= "Pokemon Gen 4"});
    generacion5.addEventListener("click", ()=>{cargarGeneracion(5); tituloPrincipal.textContent= "Pokemon Gen 5"});
    generacion6.addEventListener("click", ()=>{cargarGeneracion(6); tituloPrincipal.textContent= "Pokemon Gen 6"});
    generacion7.addEventListener("click", ()=>{cargarGeneracion(7); tituloPrincipal.textContent= "Pokemon Gen 7"});


    cargarGeneracion(1)
    
    function cargarGeneracion(num) {
        pokeDex.innerHTML = "";

        fetch(GEN_URL + num)
            .then(res => res.json())
            .then(data => {
                data.pokemon_species.forEach(pokemon => {
                    cargarPokemon(pokemon.name);
                });
            })
            .catch(err => console.error(err));
    }

    function cargarPokemon(nombre) {
        fetch(POKE_URL + nombre)
            .then(res => res.json())
            .then(data => mostrarPokemon(data));
    }

    function mostrarPokemon(pokemon) {
        const div = document.createElement("div")
        div.classList.add("pokemon")
        
        const titulo = document.createElement("h2")
        titulo.classList.add("nombrePokemon")
        titulo.textContent = pokemon.name

        const contenedorImagen = document.createElement("div")
        contenedorImagen.classList.add("contenedorImg")

        const img = document.createElement("img")
        img.classList.add("imagenPokemon")
        img.src =  pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default;

        contenedorImagen.appendChild(img)


        div.appendChild(titulo)
        div.appendChild(contenedorImagen)
        pokeDex.appendChild(div)
    }
});
