import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as routes from "./routes/index";
import * as swaggerDoc from "./swaggerDoc";

const env = process.env;

function makeAPI(): express.Application {
    const app = express();
    app.use( express.json() );

    return app;
}

( async () => {
     
    //  PG connected
    const app = makeAPI();
    //  configure routes
    routes.register( app );

    //  configure middlewares
    swaggerDoc.register( app );

    // run app
    app.listen(3000);

    console.log("Express application is up and running on port 3000");
} )();
