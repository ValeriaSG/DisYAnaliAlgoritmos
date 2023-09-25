const readline = require('readline');
//Lee datos ingresador del teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Calcula la Serie de Fibonacci
//declarando n
function Sfibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return Sfibonacci(n - 1) + Sfibonacci(n - 2);
  }
}

rl.question('Ingresea el número de términos en la serie de Fibonacci que desea calcular: ', (answer) => {
  const n = parseInt(answer);

  if (isNaN(n) || n < 0) {
    console.log('Ingrese un número válido mayor o igual a 0.');
  } else {
    console.log('Serie de Fibonacci:');
    for (let i = 0; i < n; i++) {
      console.log(Sfibonacci(i));
    }
  }

  rl.close();
});
