alert("Bienvenidos Hotel MATRIX");

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

while (confirma != false) {// un while para que siga cargando clientes hasta que el empleado cancele la carga
    ingreso(name1,room,days);
    confirma = confirm("Si desea seguir cargando clientes, ingrese Aceptar."); 
} 
function ingreso (name1,room,days) {//esta funcion la generamos para que el administrador llene los datos de los clientes
    name1 = prompt("Ingrese el nombre del huesped");
    room = prompt("Ingrese el tipo de habitación en que desea alojarse" + "\n  Standard \n  Doble \n  Triple \n  Suite").toLowerCase();
    days = parseInt(prompt("¿Cuántos días desea alojarse?"));
    huesped.push(name1);
    dias.push(days);
    habitaciones.push(room);
     switch (room) {
        case "standard":
            preguntar=parseInt(prompt("¿Desea desayuno adicional por $90 diario?\n1Si\n2No"));
            if(days>5){
            valor = (days * standard)*0.9}
            else{
                valor = (days * standard)
            }
            if(preguntar===1){
                valor = valor + desayuno*days;
            }
            facturaciontotal.push(valor);
        break;
        case "doble":
                if(days>5){
                valor = (days * doble)*0.9}
                else{
                    valor = (days * doble)
                }
                facturaciontotal.push(valor);
            break;
        case "triple":
                if (days>5) {
                    valor = (days * triple)*0.9
                } else {
                    valor = (days * triple)
                } 
                facturaciontotal.push(valor);
            break;
        case "suite":
            if (days>5) {
                valor = (days * suite)*0.9
            } else {
                valor = (days * suite)
            }
                facturaciontotal.push(valor);
            break;
        default:
            break;
    }
   
} 
function concatenar () { // esta funcion lo que hace es concatenar los arrays para ir mostrando los datos
    for (let i = 0 ; i < huesped.length ; i++) {
            console.log(`Cliente: ${huesped[i]}, Días de alojamiento: ${dias[i]}, Habitación elegida: ${habitaciones[i]}, factura total: ${facturaciontotal[i]}$`);
            total = total + facturaciontotal[i]}

            alert(`Reporte de hotel Matrix:\nLa facturación total es: ${total}$\nListado de huéspedes: ${huesped.toString()}\nLa habitación reservada es: ${habitaciones.toString()}`);
            console.log(`Reporte de hotel Matrix:\nLa facturación total es: ${total}$\nListado de huéspedes: ${huesped.toString()}\nLa habitación reservada es: ${habitaciones.toString()}`);
    }
concatenar();

