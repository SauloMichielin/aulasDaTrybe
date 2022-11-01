const sleep = (duration) => {
  // Dado o tempo por parâmetro
  // Vou executar um loop até que este tempo tenha passado

  // Preciso pegar a hora atual e guardar em uma variável = now
  const now = new Date().getTime();
  while(new Date().getTime() < now + duration);
  // Enquanto o tempo atual for menor que a variável now + o parâmetro da função
  // Fique em loop
};

const prepareBigMac = (callback) => {
  // sleep(3000);
  setTimeout(() => {
    console.log('BigMac is Ready');
    callback();
  }, 3000)
};

const prepareMilkShake = () => {
  console.log('MilkShake is Ready');
};

console.log('Início');

prepareBigMac(prepareMilkShake);

console.log('Final');
