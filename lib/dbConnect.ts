import mongoose from "mongoose";

async function dbConnect() { // Connect to the database using mongoose when the server starts up 
    try {
        await mongoose.connect(process.env.MONGODB_URI!)
    } catch (error) {
        throw new Error(' Connection to database failed!')
    }
}

export default dbConnect;