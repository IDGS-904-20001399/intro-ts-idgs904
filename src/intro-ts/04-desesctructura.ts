interface Alumno {
    matricula: number
    nombre:string
    edad:number
    correo:string
    grupo:Grupo
}

interface Grupo {
    grupo:string
    year:number
}

const alumno2 : Alumno ={
    matricula:12345,
    nombre:"Mario",
    edad:23,
    correo:"mario@gmail.com",
    grupo:{grupo:"IDGS904", year:2023}
}

const{matricula:matricula1, grupo} = alumno2
const{grupo:grupo2} = grupo

console.log(alumno2);
console.log(`La matricula es: ${matricula1}`);
console.log(`El nombre es: ${alumno2.nombre}`);
console.log(`El grupo es: ${grupo2}`);
console.log(`El año del grupo es: ${grupo.year}`);

const gps:string[]=['IDGS', 'IEVN', 'REDES']
gps.map((item)=> console.log(`Grupo: ${item}`))

const [a,,b]=gps
console.log(`Grupo: ${a}`);
console.log(`Grupo: ${b}`);
