alert("Bienvenido al hotel K-K");

let habitaciones = [];
let dias = []
let huesped = [];
let facturaciontotal = [];
let total = 0;
let name1;
let room;
let days;
let standard = 2500;
let doble = 3300;
let triple = 4300;
let suite = 7250;
let confirma;
let valor;
let preguntar;
let desayuno = 90;

while (confirma != false) {
    ingreso(name1,room,days);
    descuento();
    concatenar();
    confirma = confirm("Si desea seguir cargando clientes, ingrese Aceptar.");
    
} 



function ingreso (name1,room,days) {
    
    name1 = prompt("Ingrese el nombre del huesped");
    room = prompt("Ingrese el tipo de habitación en que desea alojarse" + "\n  Standard \n  Doble \n  Triple \n  Suite").toLowerCase();
    days = parseInt(prompt("¿Cuántos días desea alojarse?"));
    huesped.push(name1);
    dias.push(days);
    habitaciones.push(room);
    
    
    if (room === "standard" ) {
        valor = (days * standard);
        preguntar = parseInt(prompt("¿Desea desayuno? son $90 por noche. \n 1) Si \n 2) No"));
        if (preguntar === 1) {
             valor = ((desayuno * days) + valor);
             

        }

    }   if (room === "doble" ) {
        valor = (days * doble);
        

    }   if (room === "triple" ) {
        valor = (days * triple);
        

    }   if (room === "suite" ) {
        valor = (days * suite);
        

    } 
    facturaciontotal.push(valor);
    return valor
    
} 




function descuento () {
    for (let i = 0; i < dias.length; i++) {
        
        if (dias[i] > 5) {
            return valor - (valor * 0.1);
        } 
    }

}



function concatenar () {

    for (let i = 0 ; i < huesped.length ; i++) {
        console.log("Días de alojamiento: " + dias[i] + " factura total: $" + facturaciontotal[i]);
        console.log("La habitación: " + (i+1) + " es: " + habitaciones[i]);
        
        total = total + facturaciontotal[i];
        
    }
    console.log("La facturación total del día es: $" + total);
    console.log("Listado de huéspedes del día: " + huesped.toString());
    
}




/* -Valor por noche por de habitación:
* Standard: $2500
* Doble: $3300
* Triple: $4300
* Suite: $7250
-Si tiene más de 5 noches, se realiza un 10% de descuento.
-Si es Standard, se le pregunta si quiere desayuno. Tiene un costo adicional de $90 por noche. */ 
