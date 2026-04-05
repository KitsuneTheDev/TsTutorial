"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Garage {
    #spot;
    constructor() {
        this.#spot = {
            isAvailable: true,
            spot: null,
            vehicleId: "noID",
        };
    }
    parkVehicle(vehicle) {
        if (this.#spot.isAvailable) {
            this.#spot.isAvailable = false;
            this.#spot.spot = vehicle;
            this.#spot.vehicleId = vehicle.getVehicleId();
            console.log(`${vehicle} is parked.`);
            return vehicle;
        }
        else {
            console.log('No available spot.');
            return;
        }
    }
    unparkVehicle(vehicle) {
        if (this.#spot.vehicleId === vehicle.getVehicleId()) {
            this.#spot.isAvailable = true;
            this.#spot.spot = null;
            console.log(`${vehicle} is unparked.`);
            return vehicle;
        }
        else {
            console.log('Un-authorized user.');
            return;
        }
    }
}
class Vehicle {
    #id;
    #wheels;
    #length;
    constructor(wheels, length) {
        this.#wheels = wheels;
        this.#id = crypto.randomUUID();
        this.#length = length;
    }
    getVehicleId() {
        return this.#id;
    }
}
class Bicycle extends Vehicle {
    #type;
    constructor(type) {
        super(2, 1);
        this.#type = type;
    }
}
class Car extends Vehicle {
    #seat;
    constructor() {
        super(4, 2);
        this.#seat = 4;
    }
}
class Truck extends Vehicle {
    #capacity;
    #load = 0;
    constructor() {
        super(6, 3);
        this.#capacity = 2000;
    }
    loadTruck(amount) {
        if (this.#capacity <= this.#load + amount) {
            console.log('There is not enough space.');
            return;
        }
        else {
            this.#load = amount;
            return this.#load;
        }
    }
    unloadTruck(amount) {
        if (this.#load <= amount) {
            this.#load = 0;
            console.log('Everything is unloaded. Truck is empty.');
        }
        else {
            this.#load -= amount;
            console.log(`Specified amount is unloaded. Current load: ${this.#load}`);
        }
    }
    getTruckCapacity() {
        return this.#capacity;
    }
    getTruckLoad() {
        return this.#load;
    }
}
const newGarage = new Garage();
const newBike = new Bicycle('MOUNTAIN');
newGarage.parkVehicle(newBike);
const newBike2 = new Bicycle('ROAD');
newGarage.parkVehicle(newBike2);
newGarage.unparkVehicle(newBike2);
newGarage.unparkVehicle(newBike);
newGarage.parkVehicle(newBike2);
const newTruck = new Truck();
console.log("Truck capacity --> ", newTruck.getTruckCapacity());
newTruck.loadTruck(1500);
newTruck.loadTruck(700);
newTruck.unloadTruck(5000);
newTruck.loadTruck(1200);
newTruck.unloadTruck(600);
console.log("Truck current load --> ", newTruck.getTruckLoad());
//# sourceMappingURL=index.js.map