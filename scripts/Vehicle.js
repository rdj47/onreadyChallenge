import Motor  from './Motor.js';

class Vehicle extends Motor {

    constructor (brand, model, doors, price) {
        super (brand, model, price);
        this.doors = doors;
    }

    consolePrintInfo () {
        console.log (''.concat('Marca: ', this.brand,' // ','Modelo: ', this.model, ' // ', 'Puertas: ', this.doors, ' // ', 'Precio: ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(this.price))));
    }

}

export default Vehicle;