import nodemailer from 'nodemailer';
import { CelebrityDataPayload, InfluencerDataPayload, InfoDataPayload } from '../lib/type';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const brandColor = "#1E3A8A";
const accentColor = "#FACC15"; 

const emailBaseStyles = `
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
  padding: 20px;
  color: #333;
`;

const cardStyles = `
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  max-width: 600px;
  margin: auto;
`;

const headingStyles = `
  color: ${brandColor};
  font-size: 20px;
  margin-bottom: 12px;
  border-bottom: 2px solid ${accentColor};
  padding-bottom: 4px;
`;

const labelStyles = `
  font-weight: bold;
  color: #555;
`;

const valueStyles = `
  color: #000;
  margin-bottom: 10px;
`;

const headerStyles = `
  background-color: ${brandColor};
  color: white;
  text-align: center;
  padding: 14px 0;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const footerStyles = `
  font-size: 12px;
  text-align: center;
  color: #888;
  margin-top: 20px;
`;

const wrapEmail = (title: string, content: string) => `
  <div style="${emailBaseStyles}">
    <div style="${headerStyles}">
      DK Next
    </div>
    <div style="${cardStyles}">
      <h2 style="${headingStyles}">${title}</h2>
      ${content}
    </div>
    <p style="${footerStyles}">
      This message was sent from the DK Next website. Please do not reply directly to this email.
    </p>
  </div>
`;

export const infoMail = (data: InfoDataPayload) => ({
  from: `"${data.name}" <${process.env.USER_EMAIL}>`,
  to: process.env.USER_EMAIL,
  subject: `Business Inquiry from ${data.name}`,
  html: wrapEmail(
    "📩 Business Inquiry",
    `
      <p><span style="${labelStyles}">Name:</span> <span style="${valueStyles}">${data.name}</span></p>
      <p><span style="${labelStyles}">Business:</span> <span style="${valueStyles}">${data.business}</span></p>
      <p><span style="${labelStyles}">Message:</span></p>
      <p style="${valueStyles}">${data.message}</p>
    `
  ),
});

export const influencerMail = (data: InfluencerDataPayload) => ({
  from: `"${data.name}" <${process.env.USER_EMAIL}>`,
  to: process.env.USER_EMAIL,
  subject: `Influencer Request from ${data.name}`,
  html: wrapEmail(
    "📢 Influencer Request",
    `
      <p><span style="${labelStyles}">Name:</span> <span style="${valueStyles}">${data.name}</span></p>
      <p><span style="${labelStyles}">Business:</span> <span style="${valueStyles}">${data.business}</span></p>
      <p><span style="${labelStyles}">Average Budget:</span> <span style="${valueStyles}">₹${data.avgBudget.toLocaleString()}</span></p>
      <p><span style="${labelStyles}">Category:</span> <span style="${valueStyles}">${data.category}</span></p>
    `
  ),
});

export const celebrityMail = (data: CelebrityDataPayload) => ({
  from: `"${data.name}" <${process.env.USER_EMAIL}>`,
  to: process.env.USER_EMAIL,
  subject: `Celebrity Booking from ${data.name}`,
  html: wrapEmail(
    "🌟 Celebrity Booking",
    `
      <p><span style="${labelStyles}">Name:</span> <span style="${valueStyles}">${data.name}</span></p>
      <p><span style="${labelStyles}">Business:</span> <span style="${valueStyles}">${data.business}</span></p>
      <p><span style="${labelStyles}">Event:</span> <span style="${valueStyles}">${data.event}</span></p>
      <p><span style="${labelStyles}">Budget:</span> <span style="${valueStyles}">₹${data.budget.toLocaleString()}</span></p>
    `
  ),
});

export default transporter;
