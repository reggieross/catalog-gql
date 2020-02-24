export interface Product {
  id: string
  name: string
  sale: boolean
  brandId: string
}

export interface Category {
  id: string
  name: string
}

export type Environment = 'local' | 'dev' | 'prd';