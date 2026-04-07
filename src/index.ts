interface Spot {
    isAvailable: boolean,
    spaces: Map<number, number>,
}

class Garage {
    #spot: Spot;

    constructor() {
        this.#spot = {
            isAvailable: true,
            spaces: new Map([[0, 100]]),
        }
    }

    parkVehicle(vehicle: Vehicle, length: number): Vehicle | void {
        if(this.#spot.isAvailable) {
            const iterator: IterableIterator<[number, number]> = this.#spot.spaces.entries();
            let current: number[] = iterator.next().value;
            let flag: boolean = true;
            while(flag) {
                if(!current[1] || current[0] !== 0) {
                    flag = false;
                } else {
                    if(current[1] < length) {
                        current = iterator.next().value;
                    } else {
                        this.#spot.spaces
                    }
                }
            }
        } else {
            console.log('No available spot.');
            return;
        }
    }

    unparkVehicle(vehicle: Vehicle): Vehicle | void {
        if(this.#spot.vehicleId === vehicle.getVehicleId()) {
            this.#spot.isAvailable = true;
            this.#spot.spot = null;
            console.log(`${vehicle} is unparked.`);
            return vehicle; 
        } else {
            console.log('Un-authorized user.');
            return;
        }
    }

    checkAvailability(): void {
        if(this.#spot.spaces.size === 0) {
            this.#spot.isAvailable = false;
        } 

        return;
    }

}   

class Vehicle {
    #id: string;
    #wheels: number;
    #length: number;
    
    constructor(wheels: number, length: number) {
        this.#wheels = wheels;
        this.#id = crypto.randomUUID();
        this.#length = length;
    }

    getVehicleId(): string {
        return this.#id;
    }
}

class Bicycle extends Vehicle{
    #type: 'MOUNTAIN' | 'ROAD';

    constructor(type: 'MOUNTAIN' | 'ROAD') {
        super(2, 1);
        this.#type = type;
    }
}

class Car extends Vehicle {
    #seat: number;
    constructor() {
        super(4, 2);
        this.#seat = 4;
    }
}

class Truck extends Vehicle {
    #capacity: number;
    #load: number = 0;
    constructor() {
        super(6, 3);
        this.#capacity = 2000;
    }

    loadTruck(amount: number): number | void {
        if(this.#capacity <= this.#load + amount) {
            console.log('There is not enough space.');
            return;
        } else {
            this.#load = amount;
            return this.#load;
        }
    }

    unloadTruck(amount: number): void {
        if(this.#load <= amount) {
            this.#load = 0;
            console.log('Everything is unloaded. Truck is empty.');
        } else {
            this.#load -= amount;
            console.log(`Specified amount is unloaded. Current load: ${this.#load}`);
        }
    }

    getTruckCapacity(): number {
        return this.#capacity;
    }

    getTruckLoad(): number {
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


