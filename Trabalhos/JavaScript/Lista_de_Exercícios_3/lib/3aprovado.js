function aprovado(nota) {
	let aproved;
	if (nota >= 7) {
		aproved = "Aprovado";
	}
	if (nota < 7) {
		aproved = "Reprovado";
	 }
   

return aproved;
}
console.log(aprovado(10));
console.log(aprovado(7));
console.log(aprovado(6.95));
console.log(aprovado(8.8));
console.log(aprovado(0));
console.log(aprovado(4.5));