let primerNumero = parseInt(prompt("Ingresar primer número"))
let segundoNumero = parseInt(prompt("Ingresar segundo número"))

if(primerNumero>segundoNumero){
    document.write("El primer número ingresado (" + primerNumero + ") es el mayor.");
}
else if(segundoNumero>primerNumero){
    document.write("El segundo número ingresado (" + segundoNumero + ") es el mayor.");
}
else{
    document.write("Los números ingresados son iguales");
}