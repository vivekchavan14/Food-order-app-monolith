import { Request,Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto/Vendor.dto";
import { VendorModel } from '../models/Vendor'

export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, ownerName, pincode, password, foodType, address, email, phone } = <CreateVendorInput>req.body; // Extracting properties from req.body

        const vendor = await VendorModel.create({
            name,
            ownerName,
            foodType,
            address,
            email,
            password,
            pincode,
            phone,
            salt: '',
            rating: 0,
            serviceAvailable: false,
            coverImages: [],
        });

        res.status(201).json({ success: true, data: vendor });
    } catch (error) {
        // Handle error
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

export const GetVendor = (req: Request, res: Response, next: NextFunction) => {
    
}

export const GetVendorById = (req: Request, res: Response, next: NextFunction) => {
    
}