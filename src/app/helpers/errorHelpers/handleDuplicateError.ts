import mongoose from 'mongoose';
import { TErrorIssue, TErrorResponse } from '../../interface/TErrorResponse';

const handlerDuplicateError = (err: mongoose.Error.ValidationError): TErrorResponse => {
  const regex = /\{[^{}]*\}/;
  // const regex = /"(.*?)"/;
  // const regex = /\{([^{}]*)\}/;
  const matches = err.message.match(regex);
  // console.log(err, err.message);

  const issues: TErrorIssue[] = [
    {
      path: '',
      message: `Duplicate value for ${matches![0].replace(/\{|\}/g, '')}`,
      // message: err?.message,
    },
  ];

  return {
    statusCode: 409,
    status: 'error',
    message: 'Duplicate Error',
    issues,
  };
};

export default handlerDuplicateError;
