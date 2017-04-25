import { Router, RouterConfiguration } from 'aurelia-router';
import { Demos as Model } from './../../shared/models/demos';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Demos {
  heading: string = 'Demos';
  model: Model;
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.model = new Model;

    var routes: any[] = [
      { route: [''], moduleId: './../generic/empty' },
    ];

    // *** TODO: pull these in from model
    routes.push({ route: '/text', name: 'text', moduleId: './../generic/fields/text/demo', nav: true, title: 'Text' });
    routes.push({ route: '/date', name: 'date', moduleId: './../generic/fields/date/demo', nav: true, title: 'Date' });
    routes.push({ route: '/bar', name: 'bar', moduleId: './../generic/fields/text/demo', nav: true, title: 'Bar' });
    routes.push({ route: '/baz', name: 'baz', moduleId: './../generic/fields/text/demo', nav: true, title: 'Baz' });
    routes.push({ route: '/qux', name: 'qux', moduleId: './../generic/fields/text/demo', nav: true, title: 'Quz' });

    config.map(routes);

    this.router = router;
    //console.log(router, this.model);
  }

  constructor(config: RouterConfiguration) {
    this.model = new Model;
  }
}
