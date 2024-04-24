const Traveler = require('./Traveler');

class BusinessTraveler extends Traveler {
  constructor(name, origin, destination, job) {
    super(name, origin, destination);
    this.job = job;
  }

  describe() {
    return `Name: ${this.name}, Origin: ${this.name}, Destination: ${this.name}, Job: ${this.job}`;
  }
}

module.exports = BusinessTraveler;
