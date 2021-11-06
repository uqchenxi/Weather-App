const Koa = require("koa");
const Router = require("koa-router");
const beijing = require('./fetch_bei');
const sydney = require('./fetch_syd');


const app = new Koa();
const router = new Router();


router.get("/beijing", async (ctx, next) => {

    ctx.body = beijing;

    await next();
})

router.get("/sydney", async (ctx, next) => {

    ctx.body = sydney;

    await next();
})

router.get("/twitter", async (ctx, next) => {

    ctx.body = require("./twitter");

    await next();
})



app.use(router.routes());

app.use(async (ctx, next) => {
    // It is not allowed in real workplace
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderField');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});


app.listen(5000, () => {
    console.log("Server starts to listen port 5000")
});