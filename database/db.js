import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = async (URL) => {
  try {
    const URL =
      "mongodb+srv://pawarvedu004:Vedu7261@cluster0.mn8k7jm.mongodb.net/notesharing?retryWrites=true&w=majority";
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      "Database local Connected Succesfully. " + URL
    );
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
export default connection;
