let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };
    
    let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente:  'Sim'
    }
    let cont = 0;
    info['recorrente'] = 'Sim';
    for (let index in info){
        console.log(index);
        console.log(info[index]);
        cont += 1;
    }
    
    console.log(info['personagem'] + ' e ' + info2['personagem']);
    console.log(info['origem'] + ' e ' + info2['origem']);
    console.log(info['nota'] + ' e ' + info2['nota']);
    // if (info['recorrente']='sim' && info2['recorrente']='sim'){
    //     console.log('Ambos são recorrentes')
    // }
  
    console.log('Bem vinda '+info['personagem']);

//Função palindromo
let palavra = 'arara'
function verificaPalindromo(palavra){      
    let retorno = true;
    let words = ''
    for (index = palavra.length-1; index >= 0 ; index -= 1){
        words += palavra[index];
    }
    if (words === palavra){
        retorno = true;
    }else{
        retorno = false;
    }
    return(retorno);
}
console.log(verificaPalindromo(palavra))