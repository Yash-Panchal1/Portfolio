import "dotenv/config"
import app from "./app.js"
import connectDb from "./db/index.js"
import { error } from "console"

const PORT = process.env.PORT || 8000

connectDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is up and running on port: ${PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGO DB CONNECTION ERROR",error)
})