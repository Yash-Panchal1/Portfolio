import mongoose from "mongoose"

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`MONGODB CONNECTED !! DB HOST :${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR", error)
  }
}

export default connectDb

