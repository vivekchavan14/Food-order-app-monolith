const express = require('express'); //! import express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import { createVendor, GetVendor, GetVendorById } from '../controllers/';

const router = express.Router();

router.post('/vendor', createVendor)
router.post('/vendor', GetVendor)
router.get('/vendor/:id',GetVendorById)

router.get('/', (req : Request, res : Response, next : NextFunction) => {
      res.json({ message : "Hello from admin!"})
})
export { router as AdminRoutes }