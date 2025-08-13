import { Request , Response , NextFunction } from "express";
import { celebrityMail , influencerMail , infoMail } from "../config/mailer";
import CustomError from "../lib/util/CustomError";
import transporter from "../config/mailer";



const handleInfoMail = async (req: Request , res: Response , next: NextFunction) => {
        const { name , business , message } = req.body;
        if(!name || !business || !message) {
            return next(new CustomError("All fields are required" , 400))
        }
        await transporter.sendMail(infoMail({name , business , message}))
        res.status(200).json({message: "Mail sent successfully"})
}


const handleCelebrityMail = async (req: Request , res: Response , next: NextFunction) => {
        const { name , business , event , budget } = req.body;
        if(!name || !business || !event || !budget) {
            return next(new CustomError("All fields are required" , 400))
        }
        await transporter.sendMail(celebrityMail({name , business , event , budget}))
        res.status(200).json({message: "Mail sent successfully"})
}


const handleInfluencerMail = async (req: Request , res: Response , next: NextFunction) => {
        const { name , business , avgBudget , category } = req.body;
        if(!name || !business || !avgBudget || !category) {
            return next(new CustomError("All fields are required" , 400))
        }
        await transporter.sendMail(influencerMail({name , business , avgBudget , category}))
        res.status(200).json({message: "Mail sent successfully"})
}


export { handleInfoMail , handleCelebrityMail , handleInfluencerMail }