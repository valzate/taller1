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
    // Eliminar el primer nodo
    eliminarPrimerNodo() {
        if (!this.head) {
            console.log("La lista está vacía. No se puede eliminar el primer nodo.");
            return;
        }
        this.head = this.head.siguiente;
        if (this.head) {
            this.head.anterior = null;
        } else {
            this.tail = null; // Si la lista queda vacía
        }
        this.longitud--;
    }
    // Eliminar el último nodo
    eliminarUltimoNodo() {
        if (!this.tail) {
            console.log("La lista está vacía. No se puede eliminar el último nodo.");
            return;
        }
        this.tail = this.tail.anterior;
        if (this.tail) {
            this.tail.siguiente = null;
        } else {
            this.head = null; // Si la lista queda vacía
        }
        this.longitud--;
    }
// Eliminar un nodo en un índice específico
    eliminarEnIndice(indice) {
        if (indice < 0 || indice >= this.longitud) {
            console.error("Índice fuera de rango");
            return;
        }

        if (indice === 0) {
            this.eliminarPrimerNodo();
            return;
        }

        if (indice === this.longitud - 1) {
            this.eliminarUltimoNodo();
            return;
        }

        let actual = this.head;
        for (let i = 0; i < indice; i++) {
            actual = actual.siguiente;
        }

        actual.anterior.siguiente = actual.siguiente;
        actual.siguiente.anterior = actual.anterior;
        this.longitud--;
    }
}


const lista = new ListaDoble();// Creación de una instancia de ListaDoble y agregar un nodo al inicio
lista.agregarAlInicio(10); // Se agrega un nodo al inicio de la lista doble
console.log("El dato del primer nodo es:", lista.head.dato); // Verificamos el dato del primer nodo
lista.agregarAlFinal(20); // Se agrega un nodo al final de la lista doble
console.log("El dato del segundo nodo es:", lista.tail.dato); // Verificamos el dato del segundo nodo
lista.insertarEnIndice(15, 1); // Insertamos un nodo con dato 15 en el índice 1
console.log("El dato del nodo en el índice 1 es:", lista.head.siguiente.dato); // Verificamos el dato del nodo en el índice 1
lista.eliminarPrimerNodo(); // Eliminamos el primer nodo
console.log("Después de eliminar el primer nodo, el nuevo primer nodo es:", lista.head ? lista.head.dato : "La lista está vacía"); // Verificamos el nuevo primer nodo
lista.eliminarEnIndice(0);// Eliminar el nodo en el índice 0
console.log("Lista después de eliminar el nodo en el índice 0 es:", lista.head ? lista.head.dato : "La lista está vacía"); // Verificamos el nuevo primer nodo
lista.eliminarUltimoNodo();// Eliminar el último nodo
console.log("Lista después de eliminar el último nodo es:", lista.tail ? lista.tail.dato : "La lista está vacía"); // Verificamos el nuevo último nodo
