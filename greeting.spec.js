// const {greetingPeople, greeting, defaultGreeting, badMoodGreeting, loveGreeting, person} = require('./greeting');
const greetingPeople  = require('./greeting');



describe('Testa greetingPeople', () => {
  test(`Retorna 'Olá, tuuurmaaa!' quando a função é chamada sem parâmetro`, () => {
    expect(greetingPeople()).toBe('Olá, tuuurmaaa!');
  });
});
