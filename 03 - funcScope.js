var x = 3;

function func(bool) {
  let x;
  if (bool) {
     x = 48; 
  }

  return x; 
}

console.log(func(true)); 
console.log(func(false)); 