function Carro(modelo, motor, potencia) {
    this.modelo = modelo;
    this.motor = motor;
    this.potencia = potencia;
}

function Opala(modelo,motor,potencia, rpm) {
    Carro.call(this, modelo, motor, potencia)
    this.rpm = rpm;
}

function Mustang(modelo, motor, potencia, torque) {
    Carro.call(this, modelo, motor, potencia)
    this.torque = torque;
}

const carro1 = new Opala("SS", "v6", 140, 4100);
const carro2 = new Mustang("Boss", "v8", 375, 61);
const carro3 = new Opala("Diplomata", "6 il", 171, 4097);
const carro4 = new Mustang("Shelby GT500 CR", "v8", 810, 87.2);

console.log(carro1);
console.log(carro2);
console.log(carro3);
console.log(carro4);