
//Declaramosla función
function numPar(a) {
    for(let i = 0; i <= a; i = i + 1){
     if (i % 2 == 0 ) {
        console.log("par");
     } 
     else{
        console.log(i);
     } 
     
    } 
}

//Ejecutando la función
console.log(numPar(100));
