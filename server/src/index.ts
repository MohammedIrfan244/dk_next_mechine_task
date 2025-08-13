import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mailRoute from './router/mail';
import notFound from './middleware/notFound';
import errorHandler from './middleware/errorHandler';
import { infoLogger } from './lib/helper';

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin:process.env.CLIENT_URL,
  credentials: true
}));

app.use(express.json());

app.use("/api/mail" , mailRoute)


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  infoLogger(`Server is running on port ${PORT}`);
});


