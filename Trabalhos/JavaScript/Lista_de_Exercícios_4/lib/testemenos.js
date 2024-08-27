function menosLista(lista) {
    let total = -1;
    let N = lista.length;

    for(let i=1; i<N; i++) {
        total -= lista[i];
    }
    return total;
}

console.log(menosLista([1, 2, 3, 4, 5]));
console.log(menosLista([2, 4, 6, 8]));
console.log(menosLista([1, 3, 5, 7]));
console.log(menosLista([0]));
console.log(menosLista([]));