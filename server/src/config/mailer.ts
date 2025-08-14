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
const successColor = "#059669";

const emailBaseStyles = `
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  padding: 20px;
  color: #334155;
  line-height: 1.6;
`;

const cardStyles = `
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  max-width: 600px;
  margin: 20px auto;
  border-top: 4px solid ${brandColor};
`;

const headingStyles = `
  color: ${brandColor};
  font-size: 22px;
  margin-bottom: 20px;
  border-bottom: 2px solid ${accentColor};
  padding-bottom: 8px;
  font-weight: 600;
`;

const labelStyles = `
  font-weight: 600;
  color: #475569;
  display: inline-block;
  min-width: 120px;
`;

const valueStyles = `
  color: #1e293b;
  margin-bottom: 12px;
  background-color: #f1f5f9;
  padding: 8px 12px;
  border-radius: 6px;
  border-left: 3px solid ${accentColor};
`;

const messageStyles = `
  color: #1e293b;
  background-color: #f8fafc;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid ${brandColor};
  font-style: italic;
  margin: 15px 0;
`;

const headerStyles = `
  background: linear-gradient(135deg, ${brandColor} 0%, #1e40af 100%);
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const footerStyles = `
  font-size: 13px;
  text-align: center;
  color: #64748b;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
`;

const successBadgeStyles = `
  background-color: ${successColor};
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const wrapEmail = (title: string, content: string, isClient: boolean = false) => `
  <div style="${emailBaseStyles}">
    <div style="${headerStyles}">
      DK Next
    </div>
    <div style="${cardStyles}">
      ${isClient ? `<div style="text-align: center; margin-bottom: 20px;"><span style="${successBadgeStyles}">✓ Request Received</span></div>` : ''}
      <h2 style="${headingStyles}">${title}</h2>
      ${content}
    </div>
    <p style="${footerStyles}">
      ${isClient ? 
        'Thank you for choosing DK Next. We appreciate your interest and will respond promptly.' : 
        'This inquiry was submitted through the DK Next website contact form.'
      }
      <br>
      <strong>DK Next</strong> - Connecting Brands with Influence
    </p>
  </div>
`;

// ad
export const infoMailAdmin = (data: InfoDataPayload) => ({
  from: `"DK Next Contact Form" <${process.env.USER_EMAIL}>`,
  to: process.env.USER_EMAIL,
  subject: `💼 New Business Inquiry from ${data.name}`,
  html: wrapEmail(
    "📩 Business Inquiry Received",
    `
      <p><span style="${labelStyles}">Contact Name:</span></p>
      <div style="${valueStyles}">${data.name}</div>
      <p><span style="${labelStyles}">Email Address:</span></p>
      <div style="${valueStyles}"><a href="mailto:${data.email}" style="color: ${brandColor}; text-decoration: none;">${data.email}</a></div>
      <p><span style="${labelStyles}">Business/Company:</span></p>
      <div style="${valueStyles}">${data.business}</div>
      <p><span style="${labelStyles}">Message:</span></p>
      <div style="${messageStyles}">${data.message}</div>
      <div style="margin-top: 25px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid ${accentColor};">
        <strong style="color: #92400e;">📋 Action Required:</strong> Please respond to this inquiry within 24 hours to maintain our excellent service standards.
      </div>
    `
  ),
});

export const influencerMailAdmin = (data: InfluencerDataPayload) => ({
  from: `"DK Next Influencer Portal" <${process.env.USER_EMAIL}>`,
  to: process.env.USER_EMAIL,
  subject: `🎯 New Influencer Marketing Request from ${data.name}`,
  html: wrapEmail(
    "📢 Influencer Marketing Request",
    `
      <p><span style="${labelStyles}">Contact Name:</span></p>
      <div style="${valueStyles}">${data.name}</div>
      <p><span style="${labelStyles}">Email Address:</span></p>
      <div style="${valueStyles}"><a href="mailto:${data.email}" style="color: ${brandColor}; text-decoration: none;">${data.email}</a></div>
      <p><span style="${labelStyles}">Business/Company:</span></p>
      <div style="${valueStyles}">${data.business}</div>
      <p><span style="${labelStyles}">Campaign Budget:</span></p>
      <div style="${valueStyles}">₹${data.avgBudget.toLocaleString('en-IN')} (Average)</div>
      <p><span style="${labelStyles}">Target Category:</span></p>
      <div style="${valueStyles}">${data.category}</div>
      <div style="margin-top: 25px; padding: 15px; background-color: #dbeafe; border-radius: 8px; border-left: 4px solid ${brandColor};">
        <strong style="color: #1e40af;">💡 Opportunity:</strong> High-value influencer marketing campaign opportunity. Review our influencer database and prepare suitable recommendations.
      </div>
    `
  ),
});

export const celebrityMailAdmin = (data: CelebrityDataPayload) => ({
  from: `"DK Next Celebrity Bookings" <${process.env.USER_EMAIL}>`,
  to: process.env.USER_EMAIL,
  subject: `⭐ Premium Celebrity Booking Request from ${data.name}`,
  html: wrapEmail(
    "🌟 Celebrity Booking Request",
    `
      <p><span style="${labelStyles}">Contact Name:</span></p>
      <div style="${valueStyles}">${data.name}</div>
      <p><span style="${labelStyles}">Email Address:</span></p>
      <div style="${valueStyles}"><a href="mailto:${data.email}" style="color: ${brandColor}; text-decoration: none;">${data.email}</a></div>
      <p><span style="${labelStyles}">Business/Company:</span></p>
      <div style="${valueStyles}">${data.business}</div>
      <p><span style="${labelStyles}">Event Type:</span></p>
      <div style="${valueStyles}">${data.event}</div>
      <p><span style="${labelStyles}">Event Budget:</span></p>
      <div style="${valueStyles}">₹${data.budget.toLocaleString('en-IN')}</div>
      <div style="margin-top: 25px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid ${accentColor};">
        <strong style="color: #92400e;">🎭 Priority Request:</strong> Premium celebrity booking inquiry. Check availability and prepare celebrity options matching the budget and event requirements.
      </div>
    `
  ),
});

// cl
export const infoMailClient = (data: InfoDataPayload) => ({
  from: `"DK Next Team" <${process.env.USER_EMAIL}>`,
  to: data.email,
  subject: `✓ Your Business Inquiry Has Been Received - DK Next`,
  html: wrapEmail(
    "🎉 Thank You for Reaching Out!",
    `
      <p>Dear <strong>${data.name}</strong>,</p>
      <p>Thank you for contacting <strong>DK Next</strong> regarding your business needs. We have successfully received your inquiry and are excited to learn more about <strong>${data.business}</strong>.</p>
      <div style="${messageStyles}">
        <strong>📝 Your Message:</strong><br>
        "${data.message}"
      </div>
      <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid ${successColor}; margin: 20px 0;">
        <h3 style="color: ${successColor}; margin: 0 0 10px 0;">✅ What Happens Next?</h3>
        <ul style="color: #166534; margin: 0; padding-left: 20px;">
          <li>Our team will review your requirements within 24 hours</li>
          <li>We'll prepare a customized proposal tailored to your needs</li>
          <li>A dedicated account manager will contact you shortly</li>
          <li>We'll schedule a consultation call at your convenience</li>
        </ul>
      </div>
      <p>We appreciate your interest in partnering with us and look forward to creating something amazing together!</p>
      <p style="margin-top: 25px;">
        <strong>Best regards,</strong><br>
        The DK Next Team
      </p>
    `,
    true
  ),
});

export const influencerMailClient = (data: InfluencerDataPayload) => ({
  from: `"DK Next Influencer Team" <${process.env.USER_EMAIL}>`,
  to: data.email,
  subject: `✓ Your Influencer Marketing Request Confirmed - DK Next`,
  html: wrapEmail(
    "🚀 Ready to Amplify Your Brand!",
    `
      <p>Dear <strong>${data.name}</strong>,</p>
      <p>Excellent choice! We've successfully received your influencer marketing request for <strong>${data.business}</strong> and we're thrilled to help you connect with the perfect content creators.</p>
      <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: ${brandColor}; margin: 0 0 15px 0;">📊 Your Campaign Details:</h3>
        <p><span style="${labelStyles}">Target Category:</span> <strong>${data.category}</strong></p>
        <p><span style="${labelStyles}">Budget Range:</span> <strong>₹${data.avgBudget.toLocaleString('en-IN')}</strong></p>
      </div>
      <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid ${successColor}; margin: 20px 0;">
        <h3 style="color: ${successColor}; margin: 0 0 10px 0;">🎯 Our Process:</h3>
        <ul style="color: #166534; margin: 0; padding-left: 20px;">
          <li><strong>Influencer Matching:</strong> We'll curate a list of perfect influencers for your brand</li>
          <li><strong>Strategy Development:</strong> Custom campaign strategies tailored to your goals</li>
          <li><strong>Performance Tracking:</strong> Real-time analytics and ROI measurement</li>
          <li><strong>End-to-End Management:</strong> From outreach to campaign completion</li>
        </ul>
      </div>
      <p>Our influencer marketing specialists will contact you within the next 24 hours to discuss your vision and create a winning strategy!</p>
      <p style="margin-top: 25px;">
        <strong>Ready to go viral,</strong><br>
        The DK Next Influencer Team
      </p>
    `,
    true
  ),
});

export const celebrityMailClient = (data: CelebrityDataPayload) => ({
  from: `"DK Next Celebrity Division" <${process.env.USER_EMAIL}>`,
  to: data.email,
  subject: `⭐ Your Celebrity Booking Request is Being Processed - DK Next`,
  html: wrapEmail(
    "🌟 Premium Celebrity Experience Awaits!",
    `
      <p>Dear <strong>${data.name}</strong>,</p>
      <p>Thank you for choosing <strong>DK Next</strong> for your celebrity booking needs! We've received your request for <strong>${data.business}</strong> and our celebrity relations team is already working on your requirements.</p>
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #92400e; margin: 0 0 15px 0;">🎭 Event Details:</h3>
        <p><span style="${labelStyles}">Event Type:</span> <strong>${data.event}</strong></p>
        <p><span style="${labelStyles}">Budget:</span> <strong>₹${data.budget.toLocaleString('en-IN')}</strong></p>
      </div>
      <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid ${successColor}; margin: 20px 0;">
        <h3 style="color: ${successColor}; margin: 0 0 10px 0;">✨ What We're Doing:</h3>
        <ul style="color: #166534; margin: 0; padding-left: 20px;">
          <li><strong>Celebrity Availability Check:</strong> Reviewing schedules of suitable stars</li>
          <li><strong>Custom Proposals:</strong> Preparing tailored options within your budget</li>
          <li><strong>Logistics Planning:</strong> Coordinating all event requirements</li>
          <li><strong>Contract Management:</strong> Handling all legal and booking formalities</li>
        </ul>
      </div>
      <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
        <strong style="color: ${brandColor};">🎪 Premium Service Guarantee:</strong><br>
        Our celebrity booking specialists will present you with exclusive options within 48 hours!
      </div>
      <p>Get ready for an unforgettable event that will leave your audience starstruck!</p>
      <p style="margin-top: 25px;">
        <strong>Creating magical moments,</strong><br>
        The DK Next Celebrity Team
      </p>
    `,
    true
  ),
});

export default transporter;