import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('hi there');
})

app.get('/api/v1/hello', (req: Request, res: Response) => {
  res.send({message: 'Hello from the server!'});
})

// js arrow function === lambda function in other languages 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
