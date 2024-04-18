import { NextFunction, Request, Response } from "express";

export type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export type ErrorHandlerFunction = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => void;