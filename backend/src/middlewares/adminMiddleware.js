
import crypto from "crypto"
import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';

//middleware check karta hai ki API request karne wala banda admin hai ya nahi.
const requireAdmin = asyncHandler(async (req, res, next) => {
  const expected = process.env.ADMIN_API_KEY;
  const provided = req.get('x-admin-key') || '';

  // expected ->server ki .env file
  //provided->key user postman bhej raha hai

  // server par key hai ya nahi
  if (!expected) {
    throw new ApiError(500, 'ADMIN_API_KEY is not configured on the server');
  }

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);

  console.log('expected:', b.length, b.toString().slice(0, 4), '| provided:', a.length, a.toString().slice(0, 4));
  console.log('headers received:', Object.keys(req.headers));   // <-- yeh nayi line

  const isValid = a.length === b.length && crypto.timingSafeEqual(a, b);

  if (!isValid) {
    throw new ApiError(401, 'Unauthorized');
  }

  next();
});

export default requireAdmin