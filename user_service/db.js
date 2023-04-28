import mongoose from 'mongoose';
import { MongoDB_URI } from './config.js';
import pino from './loggerService.js';
const loggerService = pino();

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MongoDB_URI);
        loggerService.info(`MongoDB Connected: ${conn.connection.host}`);
    } catch {
        loggerService.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
