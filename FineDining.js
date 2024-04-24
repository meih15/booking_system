const Restaurant = require('./restaurant');

class FineDining extends Restaurant {
  constructor(name, address, cuisineType, dressCode) {
    super(name, address, cuisineType);
    this.dressCode = dressCode;
  }

  describe() {
    return `Name: ${this.name}, Address: ${this.address}, Cuisine Type: ${this.cuisineType}, Dress Code: ${this.dressCode}`;
  }
}

module.exports = FineDining;
