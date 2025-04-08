import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas for Unit 7 - Lesson 4 (deployment)
    //const conn = await mongoose.connect('mongodb://localhost:27017/books');
    const conn = await mongoose.connect('mongodb+srv://carlos:wg76ExR3N8xKe77Z@cluster0.gysi0.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0');

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } 
  catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;
