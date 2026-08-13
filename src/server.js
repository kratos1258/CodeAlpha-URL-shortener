import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Initialize server
const startServer = async () => {
  try {
    // 1. Connect to Database
    await connectDB();
    
    // 2. Start listening
    app.listen(PORT, () => {
      console.log(`>>>>>> Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
