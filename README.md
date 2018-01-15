# PO-App Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Integrate Angular Universal
- [Documentation](1)
- Generating the app `ng new my-app --routing`
- Go into project `cd my-app`
- Setup angular universal `ng generate universal ngu-app-shell`
- Install new dependencies `npm install`
- Adding the app-shell ` ng generate app-shell my-loading-shell --universal-app=ngu-app-shell --route=app-shell-path`
- Build the production result `ng build --prod`
- Run the production result `ng serve --prod` or `cd dist && http-server -c-1` (minus one)

## Integrate Angular Material
- [Documentation](2)
- Install module `npm install --save @angular/material @angular/cdk`
- Advanced animations `npm install --save @angular/animations`
- Gesture support `npm install --save hammerjs`
    - Add `import 'hammer.js';` to e.g. `src/main.ts`
- Icons `npm install material-design-icons`

## Angular-Fire
- [Dokumentation](3)
- Install module `npm install firebase angularfire2 --save`

## Fixes
- Multiple modules while generating new component: `ng g c my-component --module app`

# Developing the App
Regardless which IDE you are using, try to test your app from time to time.
Checking your syntax properly using `ng lint`.


[1]: https://universal.angular.io/
[2]: https://material.angular.io/
[3]: https://github.com/angular/angularfire2
