import express = require('express'); //! import express from 'express';
import { Express, Request, Response } from 'express';

const SERVER_PORT: number = 3000;

const app: Express = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
    return response.json({ message: "Hello world!!!" });
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at: http://localhost:${SERVER_PORT}`);
});