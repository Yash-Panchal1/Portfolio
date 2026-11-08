import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import requireAdmin from '../middlewares/adminMiddleware.js';

const router = Router();

// Ek IP se 15 minute mein sirf 5 messages
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, statusCode: 429, message: 'Too many messages. Try again later.' },
});

// Public ping check
router.get('/ping', (req, res) => res.status(200).json({ status: 'ok' }));

// /api/contact
router
  .route('/')
  .post(contactLimiter, sendMessage)  // public
  .get(requireAdmin, getMessages);    // admin

export default router;