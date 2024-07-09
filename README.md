# AngularSsr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `nmp run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. Pre rendered and full client side rendered routes will not work as
expected.

## Generating a build

Run `nmp run build` to build the project. The build artifacts will be stored in the `dist/` directory. In this step the application will be prebuilt the configured prebuild routes.

## Running prebuilt application

After generating a new build, run `nmp run serve:ssr` for a dev server. Navigate to `http://localhost:4200/`.

## Configuring prebuild routes

To configure prebuild routes, edit the `prerendered-routes.txt` file. Every line in the file should be a route that you want to prebuild.

``` typescript
// prerendered-routes.txt

/prerender
```

## Configuring client side only routes

To configure client side only routes, edit the `server.ts` file. Here you can add a routes that will be served by the client side rendering via the following code:

```typescript
// server.ts

// This route will do client side rendering
server.get('/client-render', (req, res) => {
  res.sendFile(join(browserDistFolder, 'index.csr.html'));
});
```
