function termenor (a, b, c) {
  let menor;
  if(a < b) {
  	menor = a;
  } else {
  	menor = b;
  }
  if(c < menor) {
  	menor = c;
  }
  return menor;
  }
  console.log(termenor(3,7,5));
  console.log(termenor(-1,-5,-3));
  console.log(termenor(8,2,10));