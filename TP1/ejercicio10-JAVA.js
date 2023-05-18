let numero = parseInt(prompt("Ingresar número"))

if(numero % 2 === 0){
    document.write("El número ingresado " + numero + " es divisible en 2.");
}
else if(numero % 3 === 0){
    document.write("El número ingresado " + numero + " es divisible en 3.");
}
else if(numero % 5 === 0){
    document.write("El número ingresado " + numero + " es divisible en 5.");
}
else if(numero % 7 === 0){
    document.write("El número ingresado " + numero + " es divisible en 7.");
}
else{
    document.write("El número ingresado " + numero + " no es divisible en 2, ni en 3, ni en 5, ni en 7.");
}