import { autoinject } from 'aurelia-framework';
import { Bookings } from './bookings';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class Api {
  bookings: Bookings;

  constructor(bookings: Bookings) {
    this.bookings = bookings;
  }
}
