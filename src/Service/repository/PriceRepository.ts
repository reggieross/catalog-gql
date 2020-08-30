import { Price, Repository } from '../../types';
import { BrandDao } from './dao/BrandDao';
import { PriceDao } from './dao/PriceDao';

export interface PriceRepository extends Repository {
  getPriceForBrand: (productId: string) => Promise<Price[]>;
}

const getPriceForBrand = async (productId: string) => {
  const filters = { productIds: [productId] };
  return PriceDao.list({ filters });
};

export const PriceRepository: PriceRepository = {
  getPriceForBrand,
};
