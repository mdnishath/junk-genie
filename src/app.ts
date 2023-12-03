import express, { Request, Response } from 'express';
// import httpStatus from 'http-status';
const app = express();

app.get('/api/v1', (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: 'Welcome to Junk Genie App api' });
});

export default app;
