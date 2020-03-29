import { Request, Response, NextFunction } from 'express';
import { AuthenticationClient } from '../client/AuthenticationClient';
import { parse } from 'cookie';

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = parse(req.headers.cookie)['accessToken'];
  console.log(token)
  const validation = await AuthenticationClient.validateToken(token);
  if (!validation.valid) {
    res
      .status(401)
      .send({ message: 'You must be logged in to use this service' });
  } else {
    next();
  }
};
