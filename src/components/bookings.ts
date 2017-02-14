import { Booking } from './../shared/models/booking';
import { Models } from './../shared/models/models';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Bookings {
  bookings: Booking[];

  constructor(private models: Models) {
    this.models = models;
  }

  async activate(): Promise<void> {
    await this.models.bookings.get();
    this.bookings = this.models.bookings.list;
  }
}
