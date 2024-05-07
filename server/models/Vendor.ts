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
    foods: mongoose.Schema.Types.ObjectId[];
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
    foods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }]
}, { timestamps: true });

const VendorModel: Model<VendorDoc> = mongoose.model('Vendor', VendorSchema);

export default VendorModel;
