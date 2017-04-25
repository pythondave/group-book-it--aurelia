import { json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Diner {
  forename: string;
  surname: string;
  addedAt: Date;
  addedByEmailAddress: string;
  lastUpdatedByEmailAddress: string;
  lastUpdatedAt: Date;
  notes: string;

  constructor() {
  }

  deserialize(objectJson: any) {
    if (!objectJson) return;
    var t = this, o = objectJson, a = o.attributes;
    if (o.type !== 'diners') throw new TypeError();

    t.forename = a.forename;
    t.surname = a.surname;
    t.addedAt = new Date(a.addedAt);
    t.addedByEmailAddress = a.addedByEmailAddress;
    t.lastUpdatedByEmailAddress = a.lastUpdatedByEmailAddress;
    t.lastUpdatedAt =  new Date(a.lastUpdatedAt);
    t.notes = a.notes;

    return t;
  }
}
