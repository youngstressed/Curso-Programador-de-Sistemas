function negative(n) {
	let num;
	if (n > 0) {
		num = "Positivo";
	} else {
	if (n < 0) {
		num = "Negativo";
	} else {
		if (n == 0) {
			num = "Zero";
        }
    }    
}
return num;
}
console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
console.log(negative(1110));
console.log(negative(-987654321));