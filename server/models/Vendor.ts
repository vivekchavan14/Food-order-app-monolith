import mongoose, { Schema, Document, Model } from 'mongoose';

interface VendorDoc extends Document {
    name: string;
    ownerName: string;
    foodType: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    pincode: string;
    salt: string;
    serviceAvailable: boolean;
    coverImages: string[];
    rating: number;
}

const VendorSchema = new Schema<VendorDoc>({
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    foodType: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pincode: { type: String, required: true },
    salt: { type: String, required: true },
    serviceAvailable: { type: Boolean, required: true },
    coverImages: { type: [String] },
    rating: { type: Number },
}, { timestamps: true });

export interface VendorModel extends Model<VendorDoc> {}

export const VendorModel = mongoose.model<VendorDoc>('Vendor', VendorSchema);
