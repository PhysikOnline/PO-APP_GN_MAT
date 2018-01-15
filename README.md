# PO-App Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Integrate Angular Universal
- [Documentation](1)
- Generating the app `ng new my-app --routing --style=scss`
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
- Advanced gesture support `npm install --save hammerjs`
    - Add `import 'hammer.js';` to e.g. `src/main.ts`
- Icons `npm install material-design-icons`

### Stylings
If parameter `--style=scss` wasn't set at beginning, you can convert your project from `css` to `scss` using `ng set defaults.styleExt scss`

## Fixes
- Multiple modules while generating new component: `ng g c my-component --module app`

# Developing the App
Regardless which IDE you are using, try to test your app from time to time.
Checking your syntax properly using `ng lint`.

# PO-API Setup
The serverside part is included under `./server`

## Installing Modules:
```Processing
npm install express http-server nodemon --save
npm install ts-node @types/node @types/express --save-dev
```
Generate SSH-Key and add public key to `cert.pem` and private one to `key.pem`
Generate a `proxy.json` to proxy all requests to the server with:
```javascript
{
  "/api": {
    "target": "https://localhost:8081",
    "secure": false
  }
}
```
Add a 'server'-directory and a server.ts-file:
```javascript
import * as express from 'express';
import { Application } from 'express';
import * as fs from 'fs';
import * as https from 'https';
import { readAllLessons } from './read-all-lessons-route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'secure', type: Boolean, defaultOption: true }
];

const options = commandLineArgs(optionDefinitions);

// REST API
app.route('/api/lessons').get(readAllLessons);

if (options.secure) {
  const httpsServer = https.createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    },
    app
  );

  // launch an HTTPS Server. Note: this does NOT mean that the application is secure
  httpsServer.listen(8081, () =>
    console.log(
      'HTTPS Secure Server running at https://localhost:' +
        httpsServer.address().port
    )
  );
} else {
  // launch an HTTP Server
  const httpServer = app.listen(8081, () => {
    console.log(
      'HTTP Server running at https://localhost:' + httpServer.address().port
    );
  });
}
``` 

## Launching the server
```
npm run start-server
npm start
```

[1]: https://universal.angular.io/
[2]: https://material.angular.io/
[3]: https://github.com/angular/angularfire2
