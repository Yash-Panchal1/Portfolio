import {Message} from '../models/Message.model.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {sendNotificationEmail} from '../utils/mailer.js';

// POST /api/contact
export const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    throw new ApiError(400, 'Name, email and message are required');
  }

  // 1. Save to MongoDB
  await Message.create({ name, email, subject, message });

  // 2. Respond immediately to user so frontend never gets stuck or times out!
  res.status(201).json(new ApiResponse(201, {}, 'Message sent. Thanks for reaching out!'));

  // 3. Send email asynchronously in the background
  sendNotificationEmail({ name, email, subject, message }).catch(err => {
    console.error('❌ Background email sending error:', err.message);
  });
});

// GET /api/contact  (admin)
export const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, messages, 'Messages fetched successfully'));
});