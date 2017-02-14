import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
  router: Router;

  heading = 'Example child router';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: './welcome',       nav: true, title: 'Example welcome' },
      { route: 'users',         name: 'users',         moduleId: './users',         nav: true, title: 'Example github users' },
      { route: 'child-router',  name: 'child-router',  moduleId: './child-router',  nav: true, title: 'Example child router' }
    ]);

    this.router = router;
  }
}
