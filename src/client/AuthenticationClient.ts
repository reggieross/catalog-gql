import { ENV } from '../env';
import { HttpClient } from './HttpClient';
import { Role } from '../GraphQL/generated/resolvers';
import { intersection } from 'lodash';

const validateToken = async (token: string) => {
  if (!token) {
    return { valid: false };
  }
  const res = await HttpClient.get(
    `${ENV.AUTHENTICATION_HOST}/token/validate`,
    {
      cookie: { access_token: token },
    }
  );

  return res.responseObj as { valid: boolean };
};

const isValidForRoles = (token: string, requiredRoles: Role[]): boolean => {
  const userRoles = decodeToken(token).roles;
  return requiredRoles.length === 0
    ? true
    : intersection(userRoles, requiredRoles).length !== 0;
};

const decodeToken = (token: string): { roles: Role[] } => {
  //TODO decode token
  return { roles: [] };
};

export const AuthenticationClient = { validateToken, isValidForRoles };
