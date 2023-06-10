function sumar(a,b):void {
    console.log(a+b);
    
};

const resultado = sumar("Roberto","Cardiel")

function sumar2(a:number,b:number):number {
    return a+b;
    
};

console.log(sumar2(2,3));

function multiplicar(n1:number, n2:number, n3:number):number {
    var tmp = n1*n2*n3;
    return tmp;
}
 

let  funcSuma = function(n1:number, n2:number):number {
    return n1+n2
}
console.log(funcSuma(4,3));

function sumar3(...valores:number[]) {
    let suma = 0
    for (let i = 0; i < valores.length; i++) {
        suma+= valores[i];
        
    }
    return suma
    
}

console.log(sumar3(10,2,3,4));
console.log(sumar3(1,2));

