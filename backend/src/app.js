import "dotenv/config"
import express from "express"
import cors from "cors"
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials:true
  })
);

app.use(express.json({limit:"50kb"}))
app.use(express.urlencoded({extended:true,limit:"50kb"}))
app.use(express.static("public"))


import ProjectRoutes from "./routes/project.route.js"
import ContactRoutes from "./routes/contact.route.js"
import notfound from "./middlewares/notFoundMiddleware.js";
import errorHandler from './middlewares/errorMiddleware.js';


 // http://localhost:8000/
 app.use('/api/projects',ProjectRoutes)
 app.use('/api/contact',ContactRoutes)

 app.use(notfound)
 app.use(errorHandler)

export default app