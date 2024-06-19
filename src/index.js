import "./env.js";
import simpleRouter from './routes/simpleRouter.ts';

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', simpleRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});