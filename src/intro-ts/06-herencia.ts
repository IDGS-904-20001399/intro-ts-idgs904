class Persona5{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad =edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Empleado extends Persona5{
    private sueldo:Number;
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre, edad)
        this.nombre = nombre;
        this.edad =edad;
        this.sueldo =sueldo;

    }
    imprimir(): void {
        super.imprimir();
        console.log(`sueldo: ${this.sueldo}`);
    }
}