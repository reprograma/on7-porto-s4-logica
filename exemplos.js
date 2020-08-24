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

const alunas = [helena, joana, marcia]

const livro = {
  titulo: 'Quarto de Despejo',
  autoria: 'Carolina Maria de Jesus',
  paginas: 200,
  categoria: ['literatura brasileira', 'autoras mulheres', 'premiado']
}


for (caracteristica in livro) {
  console.log(`chave: ${caracteristica}, valor: ${livro[caracteristica]}`)
}




