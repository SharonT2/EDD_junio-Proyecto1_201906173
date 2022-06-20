class heaOrtog{//clase para los encabezados de mi matriz //heaOrtog
    constructor(coor){
        this.coor = coor;//coordenada a la que entrará el dato mandado
        this.next = null;//apuntador siguiente
        this.prev = null;//apuntador atrás
        this.side = null;
    }
}

class listaHeadings{
    constructor(){
        this.tam = 0;
        this.first = null;
        this.last = null;
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
}

class NodoMatriz{
    constructor(x, y, data){
        this.x = x;//>coordenadas
        this.y = y;
        this.data = data;//>contenido
        this.left = null;//>apuntadores
        this.rigth = null;
        this.top = null;
        this.down = null;
    }
}

class matrizOrtogonal{
    constructor(){
        this.columnasX = new listaHeadings();//////sharon
        this.filasY = new listaHeadings();
        for(var a=1; a < 25+1; a++){
            for(var b=1; b < 25+1; b++){
                this.insertOrtogonal(b, a, " ");
            }
        }
    }

    insertOrtogonal(x, y, data){
        if(x > this.mag || y > this.mag){
            console.log("Los parámetros sobreapasan los 25x25")
        }
        else{
            console.log("Ñpasa: "+ data)
            var niu = new NodoMatriz(x, y, data);//Nodo aux, para añadir contenido
            var Xvar = this.columnasX.consultar(x);
            var Yvar = this.filasY.consultar(y);

            if(Yvar == null){//Accediendo a las filasY
                Yvar = new heaOrtog(y)
                this.filasY.insertHe(Yvar)// insertará en la respectiva fila(celda de fila)
            }
            if(Xvar == null){//Accediendo a las columnasXumnas
                Xvar = new heaOrtog(x)
                this.columnasX.insertHe(Xvar)// insertará en la respectiva columna(celda de columna)
            }
            if(Yvar.side == null){
                Yvar.side = niu;
            }
            else{
                if(niu.x < Yvar.side.x){
                    niu.rigth = Yvar.side;
                    Yvar.side.left = niu;
                    Yvar.side = niu;
                }else{
                    var auxNodY = Yvar.side;
                    while(auxNodY != null){
                        if(niu.x < auxNodY.x){
                            niu.rigth = auxNodY;
                            niu.left = auxNodY.left;
                            auxNodY.left.rigth = niu;
                            auxNodY.left = niu;
                            break;
                        }   
                        else if(niu.y == auxNodY.y && niu.x == auxNodY.x){
                            auxNodY.data=data
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
            if(Xvar.side == null){
                Xvar.side = niu;
            }else{
                if(niu.y < Xvar.side.y){
                    niu.down = Xvar.side;
                    Xvar.side.top = niu;
                    Xvar.side = niu;
                }else{
                    var auxNodX = Xvar.side;
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
    }
    graficarMatrizOr(){//--------metodo graficar
        console.log("Entra1")
        var codigodot = " digraph G{ \ngraph[size=\"12.70, 10.27\"]\n label = \"MATRIZ ORTOGONAL ESTRUCTURA(Libros fantasía)\" \nfontsize=\"50pt\"\n\n";
        codigodot+="node[shape=rect, width=0.5, height=0.5, fillcolor=\"white\", style=filled];\n"
        codigodot+="edge[dir=\"none\"];\n";
        codigodot += "node[label = \"autores\" fillcolor=\"none\", pos = \"-1,1!\"]raiz;\n";
        
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
            var aux1 = auxFil.side;//
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
            aux1 = auxFil.side;
            while(aux1 != null){
                console.log("Entra6")
                if(aux1.rigth != null){
                    codigodot += "\tu" + aux1.y + "_" + aux1.x + "->u" + aux1.rigth.y + "_" + aux1.rigth.x + ";\n"
                }
                aux1 = aux1.next;
            }
            codigodot += "\tx" + auxFil.coor +"->u" + auxFil.side.y + "_" + auxFil.side.x + ";\n"
            auxFil = auxFil.next;
            fil2 ++;
        }   
        //>>>Acá uniré nodos con sus respectivas columnas
        var auxCol = this.columnasX.first;
        while(auxCol != null){
            console.log("Entra7")
            var aux3 = auxCol.side;
            while(aux3 != null){
                if(aux3.down != null){
                    codigodot += "\tu" + aux3.y + "_" + aux3.x + "->u" + aux3.down.y + "_" + aux3.down.x + ";\n"
                    //codigodot += "\tu" + aux3.y + "_" + aux3.x + "->u" + aux3.down.y + "_" + aux3.down.x + ";\n"
                }
                aux3 = aux3.down;
            }
            codigodot += "\ty" + auxCol.coor + "->u" + auxCol.side.y + "_" + auxCol.side.x + ";\n"
            auxCol = auxCol.next;
        }
        codigodot += "\n\n}" 
        //this.generarImagen(codigodot);
        this.generarImagen(codigodot);
        return codigodot;
    }

    //////////////////////bonita

    graficarMatrizBonitaOr(){//--------metodo graficar
        console.log("Entra1")
        var codigodot="digraph G{ \n bgcolor = none\n"
        //codigodot += "label = \"- Autores -\" \nfontsize=\"20pt\"\n\n";
        //codigodot+="edge[style = \"none\"];\n"
        codigodot+="node[shape=rect, width=0.5, height=0.5, fillcolor=\"white\", style=filled];\n"
        codigodot+="edge[dir=\"both\" , style=none, fillcolor=none, color=none];\n";
        codigodot += "node[label = \"autores\" fillcolor=\"none\", pos = \"-1,1!\"]raiz;\n";
        
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
            var aux1 = auxFil.side;//
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
            aux1 = auxFil.side;
            while(aux1 != null){
                console.log("Entra6")
                if(aux1.rigth != null){
                    codigodot += "\tu" + aux1.y + "_" + aux1.x + "->u" + aux1.rigth.y + "_" + aux1.rigth.x + ";\n"
                }
                aux1 = aux1.next;
            }
            codigodot += "\tx" + auxFil.coor +"->u" + auxFil.side.y + "_" + auxFil.side.x + ";\n"
            auxFil = auxFil.next;
            fil2 ++;
        }   
        //>>>Acá uniré nodos con sus respectivas columnas
        var auxCol = this.columnasX.first;
        while(auxCol != null){
            console.log("Entra7")
            var aux3 = auxCol.side;
            while(aux3 != null){
                if(aux3.down != null){
                    codigodot += "\tu" + aux3.y + "_" + aux3.x + "->u" + aux3.down.y + "_" + aux3.down.x + ";\n"
                    //codigodot += "\tu" + aux3.y + "_" + aux3.x + "->u" + aux3.down.y + "_" + aux3.down.x + ";\n"
                }
                aux3 = aux3.down;
            }
            codigodot += "\ty" + auxCol.coor + "->u" + auxCol.side.y + "_" + auxCol.side.x + ";\n"
            auxCol = auxCol.next;
        }
        codigodot += "\n\n}" 
        //return codigodot;
        this.generarImagen2(codigodot);
        return codigodot;
    }

    generarImagen(codigodot){
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAVEARE")
        d3.select("#prueba1")
        .graphviz()
        .engine("neato")
        .height(3500)
        .width(2800)
        .dot(codigodot)
        .render()
    }

    generarImagen2(codigodot){
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAVEARE")
        d3.select("#prueba1x")
        .graphviz()
        .engine("neato")
        .height(3500)
        .width(2800)
        .dot(codigodot)
        .render()
    }

    

}


//var para = 25;//aqui puedo meter la condición de menor a 
//var ortog = new matrizOrtogonal();
/*console.log("HOLAAAAAAAAAAAA")
var para = 25;//aqui puedo meter la condición de menor a 
var matriz = new matrizOrtogonal(para);
matriz.insertOrtogonal(10,10,"nombre1")
matriz.insertOrtogonal(1,1,"nombre2")//11
matriz.insertOrtogonal(2,2,"nombre3")
matriz.insertOrtogonal(8,3,"nombre4")
matriz.insertOrtogonal(1,4,"nombre5")
matriz.insertOrtogonal(2,4,"nombre6")
matriz.insertOrtogonal(5,9,"nombre7")
matriz.insertOrtogonal(9,9,"nombre8")
matriz.insertOrtogonal(9,2,"nombre9")
//console.log("HOLAAAAAAAAAAAA2") 
console.log(matriz.graficarMatriz())
//console.log("HOLAAAAAAAAAAAA3")
try{
    d3.select("#grafica")
        .graphviz()
        .engine("neato")
        .height(3500)
        .width(2800)
        .dot(matriz.graficarMatriz())
        .render()
}catch(e){
    console.log("errorenconsolaD3")
}*/
//let matrizUltimo = new matrizOrtogonal();