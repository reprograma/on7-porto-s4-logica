// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

// SOLUÇÃO - VERSÃO "LONGA"

const arrayNumeros = "5555666677778884".split('')
const ultimoDigito = Number(arrayNumeros.pop())
const arrayMultiplicaESoma = arrayNumeros
  .reverse()
  .map((numero, i) => {
    if (i % 2 === 0) {
      if (numero >= 5) {
        return (numero * 2) - 9
      }
      return numero * 2
    }
    return Number(numero)
  })
const valorFinal = arrayMultiplicaESoma
  .reduce((atual, acumulador) => atual + acumulador, ultimoDigito)
const numeroEhValido = valorFinal % 10 === 0 ? true : false

console.log(numeroEhValido)

///////////////////////

// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base em quantas vezes a cliente visitou um estabelecimento. 
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }

const baseClientes = {
  Clotilde: {
    visitas: 1,
  },
  Florinda: {
    visitas: 2,
  },
  Paty: {
    visitas: 3,
  },
}

const saudarCliente = (nomeCliente) => {
  if (!baseClientes[nomeCliente]) {
    return 'Olá, é a primeira vez por aqui?'
  }

  if (baseClientes[nomeCliente].visitas === 1) {
    return `Bem-vinda, ${nomeCliente}! Que bom que voltou!`
  }

  if (baseClientes[nomeCliente].visitas > 1) {
    return `Bem-vinda mais uma vez, ${nomeCliente}!`
  }

  return undefined
}

console.log(saudarCliente('Chiquinha'))