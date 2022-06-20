class Biblio{
    //static matrizOrtogonal;
    ///static instancias;
    //static ola = new this.matrizDispersaA();
    static mat;//ortogonal
    static mat2;//dispersa
    mostrarLog(){
        document.getElementById("Login").style.display = "block"
        document.getElementById("prueba1").style.display = "none"
        
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

    paginaAdmin(){
        document.getElementById("botones2").style.display = "block"
        document.getElementById("prueba1").style.display = "block"
    }

    cargarArchivo(x){//Cargando libros
        Biblio.mat = new matrizOrtogonal();
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
                //.cola.enqueue(pitza.tipo, pitza.forma, pitza.costo);
                console.log("----------------------------------------------")
                uno =  libros.fila;
                dos =  libros.columna;
                tres = libros.nombre_libro;
                console.log("fila: " + uno + " columna: "+ dos +" tres: " + tres)
                //-----------ORTOGONAL Biblio.mat.insertOrtogonal(uno, dos, tres)
                if( libros.categoria == "Fantasia"){
                    Biblio.mat.insertOrtogonal(uno, dos, tres);
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

    cargarArchivoNO(){
        
        console.log("entra")
        //document.getElementById("Login").style.display = "block"
        const formUsers = document.querySelector("document");
        //const fileUsers = document.querySelector("#file-users");
        formUsers.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!fileUsers.value.length) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                const str = event.target.result;
                const json = JSON.parse(str);
                console.log("json", json);
                //for (const user of json) {
                //usersCircular.insertar(user);
                //}//
                //usersCircular.render("#graph-double-circular");
            };
            reader.readAsText(fileUsers.files[0]);
        });
    }

    cargarArchivoNN() {
        //console.log("Gola")
        //console.log("hola"
        let matriz = new matrizDispersaA(25);
        var x = ""
        //matriz = new matrizDispersaA(25);
        matriz.insertDispersa(10,10,"nombre1")
        //matriz.insertDispersa(10,10,"nombre1")
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
                //.cola.enqueue(pitza.tipo, pitza.forma, pitza.costo);
                console.log(libros.isbn + " " + libros.nombre_autor + " " + libros.nombre_libro + " " + libros.cantidad + " " + libros.fila + " " + libros.columna + " " + libros.paginas + " " + libros.categoria)
            } 
        }
        lectura.readAsText(documento);
        
    }


}

function grafoMatrizUno(){

    //console.log("Holaaaaaaaaa")
    //Biblio.mat.graficarMatriz();
    Biblio.mat2.graficarMatrizDis();
}

//============*Funcion para leer libros e incertarlos en la matriz
/*function cargarArchivo(x) {
    var biblio = new Biblio()
    //console.log("Gola")
    //console.log("hola")
    
    biblio.insertDispersa(10,10,"nombre1");
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
            //.cola.enqueue(pitza.tipo, pitza.forma, pitza.costo);
            console.log(libros.isbn + " " + libros.nombre_autor + " " + libros.nombre_libro + " " + libros.cantidad + " " + libros.fila + " " + libros.columna + " " + libros.paginas + " " + libros.categoria)
        } 
    }
    lectura.readAsText(documento);
}*/


console.log("1--------------")
var uno = new Biblio();
document.getElementById("document").addEventListener("change", uno.cargarArchivo, false);
//uno.grafoMatrizUno()
