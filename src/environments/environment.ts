// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tastio-contact-tracing',
    appId: '1:903082049219:web:63075846eaec30decbec76',
    databaseURL: 'https://tastio-contact-tracing.firebaseio.com',
    storageBucket: 'tastio-contact-tracing.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBZ8jrPGFjaogZGchY83JCjJpcgN1LSrfw',
    authDomain: 'tastio-contact-tracing.firebaseapp.com',
    messagingSenderId: '903082049219',
    measurementId: 'G-DFNBDF7WKF',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
