"use strict";
exports.__esModule = true;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, dorsal, goles) {
        this.goles = 0;
        this.nombre = nombre;
        this.dorsal = dorsal;
        if (goles) {
            this.goles = goles;
        }
    }
    Jugador.prototype.marcaGol = function () {
        this.goles++;
    };
    return Jugador;
}());
var jugador1 = new Jugador("Cristiano Ronaldo", 7);
jugador1.marcaGol();
// Método simplificado
var Player = /** @class */ (function () {
    function Player(nombre, dorsal, goles) {
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.goles = goles;
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.goles = goles ? goles : 0;
    }
    Player.prototype.marcaGol = function () {
        this.goles++;
    };
    return Player;
}());
var player1 = new Player("Cristiano Ronaldo", 7);
console.log(player1.goles);
player1.marcaGol();
console.log(player1.goles);
// Módulos
var Empleado = /** @class */ (function () {
    function Empleado(nombre, departamento) {
        this.nombre = nombre;
        this.departamento = departamento;
    }
    return Empleado;
}());
exports.Empleado = Empleado;
