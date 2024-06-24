import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js'
import userRouter from './routers/user.router.js'
import dotenv from 'dotenv';
dotenv.config();

import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}));

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log('listening on port' + PORT);
})

