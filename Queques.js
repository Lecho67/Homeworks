class Person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

class ATMQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(person) {
        this.queue.push(person);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue.map(person => `${person.name} (${person.arrivedTime})`);
    }
}

// Creacion del Atm
const atmQueue = new ATMQueue();


atmQueue.enqueue(new Person("Alicia", "10:00 AM"));
atmQueue.enqueue(new Person("Bob", "10:05 AM"));
atmQueue.enqueue(new Person("CAlberto", "10:10 AM"));

console.log("Es:");
console.log(atmQueue.print());


console.log("Enservicio:", atmQueue.dequeue().name);
console.log("Actualizaciom:");
console.log(atmQueue.print());
