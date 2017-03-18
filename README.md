# Table-res

Scaffold used - [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)

## Goal
To build a web app, that can be run offline, to handle table reservations for a bar.

### Feature requirements
* Book a table for a certain date
* Check which tables are available for any given date
* Manage a booking (edit and delete)

## Development requirements
* node `^4.5.0`
* yarn `^0.17.0` or npm `^3.0.0`

```bash
$ yarn install    # Install project dependencies
$ yarn start      # Compile and launch (same as `npm start`)
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|