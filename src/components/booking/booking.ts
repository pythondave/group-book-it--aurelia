import { Models } from './../../shared/models/models';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Booking {
  heading: string = 'Booking';

  constructor(private models: Models) {
    this.models = models;
  }

  async activate(params): Promise<void> {
    var booking = await this.models.booking.getById(params.id);
    Object.assign(this, booking);
  }
}
