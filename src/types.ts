export interface Product {
  id: string
  name: string
  brandId?: string
}

export interface Category {
  id: string
  name: string
}

export type Environment = 'local' | 'dev' | 'prd';

export interface Dao<T, U> {
  list: (where: U) => Promise<T[]>
}

export interface Repository {
}