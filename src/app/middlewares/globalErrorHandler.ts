/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
// import httpStatus from 'http-status';

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || 'error';
  const message = error.message || 'Something went wrong';
  res.status(statusCode).json({
    status,
    message,
  });
};
