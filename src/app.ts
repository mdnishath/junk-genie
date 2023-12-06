import express, { NextFunction, Request, Response } from 'express';
import { notFound } from './app/middlewares/notFound';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import cors from 'cors';
const app = express();

//parse
app.use(express.json());
app.use(cors());

app.get('/api/v1', (req: Request, res: Response, next: NextFunction) => {
  try {
    res
      .status(200)
      .json({ success: true, message: 'Welcome to Junk Genie App api' });
  } catch (error) {
    next(error);
  }
});

//user routes
app.use('/api/v1', router);

//catch all routs
app.use('*', notFound);

//global error handler
app.use(globalErrorHandler);

export default app;
