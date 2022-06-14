class NodoTreeBB{
    constructor(valor) {//constructor de la clase NodoTreeBB
        this.valor = valor;
        this.left = null;
        this.right = null;
    }

    insertDataN(data){//insertar datos(método a llmar, este es el principal)
        if(data < this.valor){
            if(this.left == null){
                this.left = new NodoTreeBB(data)
                console.log(data)
            }else{
                this.left.insertDataN(data)
                console.log(data)
            }
        }else if (data > this.valor){
            if(this.right == null){
                this.right = new NodoTreeBB(data)
                console.log(data)
            }else{
                this.right.insertDataN(data)
                console.log(data)
            }
        }else{
            this.valor = data
        }
    }

    search(data){
        if(this.valor == data){
            return this.valor
        }else{
            if(data < this.valor){
                if(this.left == null){
                    return null
                }else{
                    return this.left.search(data);
                }
            }else if(data > this.valor.data){
                if(this.right == null){
                    return null
                }else{
                    return this.right.search(data)
                }
            }
        }
        return null
    }

    graph(){//Para graficar
        
        var estyle ="digraph G { rankdir=SH; node [shape = record, style=filled, fillcolor=seashell2];\n";
        estyle += this.exploreTree();
        estyle += "}\n";
        return estyle;
    }

    exploreTree(){
        var content = ""
        if (this.left == null && this.right == null)
            //var procesado = texto.split(" ").join("")
            content += "node"  + this.valor.split(" ").join("") + " [ label =\"" + this.valor.split(" ").join("") + "\"];\n";
        else
            content += "node" + this.valor.split(" ").join("") + " [ label =\"<C0>|"  + this.valor.split(" ").join("")  + "|<C1>\"];\n";
        if (this.left != null){
            content += this.left.exploreTree() + "node" + this.valor.split(" ").join("") + ":C0->node" + this.left.valor.split(" ").join("") + ";\n";
        }
        if (this.right != null){
            content += this.right.exploreTree() + "node" + (this.valor.split(" ").join("")) + ":C1->node" + this.right.valor.split(" ").join("") + ";\n";
        }
        return content;
    }
}

class arbolBB{
    
    constructor() {
        this.root = null;
    }
    
    insert(dato){
        if (this.root == null){
            this.root = new NodoTreeBB(dato);
            console.log(dato)
        }else{
            this.root.insert(dato);
            console.log(dato)
        }
    }
    
    search(dato){
        return this.root.search(dato);
    }
    
    graph(){
        return this.root.graph();
    }

    
}
var nodoTreeBB = new NodoTreeBB()
//var arbol = new arbolBB()

//nodoTreeBB.insert(3)
//nodoTreeBB.insert(8)
//nodoTreeBB.insert(2)
//nodoTreeBB.insert(4)
//nodoTreeBB.insert(9)
//nodoTreeBB.insert(1)
//nodoTreeBB.insert(7)
//nodoTreeBB.insert(5)

//nodoTreeBB.insertDataN(115)
//nodoTreeBB.insertDataN(97)
//nodoTreeBB.insertDataN(109)

nodoTreeBB.insertDataN("Sharon Tagual")
nodoTreeBB.insertDataN("Ander Porón")
nodoTreeBB.insertDataN("Juan Godoy")
nodoTreeBB.insertDataN("Xhunik Miguel")
nodoTreeBB.insertDataN("Maria Magda")
nodoTreeBB.insertDataN("Alberto Reyes")
nodoTreeBB.insertDataN("Rosario Ramirez")


console.log(nodoTreeBB.graph())
