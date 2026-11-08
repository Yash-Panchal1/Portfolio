import "dotenv/config"
import app from "./app.js"
import connectDb from "./db/index.js"

const PORT = process.env.PORT || 8000

// Bind port immediately so Render health checks pass without delay
app.listen(PORT, () => {
    console.log(`server is up and running on port: ${PORT}`);
})

connectDb()
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.log("MONGO DB CONNECTION ERROR", error)
})