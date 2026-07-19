import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller';
import { prisma } from './db/prisma';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.send('hi there');
});

router.get('/api/v1/hello', (req: Request, res: Response) => {
   res.send({ message: 'Hello from the server!' });
});

router.post('/api/v1/chat', chatController.sendMessage);

router.get(
   '/api/v1/products/:id/reviews',
   async (req: Request, res: Response) => {
      const productId = Number(req.params.id);

      const reviews = await prisma.review.findMany({
         where: { productId },
         orderBy: { createdAt: 'desc' },
      });

      res.json(reviews);
   }
);

export default router;
