import { Request, Response, NextFunction } from 'express';
import { AuthenticationClient } from '../client/AuthenticationClient';
import { CookieMonster } from '../client/CookieClient';
import {ENV} from "../env";

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = CookieMonster.get(req, 'access_token');
  console.log(token);
  const validation = await AuthenticationClient.validateToken(token);
  if (!validation.valid && ENV.ENVIRONMENT !== 'local') {
    res
      .status(401)
      .send({ message: 'You must be logged in to use this service' });
  } else {
    next();
  }
};
