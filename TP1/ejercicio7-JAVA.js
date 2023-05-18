let primerNumero = parseInt(prompt("Ingresar primer número")) 
let segundoNumero = parseInt(prompt("Ingresar segundo número"))
let tercerNumero = parseInt(prompt("Ingresar tercer número"))

if(primerNumero>segundoNumero && primerNumero>tercerNumero){
    document.write("El primer número ingresado (" + primerNumero + ") es el mayor.");
}
else if(segundoNumero>primerNumero && segundoNumero>tercerNumero){
    document.write("El segundo número ingresado (" + segundoNumero + ") es el mayor.");
}
else if(tercerNumero>primerNumero && tercerNumero>segundoNumero){
    document.write("El tercer número ingresado (" + tercerNumero + ") es el mayor.");
}