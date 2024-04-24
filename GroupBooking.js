const Booking = require('./Booking');

class GroupBooking extends Booking{
    constructor(customerName, date, time, numberOfGuests, groupSize){
        super(customerName, date, time, numberOfGuests);
        this.groupSize = groupSize;
    }
    
    describe() {
        return `Name: ${this.customerName}, Date: ${this.date}, Time: ${this.time},
        Number of Guests: ${this.numberOfGuests}, Size Of Group : ${this.groupSize}`;
    }
}