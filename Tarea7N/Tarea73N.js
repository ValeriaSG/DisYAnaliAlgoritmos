const readline = require('readline');

// Se lee datos ingresados del teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Calcula el factorial
function calcularFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcularFactorial(n - 1);
  }
}

rl.question('Introducir un número para calcular el factorial: ', (numero) => {
  const n = parseInt(numero);

  if (isNaN(n) || n < 0) {
    console.log('Introducir un número válido positivo.');
  } else {
    const factorial = calcularFactorial(n);
    console.log(`El factorial de ${n} es:  ${factorial}`);
  }

  rl.close();
});
