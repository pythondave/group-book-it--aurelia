import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class Bookings {

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async get(): Promise<any> {
    const response = await this.httpClient.fetch('/v1/Bookings/FilterBookings');
    return response.json();
  }
}
