const readline = require('readline');

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    peek(value, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (current !== null) {
            if (current.value === value) {
                return true;
            } else {
                return this.peek(value, current.next);
            }
        }

        return false;
    }

    size(current = this.head, acum = 1) {
        if (this.head === null) {
            return 0;
        }
        if (current.next !== null) {
            return this.size(current.next, acum + 1);
        }
        return acum;
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(`Tarea ${node.value.name} | Descripción: ${node.value.description} | Siguiente: ${node.next ? node.next.value.name : null}`);
            node = node.next;
        }
    }
}

// Creación de un LinkedList
const linkedList = new LinkedList();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addTarea() {
    rl.question('Ingrese el nombre de la tarea: ', (taskName) => {
        rl.question('Ingrese la descripción de la tarea: ', (taskDescription) => {
            linkedList.append({ name: taskName, description: taskDescription });
            rl.question('¿Quiere más tareas mano? (si/no): ', (answer) => {
                if (answer.toLowerCase() === 'si') {
                    addTarea(); // Llamada recursiva para agregar más tareas si el usuario lo desea
                } else {
                    rl.close();
                    // Imprime la lista enlazada cuando el usuario termina de agregar tareas
                    console.log('Lista de tareas:');
                    linkedList.print();
                }
            });
        });
    });
}

// Iniciar el proceso de agregar tareas
addTarea();
