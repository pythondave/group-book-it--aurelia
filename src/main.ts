import { HttpClient } from 'aurelia-fetch-client';
import { Aurelia } from 'aurelia-framework';

// we want font-awesome to load as soon as possible to show the fa-spinner
import '../src/shared/styles/styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// comment out if you don't want a Promise polyfill (remove also from webpack.config.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  configureContainer(aurelia.container);

  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}

const fetch = !(<any>self).fetch ? System.import('isomorphic-fetch') : Promise.resolve((<any>self).fetch);

function configureContainer(container) {
  // ref: http://stackoverflow.com/a/35141543
  let httpClient = new HttpClient();
  httpClient.configure(config => {
    config
      .useStandardConfiguration()
      .withBaseUrl('https://api.groupbookit.com/api');
  });
  container.registerInstance(HttpClient, httpClient);
}
