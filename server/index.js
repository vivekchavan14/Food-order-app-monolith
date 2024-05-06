"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express"); //! import express from 'express';
var SERVER_PORT = 3000;
var app = express();
app.use(express.json());
app.get("/", function (request, response) {
    return response.json({ message: "Hello world!!!" });
});
app.listen(SERVER_PORT, function () {
    console.log("Server running at: http://localhost:".concat(SERVER_PORT));
});
