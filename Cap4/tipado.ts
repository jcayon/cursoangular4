// Tipos de datos primitivos

let mensaje: string;

mensaje = 'Hola mundo!';

// Number
let resultado: number;
resultado = 9.5;

// Boolean
let mayorEdad: boolean;
mayorEdad = true;

// Arrays
let frutas: string[];
let coches: Array<string>;

coches = ['Renault', 'Opel', 'Mercedes'];

// Any ("Eliminar la inferencia")
let edad: any = 35;
edad = 'cuarenta';

// Enum
enum TallaPantalon {small, medium, large};
let pantalon: TallaPantalon = TallaPantalon.small;

enum TallaZapato {uk5 = 43, uk6 = 45}
let zapatilla: TallaZapato = TallaZapato.uk5;

// Void
function saludo(): void {
    console.log('Hola mundo!');
}

let variable: void = undefined;
variable = null;

// Tipodo de objetos
let jugador: object;
jugador = {
    nombre: 'Cristiano',
    apellido: 'Ronaldo'
};

let jugador2: {
    nombre: string,
    edad: number
};
jugador2 = {
    nombre: 'Cristiano',
    edad: 30
}

// Tipos de unión
let fechaNac: number | string;
fechaNac = 12;
fechaNac = '12';

type id = string | number;
let ref: id;
ref = 123;
ref = '123';

// Tipos de unión complejos
type perro = 'Pastor Alemán' | 'Dogo' | 'Mastín';
let toby: perro = 'Dogo';

// Tipos en funciones
function suma (a: number, b: number): number {
    return a + b;
}

suma(2, 2);

// Parámetros opcionales
function multi (a: number, b: number, mensaje?: string): string {
    let resultado = a * b;
    if (mensaje) {
        return mensaje + resultado;
    } else {
        return `El resultado es ${resultado}`;
    }
}

console.log(multi(2, 4));
multi(2, 4, 'Resultado: ');

// Tipos genericos ("El tipo se definirá en tiempo de ejecución")
function devuelveResultado<T> (a: T): T{
    return a;
}
devuelveResultado<String>('Hola mundo!');
devuelveResultado<number>(12);