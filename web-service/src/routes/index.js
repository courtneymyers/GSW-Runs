const router = require('koa-route');

module.exports = [
  router.get('/', (ctx, next) => {
    ctx.body = 'Koa web service is running...';
  }),
];
