/**
 * Example server to use Consul services.
 */

import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';

const app = new Koa();

app.use(bodyParser());

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = JSON.stringify({
    message: 'Hello World!',
  })
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(4050);
console.log(`server running on port 4050`);

