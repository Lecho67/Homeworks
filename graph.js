class Graph{
    constructor(){
        this.nodes=[]
        this.adjList={}
    }
    addNode(node){
        this.nodes.push(node)
        this.adjList[node]=[]
    }
    addEdge(node1,node2){
        this.adjList[node1].push(node2)
        this.adjList[node2].push(node1)
    }
    printGraph(){
        console.log(this.adjList)
    }
    searchNode(value){
        if(!this.nodes.length){
            return;
        }
        return this.nodes.find(item => item === value)
    }
    printAdjency(value){
        if(this.searchNode(value)){
            console.log(this.adjList[value])
        }else{
            return;
        }
    }
}

let grafo = new Graph();

let ciudad1 = "Barranquilla";
let ciudad2 = "Cali";
grafo.addNode(ciudad1);
grafo.addNode(ciudad2);
let persona1 = {nombre: "Edwin", edad: 52, ciudad: "Cali"};
let persona2 = {nombre: "Cuello", edad: 22, ciudad: "Cali"};
let persona3 = {nombre: "JoseMaria", edad: 21, ciudad: "Barranquilla"};
let persona4 = {nombre: "Jose", edad: 41, ciudad: "Barranquilla"};
grafo.addNode(persona1);
grafo.addNode(persona2);
grafo.addNode(persona3);
grafo.addNode(persona4);
grafo.addEdge(persona1, ciudad1);
grafo.addEdge(persona2, ciudad1);
grafo.addEdge(persona3, ciudad2);

function buscarpersonasEnlaciudad(grafo, nombreCiudad){
    let personasCiudad = [];
    
    for(let node of grafo.nodes){
        if(node.ciudad && node.ciudad === nombreCiudad){
            personasCiudad.push(node.nombre);
        }
    }
    
    console.log(`Personas en ${nombreCiudad}: ${personasCiudad.join(",")}`);
}

buscarpersonasEnlaciudad(grafo, "Cali");
buscarpersonasEnlaciudad(grafo, "Barranquilla");