import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello from the TypeScript router!');
});

router.get('/example', (req: Request, res: Response) => {
  res.send('This is an example route');
});

export default router;
