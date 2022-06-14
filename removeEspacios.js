const texto = "    Texto de ejemplo     "
let procesado

// split() y join() como métodos alternativo para eliminar espacios
procesado = texto.split(" ").join("") // > "Textodeejemplo"

console.log(procesado)