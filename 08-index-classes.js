/**
 * classes and superclasses
 * @param {*} destination 
 * @param {*} days 
 */

function Holidays(destination, days) {
    this.destination = destination;
    this.days = days;
}

Holidays.prototype.info = function () {
    console.log(`${this.destination} | ${this.days} days`);
}

let nepal = new Holidays('Nepal', 365);
nepal.info();


class HolidayDetails {
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }
    info = () => console.log(`${this.destination} will take ${this.days} days`);
}

const trip = new HolidayDetails('Nepal', 364);
trip.info();

class Expedition extends HolidayDetails {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
        console.log(`${this.gear}`)
    }
    info() {
        super.info();
    }
    gearPrint = () => { console.log(`Bring your ${this.gear.join(' and your ')}`); }
}

const tripWithGear = new Expedition('Nepal', 365, ['sunglasses', 'goggles', 'extra clothes']);
tripWithGear.info();
tripWithGear.gearPrint();
