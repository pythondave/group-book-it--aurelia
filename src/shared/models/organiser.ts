import { json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Organiser {
  id: string;
  forename: string;
  surname: string;
  emailAddress: string;
  telephoneNumber: string;

  constructor() {
  }

  deserialize(objectJson: any) {
    if (!objectJson) return;
    var t = this, o = objectJson, a = o.attributes;
    if (o.type !== 'organisers') throw new TypeError();

    t.id = o.id;
    t.forename = a.forename;
    t.surname = a.surname;
    t.emailAddress = a.emailAddress;
    t.telephoneNumber = a.telephoneNumber;

    return t;
  }
}
