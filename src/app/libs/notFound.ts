import { RequestHandler } from 'express';
import httpStatus from 'http-status';

export const notFound: RequestHandler = (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `Route not found for ${req.originalUrl}`,
  });
};
