import * as express from "express";
import { Base64 } from "js-base64";
import * as jwt from "jsonwebtoken";
import { Connection } from "typeorm";
import log from "../services/logger";
import api from "../services/api";

//import Database from "../database/config";
//import User from "../database/entities/user.entities";
//import Queries from "../database/queries";

//const conn = Database.getInstance();

export const register = ( app: express.Application ) => {

    // define a route handler for the default home page
    app.get( "/", ( req, res ) => {
        log.info("Hello word!");
         res.send( "Hello world!" );
    });

};
