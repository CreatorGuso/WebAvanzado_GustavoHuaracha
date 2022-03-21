/*
-	Calcular la comisión sobre las ventas totales de un empleado, 
sabiendo que el empleado no recibe comisión si su venta es hasta S/.150, 
si la venta es superior a S/.150 y menor o igual a S/.400 el empleado recibe 
una comisión del 10% de las ventas y si las ventas son mayores a 400, entonces 
la comisión es de S/.50 más el 9% de las ventas.
*/

let ventas=prompt("Escriba sus ventas totales: ");
let comisiónMenor=150;
let comisiónMayor=400;

function mayor(ventas) {
    let porcentajeExtra=(9*ventas)/100;
    let comisionTotal=porcentajeExtra+50;
    console.log("Su comision extra es de : "+ comisionTotal)
}

function menor(ventas) {
    let porcentajeExtra=(10*ventas)/100;
    console.log("Su comision extra es de : "+ porcentajeExtra)
}

if(ventas>comisiónMayor){
    mayor(ventas);
}else{
    if(ventas<comisiónMenor){
        console.log("no resive comision")
    }else{
        if(ventas<=comisiónMayor && ventas>=comisiónMenor){
            menor(ventas);
        }
    }
}


