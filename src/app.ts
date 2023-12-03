import express, { Request, Response } from 'express';
import { notFound } from './app/libs/notFound';
// import httpStatus from 'http-status';
const app = express();

app.get('/api/v1', (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: 'Welcome to Junk Genie App api' });
});

//catch all routs
app.all('*', notFound);

export default app;
