import { autoinject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

@autoinject
export class Bookings {

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async get(): Promise<any> {
    const response = await this.httpClient.fetch('/v1/bookings?include=organiser');
    return response.json();
  }

  async getById(id: string, include?: string): Promise<any> {
    include = include || 'organiser,menu,status,diners';
    // *** TODO: Niall - 'created-by,last-updated-by' not working
    const response = await this.httpClient.fetch('/v1/bookings/'+id+'?include='+include);
    return response.json();
  }

  async post(data: string): Promise<any> {
    const response = await this.httpClient.fetch('/v1/Bookings',
      { method: 'post', body: json(data) });
    return response.json();
  }

  async patch(data: string): Promise<any> {
    const response = await this.httpClient.fetch('/v1/Bookings',
      { method: 'patch', body: json(data) });
    return response.json();
  }
}
