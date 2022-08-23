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
    name: 'João',
    gender: 'male',
    firstNote: 7,
    secondNote: 6.5
  },
  {
    name: 'Letícia',
    gender: 'female',
    firstNote: 8,
    secondNote: 9.2
  },
  {
    name: 'Jaqueline',
    gender: 'female',
    firstNote: 4,
    secondNote: 6.2
  },
  {
    name: 'Pedro',
    gender: 'male',
    firstNote: 4,
    secondNote: 10
  }
]

for(let student of students) {
  ContestStudents(student)
}

function ContestStudents(student) {
  let average = (student.firstNote + student.secondNote) / 2

  if(average >= 7) {
    if(students.gender == 'male') {
      return alert(`Parabens ${student.name}, você foi aprovado! Sua média foi de ${average}`)
    } else {
      return alert(`Parabens ${student.name}, você foi aprovada! Sua média foi de ${average}`)
    }
  } else {
    return alert(`Não foi dessa vez ${student.name}, tente da próxima vez! Sua média foi de ${average}`)
  }
}