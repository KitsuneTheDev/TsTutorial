import crypto from 'crypto';

class Garage {
    static #spot = {isAvailable: true, occupant: {}};



    static park(vehicle) {
        if(this.#spot.isAvailable) {
            this.#spot.occupant = vehicle;
            this.#spot.isAvailable = false;
            return this.#spot.occupant;
        } else {
            console.log('Spot is not available.');
            return;
        }
    }

    static unpark(vehicle) {
        if(this.#spot.occupant.getVehicleId() === vehicle.id) {
            this.#spot.occupant = {};
            this.#spot.isAvailable = true;
            console.log('You took your car.');
            return vehicle;
        } else {
            console.log('You can only take out your own car.');
        }
    }
}

class Vehicle {
    #id;
    #name;
    #wheels;

    constructor(name, wheels) {
        this.#wheels = wheels;
        this.#name = name;
        this.#id = crypto.randomBytes(64).toString('hex');
    }

    getVehicleId() {
        return this.#id;
    }
}

class Bicycle extends Vehicle {
    
    #type;

    constructor(type) {
        if(!['MOUNTAIN', 'ROAD'].includes(type.toString().toUpperCase())) {
            throw new Error('Invalid type. Please specify type as to be one of the following two types: MOUNTAIN , ROAD');
        }
        super('Bicycle', 2);
        this.#type = type;
    }
}