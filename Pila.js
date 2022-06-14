class Nodo {
    constructor(cartas){
        this.cartas = cartas;
        this.down = null;
    };
};

class Pila{
    constructor(){
        this.cima = null;
    };

    push(carta){//This method is for insert data
        var tem = new Nodo(carta);
        tem.down = this.cima;
        this.cima = tem;
    };

    pop(){//this method is for delet data of the pila
        var tem = this.cima;
        this.cima = null;
        this.cima = tem.down;
        tem = null;
    };

    peek(){//método para visitar la cima de la pila
        console.log(this.cima.cartas);
    }

};

var pila = new Pila();
pila.push("carta1");
pila.push("carta2");
pila.push("carta3");
pila.pop();
pila.push("carta4");
pila.push("carta5");
pila.peek();
pila.push("carta6");
pila.pop();
pila.pop();
pila.pop();
pila.peek();