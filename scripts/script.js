//console.log("++ Start ++");

class Motor {

    constructor (brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

class Vehicle extends Motor {

    constructor (brand, model, doors, price) {
        super (brand, model, price);
        this.doors = doors;
    }

}

class Motorcycle extends Motor {

    constructor (brand, model, cc, price) {
        super (brand, model, price);
        this.cc = cc;
    }

}

class Inventory {

    constructor (inventory) {
        this.items = inventory;
    }  

    allItems() {
        this.items.forEach(element => {
            if (element instanceof Vehicle) { 
                console.log (''.concat('Marca: ', element.brand,' // ','Modelo: ', element.model, ' // ', 'Puertas: ', element.doors, ' // ', 'Precio: ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(element.price))));
                //console.log ("Marca: ", element.brand," // ","Modelo: ", element.model, " // ", "Puertas: ", element.doors, " // ", "Precio: ", "$".concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(element.price)));
            } else if (element instanceof Motorcycle) {
                console.log (''.concat('Marca: ', element.brand,' // ','Modelo: ', element.model, ' // ', 'Cilindrada: ', element.cc, 'cc', ' // ', 'Precio: ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(element.price))));
            }
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

    mostChpItem() {
        let itemsCopy = this.items;
        itemsCopy.sort((a, b) =>  b.price - a.price );
        console.log(''.concat('Vehículo más barato: ', inventory.items[inventory.items.length-1].brand, ' ', inventory.items[inventory.items.length-1].model));
    }
    yItem() {
        let yItem = this.items.find(element => element.brand.includes('Y') === true);
        console.log(''.concat('Vehículo que contiene en el modelo la letra ‘Y’: ', yItem.brand, ' ', yItem.model, ' ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(yItem.price))));
    }
  
}

let vehicle1 = new Vehicle ('Peugeot', '206', 4 , 200000.00);
let vehicle2 = new Vehicle ('Peugeot', '208', 5 , 250000.00);
let motorcycle1 = new Motorcycle ('Honda', 'Titan', 125 , 60000.00);
let motorcycle2 = new Motorcycle ('Yamaha', 'YBR', 160 , 80500.50);

let inventoryArray = new Array ();
inventoryArray.push(vehicle1);
inventoryArray.push(motorcycle1);
inventoryArray.push(vehicle2);
inventoryArray.push(motorcycle2);
//console.log ("Inventory Array: ", inventoryArray);


let inventory = new Inventory(inventoryArray);
inventory.allItems();
//console.log ("Inventory: ", inventory.items);
/*inventory.items.forEach(element => {
    if (element instanceof Vehicle) { 
        console.log (''.concat('Marca: ', element.brand,' // ','Modelo: ', element.model, ' // ', 'Puertas: ', element.doors, ' // ', 'Precio: ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(element.price))));
        //console.log ("Marca: ", element.brand," // ","Modelo: ", element.model, " // ", "Puertas: ", element.doors, " // ", "Precio: ", "$".concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(element.price)));
    } else if (element instanceof Motorcycle) {
        console.log (''.concat('Marca: ', element.brand,' // ','Modelo: ', element.model, ' // ', 'Cilindrada: ', element.cc, 'cc', ' // ', 'Precio: ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(element.price))));
    }
});*/
//inventory.sortDescByPrice();
//console.log ("Inventory (ordered descendig by price): ", inventory.items);

console.log('=============================');
inventory.mostExpItem()
//console.log(''.concat('Vehículo más caro: ', inventory.items[0].brand, ' ', inventory.items[0].model));
inventory.mostChpItem();
//console.log(''.concat('Vehículo más barato: ', inventory.items[inventory.items.length-1].brand, ' ', inventory.items[inventory.items.length-1].model));
inventory.yItem();
//let yItem = inventory.items.find(element => element.brand.includes('Y') === true);
//console.log(''.concat('Vehículo que contiene en el modelo la letra ‘Y’: ', yItem.brand, ' ', yItem.model, ' ', '$'.concat(Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(yItem.price))));

console.log('=============================');
inventory.sortDescByPrice();
/*console.log('Vehículos ordenados por precio de mayor a menor:');
inventory.items.forEach(element => {
    console.log (''.concat(element.brand,' ',element.model));
});*/


/*inventory.items.forEach(element => {
    console.log (Intl.NumberFormat("de-DE", {minimumFractionDigits: 2}).format(element.price));
});*/
//console.log("++ Ends ++");


