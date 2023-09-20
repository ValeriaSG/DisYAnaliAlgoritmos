function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextValue = series[i - 1] + series[i - 2];
    serie.push(nextValue);
  }

  return serie;
}

const n = 10; // Cambia 'n' según los términos de la serie que se desea.
const fibonacciSerie = fibonacci(n);
console.log(`Serie de Fibonacci de los primeros {n} términos: ${fibonacciSerie.join(', ')}`);
