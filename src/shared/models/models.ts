import { autoinject } from 'aurelia-framework';
import { Booking } from './booking';
import { Bookings } from './bookings';

@autoinject
export class Models {
  booking: Booking;
  bookings: Bookings;

  constructor(booking: Booking, bookings: Bookings) {
    this.booking = booking;
    this.bookings = bookings;
  }
}
