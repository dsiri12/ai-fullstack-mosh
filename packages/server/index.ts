import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import { randomUUID } from 'crypto';
const id = randomUUID();
console.log(id);

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

// js arrow function === lambda function in other languages
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
