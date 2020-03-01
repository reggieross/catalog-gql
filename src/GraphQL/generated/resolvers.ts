import { GraphQLResolveInfo } from 'graphql';
import { Product, Category } from '../../types';
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

export type Category = {
  __typename?: 'Category',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  product: Array<Product>,
};

export type Product = {
  __typename?: 'Product',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  category: Array<Category>,
};

export type ProductFilterInput = {
  categoryIds?: Maybe<Array<Scalars['String']>>,
};

export type ProductFilters = {
  __typename?: 'ProductFilters',
  category: Array<Category>,
};

export type ProductResponse = {
  __typename?: 'ProductResponse',
  products: Array<Product>,
  filters?: Maybe<ProductFilters>,
};


export type ProductResponseProductsArgs = {
  input?: Maybe<ProductFilterInput>
};

export type Query = {
  __typename?: 'Query',
  getProducts: ProductResponse,
};


export type QueryGetProductsArgs = {
  input?: Maybe<ProductFilterInput>
};


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
  ProductFilterInput: ProductFilterInput,
  String: ResolverTypeWrapper<Scalars['String']>,
  ProductResponse: ResolverTypeWrapper<Omit<ProductResponse, 'products' | 'filters'> & { products: Array<ResolversTypes['Product']>, filters?: Maybe<ResolversTypes['ProductFilters']> }>,
  Product: ResolverTypeWrapper<Product>,
  Category: ResolverTypeWrapper<Category>,
  ProductFilters: ResolverTypeWrapper<Omit<ProductFilters, 'category'> & { category: Array<ResolversTypes['Category']> }>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ProductFilterInput: ProductFilterInput,
  String: Scalars['String'],
  ProductResponse: Omit<ProductResponse, 'products' | 'filters'> & { products: Array<ResolversTypes['Product']>, filters?: Maybe<ResolversTypes['ProductFilters']> },
  Product: Product,
  Category: Category,
  ProductFilters: Omit<ProductFilters, 'category'> & { category: Array<ResolversTypes['Category']> },
  Boolean: Scalars['Boolean'],
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  product?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>,
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  category?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
};

export type ProductFiltersResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductFilters'] = ResolversParentTypes['ProductFilters']> = {
  category?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
};

export type ProductResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductResponse'] = ResolversParentTypes['ProductResponse']> = {
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, ProductResponseProductsArgs>,
  filters?: Resolver<Maybe<ResolversTypes['ProductFilters']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getProducts?: Resolver<ResolversTypes['ProductResponse'], ParentType, ContextType, QueryGetProductsArgs>,
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>,
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
