const Koa = require('koa');
const middleware = require('./middleware');
const routes = require('./routes');

// create application
const app = new Koa();
app.port = process.env.PORT || 3001;

// define middleware
middleware.forEach(mw => app.use(mw));

// setup routes
routes.forEach(route => app.use(route));

// start app
if (!module.parent) app.listen(app.port, () => {
  console.log(`Koa app is running at http://localhost:${app.port}`);
});

module.exports = app;
