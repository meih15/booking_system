class Booking {
  constructor(customerName, date, time, numberOfGuests) {
    this.customerName = customerName;
    this.date = date;
    this.time = time;
    this.numberOfGuests = numberOfGuests;
  }

  bookingDetails() {
    return `Name: ${this.customerName}, Date: ${this.date}, Time: ${this.time}, Number of Guests: ${this.numberOfGuests}`;
  }
}

module.exports = Booking;
