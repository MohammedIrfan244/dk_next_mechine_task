import { Request, Response, NextFunction } from "express";
import { 
  celebrityMailAdmin, 
  influencerMailAdmin, 
  infoMailAdmin,
  celebrityMailClient,
  influencerMailClient,
  infoMailClient
} from "../config/mailer";
import CustomError from "../lib/util/CustomError";
import transporter from "../config/mailer";

const handleInfoMail = async (req: Request, res: Response, next: NextFunction) => {
  const { name, business, message, email } = req.body;
  if (!name || !business || !message || !email) {
    return next(new CustomError("All fields are required", 400));
  }
  await Promise.all([
    transporter.sendMail(infoMailAdmin({ name, business, message, email })),
    transporter.sendMail(infoMailClient({ name, business, message, email }))
  ]);
  res.status(200).json({ 
    message: "Your inquiry has been sent successfully! We'll get back to you soon.",
    success: true 
  });
};

const handleCelebrityMail = async (req: Request, res: Response, next: NextFunction) => {
  const { name, business, event, budget, email } = req.body;
  
  if (!name || !business || !event || !budget || !email) {
    return next(new CustomError("All fields are required", 400));
  }
  if (isNaN(budget) || budget <= 0) {
    return next(new CustomError("Please provide a valid budget amount", 400));
  }
  await Promise.all([
    transporter.sendMail(celebrityMailAdmin({ name, business, event, budget, email })),
    transporter.sendMail(celebrityMailClient({ name, business, event, budget, email }))
  ]);
  res.status(200).json({ 
    message: "Your celebrity booking request has been submitted successfully! Our team will contact you within 48 hours.",
    success: true 
  });
};

const handleInfluencerMail = async (req: Request, res: Response, next: NextFunction) => {
  const { name, business, avgBudget, category, email } = req.body;  
  if (!name || !business || !avgBudget || !category || !email) {
    return next(new CustomError("All fields are required", 400));
  }
  if (isNaN(avgBudget) || avgBudget <= 0) {
    return next(new CustomError("Please provide a valid budget amount", 400));
  }
  await Promise.all([
    transporter.sendMail(influencerMailAdmin({ name, business, avgBudget, category, email })),
    transporter.sendMail(influencerMailClient({ name, business, avgBudget, category, email }))
  ]);
  res.status(200).json({ 
    message: "Your influencer marketing request has been received! We'll match you with perfect influencers within 24 hours.",
    success: true 
  });
};

export { handleInfoMail, handleCelebrityMail, handleInfluencerMail };