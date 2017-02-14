import { JsonProperty } from './../services/generic/json';

export class Booking {
  id: string = '';
  firstName: string = '';
  surname: string = '';
  emailAddress: string = '';
  telephoneNumber: string = '';
  @JsonProperty('startingAt')
  startingAt: Date = new Date();
  @JsonProperty('cutOffDate')
  cutOffDate: Date = new Date();
  numberOfDiners: number = -1;
  menuId: number = -1;
  menu: string = '';
}
