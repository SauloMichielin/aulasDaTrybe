let meuJogo = [15, 55, 38, 20, 12, 48];
let jogoMegasena = [Math.round(Math.random()*61), Math.round(Math.random()*61), Math.round(Math.random()*61), Math.round(Math.random()*61), Math.round(Math.random()*61), Math.round(Math.random()*61)];
let resultado = 0
let cont = 0
let contador = 0
let verificador = []

console.log(_.uniq(jogoMegasena));


// while (resultado < 1){
//     for (let cont = 0; cont < meuJogo.length; cont++){
//         for (let index = 0; index < jogoMegasena.length; index++){
//             if (jogoMegasena[index] === meuJogo[cont]){
//                 resultado += 1;
//             }
//         }
//     }
//     contador++
// }
// console.log(resultado);
// console.log(contador);
// console.log(jogoMegasena);