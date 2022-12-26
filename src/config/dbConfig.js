import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("You 🤘Rock🤘 you're connecting to your MONGO DB ")
} catch (error) {
    console.log("Error trying to connect to the MONGO DB 😭 : " + error)
}