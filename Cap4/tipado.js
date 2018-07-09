// Tipos de datos primitivos
var mensaje;
mensaje = 'Hola mundo!';
// Number
var resultado;
resultado = 9.5;
// Boolean
var mayorEdad;
mayorEdad = true;
// Arrays
var frutas;
var coches;
coches = ['Renault', 'Opel', 'Mercedes'];
// Any ("Eliminar la inferencia")
var edad = 35;
edad = 'cuarenta';
// Enum
var TallaPantalon;
(function (TallaPantalon) {
    TallaPantalon[TallaPantalon["small"] = 0] = "small";
    TallaPantalon[TallaPantalon["medium"] = 1] = "medium";
    TallaPantalon[TallaPantalon["large"] = 2] = "large";
})(TallaPantalon || (TallaPantalon = {}));
;
var pantalon = TallaPantalon.small;
var TallaZapato;
(function (TallaZapato) {
    TallaZapato[TallaZapato["uk5"] = 43] = "uk5";
    TallaZapato[TallaZapato["uk6"] = 45] = "uk6";
})(TallaZapato || (TallaZapato = {}));
var zapatilla = TallaZapato.uk5;
// Void
function saludo() {
    console.log('Hola mundo!');
}
var variable = undefined;
variable = null;
// Tipodo de objetos
var jugador;
jugador = {
    nombre: 'Cristiano',
    apellido: 'Ronaldo'
};
var jugador2;
jugador2 = {
    nombre: 'Cristiano',
    edad: 30
};
// Tipos de unión
var fechaNac;
fechaNac = 12;
fechaNac = '12';
var ref;
ref = 123;
ref = '123';
var toby = 'Dogo';
// Tipos en funciones
function suma(a, b) {
    return a + b;
}
suma(2, 2);
// Parámetros opcionales
function multi(a, b, mensaje) {
    var resultado = a * b;
    if (mensaje) {
        return mensaje + resultado;
    }
    else {
        return "El resultado es " + resultado;
    }
}
console.log(multi(2, 4));
multi(2, 4, 'Resultado: ');
// Tipos genericos ("El tipo se definirá en tiempo de ejecución")
function devuelveResultado(a) {
    return a;
}
devuelveResultado('Hola mundo!');
devuelveResultado(12);
