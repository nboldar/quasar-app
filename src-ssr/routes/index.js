const Router = require('koa-router');

const koaRouter = new Router();
koaRouter.get('*', async (ctx, next) => {
  ctx.setHeader('Content-Type', 'text/html');
});

module.exports.koaRouter = koaRouter;
