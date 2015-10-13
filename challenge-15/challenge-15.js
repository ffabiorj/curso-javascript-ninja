(function(){


  /*
  Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

  /*
  Crie uma função construtora chamada "Person". Esse construtor deve ter
  as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
      - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
  */
  function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function getFullName(){
      return this.name + ' ' + this.lastName;
    }

    this.getAge = function getAge(){
      return this.age;
    }

    this.addAge = function addAge(){
      this.age += arguments[0];
	 return this; 
    }
  }

  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variá	veis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  fabio = new Person('Fábio', 'Oliveira', 30);
  renata = new Person('Renata', 'Oliveira', 41);
  felipe = new Person('Felipe', 'Oliveira', 28);
  
  console.log(fabio);
  console.log(renata);
  console.log(felipe);


  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log( '\nNomes das pessoas:' );
  console.log(fabio.getFullName());
  console.log(renata.getFullName());
  console.log(felipe.getFullName());

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );
  // ?
	console.log(fabio.getFullName() + ' tem ' + fabio.getAge() + ' anos.')
	console.log(renata.getFullName() + ' tem ' + renata.getAge() + ' anos.')
	console.log(felipe.getFullName() + ' tem ' + felipe.getAge() + ' anos.')
  /*
  Adicione alguns anos à cada pessoa, e mostre no onsole a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
 	 fabio.addAge(20);
	 renata.addAge(10);
	 felipe.addAge(15);
	console.log(fabio.getFullName() + ' agora tem ' + fabio.getAge() + ' anos.')
	console.log(renata.getFullName() + ' agora tem ' + renata.getAge() + ' anos.')
	console.log(felipe.getFullName() + ' agora tem ' + felipe.getAge() + ' anos.')

})();