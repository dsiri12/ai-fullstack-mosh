import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.send('hi there');
});

router.get('/api/v1/hello', (req: Request, res: Response) => {
   res.send({ message: 'Hello from the server!' });
});

router.post('/api/v1/chat', chatController.sendMessage);

export default router;
