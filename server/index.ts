const express = require('express'); //! import express from 'express';
import { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {AdminRoutes,VendorRoutes} from './routes'
const SERVER_PORT: number = 3000;

const app: Express = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", AdminRoutes)
app.use("/vendor", VendorRoutes)

app.listen(SERVER_PORT, () => {
    console.log(`Server running at: http://localhost:${SERVER_PORT}`);
});



