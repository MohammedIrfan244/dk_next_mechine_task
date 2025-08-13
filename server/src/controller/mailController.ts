import { Request , Response , NextFunction } from "express";
import { celebrityMail , influencerMail , infoMail } from "../config/mailer";
import CustomError from "../lib/util/CustomError";
import transporter from "../config/mailer";



const handleInfoMail = async (req: Request , res: Response , next: NextFunction) => {
        const { name , business , message , email } = req.body;
        if(!name || !business || !message || !email) {
            return next(new CustomError("All fields are required" , 400))
        }
        await transporter.sendMail(infoMail({name , business , message , email}))
        res.status(200).json({message: "Mail sent successfully"})
}


const handleCelebrityMail = async (req: Request , res: Response , next: NextFunction) => {
        const { name , business , event , budget , email} = req.body;
        if(!name || !business || !event || !budget || !email) {
            return next(new CustomError("All fields are required" , 400))
        }
        await transporter.sendMail(celebrityMail({name , business , event , budget ,email}))
        res.status(200).json({message: "Mail sent successfully"})
}


const handleInfluencerMail = async (req: Request , res: Response , next: NextFunction) => {
        const { name , business , avgBudget , category , email} = req.body;
        if(!name || !business || !avgBudget || !category || !email) {
            return next(new CustomError("All fields are required" , 400))
        }
        await transporter.sendMail(influencerMail({name , business , avgBudget , category, email}))
        res.status(200).json({message: "Mail sent successfully"})
}


export { handleInfoMail , handleCelebrityMail , handleInfluencerMail }