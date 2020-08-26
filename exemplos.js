const pokemons = 
[{
  id: 1,
  name: "Bulbasaur",
  type: [ "Grass", "Poison" ],
}, 
{
  id: 2,
  name: "Ivysaur",
  type: [ "Grass", "Poison" ],
}, 
{
  id: 4,
  name: "Charmander",
  type: [ "Fire" ],
}]

let listaNomes = ''
const nomesPokemons = pokemons.forEach(function(pokemon) {
    listaNomes += `O pokemón ${pokemon.name} tem id ${pokemon.id}\n`
  })
console.log(listaNomes)

//a mesma coisa, com arrow function 
let outraListaNomes = ''
const nomesPokemonsArrow = pokemons.forEach(pokemon => outraListaNomes += `O pokemón ${pokemon.name} tem id ${pokemon.id}\n`)
console.log(outraListaNomes)
