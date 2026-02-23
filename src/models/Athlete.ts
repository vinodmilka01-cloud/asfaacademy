import mongoose, { Schema, Document } from "mongoose";

export interface IAthlete extends Document {
    name: string;
    category: "National" | "State" | "Olympic" | "Para" | "Junior";
    sport: string;
    achievement: string;
    image?: string;
    description?: string;
    isFeatured: boolean;
    createdAt: Date;
}

const AthleteSchema: Schema = new Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ["National", "State", "Olympic", "Para", "Junior"], required: true },
    sport: { type: String, required: true },
    achievement: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    isFeatured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Athlete || mongoose.model<IAthlete>("Athlete", AthleteSchema);
