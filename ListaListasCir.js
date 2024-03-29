//alert("CAMBIOOOOOOOOOOOOOOOOOOOOOOOSHARON")
class NodoSimpleCir{//Para la listita(Sublista)
    
    constructor(libro){
        this.libro = libro;
        this.next = null;
    }
}

class NodoCir{//Nodo de la lista principal, osea la circular
    constructor(cliente){
        this.cliente = cliente;
        this.next = null;
        this.pre = null;
        this.down = null;
    }
}

class ListaCir{//Clase de la lista principal, la ciruular
    static contU = 0
    constructor(){
        this.first = null;
        this.last = null;
    }

    insertarREVISAR(cliente){
        var nuevo = new NodoCir(cliente);
        nuevo.cliente = cliente;
        if(this.first == null){
            this.first = nuevo;
            this.first.next = this.first;
            this.first.pre = this.last;
            this.last = nuevo;
        }else{
            this.last.next = nuevo;
            nuevo.next = this.first;
            this.last = nuevo;
            this.first.pre = this.last;
        }
    }

    insertarUs(cliente){
        
        var nuevo = new NodoCir(cliente);
        //nuevo.dato = dato;
        if(this.first == null){
            this.first = nuevo;
            this.last = nuevo;
            this.first.next = this.first;
            this.first.pre = this.last;
        }else{
            var aux = this.first;
            
            while(this.first.next!=aux){
                this.first=this.first.next;
            }
            this.last=nuevo;
            this.first.next=this.last;
            this.last.pre = this.first;
            this.first=aux;
            this.last.next=this.first;
            this.first.pre=this.last;
        }
    }

    insertarLibroCir(cliente, libro){

        var auxCliente = this.first
        var confir = false
        do{
            if(auxCliente.cliente == cliente){
                console.log("Se encontró al cliente")
                var niuLibro = new NodoSimpleCir(libro)
                var inicioLibro = auxCliente.down
                auxCliente.down = niuLibro
                niuLibro.next = inicioLibro
                confir = true
                break
            }
            auxCliente = auxCliente.next;
        }while(auxCliente != this.first)
        if(auxCliente == null || confir == false){
            console.log("No se encontró el cliente en la lista")
        }
    }

    mostrar(){//mostrar a los clientes
        var aux = new NodoCir();
        aux = this.first;
        do{
            console.log(aux.cliente);
            aux = aux.next;
        }while(aux != this.first);
    }

    showLibroCir(cliente){//ssublista de la circular
        var aux = this.first
        var confir = false
        do {
            if(aux.cliente == cliente){
                confir = true
                console.log("****** Cliente" + cliente + "*****")
                var auxLibro = aux.down
                while(auxLibro != null){
                    console.log(auxLibro.libro)
                    auxLibro = auxLibro.next                
                }
                return
            }
            aux = aux.next
        }while(aux != this.first)
        if(cliente == null || confir == false){
            console.log("No se encontró el cliente en la lista")
        }
    }

    graficandoSub(cliente, num){//ssublista de la circular
        var aux = this.first
        var confir = false
        var acumulador = ""
        var auxnum = 0
        do {
            if(aux.cliente == cliente){
                //console.log("lo encuntra " + cliente)
                var auxLibro = aux.down
                while(auxLibro != null){
                    console.log("Entraa " + auxLibro.libro)
                    //console.log(auxLibro.libro)
                    if(confir == false){
                        acumulador += "N" + num + " -> " + auxLibro.libro + ListaCir.contU;
                        auxLibro = auxLibro.next
                        confir = true
                        ListaCir.contU++
                    }else{
                        acumulador +=  " -> " + auxLibro.libro  + ListaCir.contU;
                        auxLibro = auxLibro.next
                        ListaCir.contU++
                    }
                    //auxLibro = auxLibro.next
                }
                this.contU++
                acumulador += ";\n"
                console.log("===========" + acumulador)
                return acumulador
            }else{
                auxnum+=1
            }
            aux = aux.next
        }while(aux != this.first);
    };
    
    graficarCir(){
        console.log("cambios")
        console.log(this.first)
        console.log(this.last)
        var codigodot = "digraph G{\nlabel=\" Sharon \";\nnode [shape=box];\n";
        var tem = this.first;
        var conex = "";
        var nodos = "";
        var num = 0;
        var sublistLibros = ""
        while(tem != this.last){
            //console.log(aux.dato);
            nodos += "N" + num + "[label=\"" + tem.cliente + "\" ];\n"
            if(tem.next == this.last){
                //this.insertarLibroCir(tem.next, libro)
                //---*console.log(this.graficandoSub(this.last.cliente, num));
                sublistLibros += this.graficandoSub(tem.cliente, num) + "\n" //--llamo al otro método que ocuparé para graficarCir la sublista
                num ++;
                nodos += "N" + num + "[label=\"" + this.last.cliente + "\" ];\n"
                //console.log(graficandoSub(this.last.cliente));
            }
            if(tem.next != this.last){
                var auxnum = num + 1;
                conex += "N" + num + " -> N" +  auxnum + ";\n";
                //console.log(graficandoSub(cliente));
                sublistLibros += this.graficandoSub(tem.cliente, num) + "\n" //--llamo al otro método que ocuparé para graficarCir la sublista
            }
            if(tem.next == this.last){
                conex += "N" + auxnum + " -> N" + num + ";\n";
                conex += "N" + num + " -> N" +  0 + ";\n";
                //console.log(graficandoSub(cliente));
               // sublistLibros += this.graficandoSub(tem.cliente, num) + "\n"
            }
            tem = tem.next;
            //console.log("________________" + tem.cliente);
            num ++;
        }
        num--;
        sublistLibros += this.graficandoSub(tem.cliente, num) + "\n" //--llamo al otro método que ocuparé para graficarCir la sublista
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregado conexiones o flechas\n"
        codigodot += "{rank=same;\n" + conex + "\n}\n"
        codigodot += sublistLibros + "\n}"
        console.log(codigodot);
        //document.write(codigodot)
        this.generarImagen(codigodot)
        return codigodot
    }
    pruebaEsconder(){
        document.getElementById("cuadro1").style.display = "none"
        document.getElementById("cuadro2").style.display = "none"
        
    }
    generarImagen(codigodot){
        d3.select("#prueba3").graphviz()
            .width(3000)
            .height(1500)
            .renderDot(codigodot)
    }
}

/*var listalistas = new ListaCir();
listalistas.insertarUs("Sharon");
listalistas.insertarUs("Marleny");
listalistas.insertarUs("Sheny");
listalistas.insertarUs("Sonia");
listalistas.insertarUs("Yesi");
listalistas.insertarUs("Cami");
console.log("---------CLIENTES INSERTADOS---------")
//listalistas.mostrar()
listalistas.insertarLibroCir("Sharon", "x")
listalistas.insertarLibroCir("Marleny", "x")
listalistas.insertarLibroCir("Sheny", "x")
listalistas.insertarLibroCir("Sonia", "x")
listalistas.insertarLibroCir("Yesi", "x")
listalistas.insertarLibroCir("Cami", "x")

listalistas.insertarLibroCir("Sharon", "libro1S")
listalistas.insertarLibroCir("Sharon", "libro2S")
listalistas.insertarLibroCir("Sharon", "libro3S")

listalistas.insertarLibroCir("Marleny", "libro1M")
listalistas.insertarLibroCir("Marleny", "libro2M")
listalistas.insertarLibroCir("Marleny", "libro3M")

listalistas.insertarLibroCir("Sheny", "libro1SH")
listalistas.insertarLibroCir("Sheny", "libro2SH")
listalistas.insertarLibroCir("Sheny", "libro3SH")

listalistas.insertarLibroCir("Sonia", "libro1So")
listalistas.insertarLibroCir("Sonia", "libro2So")
listalistas.insertarLibroCir("Sonia", "libro3So")

listalistas.insertarLibroCir("Yesi", "libro1Y")
listalistas.insertarLibroCir("Yesi", "libro2Y")
listalistas.insertarLibroCir("Yesi", "libro3Y")

listalistas.insertarLibroCir("Cami", "libro1C")
listalistas.insertarLibroCir("Cami", "libro2C")
listalistas.insertarLibroCir("Cami", "libro3C")

listalistas.showLibroCir("Sharon")
listalistas.showLibroCir("Marleny")
listalistas.showLibroCir("Sheny")
listalistas.showLibroCir("Sonia")
listalistas.showLibroCir("Yesi")
listalistas.showLibroCir("Cami")

console.log(listalistas.graficarCir())

d3.select("#grafica").graphviz()
    .width(3000)
    .height(500)
    .renderDot(listalistas.graficarCir())
//listalistas.pruebaEsconder()*/