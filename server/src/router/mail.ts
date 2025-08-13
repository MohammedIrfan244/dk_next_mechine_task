import express from "express";
import tryCatch from "../lib/util/tryCatch";
import { handleInfoMail , handleCelebrityMail , handleInfluencerMail } from "../controller/mailController";


const router = express.Router();

router
.post("/celebrity" , tryCatch(handleCelebrityMail))
.post("/influencer" , tryCatch(handleInfluencerMail))
.post("/info" , tryCatch(handleInfoMail))


export default router