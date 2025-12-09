// app/api/models/User.model.ts
import mongoose, { Schema, models } from 'mongoose';

const UserSchema = new Schema(
    {
        name: { type: String, required: true }
    },
    { timestamps: true }
);

export const User = models.User || mongoose.model('User', UserSchema);