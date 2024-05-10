import { Request, Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto/Vendor.dto";
import { VendorModel } from '../models';
import { GeneratePassword, generateSalt } from "../utility";

export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, ownerName, pincode, password, foodType, address, email, phone } = <CreateVendorInput>req.body; // Extracting properties from req.body

        const existingVendor = await VendorModel.findOne({ email: email });

        if (existingVendor !== null) {
            return res.status(400).json({ success: false, message: "A vendor has already been created with that email address" });
        }

        const salt = await generateSalt()
        const userPassword = await GeneratePassword(password, salt)
        const vendor = await VendorModel.create({
            name,
            ownerName,
            foodType,
            address,
            email,
            password : userPassword,
            pincode,
            phone,
            salt: salt, // Dummy salt value
            rating: 0,
            serviceAvailable: false,
            coverImages: [],
        });

        return res.status(201).json({ success: true, data: vendor }); // Return a response here
    } catch (error) {
        // Handle error
        console.error(error);
        return res.status(500).json({ success: false, error: 'Server Error' }); // Return a response here as well
    }
};

export const GetVendor = (req: Request, res: Response, next: NextFunction) => {
    // Implement functionality to get vendors
};

export const GetVendorById = (req: Request, res: Response, next: NextFunction) => {
    // Implement functionality to get a vendor by ID
};