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
     // Insertar en un índice específico
    insertarEnIndice(dato, indice) {
        if (indice < 0 || indice > this.longitud) {
            console.error("Índice fuera de rango");
            return;
        }

        const nuevoNodo = new Nodo(dato);

        if (indice === 0) {
            this.agregarAlInicio(dato);
            return;
        }

        if (indice === this.longitud) {
            this.agregarAlFinal(dato);
            return;
        }

        let actual = this.head;
        for (let i = 0; i < indice; i++) {
            actual = actual.siguiente;
        }

        nuevoNodo.siguiente = actual;
        nuevoNodo.anterior = actual.anterior;
        actual.anterior.siguiente = nuevoNodo;
        actual.anterior = nuevoNodo;
        this.longitud++;
    }
}

 
    
      
// Ejemplo de uso
const lista = new ListaDoble();
lista.agregarAlInicio(10); // Agregamos el primer nodo con el dato 10
lista.agregarAlFinal(20); // Agregamos un segundo nodo con el dato 20
lista.insertarEnIndice(15,1); // Insertamos un nodo con el dato 15 en el índice 1
console.log("El dato del primer nodo es:", lista.head.dato); // Verificamos el dato del primer nodo
console.log("El dato del ultimo nodo es:", lista.tail.dato);
console.log("El dato del nodo en el índice 1 es:", lista.head.siguiente.dato); // Verificamos el dato del nodo en el índice 1
