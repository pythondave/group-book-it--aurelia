import { Organiser } from './organiser';
import { Menu } from './menu';
import { Diner } from './diner';
import { json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Api } from './../services/api/api';
import * as _ from 'lodash';

@autoinject
export class Booking {
  id: string;

  startingAt: Date;
  cutOffDate: Date;
  numberOfDiners: number;
  createdAt: Date;

  status: any;
  menu: Menu | undefined;
  organiser: Organiser | undefined;
  diners: (Diner | undefined)[];
  //createdBy: Person;
  //lastUpatedBy: Person;

  constructor(private api?: Api) {
    this.api = api;
    this.diners = [];
    this.status = {};
  }

  deserialize(objectJson: any, included?: any): Booking {
    // NOTE: experimented with http://cloudmark.github.io/Json-Mapping/ but in the end
    //       decided to be verbose - see also: http://stackoverflow.com/a/22886730

    var t = this, o = objectJson, a = o.attributes;
    if (o.type !== 'bookings') throw new TypeError(); //*** TODO: Niall - type: bookings vs booking?

    t.id = o.id;
    t.startingAt = new Date(a.startingAt);
    t.numberOfDiners = a.numberOfDiners;
    t.cutOffDate = new Date(a.cutOffDate);
    t.createdAt = new Date(a.createdAt);

    function getIncludedId(name): string {
      return <string>_.get(o.relationships, name + '.data.id');
    }

    function getIncludedJson(name): object {
      // *** TODO: simplify; try to remove need for lodash
      let id = getIncludedId(name);
      let json = <object>(_.find(included, {'type': name+'s', 'id': id}));
      return json;
    };

    t.organiser = new Organiser().deserialize(getIncludedJson('organiser'));
    t.menu = new Menu().deserialize(getIncludedJson('menu'));

    //booking status *** TODO: add to some structure
    let id = getIncludedId('status');
    let bookingStatus = <object>_.find(included, {'type': 'booking-status-types', 'id': id});
    t.status.name = _.get(bookingStatus, 'attributes.name');

    //diners
    if (o.relationships.diners.data) {
      for (let item of o.relationships.diners.data) {
        let json = _.find(included, {'type': 'diners', 'id': item.id} )
        let diner: Diner | undefined = new Diner().deserialize(json);
        this.diners.push(diner);
      }
    }

    return t;
  }

  async getById(id): Promise<Booking> {
    if (!this.api) throw new Error('api not found');
    const json = await this.api.bookings.getById(id);
    let booking = new Booking().deserialize(json.data, json.included);
    return booking;
  }
}
