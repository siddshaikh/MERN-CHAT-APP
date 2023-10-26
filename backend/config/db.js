const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://siddeekshaikh97:zyZVBazM9UmsC7Kc@cluster0.0d6rsmb.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfuly" + connect.connection.host);
  } catch (error) {
    console.log({ err: error.message });
    process.exit();
  }
};

module.exports = connectDb;
