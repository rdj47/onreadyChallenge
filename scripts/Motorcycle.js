import Motor  from './Motor.js';

class Motorcycle extends Motor {

    constructor (brand, model, cc, price) {
        super (brand, model, price);
        this.cc = cc;
    }

    consolePrintInfo () {
        console.log (''.concat('Marca: ', this.brand,' // ','Modelo: ', this.model, ' // ', 'Cilindrada: ', this.cc, 'cc', ' // ', 'Precio: ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(this.price))));
    }

}

export default Motorcycle;