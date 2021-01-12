class Motor {

    constructor (brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    
    consolePrintInfo () {
        console.log (''.concat('Marca: ', this.brand,' // ','Modelo: ', this.model, ' // ', ' // ', 'Precio: ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(this.price))));
    }

}


export default Motor;