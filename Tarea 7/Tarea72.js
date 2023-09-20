const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introducir la cantidad de términos para calcular Pi: ', (n) => {
  n = parseInt(n);
  if (isNaN(n) || n <= 0) {
    console.log('Solo número entero positivo.');
    rl.close();
    return;
  }

  let pi = 0;
  let sign = 1;

  for (let i = 0; i < n; i++) {
    pi += sign * (4 / (2 * i + 1));
    sign = -sign;
  }

  console.log(`El valor aproximado de Pi con ${n} términos es: ${pi}`);

  rl.close();
});
