import { get } from '@easy-webpack/core';
import { autoinject } from 'aurelia-framework';
import { Bookings } from './bookings';
import { HttpClient } from 'aurelia-fetch-client';

/*
  - General terminology
    + get: gets one or more entities
    + post: adds an entity
    + patch: updates an existing entity
    + delete: deletes an entity
*/

@autoinject
export class Api {
  bookings: Bookings;

  constructor(bookings: Bookings) {
    this.bookings = bookings;
  }
}
