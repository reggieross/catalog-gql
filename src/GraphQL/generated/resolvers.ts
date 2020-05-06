import { GraphQLResolveInfo } from 'graphql';
import { Product, Brand } from '../../types';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};


export type Brand = {
  __typename?: 'Brand',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  product: Array<Product>,
};

export enum Limit {
  Fifty = 'FIFTY',
  OneHundred = 'ONE_HUNDRED',
  FiveHundred = 'FIVE_HUNDRED'
}

export type PaginationInput = {
  limit: Limit,
  page: Scalars['Int'],
};

export type Product = {
  __typename?: 'Product',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  Brand: Array<Brand>,
};

export type ProductFilters = {
  __typename?: 'ProductFilters',
  total?: Maybe<Scalars['Int']>,
  brand: Array<Brand>,
};

export type ProductFiltersInput = {
  brandIds?: Maybe<Array<Scalars['String']>>,
};

export type ProductResponse = {
  __typename?: 'ProductResponse',
  products: Array<Product>,
  filters: ProductFilters,
};


export type ProductResponseProductsArgs = {
  input?: Maybe<ProductsInput>
};

export type ProductsInput = {
  pageInfo?: Maybe<PaginationInput>,
  filters?: Maybe<ProductFiltersInput>,
};

export type Query = {
  __typename?: 'Query',
  catalog: ProductResponse,
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Service = 'SERVICE',
  Unknown = 'UNKNOWN'
}


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  ProductResponse: ResolverTypeWrapper<Omit<ProductResponse, 'products' | 'filters'> & { products: Array<ResolversTypes['Product']>, filters: ResolversTypes['ProductFilters'] }>,
  ProductsInput: ProductsInput,
  PaginationInput: PaginationInput,
  LIMIT: Limit,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  ProductFiltersInput: ProductFiltersInput,
  String: ResolverTypeWrapper<Scalars['String']>,
  Product: ResolverTypeWrapper<Product>,
  Brand: ResolverTypeWrapper<Brand>,
  ProductFilters: ResolverTypeWrapper<Omit<ProductFilters, 'brand'> & { brand: Array<ResolversTypes['Brand']> }>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Role: Role,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ProductResponse: Omit<ProductResponse, 'products' | 'filters'> & { products: Array<ResolversTypes['Product']>, filters: ResolversTypes['ProductFilters'] },
  ProductsInput: ProductsInput,
  PaginationInput: PaginationInput,
  LIMIT: Limit,
  Int: Scalars['Int'],
  ProductFiltersInput: ProductFiltersInput,
  String: Scalars['String'],
  Product: Product,
  Brand: Brand,
  ProductFilters: Omit<ProductFilters, 'brand'> & { brand: Array<ResolversTypes['Brand']> },
  Boolean: Scalars['Boolean'],
  Role: Role,
};

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = {   requires?: Maybe<Maybe<Role>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  product?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>,
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  Brand?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>,
};

export type ProductFiltersResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductFilters'] = ResolversParentTypes['ProductFilters']> = {
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  brand?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>,
};

export type ProductResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductResponse'] = ResolversParentTypes['ProductResponse']> = {
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, ProductResponseProductsArgs>,
  filters?: Resolver<ResolversTypes['ProductFilters'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  catalog?: Resolver<ResolversTypes['ProductResponse'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Brand?: BrandResolvers<ContextType>,
  Product?: ProductResolvers<ContextType>,
  ProductFilters?: ProductFiltersResolvers<ContextType>,
  ProductResponse?: ProductResponseResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;