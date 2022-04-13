//-	Mostrar los 50 primeros números múltiplos de 7, pero NO múltiplos de 2,3 o 5.

//doble contador 1 para la respuesta y el otro para tener la 
//cantidad de numeros que es 50


let contador=1;

for (let X = 1; contador <=50 ; X++) {
    if(X%7==0){
        if(X%2!=0 && X%3!=0 && X%5!=0 ){
            console.log(X)
            contador++
        }        
    }
}