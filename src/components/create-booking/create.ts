// import { Booking } from './../../shared/models/booking';
import { Models } from './../../shared/models/models';
import { autoinject } from 'aurelia-framework';

@autoinject
export class CreateBooking {
  heading: string = 'Create new booking';

  constructor(private models: Models) {
    this.models = models;
  }

  async activate(): Promise<void> {
  }
}
