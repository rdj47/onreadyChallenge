class Inventory {

    constructor (inventory) {
        this.items = inventory;
    }  

    allItems() {
        this.items.forEach(element => {
            element.consolePrintInfo();
        });
    }

    sortDescByPrice() {
        let itemsCopy = this.items;
        itemsCopy.sort((a, b) =>  b.price - a.price );
        console.log('Vehículos ordenados por precio de mayor a menor:');
        itemsCopy.forEach(element => {
            console.log (''.concat(element.brand,' ',element.model));
        });
    }    

    mostExpItem() {
        let itemsCopy = this.items;
        itemsCopy.sort((a, b) =>  b.price - a.price );
        console.log(''.concat('Vehículo más caro: ', itemsCopy[0].brand, ' ', itemsCopy[0].model));
    }

    cheapestItem() {
        let itemsCopy = this.items;
        itemsCopy.sort((a, b) =>  b.price - a.price );
        console.log(''.concat('Vehículo más barato: ', itemsCopy[itemsCopy.length-1].brand, ' ', itemsCopy[itemsCopy.length-1].model));
    }
    
    yItem() {
        let yItem = this.items.find(element => element.brand.includes('Y') === true);
        console.log(''.concat('Vehículo que contiene en el modelo la letra ‘Y’: ', yItem.brand, ' ', yItem.model, ' ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(yItem.price))));
    }
  
}

export default Inventory;