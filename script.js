/* 

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma **função** que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const students = [
  {
    name: 'Ygor',
    noteOne: 6,
    noteTwo: 7
  },
  {
    name: 'Carol',
    noteOne: 10,
    noteTwo: 9.85
  },
  {
    name: 'Pedro',
    noteOne: 7.82,
    noteTwo: 5.91
  },
  {
    name: 'João',
    noteOne: 7,
    noteTwo: 9.98
  }
]

for(let student of students) {
  alert(ContestStudents(student))
}

function ContestStudents(student) {
  let average = CalcAverage(student.noteOne, student.noteTwo)

  if (average >= 7) {
    return `Parabens ${student.name}, você passou no concurso! Sua média foi de ${average}`
  } else {
    return `Você não passou dessa vez ${student.name}, tente da próxima vez! Sua média foi de ${average}`
  }
}

function CalcAverage(noteOne, noteTwo) {
  let calc = ((noteOne + noteTwo) / 2).toFixed(2)
  return calc
}
