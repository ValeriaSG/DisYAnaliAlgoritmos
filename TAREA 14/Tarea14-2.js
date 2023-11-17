// Definir la clase para el nodo del árbol
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Definir la clase para el árbol binario de búsqueda
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Función para agregar un nuevo nodo al árbol
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Auxiliar para insertar un nodo en la posición correcta
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Función para buscar un elemento en el árbol
  search(target) {
    return this.searchNode(this.root, target);
  }

  // Auxiliar para buscar un nodo con un valor específico
  searchNode(node, target) {
    if (node === null || node.value === target) {
      return node ? node.value : null;
    }

    if (target < node.value) {
      return this.searchNode(node.left, target);
    } else {
      return this.searchNode(node.right, target);
    }
  }
}

// Función para preguntar al usuario por un número y hacer la búsqueda
function searchNumber() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Preguntar al usuario por un número
  readline.question('Ingrese un número para buscar en el árbol: ', number => {
    const bst = new BinarySearchTree(); // Crear un nuevo árbol

    // Valores predefinidos en el árbol
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(2);
    bst.insert(7);
    bst.insert(12);
    bst.insert(20);

    const targetValue = parseInt(number); 
    const result = bst.search(targetValue); // Búsqueda en el árbol

    // Mostrar el resultado de la búsqueda
    if (result !== null) {
      console.log(`El valor ${targetValue} fue encontrado en el árbol.`);
    } else {
      console.log(`El valor ${targetValue} no fue encontrado en el árbol.`);
    }

    // Pregunta al usuario si desea agregar un nuevo número al árbol
    readline.question('¿Desea agregar un nuevo número al árbol? (Sí/No): ', answer => {
      if (answer.toLowerCase() === 'sí' || answer.toLowerCase() === 'si') {
        readline.question('Ingrese el nuevo número: ', newNumber => {
          const newValue = parseInt(newNumber); 
          bst.insert(newValue); // Insertar el nuevo número en el árbol
          console.log(`El valor ${newValue} ha sido agregado al árbol.`);
          searchNumber(); // Repetir el proceso con el nuevo árbol
          readline.close(); // Cerrar la  lectura
        });
      } else {
        readline.close(); 
      }
    });
  });
}

// Llamar a la función para buscar un número ingresado por el usuario
searchNumber(); // Iniciar el proceso de búsqueda
