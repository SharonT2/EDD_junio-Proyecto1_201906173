class cambio{//clase para los encabezados   //cambio
    constructor(coor){
        this.coor = coor;//coordenada a la que entrará
        this.next = null;
        this.prev = null;
        this.inter = null;
    }
}

class listHeadingsDis{
    constructor(parametro){
        this.tam = 0;
        this.first = null;
        this.last = null;
        this.parametro = parametro;
    }
    insertHe(cabeza){
        this.tam = this.tam  + 1
        if(this.first == null){//si no hay contenido en lamatriz
            this.first = cabeza;
            this.last = cabeza;
        }else{
            //por medio de posición
            if(cabeza.coor < this.first.coor){ //verificando si es menor
                cabeza.next = this.first;
                this.first.prev = cabeza;
                this.first = cabeza;
            }
            else if(cabeza.coor > this.last.coor){ //verificando si es superior
                this.last.next = cabeza;
                cabeza.prev = this.last;
                this.last = cabeza;
            }
            else{
                var aux = this.first;
                while(aux != null){
                    if(cabeza.coor < aux.coor){
                        cabeza.next = aux;
                        cabeza.prev = aux.prev;
                        aux.prev.next = cabeza;
                        aux.prev = cabeza;
                        break;
                    }
                    else if(cabeza.coor > aux.coor){
                        aux = aux.next;
                    }else{
                        break;
                    }
                }
            }
        }
    }

    consultar(coor){// Verificando si hay encab, en dicha matriz
        var auxc = this.first;
        while(auxc != null){
            if(coor == auxc.coor){
                return auxc
            }
            auxc = auxc.next;
        }
        return null
    }
}

class NodoMatrizDis{
    constructor(x, y, data){
        this.data = data;//>contenido
        this.x = x;//>coordenadas
        this.y = y;
        this.left = null;//>apuntadores
        this.rigth = null;
        this.top = null;
        this.down = null;
    }
}

class matrizDispersa{
    constructor(){
        this.columnasX = new listHeadingsDis("columnasX");//////sharon
        this.filasY = new listHeadingsDis("filasY");
        
    }

    insertDispersa(x, y, data){
        var niu = new NodoMatrizDis(x, y, data); //Nodo aux, para añadir contenido
        var Xvar = this.columnasX.consultar(x);
        var Yvar = this.filasY.consultar(y);

        if(Yvar == null){//Accediendo a las filasY
            Yvar = new cambio(y)
            this.filasY.insertHe(Yvar)
        }
        if(Xvar == null){//Accediendo a las columnasXumnas
            Xvar = new cambio(x)
            this.columnasX.insertHe(Xvar)
        }
        if(Yvar.inter == null){
            Yvar.inter = niu;
        }
        else{
            if(niu.x < Yvar.inter.x){
                niu.rigth = Yvar.inter;
                Yvar.inter.left = niu;
                Yvar.inter = niu;
            }else{
                var auxNodY = Yvar.inter;
                while(auxNodY != null){
                    if(niu.x < auxNodY.x){
                        niu.rigth = auxNodY;
                        niu.left = auxNodY.left;
                        auxNodY.left.rigth = niu;
                        auxNodY.left = niu;
                        break;
                    }   
                    else if(niu.y == auxNodY.y && niu.x == auxNodY.x){
                        break;
                    }
                    else{
                        if(auxNodY.rigth == null){
                            auxNodY.rigth = niu;
                            niu.left = auxNodY;
                            break;
                        }else{
                            auxNodY = auxNodY.rigth;
                        }
                    }
                }
            }
        }
        if(Xvar.inter == null){
            Xvar.inter = niu;
        }else{
            if(niu.y < Xvar.inter.y){
                niu.down = Xvar.inter;
                Xvar.inter.top = niu;
                Xvar.inter = niu;
            }else{
                var auxNodX = Xvar.inter;
                while(auxNodX != null){
                    if(niu.y < auxNodX.y){
                        niu.down = auxNodX;
                        niu.top = auxNodX.top;
                        auxNodX.top.down = niu;
                        auxNodX.top = niu;
                        break;
                    }
                    else if(niu.y == auxNodX.y && niu.x == auxNodX.x){
                        break;
                    }else{
                        if(auxNodX.down == null){
                            auxNodX.down = niu;
                            niu.top = auxNodX;//
                            break;
                        }
                        else{
                            auxNodX = auxNodX.down
                        }
                    }
                }
            }
        }
    }
    graficarMatrizDis(){//--------metodo graficar
        
        console.log("Entra1")
        var codigodot="digraph G{ \ngraph[size=\"12.70, 10.27\"]\n"
        codigodot += "label = \"MATRIZ DISPERSA ESTRUCTURA(Libros Thriller)\" \nfontsize=\"20pt\"\n\n";
        codigodot+="node[shape=rect, width=0.5, height=0.5, fillcolor=\"white\", style=filled];\n"
        codigodot+="edge[dir=\"both\"];\n";
        codigodot += "node[label = \"autores\" fillcolor=\"gray38\", pos = \"-1,1!\"]raiz;\n";
        
        //edge[dir=both]
        //node[ style=filled ,color="#E1E1A8", shape=box];label="DISPERSA";
        var auxCabFil = this.filasY.first;
        var fil = 0;//contador para llevar el control de las filasY
        while(auxCabFil != null){
            console.log("Entra2")///, style=filled, fillcolor=seashell2
            codigodot += "\tnode[label = \"" + auxCabFil.coor  + "\""+ "width=0.5" + "style=\"filled\""+ "fillcolor=\"seashell2\" pos=\"-1,-" + fil + "!\" shape=cds]x" + auxCabFil.coor + ";\n";
            auxCabFil = auxCabFil.next;  // "nodesep= \"2\"" +
            fil = fil+1;//aumentará de filasY
        }
        auxCabFil = this.filasY.first;
        while(auxCabFil.next != null){//-------------enlazando filas cabecera (Y->)
            console.log("Entra3")
            codigodot += "\tx" + auxCabFil.coor +"->x" + auxCabFil.next.coor + ";\n";
            auxCabFil = auxCabFil.next;
        }
        codigodot += "\traiz->x" + this.filasY.first.coor + ";\n";
        
        //*cabeceras X
        var auxCabCol = this.columnasX.first;
        var col = 0;
        while(auxCabCol != null){
            console.log("Entra4")
            codigodot += "\tnode[label = \"" + auxCabCol.coor +"\""  + "style=\"filled\""+ "fillcolor=\"seashell2\" pos = \"" + col + ",1!\" shape=invhouse]y" + auxCabCol.coor + ";\n"
            auxCabCol = auxCabCol.next////////////////////////////AHORA AQUI
            col++;
        };

        //---uniendo cabeceras
        auxCabCol = this.columnasX.first;
        while(auxCabCol.next != null){
            console.log("Entra5")
            codigodot += "\ty" + auxCabCol.coor + "->y" + auxCabCol.next.coor + ";\n";
            auxCabCol = auxCabCol.next;
        }
        codigodot += "\traiz->y" + this.columnasX.first.coor + ";\n";

        //Celdas, correspondiente a filas*Creando los nodos 
        var auxFil = this.filasY.first;
        var fil2 = 0;
        while(auxFil != null){
            console.log("Entrax1")
            console.log("Entra6")
            var aux1 = auxFil.inter;//
            while(aux1 != null){
                var aux2 = this.columnasX.first;
                var id1 = 0;
                while(aux2 != null){
                    if(aux2.coor == aux1.x){//////////////SHARON
                        break;
                    }
                    id1 = id1+1;
                    aux2 = aux2.next;
                }
                if(aux1.data != ""){
                    codigodot += "\tnode[label=\"" + aux1.data + "\" fillcolor=\"white\" pos=\"" + id1+",-"+ fil2 + "!\" shape=component]u" + aux1.y + "_" + aux1.x + ";\n" 
                }///////////////----
                aux1 = aux1.rigth;
            }
            //>>>Acá uniré lo que son los nodos correspondientes con sus filas
            aux1 = auxFil.inter;
            while(aux1 != null){
                console.log("Entra6")
                if(aux1.rigth != null){
                    codigodot += "\tu" + aux1.y + "_" + aux1.x + "->u" + aux1.rigth.y + "_" + aux1.rigth.x + ";\n"
                }
                aux1 = aux1.next;
            }
            codigodot += "\tx" + auxFil.coor +"->u" + auxFil.inter.y + "_" + auxFil.inter.x + ";\n"
            auxFil = auxFil.next;
            fil2 ++;
        }   
        //>>>Acá uniré nodos con sus respectivas columnas
        var auxCol = this.columnasX.first;
        while(auxCol != null){
            console.log("Entra7")
            var aux3 = auxCol.inter;
            while(aux3 != null){
                if(aux3.down != null){
                    codigodot += "\tu" + aux3.y + "_" + aux3.x + "->u" + aux3.down.y + "_" + aux3.down.x + ";\n"
                    //codigodot += "\tu" + aux3.y + "_" + aux3.x + "->u" + aux3.down.y + "_" + aux3.down.x + ";\n"
                }
                aux3 = aux3.down;
            }
            codigodot += "\ty" + auxCol.coor + "->u" + auxCol.inter.y + "_" + auxCol.inter.x + ";\n"
            auxCol = auxCol.next;
        }
        codigodot += "\n\n}"
        this.generarImagenDis(codigodot);
        return codigodot;
    }



    graficarMatrizDisBonita(){//--------metodo graficar
        
        console.log("Entra1")
        var codigodot="digraph G{ \n bgcolor = none\n graph[size=\"12.70, 10.27\"]\n"
        codigodot += "label = \"MATRIZ DISPERSA ESTRUCTURA(Libros Thriller)\" \nfontsize=\"20pt\"\n\n";
        codigodot+="node[shape=rect, width=0.5, height=0.5, fillcolor=\"white\", style=filled];\n"
        codigodot+="edge[dir=\"both\"];\n";
        codigodot += "node[label = \"autores\" fillcolor=\"gray38\", pos = \"-1,1!\"]raiz;\n";
        
        //edge[dir=both]
        //node[ style=filled ,color="#E1E1A8", shape=box];label="DISPERSA";
        var auxCabFil = this.filasY.first;
        var fil = 0;//contador para llevar el control de las filasY
        while(auxCabFil != null){
            console.log("Entra2")///, style=filled, fillcolor=seashell2
            codigodot += "\tnode[label = \"" + auxCabFil.coor  + "\""+ "width=0.5" + "style=\"filled\""+ "fillcolor=\"seashell2\" pos=\"-1,-" + fil + "!\" shape=cds]x" + auxCabFil.coor + ";\n";
            auxCabFil = auxCabFil.next;  // "nodesep= \"2\"" +
            fil = fil+1;//aumentará de filasY
        }
        auxCabFil = this.filasY.first;
        while(auxCabFil.next != null){//-------------enlazando filas cabecera (Y->)
            console.log("Entra3")
            codigodot += "\tx" + auxCabFil.coor +"->x" + auxCabFil.next.coor + ";\n";
            auxCabFil = auxCabFil.next;
        }
        codigodot += "\traiz->x" + this.filasY.first.coor + ";\n";
        
        //*cabeceras X
        var auxCabCol = this.columnasX.first;
        var col = 0;
        while(auxCabCol != null){
            console.log("Entra4")
            codigodot += "\tnode[label = \"" + auxCabCol.coor +"\""  + "style=\"filled\""+ "fillcolor=\"seashell2\" pos = \"" + col + ",1!\" shape=invhouse]y" + auxCabCol.coor + ";\n"
            auxCabCol = auxCabCol.next////////////////////////////AHORA AQUI
            col++;
        };

        //---uniendo cabeceras
        auxCabCol = this.columnasX.first;
        while(auxCabCol.next != null){
            console.log("Entra5")
            codigodot += "\ty" + auxCabCol.coor + "->y" + auxCabCol.next.coor + ";\n";
            auxCabCol = auxCabCol.next;
        }
        codigodot += "\traiz->y" + this.columnasX.first.coor + ";\n";

        //Celdas, correspondiente a filas*Creando los nodos 
        var auxFil = this.filasY.first;
        var fil2 = 0;
        while(auxFil != null){
            console.log("Entrax1")
            console.log("Entra6")
            var aux1 = auxFil.inter;//
            while(aux1 != null){
                var aux2 = this.columnasX.first;
                var id1 = 0;
                while(aux2 != null){
                    if(aux2.coor == aux1.x){//////////////SHARON
                        break;
                    }
                    id1 = id1+1;
                    aux2 = aux2.next;
                }
                if(aux1.data != ""){
                    codigodot += "\tnode[label=\"" + aux1.data + "\" fillcolor=\"white\" pos=\"" + id1+",-"+ fil2 + "!\" shape=component]u" + aux1.y + "_" + aux1.x + ";\n" 
                }///////////////----
                aux1 = aux1.rigth;
            }
            //>>>Acá uniré lo que son los nodos correspondientes con sus filas
            aux1 = auxFil.inter;
            while(aux1 != null){
                console.log("Entra6")
                if(aux1.rigth != null){
                    codigodot += "\tu" + aux1.y + "_" + aux1.x + "->u" + aux1.rigth.y + "_" + aux1.rigth.x + ";\n"
                }
                aux1 = aux1.next;
            }
            codigodot += "\tx" + auxFil.coor +"->u" + auxFil.inter.y + "_" + auxFil.inter.x + ";\n"
            auxFil = auxFil.next;
            fil2 ++;
        }   
        //>>>Acá uniré nodos con sus respectivas columnas
        var auxCol = this.columnasX.first;
        while(auxCol != null){
            console.log("Entra7")
            var aux3 = auxCol.inter;
            while(aux3 != null){
                if(aux3.down != null){
                    codigodot += "\tu" + aux3.y + "_" + aux3.x + "->u" + aux3.down.y + "_" + aux3.down.x + ";\n"
                    //codigodot += "\tu" + aux3.y + "_" + aux3.x + "->u" + aux3.down.y + "_" + aux3.down.x + ";\n"
                }
                aux3 = aux3.down;
            }
            codigodot += "\ty" + auxCol.coor + "->u" + auxCol.inter.y + "_" + auxCol.inter.x + ";\n"
            auxCol = auxCol.next;
        }
        codigodot += "\n\n}"
        this.generarImagenDis2(codigodot);
        return codigodot;
    }

    generarImagenDis(codigodot){
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAVEARE")
        d3.select("#prueba2")
        .graphviz()
        .engine("neato")
        .height(3500)
        .width(2800)
        .dot(codigodot)
        .render()
    }

    generarImagenDis2(codigodot){
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAVEARE")
        d3.select("#prueba2y")
        .graphviz()
        .engine("neato")
        .height(3500)
        .width(2800)
        .dot(codigodot)
        .render()
    }
}

/*console.log("HOLAAAAAAAAAAAA")
var matriz = new matrizDispersa();
matriz.insertDispersa(10,10,"nombre1")
matriz.insertDispersa(1,1,"nombre2")//11
matriz.insertDispersa(2,2,"nombre3")
matriz.insertDispersa(8,3,"nombre4")
matriz.insertDispersa(1,4,"nombre5")
matriz.insertDispersa(2,4,"nombre6")
matriz.insertDispersa(5,9,"nombre7")
matriz.insertDispersa(9,9,"nombre8")
matriz.insertDispersa(9,2,"nombre9")
//console.log("HOLAAAAAAAAAAAA2") 
console.log(matriz.graficarMatrizDis())
//console.log("HOLAAAAAAAAAAAA3")
d3.select("#cuadro1")
.graphviz()
.engine("neato")
.width(2000)
.height(3000)
.dot(matriz.graficarMatrizDis())
.render()*/




