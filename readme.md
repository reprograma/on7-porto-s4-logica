# Aula 4 - Arrays, objetos e métodos

Nessa aula veremos como trabalhar com quantidades maiores de dados ao mesmo tempo, utilizando estruturas que chamamos de arrays e objetos. 

[Arrays](##-Arrays)
* [Alterando arrays](###-Alterando-arrays)
* [Iterando arrays](###-Iterando-arrays)
* [O que é protótipo](###-O-que-é-protótipo)
* [Métodos comuns de array](###-Métodos-comuns-de-array)

[Objetos](##-Objetos)
* [Acessando informações de um objeto](###-Acessando-informações-de-um-objeto)
* [Criando ou alterando um objeto](###-Criando-ou-alterando-um-objeto)
* [Métodos](###-Métodos)

[Manipulando arrays e objetos](##-Manipulando-arrays-e-objetos)
* [`for in` e `for of`](###-For...-in-e-for...-of)
* [`filter`, `map` e `forEach`](###-`filter`,-`map`,-`forEach`)
  - [`filter`](###-`.filter()`)
  - [`map`](###-`.map()`)
  - [`forEach`](###-`.forEach()`)
* [Outros métodos](###-Outros-métodos)
* [Links](###-Links)

[Onde fazer exercícios](##-Links-de-exercícios)
***

## Arrays

O que acontece quando precisamos trabalhar com várias informações? 
Por exemplo, por enquanto estamos fazendo cálculos ou operações com poucos dados, então podemos fazer:
```js
let num1 = 3
let num2 = 45
let num3 = 12
console.log(num1 + num2 + num3) //60
```

Mas na vida real não costuma ser assim. E se nosso sistema tivesse que imprimir o valor total de uma compra de 100 ítens?
Para isso usamos estruturas de dados, e a array é uma delas: uma array é uma **lista ordenada de dados**, também chamada de **vetor**. Usando arrays, podemos guardar e também manipular uma quantidade qualquer de dados que estão guardados em uma única variável.

O caso acima, então, ficaria da seguinte forma:
```js
const numeros = [3, 45, 12]
```

A array é caracterizada pelos colchetes `[]`, e todos os dados que vão dentro delas são separados por vírgulas `,`. Vamos ver por partes:
- Os colchetes `[]` indicam onde a array começa e termina.
- Todos os dados que estão dentro da array devem ser separados por vírgula `,`.
- Cada posição dentro da array (chamamos essas posições de *índices*  - guarde esse nome!) é fixa e numerada, começando em zero.

Como assim?
A array é uma lista *ordenada*, isso significa que cada dado que está dentro dela ocupa uma determinada posição. Assim:

```js
// índice        0  1   2   3    4    5  6   7  8  9
const numeros = [3, 45, 12, 456, 656, 3, 55, 2, 6, 888]
```

Então podemos dizer que o número 12 está no **índice 2 da array `numeros`**. É muito importante lembrar sempre que a **a contagem começa a partir do índice zero**! 

Então, se quisermos acessar determinado dado que está dentro da array, devemos dizer em qual índice ele se encontra, usando os colchetes para informar o número do índice:
```js
console.log(numeros[2])  // 12
```

Para saber quantos elementos (ou seja, quantos dados separados por vírgulas) temos em uma array, usamos `.length`:
```js
console.log(numeros.length) //10
```
Ou seja, a array `numeros` tem 10 elementos, e para cada um é atribuído um *índice* que vai de 0 a 9. Cuidado para não se confundir ;)

Você talvez tenha se perguntado por que `.length`, que usamos para ver qual a quantidade de caracteres em uma string, também funcionou na array. É porque, "por baixo dos panos", dados do tipo string entram na memória do computador da seguinte forma:
```js
const palavraString = "banana" // ['b', 'a', 'n', 'a', 'n', 'a']
```

Ou seja, para o JavaScript (e também as outras linguagens) uma string nada mais é do que uma array de caracteres.
Faça o teste!
```js
const fruta = 'banana'
console.log(fruta[2]) // 'n'
console.log(fruta[2] === 'n') // true
console.log(fruta[4 - 2]) // 'n' (é possível usar o resultado de cálculos!)
```

Existem duas características de arrays que são **específicas do JavaScript**:

1. Cada array pode conter dados de diferentes tipos em cada índice. Por exemplo:
```js
const arrayMista = [1, "banana", true, {chave: "valor"}, [1, true, "gatinho"], 55.6]
```
Essa é uma particularidade do JavaScript. As linguagens de programação normalmente só permitem arrays do mesmo tipo de dado, ou seja:
```js
const arrayNums = [1, 4, 73, 55, 43]
const arrayStrings = ["banana", "gatinho", "olar"]
const arrayBool = [true, true, false, true, false]
const arrayObj = [{chave: "valor"}, {chave: "valor"}, {chave: "valor"}]
```

2. O comprimento da array (ou seja, a quantidade de elementos que tem dentro dela) é calculado dinamicamente e cresce automaticamente. Ou seja, diferente de outras linguagens, quando criamos uma array com JavaScript não precisamos dizer quantos elementos ela terá e podemos adicionar elementos dentro de uma array a qualquer hora, indefinidamente (enquanto a memória aguentar!).

Vamos ver em seguida como fazer isso.

### Alterando arrays

Podemos usar índices entre colchetes para definir/alterar/adicionar elementos a uma array. 

```js
const arrayNums = [1, 4, 73, 55, 43]

// alterando num valor que já existe
arrayNums[0] = 5
console.log(arrayNums) // [ 5, 4, 73, 55, 43 ]

//adicionando um novo valor em um novo índice
arrayNums[5] = 13
console.log(arrayNums) // [ 5, 4, 73, 55, 43, 13 ]
```

Podemos criar uma array vazia e definir cada elemento individualmente:

```js
const listaNumeros = []
listaNumeros[0] = 2
listaNumeros[1] = 3
listaNumeros[2] = 5
listaNumeros[3] = 7
listaNumeros[4] = 11

console.log(listaNumeros) // [ 2, 3, 5, 7, 11 ]
```

Uma array pode estar dentro de outra, chamamos isso de *array de duas dimensões*:

```js
const per+guntas = [
  ['Quanto é 2 + 2?', 4], // índice 0
  ['Qual é a capital do Brasil', 'Brasília'], // índice 1
  ['Recife é a capital de Pernambuco', true]  // índice 2
];

console.log(perguntas[2][1]) //true
```

### Iterando arrays

Ok, é possível acessar dados de dentro de uma array através do índice, por exemplo o índice 2 em uma array qualquer: `console.log(nomeDaArray[2])`, ou adicionar um novo ítem criando um novo índice no fim de uma array qualquer de 5 ítens com `nomeDaArray[5] = "valor"`. Parece prático? Não muito.

O que fazemos quando:
1. Não sabemos em que índice da array está o dados que procuramos?
2. Não sabemos o tamanho da array para podermos inserir algo criando um novo índice (caso contrário, o novo dado vai substituir o que já está na array)?
3. Temos que fazer uma mesma operação com mais de um ítem da array - por exemplo, validar uma lista de 100 números de cartão de crédito?

Esses casos acima são os mais comuns no dia-a-dia. E para acessar dados de uma array, alterar e etc, temos que *iterar* através da array, ou seja, **fazer um loop que percorra todos os ítens**.

```js
for ([início]; [condição]; [pós-iteração]) {
  // instruções
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
```

Sim, o mesmo `for` que usamos para strings e números! O `for` é utilizado para que possamos acessar uma array e manipular de várias formas: pegar elementos, fazer cálculos com eles, montar outras arrays, etc. Vamos ver a sintaxe novamente com esse exemplo:

```js
const arrayNumeros = [45, 76, 34, 87, 34, 6]

for (let i = 0; i < arrayNumeros.length; i++) {
  console.log("índice: ", i, "elemento: ", arrayNumeros[i])
}
// índice:  0 elemento:  45
// índice:  1 elemento:  76
// índice:  2 elemento:  34
// índice:  3 elemento:  87
// índice:  4 elemento:  34
// índice:  5 elemento:  6
```

Alguns pontos importantes:
1. A condição do `for` usa `arrayNumeros.length` para pegar o tamanho da array (em quantidade de elementos) e passar esse valor como condição de parada. Ou seja, o loop vai ocorrer **enquanto o valor de `let i` for menor que o número de elementos da array**, no caso 6. É como escrever `i < 6`, mas agora não precisamos saber o tamanho da array! O JS se encarrega disso.
2. Quando começamos a estudar arrays, usamos `array[0]`, por exemplo, para acessar o primeiro elemento de dentro da array (ou seja, o elemento que está no índice 0). Ora, se estamos começando o loop em 0 (o valor que iniciamos com `let i = 0`), podemos acessar cada item de dentro da array, **pois a cada loop o JS vai substituir `arrayNumeros[i]` por `arrayNumeros[0]`, `arrayNumeros[1]`, `arrayNumeros[2]`, etc.**

Vamos ver outro exemplo, para somar todos os números de uma array:

```js
const arrayNumeros = [45, 76, 34, 87, 34, 6]
let somaArray = 0

for (let i = 0; i < arrayNumeros.length; i++) {
  somaArray += arrayNumeros[i]
}

console.log(somaArray) // 282
```

Agora vamos ver ainda mais coisas que podemos fazer com arrays.

### O que é protótipo

Arrays em JavaScript são implementadas como objetos. Isso pode soar um pouco estranho mas, em JavaScript, quase todos os tipos de dados (number, string, array, etc) são implementados como objetos e, como tal, os valores desses tipos terão uma série de métodos e propriedades associados a eles. Tecnicamente, eles herdam esses métodos e propriedades de um protótipo.

Neste curso, nós não vamos aprofundar o mecanismo de herança prototipal em JavaScript, mas precisamos ao menos saber que qualquer array em JavaScript é uma instância do construtor (constructor) `Array` e, portanto, herda todos os métodos e propriedades definidos em `Array.prototype`.

Vamos ver agora o que são esses métodos.

### Métodos comuns de array

Existem muitos métodos para manipular arrays, iterar, etc. Não se preocupe em memorizar a lista completa (não acredito que alguém saiba de cabeça), você vai se familiarizar com eles conforme o uso, aprendendo a tirar vantagem de seus benefícios. Lembre-se de que sempre há a [documentação oficial](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) disponível. Faça uso dela, é a melhor referência.

Alguns deles são:

* para agregar e retirar elementos: `push`, `pop`, `shift`, `unshift`, `slice`, `splice` e `concat`.
* para buscar elementos dentro da array: `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex` e `filter`.
* para transformar arrays: `map`, `reduce`, `sort`, `reverse`, `split` e `join`.

Vamos ver alguns em detalhe:

#### `array.push()`

O método `array.push()` recebe um valor, adiciona-o ao final da array e devolve o novo tamanho (ou comprimento).
Vamos adicionar `1` a uma array que já existe. 

```js
let arrayNum = [0, 0, 0]
console.log(arrayNum.length === 3) // true
arrayNum.push(1)
console.log(arrayNum) // [ 0, 0, 0, 1 ]
```

#### `array.pop()`

Esse método não recebe nenhum parâmetro. Ele simplesmente extrai o último elemento da array e retorna esse elemento (modificando a array diretamente - *in place*).

```js
const arrayStrings = ['banana', 'gatinho', 'socorro']
const elementoRetirado = arrayStrings.pop()
console.log(elementoRetirado) // 'socorro'
console.log(arrayStrings) // [ 'banana', 'gatinho' ]
```

#### `array.slice()`

Esse método cria um nova array através de uma "cópia superficial" *(shallow copy)* de uma parte da array. Ele recebe dois parâmetros que indicam qual parte da array queremos copiar (sem incluir o elemento do segundo índice). *A array original não é modificada*.

Execute os seguintes exemplos para ver como o método `slice()` se comporta.

```js
const arrayOriginal = [3, 2, 1]

//começando a cópia a partir do índice 0 até o fim da array
console.log(arrayOriginal.slice(0)) // [ 3, 2, 1 ]
//começando a cópia a partir do índice 1 até o fim da array
console.log(arrayOriginal.slice(1)) // [ 2, 1 ]
//começando a cópia a partir do índice 2 até o fim da array
console.log(arrayOriginal.slice(2)) // [1]
//começando a cópia a partir do último índice
console.log(arrayOriginal.slice(-1)) // [1]
//começando a cópia a partir do índice 0 e parando no índice 1 (sem incluir o 1)
console.log(arrayOriginal.slice(0, 1)) // [3]
//a array original não é modificada
console.log(arrayOriginal) // [3, 2, 1]
```

Lembrando que a array original não é modificada! Você pode guardar o valor de retorno de `.slice()` em uma nova variável:
```js
const novaArray = arrayOriginal.slice(1)
console.log(novaArray) // [ 2, 1 ]
```

#### array.indexOf()

Esse método recebe um valor e devolve o índice da array que contém esse valor, se ele for encontrado, ou -1 caso contrário. Esse método é usado com muita frequência para verificar se uma array contém um determinado valor (basta que o resultado seja diferente de -1).

```js
const arrayStrings = ['banana', 'maçã', 'uva']
console.log(arrayStrings.indexOf('banana')) // 0
console.log(arrayStrings.indexOf('fruta')) // -1
```

A lista completa de métodos e uma descrição do que eles fazem está na documentação do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype). Está em português!

Alguns métodos requerem mais linhas de código e precisam de mais informações do que outros, dependendo do que queremos fazer. Vamos ver alguns desses com mais detalhe logo mais, quando trabalharmos com **objetos**.

***

## Objetos

Os objetos em JavaScript são muito similares ao arrays, mas com alguns diferenciais:

1. Como vimos, para acessar informações dentro de um array, nós usamos um número correspondente ao índice; isto é, a posição em que o valor está localizado. Os objetos, por outro lado, utilizam strings ao invés de números para acessar os diferentes elementos. Essas strings são chamadas de **chaves (keys) ou propriedades**, e os elementos para os quais eles apontam são chamados de **valores (values)**. Juntas, essas informações são chamadas de pares de chave-valor.
2. Como nos arrays é necessário o índice para acessar informações, é importante manter uma determinada ordem de seus valores. No caso dos pares de chave-valor, as informações podem estar em qualquer ordem.

Enquanto os arrays são usados ​​principalmente para representar listas de várias coisas, os objetos costumam ser usados ​​para representar elementos simples, mas com várias características ou atributos. Por exemplo, se quiséssemos agrupar os nomes das alunas de uma turma de programação, por exemplo:

```js
const arrayAlunas = ['Helena', 'Josélia', 'Melina', 'Carla']
```

Ok, mas e se fosse preciso armazenar outras informações sobre cada aluna? É quando usamos objetos:

```js
const aluna = {
  nome: 'Helena',
  turma: 'on7',
  email: 'h@h.com',
  celular: '(11) 999-999-999',
  pet: 'gato'
}
```

Vamos ver a sintaxe dos objetos:
- Cada objeto é definido por chaves `{}`, ao invés dos colchetes `[]` usados nas arrays.
- Um objeto é composto por **pares de chave-valor**, escritos no formato `chave: valor` e separados por vírgula. A chave (por exemplo, nome) e fica à esquerda; o valor à direita. *Cada par de chave-valor é separado por uma vírgula*.

Os valores podem ser dos mesmos tipos de dados que usamos até agora:

```js
const pessoa = {
  nome: "Marcia", // string
  altura: 1.65, // float
  matriculada: true, // booleano
  turmas: ['front', 'ux'], // array
  contato: { // outro objeto!
    nome: "Maria",
    parentesco: "irmã",
    celular: "(11) 999-999-999"
  }
}
```

### Acessando informações de um objeto

Podemos acessar os valores de um objeto de duas maneiras:

1. **Notação de colchetes []**, assim como fazemos com arrays. A única diferença é que, em vez de usar o índice (um número), usamos a chave (uma string).
2. **Notação de ponto .** O segundo é usando o ponto (.) com o nome da chave imediatamente depois, sem aspas.

Quando usamos um ou outro?

O ponto é o formato mais usado, da seguinte forma:
```js
console.log(pessoa.nome) // 'Marcia'
console.log(pessoa.turmas) // [ 'front', 'ux' ]
console.log(pessoa.turmas[0]) // 'front'
console.log(pessoa.contato.parentesco) // 'irmã'
```

Para acessarmos os mesmos dados, usando colchetes:

```js
console.log(pessoa['nome']) // 'Marcia'
console.log(pessoa['turmas']) // [ 'front', 'ux' ]
console.log(pessoa['turmas'][0]) // 'front'
console.log(pessoa['contato']['parentesco']) // 'irmã'
```

Então pra que os colchetes, se a notação de ponto é mais fácil de escrever e ler?
A notação de colchetes faz uma coisa que a de ponto não faz: aceita variáveis.
Vamos ver:

```js
const nomeDaChave = "nome"
console.log( pessoa[nomeDaChave] ) // 'Marcia'
console.log( pessoa.nomeDaChave ) // undefined
```

Pode parecer estranho agora, mas isso é muito útil quando precisamos escrever um código que aceite receber chaves diferentes ou não temos como saber qual chave precisamos no momento. *Nesse caso não usamos aspas!* 

### Criando ou alterando um objeto

Assim como com arrays, podemos adicionar ou alterar os elementos de um objeto usando os colchetes e chaves ou notação de ponto.
Vamos ver um exemplo, começando com um objeto vazio:

``` js
const pessoa = {} // objeto vazio

pessoa['nome'] = 'Lúcia' // criando um par de chave-valor nome: 'Lúcia'
pessoa['idade'] = 28 // criando um par de chave-valor idade: 28

pessoa.cursos = ['front', 'ux'] // criando também, mas com notação de ponto 
pessoa.matriculada = true // idem!

console.log(pessoa)
// { 
//   nome: 'Lúcia',
//   idade: 28,
//   cursos: [ 'front', 'ux' ],
//   matriculada: true 
// }

pessoa.matriculada = false
// { 
//   nome: 'Lúcia',
//   idade: 28,
//   cursos: [ 'front', 'ux' ],
//   matriculada: false 
// }
```

Com a sintaxe acima conseguimos criar novos pares de chave-valor em um objeto; se o par já existir, o valor é substituído.

### Métodos

Quando pensamos em objetos, pensamos em *representações* da realidade. Por exemplo, um livro tem diversas características: título, autoria, número de páginas, etc. Então pode ser *representado* da seguinte forma:

```js
const objLivro = {
  titulo: "Dom Casmurro",
  autoria: "Machado de Assis",
  paginas: 200,
  ehPessoaViva: false
}
```

Mas, além de listar propriedades, um objeto também pode representar comportamentos. Um objeto pode ter dentro dele *funções* que trazem comportamentos, interagem com as propriedades, fazem cálculos, etc. **Estas funções (chamadas com objetos através da notação `objeto.funcao()`) são chamadas de MÉTODOS**. O JS traz uma série de métodos "prontos" que utilizamos no dia-a-dia, e cada biblioteca que usamos tem seus próprios métodos - isso está ligado ao fato de que praticamente tudo em JS é objeto, mas não vamos entrar em detalhes sobre isso agora. Podemos criar nossos próprios métodos dentro de objetos:

```js
const objGato = {
  nome: "Satanás",
  pelagem: "vaquinha",
  peso: 6.6,
  miar: function() {
    return `O gato ${this.nome} diz: miau`
  }
}

console.log(objGato.miar())
```
O que é o `this`? Vamos deixar para vocês pesquisarem ;)

Agora vamos ver o mesmo código, utilizando *arrow functions*. Observe as diferenças:

```js
const objGato = {
  nome: "Satanás",
  pelagem: "vaquinha",
  peso: 6.6,
  miar: () => `O gato ${objGato.nome} diz: miau`
}

console.log(objGato.miar())
```

Assim como qualquer função e como os métodos comuns do JS que já usamos, esses métodos que criamos também podem receber parâmetros:

```js
const objGato = {
  nome: "Satanás",
  pelagem: "vaquinha",
  peso: 6.6,
  miar: function(miado) {
    return `O gato ${this.nome} diz: ${miado}`
  }
}

console.log(objGato.miar("minhauuuu"))
```

## Manipulando arrays e objetos

Essas duas estruturas são muito comuns quando lidamos com dados:

```js
// uma propriedade (cursos) tendo uma array como valor
{
  nome: "Helena", 
  cursos: ["front", "back", "ux"]
}
``` 
```js
// uma array com vários objetos dentro
[
  { nome: "Helena", matriculada: true }, // índice 0
  { nome: "Solange", matriculada: true }, // índice 1
  { nome: "Ana", matriculada: false } // índice 2
]
```

Vamos criar uma estrutura um pouco mais completa para testar:

```js
const helena = {
  id: 345,
  nome: 'Helena',
  cursos: ['front', 'back'],
  matriculada: true
}

const joana = {
  id: 656,
  nome: 'Joana',
  cursos: ['front'],
  matriculada: true
}

const marcia = {
  id: 234,
  nome: 'Marcia',
  cursos: ['back', 'ux'],
  matriculada: false
}

const alunas = [helena, joana, marcia] // uma array com 3 objetos!
```

Usando novamente o `for`, podemos acessar cada um dos objetos e suas propriedades:

```js
for (i = 0; i < alunas.length; i++) {
  console.log(alunas[i].nome)
}

// Helena
// Joana
// Marcia
```

Para acessar uma array de cursos dentro de outra array de alunas? Podemos fazer um for dentro de outro:

```js
for (i = 0; i < alunas.length; i++) {
  for (j = 0; j < alunas[i].cursos.length; j++) {
    console.log(alunas[i].cursos[j])
  }
}
// front
// back
// front
// back
// ux
```

Faça alguns testes acessar as informações que quiser, imprimir no console, etc.

### For... in e for... of

Também podemos utilizar outros `for`, parecidos como "clássico", mas que têm uma sintaxe um pouco mais legível para nós.
Para iterarmos arrays, utilizamos o **for... of**:

```js
for (aluna of alunas) {
  if (aluna.matriculada) {
    console.log(aluna.nome)
  }
}
// Helena
// Joana

for (aluna of alunas) {
  console.log(`A aluna ${aluna.nome} cursa:`)
  for (curso of aluna.cursos) {
    console.log(curso)
  }
}
// A aluna Helena cursa:
// front
// back
// A aluna Joana cursa:
// front
// A aluna Marcia cursa:
// back
// ux
``` 

Revendo a sintaxe: 
- `aluna` está fazendo o papel da variável `let i` que usamos para iniciar o for e `alunas` é o nome da array que vamos trabalhar.
- Nesse for, não precisamos mais dizer quando o loop tem que parar: ele faz isso automaticamente a partir do tamanho da array `alunas`.
- Também não precisamos dizer ao JS o que fazer no final de cada iteração (o que fazíamos com `i++`, por exemplo). Ele vai passar para o próximo índice da array sozinho.

Então por que não usamos somente esse for, ao invés do "clássico" que temos que escrever muito mais? Bom, o `for of` funciona bem quando temos essa relação de **uma array de objetos e arrays dentro de objetos**, já que esse for faz automaticamente o loop passando por todos os índices da array. Porém, se precisamos fazer algum cálculo onde temos que fazer um ajuste mais fino (por exemplo, se números crescentes ou decrescentes), ainda vamos precisar do clássico.

E quando queremos iterar *objetos*? 
Uma das formas é parecida com o `for of`, porém o nome é `for in`:

```js
const livro = {
  titulo: 'Quarto de Despejo',
  autoria: 'Carolina Maria de Jesus',
  paginas: 200,
  categoria: ['literatura brasileira', 'autoras mulheres', 'premiado']
}

for (caracteristica in livro) {
  console.log(`chave: ${caracteristica}, valor: ${livro[caracteristica]}`)
}

// chave: titulo, valor: Quarto de Despejo
// chave: autoria, valor: Carolina Maria de Jesus
// chave: paginas, valor: 200
// chave: categoria, valor: literatura brasileira,autoras mulheres,premiado
```

Aqui, `caracteristica` é o nome que damos para a variável que faz o papel de `let i` (ou seja, a variável que será iterada). O importante é ver como fazemos para acessar a chave e o valor do objeto: chamando apenas a variável (no caso, `caracteristicas`), o for traz as chaves, porém se queremos o *valor* das chaves, usamos a notação de colchetes como já fizemos antes: `livro[caracteristica]`.

### `filter`, `map`, `forEach` e `reduce`

Já vimos vários métodos úteis, mas separamos estes pois sua sintaxe é um pouco diferente.

* `filter()` filtra elementos e cria um novo array
* `map()` mapeia a array, executa a instrução e devolve um novo array como resultado.
* `forEach()` executa uma dada função em cada elemento de um array, sem retornar.
* `reduce()` executa uma função redutora para cada ítem do array, com num único valor de retorno.


#### `filter()`

Usamos para trazer um subconjunto dos elementos da array, desde que cumpram uma certa condição.
*O resultado é sempre uma nova array com os elementos filtrados (ou uma array vazia se não encontrar nada)*

```js
const numeros = [34, 62, 7447, 764, 86, 657, 87, 9]

const maioresQueCinquenta = numeros.filter(numero => numero > 50)
console.log(maioresQueCinquenta) // [ 62, 7447, 764, 86, 657, 87 ]
```

Podemos usar o `.filter()` para fazer coisas mais complexas com uma array de objetos! Caso o filtro encontre o valor procurado em qualquer valor dentro do objeto, o objeto inteiro é copiado para dentro da nova array de resultados.

```js
const pokemons = 
[
  { id: 1, name: "Bulbasaur", type: [ "Grass", "Poison" ] }, 
  { id: 2, name: "Ivysaur", type: [ "Grass", "Poison" ] }, 
  { id: 4, name: "Charmander", type: [ "Fire" ] }
]

const grassPokemonsFunction = pokemons
  .filter(function(pokemon) {
    pokemon.type[0] === "Grass"
  })

//a mesma coisa, com arrow function 
const grassPokemonsArrowFunction = pokemons
  .filter(pokemon => pokemon.type[0] === "Grass")

console.log(grassPokemons)
// [ { id: 1, name: 'Bulbasaur', type: [ 'Grass', 'Poison' ] },
//   { id: 2, name: 'Ivysaur', type: [ 'Grass', 'Poison' ] } ]
```

Encontrou uma array dentro de outra array? Não tem problema, você pode iterar por ela também. A array interna, nesse exemplo, é o valor da propriedade `pokemon.type`. Vamos usar outro método em conjunto com o `.filter()` chamado `.includes()`, que verifica se determinado valor existe na array e retorna `true` ou `false`.

```js
const grassPokemonsFunction = pokemons
  .filter(function(pokemon) {
    return pokemon.type.includes("Grass") === true
  })

//a mesma coisa, com arrow function 
const grassPokemonsArrowFunction = pokemons
  .filter(pokemon => pokemon.type.includes("Grass") === true)
```

O método `.filter()` aceita um segundo parâmetro, que é o índice que está sendo trabalhando a cada loop. Veja com mais detalhes abaixo, no `.map()`.

#### `.map()`

Com esse método podemos entrar em cada um dos elementos da array, coletando neste processo um valor de retorno para cada elemento visitado. O `.map()` é um dos métodos que mais usamos no dia-a-dia para percorrer arrays, medificá-las e formar novas arrays com os elementos que queremos.

Por exemplo, para obtermos uma lista somente com os nomes dos Pokemóns. Lembrando que o retorno *sempre* será uma array com os resultados dentro!

```js
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

//a mesma coisa, com arrow function 
const nomesPokemonsArrow = pokemons.map(pokemon => pokemon.name)

console.log(nomesPokemons) // [ 'Bulbasaur', 'Ivysaur', 'Charmander' ]
console.log(nomesPokemonsArrow) // [ 'Bulbasaur', 'Ivysaur', 'Charmander' ]
```

E quando precisamos trabalhar com o índice de uma array? O `.map()` também aceita um segundo parâmetro, onde podemos receber o índice da array que está sendo trabalhado!

```js
const arr = [54, 65, 45, 56, 76]

const multiplicaIndicesPares = arr.map((numero, indice) => {
  if (indice % 2 === 0) {
    return numero * 2
  }
  return numero
})

console.log(multiplicaIndicesPares)
```

#### `forEach()`

"For each" significa, em inglês, "para cada". No contexto, esse método significa que "*para cada* elemento da array, faça X".
Importante: *Ao contrário do map, o forEach não retorna uma array com os resultados!* Ele não retorna nenhum dado, apenas percorre a array e faz o que for pedido no código.

Continuando com os Pokémons:

```js
let listaNomes = ''
const nomesPokemons = pokemons.forEach(function(pokemon) {
    listaNomes += `O pokemón ${pokemon.name} tem id ${pokemon.id}\n`
  })
console.log(listaNomes)
// O pokemón Bulbasaur tem id 1
// O pokemón Ivysaur tem id 2
// O pokemón Charmander tem id 4

//a mesma coisa, com arrow function 
let outraListaNomes = ''
const nomesPokemonsArrow = pokemons.forEach(pokemon => outraListaNomes += `O pokemón ${pokemon.name} tem id ${pokemon.id}\n`)
console.log(outraListaNomes)
// O pokemón Bulbasaur tem id 1
// O pokemón Ivysaur tem id 2
// O pokemón Charmander tem id 4
```

O `forEach()` também aceita um segundo parâmetro para pegarmos os índices que estão sendo trabalhados.

### Outros métodos

Não vamos abordar aqui, mas você pode pesquisar mais sobre eles:

- `array.reduce()`: um método que percorre a array e reduz valores a um único número.
- `Object.keys(obj)` / `Object.values(obj)` / `Object.entries(obj)`: Esses métodos retornam uma array com todas as chaves/valores/pares de propriedades próprios de um objeto.
- `Object.getOwnPropertyNames(obj)`: Esse método retorna um array contendo todos os nomes de propriedades próprios (enumeráveis ou não) de um objeto.

### Links

- [Estruturas de dados](http://braziljs.github.io/eloquente-javascript/chapters/estrutura-de-dados/) no livro JavaScript Eloquente

## Links de exercícios

- Para começar: Lista de exercícios de JavaScript do [W3Schools](https://www.w3schools.com/js/js_exercises.asp). Vai desde os conceitos mais básicos como variáveis.

- Uma lista com mais de [100 exercícios](https://repl.it/community/classrooms/20690) de JS que vão de funções e variáveis até objetos e arrays (em inglês). Precisa criar uma conta no serviço Repl.it para fazer, salvar e testar as respostas.

- [HackerRank](https://www.hackerrank.com/) - muitas empresas usam os testes desse site em vagas.

- [URI](https://www.urionlinejudge.com.br/judge/pt/) - testes de programação e matemática de diversos níveis.

