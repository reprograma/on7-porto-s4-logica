// DICAS DE DEBUGAGEM PRA VIDA
// sempre verificar o que a função espera receber
// verificar colchetes, parênteses e chaves
// ler os erros - encontrar a linha
// sempre verificar o que os MÉTODOS/funções retornam
// sempre pensar nas """substituições""" das variáveis pelos valores que estão dentro delas
// sempre verificar o que estamos recebendo em uma variável pra ver se é o que esperamos

//               0   1    2   3    4  5  // índice/posição
const numeros = [65, 842, 89, 789, 6, 9] //cada elemento
                    
for (let i = 0; i < numeros.length; i++) {
//             i: número do índice       nomeDaArray[i]: elemento
  console.log(`índice: ${i}, elemento: ${numeros[i]}`)
}

//métodos de array
const indiceDaArray = numeros.indexOf(789)
console.log(indiceDaArray)

//push para "empurrar" elementos pra dentro de uma array
const arrayNumeros = []
for (let i = 0; i <= 10; i++) {
  arrayNumeros.push(`índice ${i}`)
}
console.log(arrayNumeros)

// OBJETOS

const alunasOn7 = [
  { nome: "Juliana", idade: 39, pets: ["Satanás", "Churrumina"] },
  { nome: "Helena", idade: 28, pets: ["gato 1", "gato 2"] },
  { nome: "Carla", idade: 35, pets: ["Risoto"] }
]

const objAluna = { 
  nome: "Juliana",
  idade: 39,
  pets: ["Satanás", "Churrumina"],
  irmaos: [{ nomeCompleto: "Roberta" }, { nomeCompleto: "Mauro" }], // array de objetos
  cidade: {
    nome: {
      nomeCompleto: "São Paulo",
      apelidinho: "Sampa"
    },
    bairro: "Pinheiros"
  },
}

// como acessar uma array de objetos e fazer modificações em cada um
for (let i = 0; i < objAluna.irmaos.length; i++) {
  objAluna.irmaos[i].ehNerd = true
}

// map, forEach: funções que precisam de funções dentro delas (callbacks)

// map SEMPRE retorna uma array de elementos
const novaArray = objAluna.irmaos.map(function(elementoDaArray) {
  return elementoDaArray.nomeCompleto
})
// console.log(novaArray)

// forEach não retorna nada, só faz
// objAluna.irmaos.forEach(function(elementoDaArray) {
//   console.log(elementoDaArray.nomeCompleto)
// })

//notação de ponto
console.log(objAluna.idade)
//notação de colchete
const variavel = 'idade'
console.log(objAluna[variavel])

// criando ou alterando chaves e valores de um objeto

// objetos têm propriedades/características
// objetos têm comportamentos
const objGato = {
  nome: "Satanás",
  miar: function(nome){
    return `miau, ${nome}`
  }
}

console.log(objGato.miar('Satanás'))

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

const nomesPokemons = pokemons.map(function(pokemon) {
    return pokemon.name
  })

console.log(nomesPokemons)
  
pokemons.forEach(function(pokemon) {
      pokemon.name = "banana"
    })

console.log(pokemons)
    
// //a mesma coisa, com arrow function 
// let outraListaNomes = ''
// const nomesPokemonsArrow = pokemons.forEach(pokemon => outraListaNomes += `O pokemón ${pokemon.name} tem id ${pokemon.id}\n`)
// console.log(outraListaNomes)
    
for (let i = 0; i < pokemons.length; i++) {
  console.log(`nome: ${pokemons[i].name}`)
}

const arr = [54, 65, 45, 56, 76]

const multiplicaIndicesPares = arr.map((numero, indice) => {
  if (indice % 2 === 0) {
    return numero * 2
  }
  return numero
})

console.log(multiplicaIndicesPares)