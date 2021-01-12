//console.log("++ Start ++");

import Vehicle  from './Vehicle.js';
import Motorcycle  from './Motorcycle.js';
import Inventory from './Inventory.js';

let vehicle1 = new Vehicle ('Peugeot', '206', 4 , 200000.00);
let vehicle2 = new Vehicle ('Peugeot', '208', 5 , 250000.00);
let motorcycle1 = new Motorcycle ('Honda', 'Titan', 125 , 60000.00);
let motorcycle2 = new Motorcycle ('Yamaha', 'YBR', 160 , 80500.50);

let inventoryArray = new Array ();
inventoryArray.push(vehicle1);
inventoryArray.push(motorcycle1);
inventoryArray.push(vehicle2);
inventoryArray.push(motorcycle2);

let inventory = new Inventory(inventoryArray);
inventory.allItems();
console.log('=============================');
inventory.mostExpItem()
inventory.cheapestItem();
inventory.yItem();
console.log('=============================');
inventory.sortDescByPrice();
//console.log("++ End ++");


