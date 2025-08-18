const image = document.getElementById('img');
const btn = document.getElementById('fetch-btn');

async function fetchPokemon() {
    try {
        let pokemon = document.getElementById('pokeomonName').value.toLowerCase()
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!response.ok) {
            alert(`Whoops! Check your spelling of "${pokemon}" or that's not a pokemon!`)
            throw(new Error("Pokemon not found"))
        }
        let data = await response.json()
        image.src = data.sprites.front_default
        image.alt = pokemon
    }
    catch(error) {
        console.log(error)
    }
}

btn.addEventListener('click',fetchPokemon)
