let deadpool = {
    nombre: 'wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() { 
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};

let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);

