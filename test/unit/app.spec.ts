import './setup';
import {App} from '../../src/app';

class RouterStub {
  routes;
  
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  let sut;
  let mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Aurelia');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({ route: ['', 'welcome'], name: 'welcome',  moduleId: './components/welcome', nav: true, title: 'Welcome' });
  });

  it('should have a users route', () => {
    expect(sut.router.routes).toContain({ route: 'users', name: 'users', moduleId: './components/users', nav: true, title: 'Github Users' });
  });

  it('should have a child router route', () => {
    expect(sut.router.routes).toContain({ route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' });
  });
});
