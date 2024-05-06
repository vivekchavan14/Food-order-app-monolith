const express = require('express'); //! import express from 'express';
import { Express, Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/', (req : Request, res : Response, next : NextFunction) => {
    res.json({ message : "Hello from Vendor!"})
})
export { router as VendorRoutes }