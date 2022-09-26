// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = number => {
//     return number % 3 === 0 && number % 5 === 0;
// }

// console.log(findDivisibleBy3And5(numbers));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nomes) => {
    const resultado = nomes.find((nome) => nome.length === 5);
    return resultado;
}



console.log(findNameWithFiveLetters(names));