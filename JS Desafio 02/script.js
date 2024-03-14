/* 
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso 
  e mostre uma mensagem na tela.

💡 Dica: para quebrar uma linha no `alert()` basta usar um **\n** na mensagem. 😛


Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes. 😊
Fique à vontade caso queira adicionar novos dados e fazer novas validações. Se desafie! 🚀
*/

const students = [
  { 
    name: "Beyoncé",
    firstTest: 10,
    secondTest: 9
  },
  { 
    name: "Mariah Carey",
    firstTest: 6,
    secondTest: 7
  },
  { 
    name: "Harry Styles",
    firstTest: 3,
    secondTest: 0
  },
  { 
    name: "Björk",
    firstTest: 9,
    secondTest: 9
  }
]

const dataSize = students.length

for (let i = 0; i <= dataSize; i++) {

  AVGgrades= ((students[i].firstTest + students[i].secondTest)/2).toFixed(1)
  if (AVGgrades >= 7) {
    alert ('Parabéns ' + students[i].name + '! Você passou com média ' + AVGgrades)
  } else {
    alert ('Desculpe, ' + students[i].name + '. Você flopou e sua média é ' + AVGgrades)
  }

}

AVGgrades= ((students[2].firstTest + students[2].secondTest)/2).toFixed(1)

console.log(AVGgrades)
/* Ideia: Para ser escalável é necessário definir que o programa vá até o final da lista
Para isso, pode se identificar o tamanho dos itens no array e definir um while até passar por todos os itens

Dai exibir item por item com um if/else de if AVGgrade<7 você flopou, AVGgrade>7 você passou
*/

/* filter -> sintaxe mais fácil . tENTAR PELO FOR*/