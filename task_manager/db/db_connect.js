import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const db_name = "tasks";

const connectionStrig = process.env.TASK_MANG_MONGODB_URI;
<<<<<<< HEAD

=======
console.log(connectionStrig);
>>>>>>> 059b94a033f1bcd8f69ec125bd8a5110d57c8545

const connectDB = async () => {
  try {
    const dbConnectInstance = await mongoose.connect(`${connectionStrig}`, {});
    console.log(
      `\n mongodb connected! BD_Host: ${dbConnectInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection error", error);
    process.exit(1);
  }
};

export { connectDB };
