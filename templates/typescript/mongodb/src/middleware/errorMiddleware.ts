import { Request, Response, NextFunction } from "express";

interface CustomErrorProps {
  message: string;
  statusCode: number;
}

const errorHandlerMiddleware = async (
  err: CustomErrorProps,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);

  const customError: CustomErrorProps = {
    message: err.message || "Something went wrong",
    statusCode: err.statusCode || 500,
  };

  res.status(customError.statusCode).json({ messsage: customError.message });
};

export default errorHandlerMiddleware;
