// let soma = 0;
// for (let index=0; index <= 50; index+=1){
//     soma += index;
// }
// console.log(soma);

// let divisor = 0;
// for (let index=2; index <= 150; index += 1){
//     if (index%3 === 0){
//         divisor += 1
//     }
// }
// console.log(divisor)

let escolhas = ['Pedra', 'Tesoura', 'Papel'];
let player1 = escolhas[Math.floor((Math.random()* escolhas.length))];
let player2 =  escolhas[Math.floor((Math.random()* escolhas.length))];

console.log('Player 1 '+player1);
console.log('Player 2 '+player2);
if (player1 === 'Pedra' && player2 === 'Tesoura'){
    console.log('Player 1 won')
}else if (player1 === 'Tesoura' && player2 === 'Papel'){    
        console.log('Player 1 won')
}else if (player1 === 'Papel' && player2 === 'Pedra'){    
        console.log('Player 1 won')
}else if (player2 === 'Pedra' && player1 === 'Tesoura'){
    console.log('Player 1 won')
}else if (player2 === 'Tesoura' && player1 === 'Papel'){    
        console.log('Player 1 won')
}else if (player2 === 'Papel' && player1 === 'Pedra'){    
        console.log('Player 1 won')
}else{
    console.log('A tier')
}