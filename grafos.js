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


