import { Request, Response, NextFunction } from "express";

class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error); // Imprime el error en la consola para propósitos de depuración

  // Manejo de errores específico según tus necesidades
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  // Manejo de otros errores
  return res.status(500).json({ message: "Internal Server Error" });
};
