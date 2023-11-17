//Codigo donde el usuario establece los 7 elementos del arbol y pregunta si se encuentra en ese arbol
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

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

  search(target) {
    return this.searchNode(this.root, target);
  }

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

function iniciarArbol() {
  const bst = new BinarySearchTree();
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const recursiveInsert = (count) => {
    if (count === 7) {
      buscarElemento(bst, rl);
      return;
    }

    rl.question(`Ingrese el elemento ${count + 1}: `, (value) => {
      bst.insert(parseInt(value, 10));
      recursiveInsert(count + 1);
    });
  };

  console.log('Ingrese 7 elementos para crear el árbol:');
  recursiveInsert(0);
}

function buscarElemento(bst, rl) {
  rl.question('Ingrese el valor que desea buscar en el árbol: ', (target) => {
    const result = bst.search(parseInt(target, 10));
    if (result !== null) {
      console.log(`El valor ${target} fue encontrado con éxito en el árbol.`);
    } else {
      console.log(`El valor ${target} no fue encontrado con éxito en el árbol.`);
    }
    rl.close();
  });
}

iniciarArbol();
