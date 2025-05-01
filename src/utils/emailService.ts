
import nodemailer from 'nodemailer';

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email@example.com', // Replace with your email
    pass: 'your-password', // Replace with your password or app-specific password
  },
});

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP server connection error:', error);
  } else {
    console.log('SMTP server connection successful');
  }
});

// Email sending function
export const sendEmail = async ({
  to,
  subject,
  text,
  html
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) => {
  try {
    const info = await transporter.sendMail({
      from: '"HackForNepal" <hackathon@example.com>',
      to,
      subject,
      text,
      html: html || text,
    });
    
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Send registration confirmation email
export const sendRegistrationConfirmation = async (email: string, name: string) => {
  const subject = 'HackForNepal Registration Confirmation';
  const text = `
    Hello ${name},
    
    Thank you for registering for HackForNepal! We're excited to have you join us.
    
    We'll be in touch with more information as the hackathon approaches.
    
    Best regards,
    HackForNepal Team
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>HackForNepal Registration Confirmation</h2>
      <p>Hello ${name},</p>
      <p>Thank you for registering for <strong>HackForNepal</strong>! We're excited to have you join us.</p>
      <p>We'll be in touch with more information as the hackathon approaches.</p>
      <p>Best regards,<br>HackForNepal Team</p>
    </div>
  `;
  
  return sendEmail({ to: email, subject, text, html });
};

// Export other email functions as needed
export default {
  sendEmail,
  sendRegistrationConfirmation
};
