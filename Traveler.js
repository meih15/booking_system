class Traveler {
    constructor(name, origin, destination) {
        this.name = name;
        this.origin = origin;
        this.destination = destination;
    }

    display(){
        return (`Name: ${this.name}, Origin: ${this.name}, Destination: ${this.name}`);
    }
}

module.exports = Traveler