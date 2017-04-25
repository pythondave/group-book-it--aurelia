import { autoinject } from 'aurelia-framework';
import { Booking } from './booking';
import { Bookings } from './bookings';
import { Demos } from './demos';

@autoinject
export class Models {
  booking: Booking;
  bookings: Bookings;
  demos: Demos;

  constructor(booking: Booking, bookings: Bookings, demos: Demos) {
    this.booking = booking;
    this.bookings = bookings;
    this.demos = demos;
  }
}
