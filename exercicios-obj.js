// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function objLivro(titulo, paginas, autoria) {
  return ({
    titulo, // mesma coisa que titulo: titulo
    paginas,
    autoria
  }) // parenteses para retornar o objeto diretamente
}

console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))

// 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro XXXX foi escrito por XXX e tem XXX páginas". Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova função.

function fraseLivro(obj) {
  return `O livro ${obj.titulo} foi escrito por ${obj.autoria} e tem ${obj.paginas} páginas`
}

// console.log(fraseLivro(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles')))

// 3) Crie uma função que receba um objeto como o abaixo:

// const pessoa = {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
// }

// Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.

// Exemplo de retorno:
// {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
//   nomeCompleto: 'Nazaré Tedesco'
// }

function nomeCompleto(obj) {
  const novoObj = {
    nome: obj.nome,
    sobrenome: obj.sobrenome,
    nomeCompleto: `${obj.nome} ${obj.sobrenome}`
  }
  return novoObj
}

// VERSÃO COM ARROW FUNCTION E DESCONSTRUÇÃO
// const addFullNameProperty = obj => ({
//   ...obj,
//   fullName: `${obj.firstName} ${obj.lastName}`,
// });

const pessoa = {
  nome: 'Nazaré',
  sobrenome: 'Tedesco',
}

// console.log(nomeCompleto(pessoa))

// 4) Crie uma função que receba o objeto abaixo e o nome de uma das chaves, e retorne a soma de todos os elementos do array que for selecionado através da chave.

const objArrays = {
  array1: [1, 2, 3],
  array2: [5, 6, 7, 8],
  array3: [9, 9, 9],
}

function somaArray(obj, chave) {
  let total = 0
  const arr = obj[chave]
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
// forEach não retorna nada, só faz
function somaArrayForEach(obj, chave) {
  let total = 0
  obj[chave].forEach( function(indice) {
    total += indice
  })
  return total
}
// map SEMPRE retorna uma array
function somaArrayMap(obj, chave) {
  let total = 0
  const arrResultados = obj[chave].map( function(indice) {
    total += indice
    return total
  })
  return arrResultados
}

console.log(somaArray(objArrays, 'array2')) // 26
console.log(somaArrayForEach(objArrays, 'array2')) // 26
console.log(somaArrayMap(objArrays, 'array2')) // [ 5, 11, 18, 26 ]



