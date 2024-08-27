/** 
 * Arquivo lib/soma.js 
*/ 
 
function soma(a, b) { 
  /* Declaração de variáveis auxiliares */ 
  let total; 
   
  /* Processamento de dados */ 
  total = Number(a) + Number(b); 
 
  /* Retorno (saída) de dados */ 
  return total; 
} 
 
/* Validação de cenários de teste */
console.log(soma(4, 5));        // 9
console.log(soma(10, 15));      // 25
console.log(soma("-3", "7"));   // 4