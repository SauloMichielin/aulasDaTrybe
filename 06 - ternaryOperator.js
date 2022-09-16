// 'condicão' ? 'retorno se verdadeira' : 'retorno se falsa';

// Crie uma arrow function que recebe uma idade como entrada e retorne
// uma string indicando se a pessoa pode dirigir ou não. Use operador ternário
// e template literals.

const exercicio = (idade) => idade >= 18 ? `Pode dirigir, pois a idade é ${idade}` : `Não pode dirigir, pois a idade é ${idade}`;



console.log(exercicio(17));