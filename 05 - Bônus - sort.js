// DEFINICAO - O sort ordena os elementos do array em ordem alfabética. 

const scores = [1, 10, 2, 21];

const fruits = ['cherries', 'apples', 'bananas'];


// console.log(scores.sort());
// console.log(fruits.sort());

// Ordenada na crescente

console.log(scores.sort((a,b) => a - b));

// Ordenada decrescente

console.log(scores.sort((a,b) => b - a));
