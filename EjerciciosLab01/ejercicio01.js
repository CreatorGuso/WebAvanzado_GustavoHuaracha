// Desarrolle una función que permita determinar cuál de tres parámetros 
//que se le proporcione a la función es mayor.

let num1=prompt("Ingrese el primer numero");
let num2=prompt("Ingrese el segundo numero");
let num3=prompt("Ingrese el tercer numero");

console.log("Ingreso este numero")
console.log(num1);
console.log(num2);
console.log(num3);

console.log("El numero mayor seria :")

function mayor(num1,num2,num3) {
    if (num1>num2) {
        if(num1>num3){
            console.log(num1)
        }else{
            console.log(num3)
        }
    }else{
        if(num2>num3){
            console.log(num2)
        }else{
            console.log(num3)
        }
    }
}


//Invocacion de funcion
mayor(num1,num2,num3)