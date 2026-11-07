import mongoose from "mongoose"
   import dns from 'dns';
   dns.setServers(['8.8.8.8', '1.1.1.1']);
const connectDb = async()=>{
  try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
   console.log(`MONGODB CONNECTED !! DB HOST :${connectionInstance.connection.host}`)
  } catch (error) {
      console.log("MONGODB CONNECTION ERROR",error)
      process.exit(1)
  }
}

export default connectDb

