class NodoCir{
    constructor(dato){
        this.dato = dato;
        this.next = null;
        this.pre = null;
    }
}

class ListaCir{
    constructor(){
        this.first = null;
        this.last = null;
    }

    insertarREVISAR(dato){
        var nuevo = new NodoCir(dato);
        nuevo.dato = dato;
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

    insertar(dato){
        
        var nuevo = new NodoCir(dato);
        //nuevo.dato = dato;
        if(this.first == null){
            this.first = nuevo;
            this.last = nuevo;
            this.first.next = this.first;
            this.first.pre = this.last;
        }else{
            var auxNodo = this.first;
            
            while(this.first.next!=auxNodo){
                this.first=this.first.next;
            }
            this.last=nuevo;
            this.first.next=this.last;
            this.last.pre = this.first;
            this.first=auxNodo;
            this.last.next=this.first;
            this.first.pre=this.last;
        }
    }

    mostrar(){
        var aux = new NodoCir();
        aux = this.first;
        do{
            console.log(aux.dato);
            aux = aux.next;
        }while(aux != this.first);
    }

    graficar(){
        console.log("cambios")
        console.log(this.first)
        console.log(this.last)
        var codigodot = "digraph G{\nlabel=\" Sharon \";\nnode [shape=box];\n";
        var tem = this.first;
        var conex = "";
        var nodos = "";
        var num = 0;

        while(tem != this.last){
            //console.log(aux.dato);
            nodos += "N" + num + "[label=\"" + tem.dato + "\" ];\n"
            if(tem.next == this.last){
                num ++;
                nodos += "N" + num + "[label=\"" + this.last.dato + "\" ];\n"
            }
            if(tem.next != this.last){
                var auxnum = num + 1;
                conex += "N" + num + " -> N" +  auxnum + ";\n";
            }
            if(tem.next == this.last){
                conex += "N" + auxnum + " -> N" + num + ";\n";
                conex += "N" + num + " -> N" +  0 + ";\n";
            }

            tem = tem.next;
            num ++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregado conexiones o flechas\n"
        codigodot += "{rank=same;\n" + conex + "\n}\n}"
        console.log(codigodot);
        //document.write(codigodot)
        return codigodot
    }

    graficar2(){
        console.log("--------cambiosXXXXXXXXXXXXXXXXXX------------")
        console.log("cambios")
        console.log(this.first)
        console.log(this.last)
        var codigodot = "digraph G{\nlabel=\" Sharon \";\nnode [shape=box]; \n";
        var tem2 = this.last;
        var conex = "";
        var nodos = "";
        var num = 0;
        //tem = tem.next;
        console.log("esto")
        console.log(this.last.pre)
        console.log(this.last.next.dato)
        console.log(tem2.dato)
        console.log(tem2.pre.dato)
        while(tem2 != this.first){
            //console.log(aux.dato);
            nodos += "N" + num + "[label=\"" + tem2.dato + "\" ];\n"
            if(tem2.pre == this.first){
                num ++;
                nodos += "N" + num + "[label=\"" + this.first.dato + "\" ];\n"
            }
            if(tem2.pre != this.first){
                var auxnum = num + 1;
                conex += "N" + num + " -> N" +  auxnum + ";\n";
            }
            if(tem2.pre == this.first){
                conex += "N" + auxnum + " -> N" + num + ";\n";
                conex += "N" + num + " -> N" +  0 + ";\n";
            }

            tem2 = tem2.pre;
            num ++;
        }
        //tem = tem.next;
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregado conexiones o flechas\n"
        codigodot += "{rank=same;\n" + conex + "\n}\n}"
        console.log(codigodot);
        //document.write(codigodot)
        return codigodot
    }

    graficar3(){
        console.log("=========================================================================================================0")
        var codigodot = "digraph G{\nlabel=\" Sharon \";\nnode [shape=box]; \nedge[dir=both]; \n";
        var tem = this.first;
        var tem2 = this.last;
        var conex = "";
        var nodos = "";
        var num = 0;

        while(tem != this.last){
            //console.log(aux.dato);
            nodos += "N" + num + "[label=\"" + tem.dato + "\" ];\n"
            if(tem.next == this.last){
                num ++;
                nodos += "N" + num + "[label=\"" + this.last.dato + "\" ];\n"
            }
            if(tem.next != this.last){
                var auxnum = num + 1;
                conex += "N" + num + " -> N" +  auxnum + ";\n";
            }
            if(tem.next == this.last){
                
                conex += "N" + auxnum + " -> N" + num + ";\n";
                //conex += "N" + num + " -> N" +  0 + ";\n";
                //num++
                while(tem2 != this.first){
                    //console.log(aux.dato);
                    nodos += "N" + num + "[label=\"" + tem2.dato + "\" ];\n"
                    if(tem2.pre == this.first){
                        num ++;
                        nodos += "N" + num + "[label=\"" + this.first.dato + "\" ];\n"
                    }
                    if(tem2.pre != this.first){
                        var auxnum = num + 1;
                        conex += "N" + num + " -> N" +  auxnum + ";\n";
                    }
                    if(tem2.pre == this.first){
                        conex += "N" + auxnum + " -> N" + num + ";\n";
                        conex += "N" + num + " -> N" +  0 + ";\n";
                    }
        
                    tem2 = tem2.pre;
                    num ++;
                }
            }

            tem = tem.next;
            num ++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregado conexiones o flechas\n"
        codigodot += "{rank=same;\n" + conex + "\n}\n}"
        console.log(codigodot);
        //document.write(codigodot)
        var apuro = ""
        return codigodot
    }
}

var prueba = new ListaCir()
prueba.insertar(2)
prueba.insertar(0)
prueba.insertar(1)
prueba.insertar(9)
prueba.insertar(0)
prueba.insertar(6)
prueba.insertar(1)
prueba.insertar(7)
prueba.insertar(3)
prueba.mostrar()
console.log("HOLAAAAAAAAAAAAAAA")
console.log(prueba.graficar())
console.log(prueba.graficar2())
console.log(prueba.graficar3())
//prueba.graficar()
d3.select("#cuadro1").graphviz()
    .width(2000)
    .height(500)
    .renderDot(prueba.graficar())

d3.select("#cuadro2").graphviz()
    .width(2000)
    .height(500)
    .renderDot(prueba.graficar2())
d3.select("#cuadro3").graphviz()
    .width(3000)
    .height(500)
    .renderDot(prueba.graficar3())
console.log("HOLAAAAAAAAAAAAAAA")