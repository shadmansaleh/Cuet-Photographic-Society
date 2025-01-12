import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
