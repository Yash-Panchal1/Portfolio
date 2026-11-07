import nodemailer from 'nodemailer';
import dns from 'dns';

// Force DNS lookup to always resolve IPv4 addresses
dns.setDefaultResultOrder?.('ipv4first');

export const sendNotificationEmail = async ({ name, email, subject, message }) => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.warn('⚠️ EMAIL_USER or EMAIL_PASS not set in .env. Email notification skipped.');
    return;
  }

  // Bulletproof transport for cloud servers (Render/Linux)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // TLS via port 587 (universal on cloud providers)
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${emailUser}>`,
    to: emailUser,
    replyTo: email,
    subject: `[Portfolio Message] ${subject || 'New message from ' + name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e1e4e8; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #1e5faf, #2a7bd4); color: white; padding: 18px 24px;">
            <h2 style="margin: 0; font-size: 1.25rem;">📬 New Message via Portfolio</h2>
            <p style="margin: 4px 0 0; font-size: 0.85rem; opacity: 0.9;">Windows XP Contact Form</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #555; width: 80px; font-weight: bold;">From:</td>
                <td style="padding: 8px 0; color: #111;">${name} (<a href="mailto:${email}" style="color: #1e5faf;">${email}</a>)</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #555; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0; color: #111;">${subject || 'No Subject'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #555; font-weight: bold;">Received:</td>
                <td style="padding: 8px 0; color: #777; font-size: 0.85rem;">${new Date().toLocaleString()}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border-left: 4px solid #1e5faf; padding: 14px 18px; border-radius: 4px; margin-top: 10px;">
              <p style="margin: 0; color: #222; font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #edf2f7; font-size: 0.82rem; color: #718096;">
              💡 <em>Tip: You can reply directly to this email to respond to ${name}.</em>
            </div>
          </div>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
