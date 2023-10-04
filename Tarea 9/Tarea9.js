function contarVocalesConTildes(frase) {
    const vocalesConTildes = /[áéíóúÁÉÍÓÚ]/g;
    const vocalesConTildesEncontradas = frase.match(vocalesConTildes);
    
    if (vocalesConTildesEncontradas) {
        return vocalesConTildesEncontradas.length;
    } else {
        return 0;
    }
}

// Frase introducida
const fraseUsuario = prompt("Introduce una frase:");

// Llamar a la función y mostrar el resultado
const numeroVocalesConTildes = contarVocalesConTildes(fraseUsuario);
console.log("Número de vocales con tildes en la frase: " + numeroVocalesConTildes);
