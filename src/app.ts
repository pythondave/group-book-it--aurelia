import { element } from 'aurelia-protractor-plugin/protractor';
import {Aurelia} from 'aurelia-framework';
import { Router, RouterConfiguration, NavigationInstruction, Next } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Group Book It';
    config.addPipelineStep('postcomplete', PostCompleteStep);
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './components/welcome', nav: true, title: 'Welcome' },
      { route: 'bookings', name: 'bookings', moduleId: './components/bookings/bookings', nav: true, title: 'Bookings' },
      { route: 'bookings/create', name: 'create-booking', moduleId: './components/create-booking/create', title: 'Create new booking' },
      { route: 'bookings/:id', name: 'booking', moduleId: './components/booking/booking', title: 'Booking' },
      { route: 'demos', name: 'demos', moduleId: './components/demos/demos', nav: true, title: 'Demos' }
      //{ route: 'example-welcome', name: 'example-welcome', moduleId: './components/examples/welcome', nav: true, title: 'Example welcome8' },
      //{ route: 'example-users', name: 'users', moduleId: './components/examples/users', nav: true, title: 'Example users' },
      //{ route: 'example-child-router', name: 'child-router', moduleId: './components/examples/child-router', nav: true, title: 'Example child router' }
    ]);

    this.router = router;
  }
}

class PostCompleteStep {
  run(instruction: NavigationInstruction, next: Next) {
    if (!instruction.config.settings.noScrollToTop) {
      // *** TODO: get scrolling to top working
      let pageHost = document.getElementById('top');
      if (pageHost) pageHost.scrollIntoView(true);
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }
    return next();
  }
}
