// const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

async function getRandomPokemonAsync(){
    let id = Math.floor(Math.random() * 1017) + 1;
    let response = await fetch(API_BASE_URL + id);
    let data = await response.json();
    console.log(data.name);

    //get the h1 and image from the html
    let pkmName = document.getElementById("pokemonName");
    let pkmImage = document.getElementById("pokemonImage");
    //add the data we got from the api to the elements
    pkmName.innerText = data.name;
    pkmImage.src = data.sprites.other["official-artwork"].front_default;
    pkmImage.alt = "Image showing" + data.name;
}