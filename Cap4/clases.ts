class Jugador {
    public nombre: string;
    public dorsal: number;
    public goles: number = 0;

    constructor(nombre: string, dorsal: number, goles?: number) {
        this.nombre = nombre;
        this.dorsal = dorsal;
        if(goles) {
            this.goles = goles;
        }
    }

    marcaGol(): void {
        this.goles++;
    }
}

let jugador1 = new Jugador("Cristiano Ronaldo", 7);

jugador1.marcaGol();

// Método simplificado
class Player {
    constructor(public nombre: string, public dorsal: number, public goles?: number) {
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.goles = goles ? goles : 0;
    }

    marcaGol(): void {
        this.goles++;
    }
}

let player1 = new Player("Cristiano Ronaldo", 7);

console.log(player1.goles);
player1.marcaGol();

console.log(player1.goles);

// Módulos
export class Empleado {
    public nombre: string;
    public departamento: string;

    constructor(nombre: string, departamento: string) {
        this.nombre = nombre;
        this.departamento = departamento;
    }
}