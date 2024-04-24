const Booking = require('./Booking');

class EventBooking extends Booking{
    constructor(customerName, date, time, numberOfGuests, eventType){
        super(customerName, date, time, numberOfGuests);
        this.eventType = eventType;
    }
    
    describe() {
        return `Name: ${this.customerName}, Date: ${this.date}, Time: ${this.time},
        Number of Guests: ${this.numberOfGuests}, Event Type: ${this.eventType}`;
    }
}

module.exports = EventBooking;