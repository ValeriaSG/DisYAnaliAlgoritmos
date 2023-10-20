function SecuenciaDesc(numero) { //define la funcion y el parametro
    if (numero >= 0) { //determina si es mayor o igual a 0
        console.log(numero); //ingresa el numero actual
        SecuenciaDesc(numero - 1); //se llama a si misma para ir reduciendo de 1 en 1
    }
}

const numeroUsuario = parseInt(prompt("Ingrese un número entero: ")); //Se pide al usuario un número entero
SecuenciaDesc(numeroUsuario); //imprime el resultado
