import express, { NextFunction, Request, Response } from 'express';
import { notFound } from './app/libs/notFound';
import { globalErrorHandler } from './app/libs/globalErrorHandler';
// import httpStatus from 'http-status';
const app = express();

app.get('/api/v1', (req: Request, res: Response, next: NextFunction) => {
  try {
    res
      .status(200)
      .json({ success: true, message: 'Welcome to Junk Genie App api' });
  } catch (error) {
    next(error);
  }
});

//catch all routs
app.use('*', notFound);

//global error handler
app.use(globalErrorHandler);

export default app;
