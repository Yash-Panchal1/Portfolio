import { ApiError } from "../utils/ApiError.js"

const notfound = (req,res,next) =>{
    next(new ApiError(404,`NOT found:${req.method} ${req.originalUrl}`))
}
export default notfound