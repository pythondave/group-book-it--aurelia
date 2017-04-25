import { Booking as mBooking } from './../../shared/models/booking';
import { Models } from './../../shared/models/models';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Bookings {
  list: mBooking[];
  heading: string = 'Bookings';

  constructor(private models: Models) {
    this.models = models;
  }

  async activate(): Promise<void> {
    var bookings = await this.models.bookings.get();
    this.list = bookings.list;
  }
}
