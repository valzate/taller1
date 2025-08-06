// Definición de la clase Nodo
class Nodo {
    constructor(dato) {
        this.dato = dato;        // El dato que almacenará el nodo
        this.anterior = null;    // Puntero al nodo anterior
        this.siguiente = null;   // Puntero al siguiente nodo
    }
}

// Definición de la clase ListaDoble
class ListaDoble {
    constructor() {
        this.head = null;       // El primer nodo de la lista
        this.tail = null;       // El último nodo de la lista
    }
// Método para agregar un nodo al inicio de la lista
    agregarAlInicio(dato) {
        // Crear un nuevo nodo
        const nuevoNodo = new Nodo(dato); 

        if (this.head === null) { 
            this.head = nuevoNodo; // El nuevo nodo es el head
            this.tail = nuevoNodo; // El nuevo nodo es también el tail
        } else {
            nuevoNodo.siguiente = this.head; 
            this.head.anterior = nuevoNodo;   
            this.head = nuevoNodo;             
        }
    }
    // Agregar al final
    agregarAlFinal(dato) {
          const nuevoNodo = new Nodo(dato);
        if (!this.head) {
            this.head = nuevoNodo;
            this.tail = nuevoNodo;
        } else {
            nuevoNodo.anterior = this.tail;
            this.tail.siguiente = nuevoNodo;
            this.tail = nuevoNodo;
        }        
    }

}

const lista = new ListaDoble();// Creación de una instancia de ListaDoble y agregar un nodo al inicio
lista.agregarAlInicio(10); // Se agrega un nodo al inicio de la lista doble
console.log("El dato del primer nodo es:", lista.head.dato); // Verificamos el dato del primer nodo
lista.agregarAlFinal(20); // Se agrega un nodo al final de la lista doble
console.log("El dato del segundo nodo es:", lista.tail.dato); // Verificamos el dato del segundo nodo