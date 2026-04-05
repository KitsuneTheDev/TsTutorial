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
    constructor(wheels) {
        this.#wheels = wheels;
        this.#id = crypto.randomUUID();
    }
    getVehicleId() {
        return this.#id;
    }
}
class Bicycle extends Vehicle {
    #type;
    constructor(type) {
        super(2);
        this.#type = type;
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
//# sourceMappingURL=index.js.map