const pokemonContainer = document.querySelector(".pokemon-container");

function buscarPokemon() {
  const idPoke = document.getElementById("poke").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}/`)
  // fetch(`http://demoweb.neotel.cc/toolbar/toolbarTest.html?NOMBRE={0}&APELLIDO={1}&DNI={2}&ANI={3}`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      console.log(data);
    });
}

function createPokemon(pokemon) {
  //SE DECLARAN LAS VARIABLES Y SE OBTIENEN LOS DATOS DESDE LA API
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  //IMAGEN DEL POKEMON
  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");
  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;
  spriteContainer.appendChild(sprite);
  card.appendChild(spriteContainer);

  //NUMERO DEL POKEMON
  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
  card.appendChild(number);
  
  //NOMBRE DEL POKEMON
  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;
  card.appendChild(name);


  //TIPO DE POKEMON / MAX 2
  for (let x = 0; x < pokemon.types.length; x++) {
    const tipo = document.createElement("p");
    tipo.classList.add("tipo"+x);
    tipo.textContent = pokemon.types[x].type.name;
    card.appendChild(tipo);
  }
  
  //ESTADISTICAS DEL POKEMON
  for (let x = 0; x < pokemon.stats.length; x++) {
    const stats = document.createElement("p");
    stats.classList.add("stats"+x);
    stats.textContent = pokemon.stats[x].stat.name + ' / ' +pokemon.stats[x].base_stat;
    card.appendChild(stats);
  }
  pokemonContainer.appendChild(card);
}