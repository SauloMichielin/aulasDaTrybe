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
    
  
    console.log('Bem vinda '+info['personagem']);