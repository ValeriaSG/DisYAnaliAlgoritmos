const readline = require('readline');
//Lee datos ingresados del teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//piEstimado
//Calcula la Serie de Gregory
function calculaGregoryLeibniz(iter) {
  let piEstim = 0;
  for (let i = 0; i < iter; i++) {
    const denominator = 2 * i + 1;
    if (i % 2 === 0) {
      piEstim += 1 / denom; //denominador
    } else {
      piEstim -= 1 / denom;
    }
  }
  return 4 * piEstim;
}

rl.question('Ingrese el número de iteraciones para estimar π: ', (iter) => {
  const pi = calculaGregoryLeibniz(parseInt(iter));
  console.log(`La estimación de π con ${iter} iteraciones es: ${pi}`);
  rl.close();
});
