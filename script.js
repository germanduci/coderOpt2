///DECLARACION DE VARIABLES GLOBALES///

let tipoCarne;
let ingrePri;
let ingreSeg;
let precioBase;
let tamanio;
let precioFinal;

const large = 1.45;
const extraLarge = 1.75;
const vacuna = "Carne";
const porcina = "Cerdo";
const veggie = "Veggie"

const hamburguesas=[];

///CONSTRUCTOR DE CLASE///

class Burger{
    constructor(carne,ingredientePri,ingredienteSeg,tamano,precioFin,numeroOrder){
        this.carne = carne;
        this.ingredientePri = ingredientePri;
        this.ingredienteSeg = ingredienteSeg;
        this.tamano = tamano;
        this.precioFin = precioFin;
        this.numerorder = numeroOrder;
    }
}

///FUNCIONES///
function menuBurger(){
    let opcion = parseInt(prompt("Seleccione su opción: 1. Crear Burger - 2. Salir"));
    while (opcion !== 1 && opcion !== 2){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Seleccione su opción: 1. Crear Burger - 2. Salir"));
    }                
    switch(opcion){
        case 1:
            alert("Excelente! Pulsa continuar para preparar tu Hero burger!")
            crearBurger();
            break;        
        case 2:
            alert("Gracias por visitarnos!")
            break;        
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Seleccione su opción: 1. Crear Burger - 2. Salir"));
    }
}

function moreBurger(){
    let opcion = parseInt(prompt("Creamos otra Hero Burger?: 1. Si! - 2. Salir"));
    while (opcion !== 1 && opcion !== 2){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Creamos otra Hero Burger?: 1. Si! - 2. Salir"));
    }                
    switch(opcion){
        case 1:
            alert("Excelente! Pulsa continuar para preparar tu Hero burger!")
            crearBurger();
            break;        
        case 2:
            alert("Gracias por visitarnos!")
            break;        
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Creamos otra Hero Burger?: 1. Si! - 2. Salir"));
    }
}

function crearBurger(){
    tipoCarne = carne();
    ingrePri = verduras();
    ingreSeg = quesos();
    precioBase=69.00;
    tamanio = size();
    precioFinal=precio(precioBase,tamanio);
    let numOrder = Math.ceil(Math.random()*100);
    alert("Su Burger Hero ha sido creada!\nEsta compuesta por una hamburguesa "+tipoCarne+".\nSus ingredientes son: "+ingrePri+" y Queso "+ingreSeg+".\nEl tamaño elegido es: "+
        tamanio+"\nEl precio Final es de: $"+precioFinal+".\nTu número de orden es: "+numOrder+". \nSi lo deseas puedes ver en la consola todas las Hero burguers que has armado!");
    hamburguesas.push(new Burger(tipoCarne,ingrePri,ingreSeg,tamanio,precioFinal,numOrder));
    moreBurger();
}

function carne(){    
    let opcion = parseInt(prompt("Tipo de Carne = 1. Vaca - 2. Cerdo - 3. Veggie"));       
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt("Tipo de Carne = 1. Vaca - 2. Cerdo - 3. Veggie"));
    }
    switch(opcion){
        case 1:
            tipoCarne = vacuna;
            break;
        case 2:
            tipoCarne = porcina;
            break;
        case 3:
            tipoCarne = veggie;
            break; 
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Tipo de Carne = 1. Vaca - 2. Cerdo - 3. Veggie"));
    }    
    return tipoCarne;
}

function verduras(){
    let opcion = parseInt(prompt("Verduras = 1. Tomate - 2. Lechuga - 3. Pepino"))
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Primer Ingrediente = 1. Tomate - 2. Lechuga - 3. Pepino"));
    }
    switch(opcion){
        case 1:
            ingrePri = "Tomate";
            break;
        case 2:
            ingrePri = "Lechuga";
            break;
        case 3:
            ingrePri = "Pepino";
            break;
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Verduras = 1. Tomate - 2. Lechuga - 3. Pepino"));                     
    }    
    return ingrePri;
}

function quesos(){
    let opcion = parseInt(prompt("Quesos = 1. Cheddar - 2. Brie - 3. Tibo"))
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Quesos = 1. Cheddar - 2. Brie - 3. Tibo"));
    }
    switch(opcion){
        case 1:
            ingreSeg = "Cheddar";
            break;
        case 2:
            ingreSeg = "Brie";
            break;
        case 3:
            ingreSeg = "Tibo";
            break; 
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Quesos = 1. Cheddar - 2. Brie - 3. Tibo"));
    }    
    return ingreSeg;
}

function size(){
    let opcion = parseInt(prompt("Tamaño: 1. Regular - 2. Large - 3. Extra Large"))
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
    alert("Opcion no valida. Intentemos nuevamente")
    opcion = parseInt(prompt("Tamaño: 1. Regular - 2. Large - 3. Extra Large"));
    }                
    switch(opcion){
        case 1:
            tamanio = "R";
            break;
        case 2:
            tamanio = "L";
            break;
        case 3:
            tamanio = "XL";
            break;
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Tamaño: 1. Regular - 2. Large - 3. Extra Large"));
    }    
return tamanio;
}

function precio(precioBase,tamanio){    
    if (tamanio === "XL") {
        precioFinal=precioBase*extraLarge;
    }
    else if (tamanio==="L"){
        precioFinal=precioBase*large;
    }
    else{
        precioFinal=precioBase;
    }
    return precioFinal;
}

///EJECUCCION///
alert("Bienvenido a HeroBurger: Tu Hamburguesa Heroica");
menuBurger();
console.log(hamburguesas);






