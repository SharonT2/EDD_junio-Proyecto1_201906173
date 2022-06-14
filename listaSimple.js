class Nodo {//Clase nodo de mi lista simple
    constructor(dato, next){
        this.dato = dato;
        this.next = next;
    };
};

class listaSimple {//clase lista, que contendrá mis métodos
    constructor(){
        this.cabeza = null;
        this.tam = 0;
    };

    //------Method of add data from the list
    addData(dato){
        const newNodo = new Nodo(dato, null);
        if(!this.cabeza){//if head of my list is null(try this.cabeza==null)
            this.cabeza = newNodo
        }else{
            let actual = this.cabeza;
            while(actual.next){//Mientras haya referencia al siguiente nodo
                actual = actual.next;//the current one will be equal to the following one
            };
            actual.next = newNodo;
        };
        this.tam++;
    };

    //------Method for displaying list data
    showData(){
            if(this.tam == 0){
                return null
            };
            let actual = this.cabeza;
            let aux = '';
            while(actual){
                aux += actual.dato += ' -> ';
                actual = actual.next;
            };
            aux += 'x';
            return aux;
    }

    //------Method of add data from the list to a specific location
    addDataLocation(dato, location){
        if(location < 0 || location > this.tam){//if location is not in the list
            return null
        };
        
        const newNodo = new Nodo(dato);
        let actual = this.cabeza;
        let ant;

        if(location == 0){
            newNodo = actual;//the new node will point to the head current
            this.cabeza = newNodo; // the current head is equal to the new node
        } else{
            for(let i = 0; i < location; i++){
                ant = actual;
                actual = actual.next;
            };
            newNodo.next = actual;
            ant.next = newNodo;
        };
        this.tam++;
    };

    //------Method of delete data from the list
    deleteData(dato){
        let actual = this.cabeza;
        let ant = null;
        while(actual != null){
            if(actual.dato == dato){//si encontramos la info que queremos eliminar
                if(!ant){//si no existe un valor anterior la cabeza es el primer valor de la lista
                    this.cabeza = actual.next; //la cabeza será el siguiente
                }else{
                    ant.next = actual.next;
                };
                this.tam--;
                return actual.dato;
            };
            ant = actual;
            actual = actual.next;
        };
        return null;
    };

    //------Method of delete data from the list to a specific location
    deletIndex(location){
        if(location < 0 || location > this.tam){//si no está dentro del rango de la lista
            return null;
        };
        let actual = this.cabeza;
        let ant = null;
        if(location == 0){
            this.cabeza = actual.next;
        }else{
            for(let i=0; i< location; i++){
                ant = actual;
                actual = actual.next;
            };
            ant.next = actual.next;
        };
        this.tam--;
        return actual.dato;
    };

    getTam(){
        return this.tam;
    };

    esVacia(){
        //return this.size == 0;
        if(this.tam == 0){
            return true;
        }else{
            return false;
        };
    };

};

    
const lista = new listaSimple();
console.log(lista);//Para ver cómo está la lista

lista.addData(12);
lista.addData(67);
lista.addData(22);
lista.addData(65);

lista.addDataLocation(13, 1);
console.log(lista);

console.log('aquí');
console.log(lista.showData());

//lista.deleteData(22);
//console.log(lista.showData());
//console.log(lista.showData());
console.log('aquí2');
console.log(lista.deletIndex(1));
console.log(lista.showData());

console.log(lista.getTam());//obtener el tamaño de la lista
console.log(lista.esVacia());//obtener si la lista está vacía o no
//------------toca vídeo 12s