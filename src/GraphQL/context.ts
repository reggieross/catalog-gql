import { productDataLoader } from './dataloaders/productDataLoader';
import { categoryDataLoader } from './dataloaders/categoryDataLoader';
import { CatalogService } from '../Service/CatalogService';
import { CookieMonster } from '../client/CookieClient';

export type Context = ReturnType<typeof context>;

export const context = ({ req }) => {
  const token = CookieMonster.get(req, 'access_token');

  //TODO use middleWare to add user data to request
  const userInfo = {};
  const catalogService = new CatalogService(userInfo);

  return {
    token,
    productDataLoader: productDataLoader(token, catalogService),
    categoryDataLoader: categoryDataLoader(token),
    catalogService,
  };
};
