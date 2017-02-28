import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Group Book It';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './components/welcome', nav: true, title: 'Welcome' },
      { route: 'bookings', name: 'welcome', moduleId: './components/bookings', nav: true, title: 'Bookings' },
      { route: 'example-welcome', name: 'welcome', moduleId: './components/examples/welcome', nav: true, title: 'Example welcome5' },
      { route: 'example-users', name: 'users', moduleId: './components/examples/users', nav: true, title: 'Example users' },
      { route: 'example-child-router', name: 'child-router', moduleId: './components/examples/child-router', nav: true, title: 'Example child router' }
    ]);

    this.router = router;
  }
}
