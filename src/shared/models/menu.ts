import { json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Menu {
  name: string;
  notes: string;

  constructor() {
  }

  deserialize(objectJson: any) {
    if (!objectJson) return;
    var t = this, o = objectJson, a = o.attributes;
    if (o.type !== 'menus') throw new TypeError();

    t.name = a.name;
    t.notes = a.notes;

    return t;
  }
}
