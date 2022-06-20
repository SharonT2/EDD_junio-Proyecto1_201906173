class Biblio{
    //static matrizOrtogonal;
    ///static instancias;
    //static ola = new this.matrizDispersaA();
    static mat1;//ortogonal
    static mat2;//dispersa
    static mat3;//arbol
    static mat4;//lista de listas
    mostrarLog(){
        document.getElementById("Login").style.display = "block"
        document.getElementById("prueba1").style.display = "none"
        document.getElementById("tez").style.display = "none"
    }

    ocultarLog(){
        document.getElementById("Login").style.display = "none"
    }

    admInicio(){
        var adm = "Wilfred";
        var contra = "123"
        var nombreAdmin = document.getElementById("usuarioA").value;
        var contraAdmin = document.getElementById("passwordA").value;
        //validando credenciales
        if(nombreAdmin == adm && contra == contraAdmin){
            alert("bienvenido administrador!")
            this.ocultarLog();
            this.paginaAdmin();
        }else{
            alert("Credenciales incorrectas")
        }
    }

    paginaAdmin(){//ocultando y mostrando cosas para el admin
        document.getElementById("botones2").style.display = "block"
    }

    divOrto(){
        document.getElementById("prueba2").style.display = "none"
        document.getElementById("prueba3").style.display = "none"
        document.getElementById("prueba1").style.display = "block"
    }

    divDis(){
        document.getElementById("prueba1").style.display = "none"
        document.getElementById("prueba3").style.display = "none"
        document.getElementById("prueba2").style.display = "block"
    }

    divTree(){
        document.getElementById("prueba1").style.display = "none"
        document.getElementById("prueba2").style.display = "none"
        document.getElementById("prueba3").style.display = "block"
    }

    divCir(){
        document.getElementById("prueba2").style.display = "none"
        document.getElementById("prueba1").style.display = "none"
        document.getElementById("prueba3").style.display = "block"
    }

    limpiar(){
        document.getElementById("prueba2").style.display = "none"
        document.getElementById("prueba1").style.display = "none"
        document.getElementById("prueba3").style.display = "none"
    }

    limpiar2(){
        document.getElementById("tez").style.display = "block"
        document.getElementById("prueba2").style.display = "none"
        document.getElementById("prueba1").style.display = "none"
        document.getElementById("prueba3").style.display = "none"
        document.getElementById("Login").style.display = "none"
        document.getElementById("prueba1").style.display = "none"
    }



    cargarArchivo(x){//Cargando libros
        Biblio.mat1 = new matrizOrtogonal();
        Biblio.mat2 = new matrizDispersa();
        console.log("hola aquí sí entra")
        //let matriz = new matrizOrtogonal();

        //let ortog = new matrizUltimo()
        var uno =  0
        var dos =  0
        var tres = ""
        console.log("Gola")
        var documento = x.target.files[0];
        if (!documento) {
            return;
        }
        
        let lectura = new FileReader();
        lectura.onload = function(x) {
            let contenido = x.target.result;
            const object = JSON.parse(contenido);
            for (const key in object) {
                let libros = object[key];
                console.log("----------------------------------------------")
                uno =  libros.fila;
                dos =  libros.columna;
                tres = libros.nombre_libro;
                console.log("fila: " + uno + " columna: "+ dos +" tres: " + tres)
                //-----------ORTOGONAL Biblio.mat.insertOrtogonal(uno, dos, tres)
                if( libros.categoria == "Fantasia"){
                    Biblio.mat1.insertOrtogonal(dos, uno, tres);
                }
                if( libros.categoria == "Thriller"){
                    Biblio.mat2.insertDispersa(dos, uno, tres);
                }
                
                //Biblio.mat2.insertDispersa(uno, dos, tres)
                //Biblio.mat.insertOrtogonal(libros.fila, libros.columna , libros.nombre_libro)
                console.log(libros.isbn + " " + libros.nombre_autor + " " + libros.nombre_libro + " " + libros.cantidad + " " + libros.fila + " " + libros.columna + " " + libros.paginas + " " + libros.categoria)
            }
            grafoMatrizUno();

        }
        lectura.readAsText(documento);
        
        //Biblio.mat.graficarMatriz()
        
        //Biblio.matrizOrtogonal.insertOrtogonal(10,10,"nombre1")
    //    matrizUltimo.insertOrtogonal(10,10,"nombre1")
    //    matrizUltimo.insertOrtogonal(1,11,"nombre2")
    //    matrizUltimo.insertOrtogonal(5,6,"nombre3")
    //    matrizUltimo.insertOrtogonal(7,9,"nombre4")
        //this.grafoMatrizUno(matrizUltimo)
        //Biblio.grafoMatrizUno(matrizUltimo)
        //matrizUltimo.graficarMatriz();
        //var grafo = matrizUltimo.graficarMatriz();
//        Biblio.mat.insertOrtogonal(10,10,"nombre1")
//        Biblio.mat.insertOrtogonal(1,3,"nombre1")
//        Biblio.mat.insertOrtogonal(16,5,"nombre1")
        //grafoMatrizUno()
    }

    cargarArchivo2(x){
        Biblio.mat3 = new NodoTreeBB();
        console.log("hola aquí sí entra2")
        //let matriz = new matrizOrtogonal();
        //let ortog = new matrizUltimo()
        var uno =  0
        var dos =  0
        var tres = ""
        //console.log("Gola")
        var documento = x.target.files[0];
        if (!documento) {
            return;
        }
        let lectura = new FileReader();
        lectura.onload = function(x) {
            let contenido = x.target.result;
            const object = JSON.parse(contenido);
            for (const key in object) {
                let autores = object[key];
                Biblio.mat3.insertDataNTree(autores.nombre_autor);
                //Biblio.mat2.insertDispersa(uno, dos, tres)
                //Biblio.mat.insertOrtogonal(libros.fila, libros.columna , libros.nombre_libro)
                console.log(autores.dpi + " " + autores.nombre_autor + " " + autores.correo + " " + autores.telefono + " " + autores.direccion + " " + autores.biografia)
            }
            grafoArbol();

        }
        lectura.readAsText(documento);
    }

    cargarArchivo3(x) {
        //ListaCir---
        Biblio.mat4 = new ListaCir();
        //console.log("hola aquí sí entra2")
        //let matriz = new matrizOrtogonal();
        //let ortog = new matrizUltimo()
        var uno =  0
        var dos =  0
        var tres = ""
        //console.log("Gola")
        var documento = x.target.files[0];
        if (!documento) {
            return;
        }
        let lectura = new FileReader();
        lectura.onload = function(x) {
            let contenido = x.target.result;
            const object = JSON.parse(contenido);
            for (const key in object) {
                let usuarios = object[key];
                Biblio.mat4.insertarUs(usuarios.nombre_completo);
                Biblio.mat4.insertarLibroCir(usuarios.nombre_completo, "x")
                //Biblio.mat2.insertDispersa(uno, dos, tres)
                //Biblio.mat.insertOrtogonal(libros.fila, libros.columna , libros.nombre_libro)
                console.log(usuarios.dpi + " " + usuarios.nombre_completo + " " + usuarios.nombre_usuario + " " + usuarios.correo + " " + autores.rol + " " + autores.contrasenia + " " +  autores.telefono)
            }
            grafoCircular();
        }
        lectura.readAsText(documento);
    }
}
function grafoMatrizUno(){
    //console.log("Holaaaaaaaaa")
    //Biblio.mat.graficarMatriz();
    Biblio.mat1.graficarMatrizOr();
    Biblio.mat2.graficarMatrizDis();
}

function grafoArbol(){
    Biblio.mat3.graphTree();
}

function grafoCircular(){
    Biblio.mat4.graficarCir();
}
console.log("1--------------")
var uno = new Biblio();
document.getElementById("document").addEventListener("change", uno.cargarArchivo, false);
document.getElementById("carga2").addEventListener("change", uno.cargarArchivo2, false);
document.getElementById("carga3").addEventListener("change", uno.cargarArchivo3, false);
//uno.grafoMatrizUno()
