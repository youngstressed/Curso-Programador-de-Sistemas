function divisao(a, b){
	var dividir,
	dividir = (a - a % b) / b;
	return dividir;
}
console.log(divisao(10,3));
console.log(divisao(9,3));
console.log(divisao(9,2));
console.log(divisao(7,5));
console.log(divisao(0,5));