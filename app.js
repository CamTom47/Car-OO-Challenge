class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return "Beep"
    }
}

let myFirstVehicle = new Vehicle('Subaru', 'Forester', 2018);

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 4
    }
}

let myFirstCar = new Car('Subaru', 'Forestor', 2018);

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!"
    }
}

let myFirstMotorcle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage{
    constructor(capacity){
        this.vehicles = [],
        this.capacity = capacity;
    }
    add(vehicle){
        if(!(vehicle instanceof Vehicle)){
            return 'Vehicles only!'
        }
        if(this.vehicles.length >= this.capacity){
            return 'Sorry the garage is full';
        }
        this.vehicles.push(vehicle);
        return 'Vehicle added';
    }
}

let myGarage = new Garage(2);