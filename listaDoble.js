class NodoLDoble{
    constructor(dato, next, pre){
        this.dato = dato;
        this.next = next;
        this.pre = pre;
    };
};

class ListaDoble{
    constructor(){
        this.cabeza = null;
        this.cola = null;
        this.size = 0;
    }

    addCabeza(dato){//----------Método apra añadir en la cabeza de la lista
        const niu = new NodoLDoble(dato, this.cabeza, null);
        if(this.cabeza){//Si hay algo en la cabeza
            niu.next = this.cabeza;
            this.cabeza.pre = niu;
            this.cabeza = niu;
        }else{//si no hay cabeza
            this.cabeza = niu;//la cabeza pasará a ser el nuevo nodo
            this.cola = niu;
        };
        this.size++;
    };

    addCola(dato){//----------Método apra añadir en la cola de la lista
        const niu = new NodoLDoble(dato, null, this.cola);
        if(this.cola){//si la lista contiene una colaw
            niu.pre = this.cola
            this.cola.next = niu
            this.cola = niu
        }else{
            this.cola = niu
            this.cabeza = niu
        }
        this.size++;
    }

    showDoble(){//----------Método apra mostrar de manera ingresada
        var aux = this.cabeza;
        var aux2 = "";
        while(aux){
            aux2 += aux.dato + "<->";
            aux = aux.next;
        };
        return aux2;// += "X"
    };

    showDoble2(){//----------Método apra mostrar de manera revertida
        let aux = this.cola;
        let aux2 = '';
        while(aux){
            aux2 += aux.dato + '<->';
            aux = aux.pre;
        };
        return aux2;
    };

};

/* 
var doble = new ListaDoble();
doble.addCabeza(1);
doble.addCabeza(4);
doble.addCabeza(6);
doble.addCabeza(5);
doble.addCabeza(3);
doble.addCabeza(2);
console.log(doble.showDoble())
console.log(doble.showDoble2())
console.log("--------")
//console.log(doble)
console.log(doble.cabeza.dato)
*/

var doble = new ListaDoble();
doble.addCola(1);
doble.addCola(4);
doble.addCola(6);
doble.addCola(5);
doble.addCola(3);
doble.addCola(2);
console.log(doble.showDoble())
console.log(doble.showDoble2())
console.log("--------")
console.log(doble.cabeza.dato)