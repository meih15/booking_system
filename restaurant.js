class Restaurant {

    constructor(name, address, cuisineType) {
        this.name = name;
        this.address = address;
        this.cuisineType = cuisineType;
    }

    describe() {
        return (`Name: ${this.name}, Address: ${this.address}, Cuisine Type: ${this.cuisineType}`);
    }
};

module.exports = Restaurant;