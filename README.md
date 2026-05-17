# WeatherForecastSPAMine

A small single-page AngularJS demo that shows weather forecasts. Intended as a simple example SPA using Angular 1.x and static HTML templates.

**Overview**

- Minimal AngularJS app demonstrating routing, services, controllers, and a directive for weather reports.

**Key files**

- [index.htm](index.htm) — app entry point
- [app.js](app.js) — main Angular app boot (top-level)
- [controllers.js](controllers.js) — controllers
- [services.js](services.js) — services (API / data)
- [routes.js](routes.js) — route configuration
- [directives.js](directives.js) — directive registrations
- [directives/weatherReport.html](directives/weatherReport.html) — weather report template
- [pages/home.htm](pages/home.htm) — home page
- [pages/forecast.htm](pages/forecast.htm) — forecast page

**Prerequisites**

- Node.js (optional) — only needed to run a simple static server locally.

**Run locally**

Option 1 — open the app directly in your browser:

- Open `index.htm` in a browser (may require adjusting local file security settings for AJAX requests).

Option 2 — serve with a static server (recommended):

```bash
npx http-server . -o
# or
npx serve .
```

If there is an `npm` script available you can also run:

```bash
npm install
npm start # if defined in package.json
```

**Development**

- Edit the Angular code in the root files (`app.js`, `controllers.js`, `services.js`, `routes.js`, `directives.js`) and the templates under `pages/` and `directives/`.
- Changes are client-side only; reload the browser to see updates.

**Project structure (partial)**

```
app.js
controllers.js
services.js
routes.js
directives.js
index.htm
pages/
  home.htm
  forecast.htm
directives/
  weatherReport.html
scripts/
  angular/
```

**License**

- Add a license to this repository as appropriate. No license is included by default.

---

If you want, I can: add a `LICENSE` file, wire up an `npm start` script, or adjust the README with screenshots and usage examples.