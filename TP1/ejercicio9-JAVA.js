let frase = prompt("Ingresar frase")
let tamanoFrase = frase.length
let vocales = ""

for(let i=0; i<tamanoFrase; i++){
    
    if(frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u"){
        vocales = vocales + frase[i];
    }

}

document.write(vocales);