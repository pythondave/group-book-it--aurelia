// ref: https://github.com/Microsoft/TypeScript/issues/11919#issuecomment-258363437

import { autoinject } from 'aurelia-framework';
import { Api } from './../services/api/api';
import { Booking } from './booking';
import { Generic } from './../services/generic/generic';

@autoinject
export class Bookings {
  list: Booking[] = [];

  constructor(private api: Api) {
    this.api = api;
  }

  async get(): Promise<Booking[]> {
    const json = await this.api.bookings.get();
    for (let item of json) {
      let booking = Generic.Json.deserialize(Booking, item);
      if (booking) this.list.push(booking);
    }
    return this.list;
  }
}
