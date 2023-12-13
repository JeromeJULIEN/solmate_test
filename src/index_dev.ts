import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import cors from 'cors';
console.log("1")
import * as dotenv from 'dotenv';
dotenv.config({
    path: './.env.dev'
});
console.log("2")
import logger from "./utils/logger";
console.log("3")

import { PORT_NUMBER } from "./config";
console.log("4")

import { log } from "console";
console.log("5")

const { router } = require("./services");


// create express app
console.log("6")
const app = express();
console.log("7")

app.use(bodyParser.json());
console.log("8")

app.use(cors());
console.log("9")

app.set('/', router);
console.log("10")


app.listen(PORT_NUMBER);

console.log(`Solmate Presale API has started on ${PORT_NUMBER} port.`);