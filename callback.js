const characters = [
  {
    id: 123,
    name: "Luva",
    favoriteFood: "batata frita",
    greeting: "Receba!",
  },
  {
    id: 321,
    name: "Casimiro",
    favoriteFood: "churrasco",
    greeting: "Meteu essa!?",
  },
  {
    id: 404,
    name: "Naruto",
    favoriteFood: null,
    greeting: "Clone das sombras!!",
  },
];


const createPresentationMessage = (name, callback) => {
  // Encontrar o personagem pelo nome passado como parâmetro
  setTimeout(() => {
    const foundCharacter = characters.find((character) => character.name === name);
    if (foundCharacter) {
      const { name: characterName, favoriteFood, greeting } = foundCharacter; 
      const greetingString = `${greeting}. Meu nome é ${characterName} e minha comida favorita é ${favoriteFood}`;
      
      callback(greetingString, null);
    } else {
      callback(null, new Error("Personagem não encontrado!"));
    }
  }, 2000);
  // Construir uma mensagem de apresentação 
  // `${greeting}. Meu nome é ${name} e minha comida favorita é ${favoriteFood}`
};


/*
 * Utilizando uma função externa como callback
 */
// function callbackFunction(greetingMessage, error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(greetingMessage);
//   }
// }
// createPresentationMessage("Luva", callbackFunction);

createPresentationMessage("Luva", (greetingMessage, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(greetingMessage);
  }
});

console.log("Final");


