import { Resend } from 'resend';

export const sendNotificationEmail = async ({ name, email, subject, message }) => {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.EMAIL_USER || 'yk6255713@gmail.com';

  if (!apiKey) {
    console.warn('⚠️ RESEND_API_KEY is not set in environment.');
    return;
  }

  const resend = new Resend(apiKey);

  const html = `
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
  `;

  // Resend delivers over HTTPS (Port 443) — never blocked by Render or cloud firewalls!
  const data = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: recipient,
    replyTo: email,
    subject: `[Portfolio Message] ${subject || 'New message from ' + name}`,
    html: html
  });

  if (data.error) {
    console.error('❌ Resend API Error:', data.error);
    throw new Error(data.error.message);
  }

  console.log('✅ Email delivered successfully via Resend. ID:', data.data?.id);
  return data;
};
