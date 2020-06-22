let nombre = 'noob_saibot';
let real = 'tobias_boon';


// console.log(nombre + ' '+ real);  
// console.log(`${nombre} ${real}`);
  
// console.log( nombreCompleto === nombreTemplate)

function getNombre(){
    return `${nombre} ${real}`;
}

console.log(`El nombre de: ${ getNombre()}`);