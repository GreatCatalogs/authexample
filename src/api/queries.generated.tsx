import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type CatalogFragment = (
  { __typename?: 'Catalog' }
  & Pick<Types.Catalog, 'id' | 'oid' | 'name' | 'title' | 'merchantId' | 'customSubdomain' | 'text2Disclaimer' | 'options' | 'description'>
);

export type ProductFragment = (
  { __typename?: 'Product' }
  & Pick<Types.Product, 'src' | 'additionalImages' | 'sku' | 'category' | 'tags' | 'title' | 'description' | 'url' | 'price' | 'salePrice' | 'options' | 'oid' | 'expired' | 'status'>
);

export type PageFragment = (
  { __typename?: 'Page' }
  & Pick<Types.Page, 'oid' | 'imageSource' | 'imageUrl' | 'pageType' | 'options'>
);

export type FeedFragment = (
  { __typename?: 'Feed' }
  & Pick<Types.Feed, 'oid' | 'feedType' | 'feedMap' | 'productMap' | 'autoUpdate' | 'options' | 'dateModified'>
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & Pick<Types.Catalog, 'id' | 'oid' | 'name'>
  )> }
);

export type VersionFragment = (
  { __typename?: 'Version' }
  & Pick<Types.Version, 'id' | 'oid' | 'name' | 'coverUrl' | 'enableCategoryCatalogs' | 'contactUrl' | 'description' | 'options' | 'versionNo' | 'order'>
);

export type CategoryFragment = (
  { __typename?: 'Category' }
  & Pick<Types.Category, 'id' | 'oid' | 'name' | 'image' | 'options'>
  & { subcategories: Array<(
    { __typename?: 'SubCategory' }
    & Pick<Types.SubCategory, 'id' | 'name' | 'image'>
    & { parent?: Types.Maybe<(
      { __typename?: 'Category' }
      & Pick<Types.Category, 'name'>
    )> }
  )> }
);

export type ProductBySkuQueryVariables = Types.Exact<{
  sku: Types.Scalars['String'];
  catalog: Types.Scalars['UUID'];
}>;


export type ProductBySkuQuery = (
  { __typename?: 'Query' }
  & { products?: Types.Maybe<Array<(
    { __typename?: 'Product' }
    & ProductFragment
  )>> }
);

export type FullCatalogByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type FullCatalogByIdQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & { products: Array<(
      { __typename?: 'Product' }
      & ProductFragment
    )>, categories: Array<(
      { __typename?: 'Category' }
      & { products: Array<(
        { __typename?: 'SubProduct' }
        & Pick<Types.SubProduct, 'sku' | 'sub' | 'main'>
      )> }
      & CategoryFragment
    )>, version?: Types.Maybe<(
      { __typename?: 'Version' }
      & { pages: Array<(
        { __typename?: 'Page' }
        & PageFragment
      )> }
      & VersionFragment
    )>, account?: Types.Maybe<(
      { __typename?: 'Account' }
      & Pick<Types.Account, 'logo' | 'name'>
      & { catalogs: Array<(
        { __typename?: 'Catalog' }
        & Pick<Types.Catalog, 'id' | 'oid' | 'merchantId'>
        & { activeVersion?: Types.Maybe<(
          { __typename?: 'Version' }
          & Pick<Types.Version, 'id' | 'oid' | 'name' | 'coverUrl'>
        )> }
      )> }
    )> }
    & CatalogFragment
  )> }
);

export type FullVersionByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type FullVersionByIdQuery = (
  { __typename?: 'Query' }
  & { version?: Types.Maybe<(
    { __typename?: 'Version' }
    & { pages: Array<(
      { __typename?: 'Page' }
      & PageFragment
    )>, catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & { products: Array<(
        { __typename?: 'Product' }
        & ProductFragment
      )>, categories: Array<(
        { __typename?: 'Category' }
        & { products: Array<(
          { __typename?: 'SubProduct' }
          & Pick<Types.SubProduct, 'sku' | 'sub' | 'main'>
        )> }
        & CategoryFragment
      )>, account?: Types.Maybe<(
        { __typename?: 'Account' }
        & Pick<Types.Account, 'logo' | 'name'>
        & { catalogs: Array<(
          { __typename?: 'Catalog' }
          & Pick<Types.Catalog, 'id' | 'oid' | 'merchantId'>
          & { activeVersion?: Types.Maybe<(
            { __typename?: 'Version' }
            & Pick<Types.Version, 'id' | 'oid' | 'name' | 'coverUrl'>
          )> }
        )> }
      )> }
      & CatalogFragment
    )> }
    & VersionFragment
  )> }
);

export type ActiveAccountsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ActiveAccountsQuery = (
  { __typename?: 'Query' }
  & { accounts?: Types.Maybe<Array<(
    { __typename?: 'Account' }
    & Pick<Types.Account, 'oid' | 'name' | 'email' | 'legacyId' | 'active' | 'logo'>
    & { catalogs: Array<(
      { __typename?: 'Catalog' }
      & { activeVersion?: Types.Maybe<(
        { __typename?: 'Version' }
        & VersionFragment
      )>, versions: Array<(
        { __typename?: 'Version' }
        & VersionFragment
      )> }
      & CatalogFragment
    )> }
  )>> }
);

export type CatalogByOidQueryVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type CatalogByOidQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & { account?: Types.Maybe<(
      { __typename?: 'Account' }
      & Pick<Types.Account, 'logo' | 'name' | 'active'>
    )>, activeVersion?: Types.Maybe<(
      { __typename?: 'Version' }
      & VersionFragment
    )>, versions: Array<(
      { __typename?: 'Version' }
      & VersionFragment
    )> }
    & CatalogFragment
  )> }
);

export type CatalogByVersionIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type CatalogByVersionIdQuery = (
  { __typename?: 'Query' }
  & { version?: Types.Maybe<(
    { __typename?: 'Version' }
    & { catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & { account?: Types.Maybe<(
        { __typename?: 'Account' }
        & Pick<Types.Account, 'logo' | 'name' | 'active'>
      )> }
      & CatalogFragment
    )> }
    & VersionFragment
  )> }
);

export type CatalogByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type CatalogByIdQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & { account?: Types.Maybe<(
      { __typename?: 'Account' }
      & Pick<Types.Account, 'logo' | 'name' | 'active'>
    )>, activeVersion?: Types.Maybe<(
      { __typename?: 'Version' }
      & VersionFragment
    )>, versions: Array<(
      { __typename?: 'Version' }
      & VersionFragment
    )> }
    & CatalogFragment
  )> }
);

export type AllAuthorizedUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllAuthorizedUsersQuery = (
  { __typename?: 'Query' }
  & { authorizedUsers?: Types.Maybe<Array<(
    { __typename?: 'AuthorizedUser' }
    & Pick<Types.AuthorizedUser, 'oid' | 'email'>
    & { accounts: (
      { __typename?: 'AuthorizedUserAuthorizedUsersAccountPartnerAccessesConnection' }
      & Pick<Types.AuthorizedUserAuthorizedUsersAccountPartnerAccessesConnection, 'totalCount'>
    ) }
  )>> }
);

export type UserByEmailQueryVariables = Types.Exact<{
  email: Types.Scalars['String'];
}>;


export type UserByEmailQuery = (
  { __typename?: 'Query' }
  & { user?: Types.Maybe<(
    { __typename?: 'AuthorizedUser' }
    & Pick<Types.AuthorizedUser, 'oid' | 'email'>
    & { allAccounts: Array<(
      { __typename?: 'AuthorizedUserAuthorizedUsersAccountPartnerAccess' }
      & { account?: Types.Maybe<(
        { __typename?: 'Account' }
        & Pick<Types.Account, 'oid' | 'legacyId' | 'name' | 'active'>
        & { catalogs: Array<(
          { __typename?: 'Catalog' }
          & { account?: Types.Maybe<(
            { __typename?: 'Account' }
            & Pick<Types.Account, 'logo' | 'name' | 'active'>
          )>, activeVersion?: Types.Maybe<(
            { __typename?: 'Version' }
            & VersionFragment
          )>, versions: Array<(
            { __typename?: 'Version' }
            & VersionFragment
          )> }
          & CatalogFragment
        )> }
      )> }
    )> }
  )> }
);

export type VersionFullByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type VersionFullByIdQuery = (
  { __typename?: 'Query' }
  & { version?: Types.Maybe<(
    { __typename?: 'Version' }
    & { products: Array<(
      { __typename?: 'ProductsByVersion' }
      & Pick<Types.ProductsByVersion, 'sku'>
    )>, pages: Array<(
      { __typename?: 'Page' }
      & PageFragment
    )>, catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & { products: Array<(
        { __typename?: 'Product' }
        & ProductFragment
      )> }
      & CatalogFragment
    )> }
    & VersionFragment
  )> }
);

export type ProductsByVersionIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type ProductsByVersionIdQuery = (
  { __typename?: 'Query' }
  & { version?: Types.Maybe<(
    { __typename?: 'Version' }
    & Pick<Types.Version, 'id' | 'oid' | 'name'>
    & { catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & Pick<Types.Catalog, 'id' | 'oid'>
      & { products: Array<(
        { __typename?: 'Product' }
        & ProductFragment
      )> }
    )> }
  )> }
);

export type ActiveVersionByCatalogIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type ActiveVersionByCatalogIdQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & { account?: Types.Maybe<(
      { __typename?: 'Account' }
      & Pick<Types.Account, 'logo' | 'name' | 'active'>
    )>, activeVersion?: Types.Maybe<(
      { __typename?: 'Version' }
      & VersionFragment
    )> }
    & CatalogFragment
  )> }
);

export type ProductsCatalogQueryVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type ProductsCatalogQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & Pick<Types.Catalog, 'id' | 'oid'>
    & { products: Array<(
      { __typename?: 'Product' }
      & ProductFragment
    )> }
  )> }
);

export type ProductsByCatalogIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type ProductsByCatalogIdQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & Pick<Types.Catalog, 'id' | 'oid'>
    & { products: Array<(
      { __typename?: 'Product' }
      & ProductFragment
    )> }
  )> }
);

export type CategoriesByCatalogIdQueryVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type CategoriesByCatalogIdQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & Pick<Types.Catalog, 'id' | 'oid'>
    & { categories: Array<(
      { __typename?: 'Category' }
      & CategoryFragment
    )> }
  )> }
);

export type CatalogCategoriesQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type CatalogCategoriesQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & Pick<Types.Catalog, 'id' | 'oid'>
    & { categories: Array<(
      { __typename?: 'Category' }
      & CategoryFragment
    )> }
  )> }
);

export type CategoriesByVersionIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type CategoriesByVersionIdQuery = (
  { __typename?: 'Query' }
  & { version?: Types.Maybe<(
    { __typename?: 'Version' }
    & Pick<Types.Version, 'id' | 'oid' | 'name'>
    & { catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & Pick<Types.Catalog, 'id' | 'oid'>
      & { categories: Array<(
        { __typename?: 'Category' }
        & CategoryFragment
      )> }
    )> }
  )> }
);

export type LeadsAccountQueryVariables = Types.Exact<{
  account: Types.Scalars['UUID'];
}>;


export type LeadsAccountQuery = (
  { __typename?: 'Query' }
  & { leads?: Types.Maybe<Array<(
    { __typename?: 'Lead' }
    & Pick<Types.Lead, 'oid' | 'firstName' | 'lastName' | 'email' | 'phone' | 'catalogId' | 'versionId'>
    & { accountByAccount?: Types.Maybe<(
      { __typename?: 'Account' }
      & Pick<Types.Account, 'name'>
    )> }
  )>> }
);

export type UpdatePageMutationVariables = Types.Exact<{
  id: Types.Scalars['UUID'];
  payload: Types.PagePatch;
}>;


export type UpdatePageMutation = (
  { __typename?: 'Mutation' }
  & { updatePage?: Types.Maybe<(
    { __typename?: 'UpdatePagePayload' }
    & { page?: Types.Maybe<(
      { __typename?: 'Page' }
      & PageFragment
    )> }
  )> }
);

export type CreateCatalogMutationVariables = Types.Exact<{
  catalog: Types.CatalogInput;
}>;


export type CreateCatalogMutation = (
  { __typename?: 'Mutation' }
  & { createCatalog?: Types.Maybe<(
    { __typename?: 'CreateCatalogPayload' }
    & { catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & { account?: Types.Maybe<(
        { __typename?: 'Account' }
        & Pick<Types.Account, 'logo' | 'name' | 'active'>
      )>, activeVersion?: Types.Maybe<(
        { __typename?: 'Version' }
        & VersionFragment
      )>, versions: Array<(
        { __typename?: 'Version' }
        & VersionFragment
      )> }
      & CatalogFragment
    )> }
  )> }
);

export type UpdateCatalogMutationVariables = Types.Exact<{
  catalog: Types.CatalogPatch;
  oid: Types.Scalars['UUID'];
}>;


export type UpdateCatalogMutation = (
  { __typename?: 'Mutation' }
  & { updateCatalog?: Types.Maybe<(
    { __typename?: 'UpdateCatalogPayload' }
    & { catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & { activeVersion?: Types.Maybe<(
        { __typename?: 'Version' }
        & VersionFragment
      )>, versions: Array<(
        { __typename?: 'Version' }
        & VersionFragment
      )> }
      & CatalogFragment
    )> }
  )> }
);

export type DeleteCatalogMutationVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type DeleteCatalogMutation = (
  { __typename?: 'Mutation' }
  & { deleteCatalog?: Types.Maybe<(
    { __typename?: 'DeleteCatalogPayload' }
    & { catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & Pick<Types.Catalog, 'oid' | 'id'>
    )> }
  )> }
);

export type CreateVersionMutationVariables = Types.Exact<{
  version: Types.VersionInput;
}>;


export type CreateVersionMutation = (
  { __typename?: 'Mutation' }
  & { createVersion?: Types.Maybe<(
    { __typename?: 'CreateVersionPayload' }
    & { version?: Types.Maybe<(
      { __typename?: 'Version' }
      & { catalog?: Types.Maybe<(
        { __typename?: 'Catalog' }
        & CatalogFragment
      )> }
      & VersionFragment
    )> }
  )> }
);

export type UpdateVersionMutationVariables = Types.Exact<{
  version: Types.VersionPatch;
  oid: Types.Scalars['UUID'];
}>;


export type UpdateVersionMutation = (
  { __typename?: 'Mutation' }
  & { updateVersion?: Types.Maybe<(
    { __typename?: 'UpdateVersionPayload' }
    & { version?: Types.Maybe<(
      { __typename?: 'Version' }
      & { catalog?: Types.Maybe<(
        { __typename?: 'Catalog' }
        & CatalogFragment
      )> }
      & VersionFragment
    )> }
  )> }
);

export type DeleteVersionMutationVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type DeleteVersionMutation = (
  { __typename?: 'Mutation' }
  & { deleteVersion?: Types.Maybe<(
    { __typename?: 'DeleteVersionPayload' }
    & Pick<Types.DeleteVersionPayload, 'clientMutationId'>
    & { catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & Pick<Types.Catalog, 'oid' | 'id'>
    )> }
  )> }
);

export type CreatePageMutationVariables = Types.Exact<{
  page: Types.PageInput;
}>;


export type CreatePageMutation = (
  { __typename?: 'Mutation' }
  & { createPage?: Types.Maybe<(
    { __typename?: 'CreatePagePayload' }
    & { page?: Types.Maybe<(
      { __typename?: 'Page' }
      & PageFragment
    )> }
  )> }
);

export type DeletePageMutationVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type DeletePageMutation = (
  { __typename?: 'Mutation' }
  & { deletePage?: Types.Maybe<(
    { __typename?: 'DeletePagePayload' }
    & { page?: Types.Maybe<(
      { __typename?: 'Page' }
      & Pick<Types.Page, 'oid'>
    )> }
  )> }
);

export type CatalogFeedsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CatalogFeedsQuery = (
  { __typename?: 'Query' }
  & { feeds?: Types.Maybe<Array<(
    { __typename?: 'Feed' }
    & FeedFragment
  )>> }
);

export type CreateFeedMutationVariables = Types.Exact<{
  feed: Types.FeedInput;
}>;


export type CreateFeedMutation = (
  { __typename?: 'Mutation' }
  & { createFeed?: Types.Maybe<(
    { __typename?: 'CreateFeedPayload' }
    & { feed?: Types.Maybe<(
      { __typename?: 'Feed' }
      & FeedFragment
    )> }
  )> }
);

export type UpdateFeedMutationVariables = Types.Exact<{
  feed: Types.FeedPatch;
  oid: Types.Scalars['UUID'];
}>;


export type UpdateFeedMutation = (
  { __typename?: 'Mutation' }
  & { updateFeed?: Types.Maybe<(
    { __typename?: 'UpdateFeedPayload' }
    & { feed?: Types.Maybe<(
      { __typename?: 'Feed' }
      & FeedFragment
    )> }
  )> }
);

export type DeleteFeedMutationVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type DeleteFeedMutation = (
  { __typename?: 'Mutation' }
  & { deleteFeed?: Types.Maybe<(
    { __typename?: 'DeleteFeedPayload' }
    & { feed?: Types.Maybe<(
      { __typename?: 'Feed' }
      & Pick<Types.Feed, 'oid'>
    )> }
  )> }
);

export type CreateCategoryMutationVariables = Types.Exact<{
  category: Types.CategoryInput;
}>;


export type CreateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createCategory?: Types.Maybe<(
    { __typename?: 'CreateCategoryPayload' }
    & { category?: Types.Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )> }
  )> }
);

export type UpdateCategoryMutationVariables = Types.Exact<{
  category: Types.CategoryPatch;
  oid: Types.Scalars['UUID'];
}>;


export type UpdateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateCategory?: Types.Maybe<(
    { __typename?: 'UpdateCategoryPayload' }
    & { category?: Types.Maybe<(
      { __typename?: 'Category' }
      & CategoryFragment
    )> }
  )> }
);

export type DeleteCategoryMutationVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type DeleteCategoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteCategory?: Types.Maybe<(
    { __typename?: 'DeleteCategoryPayload' }
    & { category?: Types.Maybe<(
      { __typename?: 'Category' }
      & Pick<Types.Category, 'oid' | 'id'>
    )> }
  )> }
);

export type CreateProductMutationVariables = Types.Exact<{
  product: Types.ProductInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Types.Maybe<(
    { __typename?: 'CreateProductPayload' }
    & { product?: Types.Maybe<(
      { __typename?: 'Product' }
      & ProductFragment
    )> }
  )> }
);

export type UpdateProductMutationVariables = Types.Exact<{
  product: Types.ProductPatch;
  oid: Types.Scalars['UUID'];
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Types.Maybe<(
    { __typename?: 'UpdateProductPayload' }
    & { product?: Types.Maybe<(
      { __typename?: 'Product' }
      & ProductFragment
    )> }
  )> }
);

export type DeleteProductMutationVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct?: Types.Maybe<(
    { __typename?: 'DeleteProductPayload' }
    & { product?: Types.Maybe<(
      { __typename?: 'Product' }
      & Pick<Types.Product, 'oid'>
    )> }
  )> }
);

export const CatalogFragmentDoc = gql`
    fragment Catalog on Catalog {
  id
  oid
  name
  title
  merchantId
  customSubdomain
  text2Disclaimer
  options
  description
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  src
  additionalImages
  sku
  category
  tags
  title
  description
  tags
  url
  price
  salePrice
  options
  oid
  expired
  status
}
    `;
export const PageFragmentDoc = gql`
    fragment Page on Page {
  oid
  imageSource
  imageUrl
  pageType
  options
}
    `;
export const FeedFragmentDoc = gql`
    fragment Feed on Feed {
  oid
  feedType
  feedMap
  productMap
  autoUpdate
  options
  dateModified
  catalog: catalogByCatalog {
    id
    oid
    name
  }
}
    `;
export const VersionFragmentDoc = gql`
    fragment Version on Version {
  id
  oid
  name
  coverUrl
  enableCategoryCatalogs
  contactUrl
  description
  options
  versionNo
  order
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  oid
  name
  image
  options
  subcategories: subCategoriesByCategory {
    id
    name
    image
    parent: categoryByCategory {
      name
    }
  }
}
    `;
export const ProductBySkuDocument = gql`
    query ProductBySku($sku: String!, $catalog: UUID!) {
  products(condition: {sku: $sku, catalog: $catalog}) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductBySkuQuery__
 *
 * To run a query within a React component, call `useProductBySkuQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySkuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySkuQuery({
 *   variables: {
 *      sku: // value for 'sku'
 *      catalog: // value for 'catalog'
 *   },
 * });
 */
export function useProductBySkuQuery(baseOptions?: Apollo.QueryHookOptions<ProductBySkuQuery, ProductBySkuQueryVariables>) {
        return Apollo.useQuery<ProductBySkuQuery, ProductBySkuQueryVariables>(ProductBySkuDocument, baseOptions);
      }
export function useProductBySkuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductBySkuQuery, ProductBySkuQueryVariables>) {
          return Apollo.useLazyQuery<ProductBySkuQuery, ProductBySkuQueryVariables>(ProductBySkuDocument, baseOptions);
        }
export type ProductBySkuQueryHookResult = ReturnType<typeof useProductBySkuQuery>;
export type ProductBySkuLazyQueryHookResult = ReturnType<typeof useProductBySkuLazyQuery>;
export type ProductBySkuQueryResult = Apollo.QueryResult<ProductBySkuQuery, ProductBySkuQueryVariables>;
export function refetchProductBySkuQuery(variables?: ProductBySkuQueryVariables) {
      return { query: ProductBySkuDocument, variables: variables }
    }
export const FullCatalogByIdDocument = gql`
    query FullCatalogById($id: Int!) {
  catalog: catalogById(id: $id) {
    ...Catalog
    products: productsByCatalog {
      ...Product
    }
    categories: categoriesByCatalog {
      ...Category
      products: subProductsByMainAndCatalog {
        sku
        sub
        main
      }
    }
    version: versionByActiveVersion {
      ...Version
      pages: pagesByVersion {
        ...Page
      }
    }
    account: accountByAccount {
      logo
      name
      catalogs: catalogsByAccount {
        id
        oid
        merchantId
        activeVersion: versionByActiveVersion {
          id
          oid
          name
          coverUrl
        }
      }
    }
  }
}
    ${CatalogFragmentDoc}
${ProductFragmentDoc}
${CategoryFragmentDoc}
${VersionFragmentDoc}
${PageFragmentDoc}`;

/**
 * __useFullCatalogByIdQuery__
 *
 * To run a query within a React component, call `useFullCatalogByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFullCatalogByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFullCatalogByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFullCatalogByIdQuery(baseOptions?: Apollo.QueryHookOptions<FullCatalogByIdQuery, FullCatalogByIdQueryVariables>) {
        return Apollo.useQuery<FullCatalogByIdQuery, FullCatalogByIdQueryVariables>(FullCatalogByIdDocument, baseOptions);
      }
export function useFullCatalogByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FullCatalogByIdQuery, FullCatalogByIdQueryVariables>) {
          return Apollo.useLazyQuery<FullCatalogByIdQuery, FullCatalogByIdQueryVariables>(FullCatalogByIdDocument, baseOptions);
        }
export type FullCatalogByIdQueryHookResult = ReturnType<typeof useFullCatalogByIdQuery>;
export type FullCatalogByIdLazyQueryHookResult = ReturnType<typeof useFullCatalogByIdLazyQuery>;
export type FullCatalogByIdQueryResult = Apollo.QueryResult<FullCatalogByIdQuery, FullCatalogByIdQueryVariables>;
export function refetchFullCatalogByIdQuery(variables?: FullCatalogByIdQueryVariables) {
      return { query: FullCatalogByIdDocument, variables: variables }
    }
export const FullVersionByIdDocument = gql`
    query FullVersionById($id: Int!) {
  version: versionById(id: $id) {
    ...Version
    pages: pagesByVersion {
      ...Page
    }
    catalog: catalogByCatalog {
      ...Catalog
      products: productsByCatalog {
        ...Product
      }
      categories: categoriesByCatalog {
        ...Category
        products: subProductsByMainAndCatalog {
          sku
          sub
          main
        }
      }
      account: accountByAccount {
        logo
        name
        catalogs: catalogsByAccount {
          id
          oid
          merchantId
          activeVersion: versionByActiveVersion {
            id
            oid
            name
            coverUrl
          }
        }
      }
    }
  }
}
    ${VersionFragmentDoc}
${PageFragmentDoc}
${CatalogFragmentDoc}
${ProductFragmentDoc}
${CategoryFragmentDoc}`;

/**
 * __useFullVersionByIdQuery__
 *
 * To run a query within a React component, call `useFullVersionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFullVersionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFullVersionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFullVersionByIdQuery(baseOptions?: Apollo.QueryHookOptions<FullVersionByIdQuery, FullVersionByIdQueryVariables>) {
        return Apollo.useQuery<FullVersionByIdQuery, FullVersionByIdQueryVariables>(FullVersionByIdDocument, baseOptions);
      }
export function useFullVersionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FullVersionByIdQuery, FullVersionByIdQueryVariables>) {
          return Apollo.useLazyQuery<FullVersionByIdQuery, FullVersionByIdQueryVariables>(FullVersionByIdDocument, baseOptions);
        }
export type FullVersionByIdQueryHookResult = ReturnType<typeof useFullVersionByIdQuery>;
export type FullVersionByIdLazyQueryHookResult = ReturnType<typeof useFullVersionByIdLazyQuery>;
export type FullVersionByIdQueryResult = Apollo.QueryResult<FullVersionByIdQuery, FullVersionByIdQueryVariables>;
export function refetchFullVersionByIdQuery(variables?: FullVersionByIdQueryVariables) {
      return { query: FullVersionByIdDocument, variables: variables }
    }
export const ActiveAccountsDocument = gql`
    query ActiveAccounts {
  accounts(condition: {active: true}, orderBy: NAME_ASC) {
    oid
    name
    email
    legacyId
    active
    logo
    catalogs: catalogsByAccount {
      ...Catalog
      activeVersion: versionByActiveVersion {
        ...Version
      }
      versions: versionsByCatalog(orderBy: ID_DESC, offset: 0) {
        ...Version
      }
    }
  }
}
    ${CatalogFragmentDoc}
${VersionFragmentDoc}`;

/**
 * __useActiveAccountsQuery__
 *
 * To run a query within a React component, call `useActiveAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ActiveAccountsQuery, ActiveAccountsQueryVariables>) {
        return Apollo.useQuery<ActiveAccountsQuery, ActiveAccountsQueryVariables>(ActiveAccountsDocument, baseOptions);
      }
export function useActiveAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveAccountsQuery, ActiveAccountsQueryVariables>) {
          return Apollo.useLazyQuery<ActiveAccountsQuery, ActiveAccountsQueryVariables>(ActiveAccountsDocument, baseOptions);
        }
export type ActiveAccountsQueryHookResult = ReturnType<typeof useActiveAccountsQuery>;
export type ActiveAccountsLazyQueryHookResult = ReturnType<typeof useActiveAccountsLazyQuery>;
export type ActiveAccountsQueryResult = Apollo.QueryResult<ActiveAccountsQuery, ActiveAccountsQueryVariables>;
export function refetchActiveAccountsQuery(variables?: ActiveAccountsQueryVariables) {
      return { query: ActiveAccountsDocument, variables: variables }
    }
export const CatalogByOidDocument = gql`
    query CatalogByOid($oid: UUID!) {
  catalog(oid: $oid) {
    ...Catalog
    account: accountByAccount {
      logo
      name
      active
    }
    activeVersion: versionByActiveVersion {
      ...Version
    }
    versions: versionsByCatalog(orderBy: ID_DESC, offset: 0) {
      ...Version
    }
  }
}
    ${CatalogFragmentDoc}
${VersionFragmentDoc}`;

/**
 * __useCatalogByOidQuery__
 *
 * To run a query within a React component, call `useCatalogByOidQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogByOidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogByOidQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useCatalogByOidQuery(baseOptions?: Apollo.QueryHookOptions<CatalogByOidQuery, CatalogByOidQueryVariables>) {
        return Apollo.useQuery<CatalogByOidQuery, CatalogByOidQueryVariables>(CatalogByOidDocument, baseOptions);
      }
export function useCatalogByOidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogByOidQuery, CatalogByOidQueryVariables>) {
          return Apollo.useLazyQuery<CatalogByOidQuery, CatalogByOidQueryVariables>(CatalogByOidDocument, baseOptions);
        }
export type CatalogByOidQueryHookResult = ReturnType<typeof useCatalogByOidQuery>;
export type CatalogByOidLazyQueryHookResult = ReturnType<typeof useCatalogByOidLazyQuery>;
export type CatalogByOidQueryResult = Apollo.QueryResult<CatalogByOidQuery, CatalogByOidQueryVariables>;
export function refetchCatalogByOidQuery(variables?: CatalogByOidQueryVariables) {
      return { query: CatalogByOidDocument, variables: variables }
    }
export const CatalogByVersionIdDocument = gql`
    query CatalogByVersionId($id: Int!) {
  version: versionById(id: $id) {
    ...Version
    catalog: catalogByCatalog {
      ...Catalog
      account: accountByAccount {
        logo
        name
        active
      }
    }
  }
}
    ${VersionFragmentDoc}
${CatalogFragmentDoc}`;

/**
 * __useCatalogByVersionIdQuery__
 *
 * To run a query within a React component, call `useCatalogByVersionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogByVersionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogByVersionIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCatalogByVersionIdQuery(baseOptions?: Apollo.QueryHookOptions<CatalogByVersionIdQuery, CatalogByVersionIdQueryVariables>) {
        return Apollo.useQuery<CatalogByVersionIdQuery, CatalogByVersionIdQueryVariables>(CatalogByVersionIdDocument, baseOptions);
      }
export function useCatalogByVersionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogByVersionIdQuery, CatalogByVersionIdQueryVariables>) {
          return Apollo.useLazyQuery<CatalogByVersionIdQuery, CatalogByVersionIdQueryVariables>(CatalogByVersionIdDocument, baseOptions);
        }
export type CatalogByVersionIdQueryHookResult = ReturnType<typeof useCatalogByVersionIdQuery>;
export type CatalogByVersionIdLazyQueryHookResult = ReturnType<typeof useCatalogByVersionIdLazyQuery>;
export type CatalogByVersionIdQueryResult = Apollo.QueryResult<CatalogByVersionIdQuery, CatalogByVersionIdQueryVariables>;
export function refetchCatalogByVersionIdQuery(variables?: CatalogByVersionIdQueryVariables) {
      return { query: CatalogByVersionIdDocument, variables: variables }
    }
export const CatalogByIdDocument = gql`
    query CatalogById($id: Int!) {
  catalog: catalogById(id: $id) {
    ...Catalog
    account: accountByAccount {
      logo
      name
      active
    }
    activeVersion: versionByActiveVersion {
      ...Version
    }
    versions: versionsByCatalog(orderBy: ID_DESC, offset: 0) {
      ...Version
    }
  }
}
    ${CatalogFragmentDoc}
${VersionFragmentDoc}`;

/**
 * __useCatalogByIdQuery__
 *
 * To run a query within a React component, call `useCatalogByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCatalogByIdQuery(baseOptions?: Apollo.QueryHookOptions<CatalogByIdQuery, CatalogByIdQueryVariables>) {
        return Apollo.useQuery<CatalogByIdQuery, CatalogByIdQueryVariables>(CatalogByIdDocument, baseOptions);
      }
export function useCatalogByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogByIdQuery, CatalogByIdQueryVariables>) {
          return Apollo.useLazyQuery<CatalogByIdQuery, CatalogByIdQueryVariables>(CatalogByIdDocument, baseOptions);
        }
export type CatalogByIdQueryHookResult = ReturnType<typeof useCatalogByIdQuery>;
export type CatalogByIdLazyQueryHookResult = ReturnType<typeof useCatalogByIdLazyQuery>;
export type CatalogByIdQueryResult = Apollo.QueryResult<CatalogByIdQuery, CatalogByIdQueryVariables>;
export function refetchCatalogByIdQuery(variables?: CatalogByIdQueryVariables) {
      return { query: CatalogByIdDocument, variables: variables }
    }
export const AllAuthorizedUsersDocument = gql`
    query AllAuthorizedUsers {
  authorizedUsers {
    oid
    email
    accounts: authorizedUserAuthorizedUsersAccountPartnerAccessesByAuthorizedUsersConnection {
      totalCount
    }
  }
}
    `;

/**
 * __useAllAuthorizedUsersQuery__
 *
 * To run a query within a React component, call `useAllAuthorizedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAuthorizedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAuthorizedUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAuthorizedUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllAuthorizedUsersQuery, AllAuthorizedUsersQueryVariables>) {
        return Apollo.useQuery<AllAuthorizedUsersQuery, AllAuthorizedUsersQueryVariables>(AllAuthorizedUsersDocument, baseOptions);
      }
export function useAllAuthorizedUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAuthorizedUsersQuery, AllAuthorizedUsersQueryVariables>) {
          return Apollo.useLazyQuery<AllAuthorizedUsersQuery, AllAuthorizedUsersQueryVariables>(AllAuthorizedUsersDocument, baseOptions);
        }
export type AllAuthorizedUsersQueryHookResult = ReturnType<typeof useAllAuthorizedUsersQuery>;
export type AllAuthorizedUsersLazyQueryHookResult = ReturnType<typeof useAllAuthorizedUsersLazyQuery>;
export type AllAuthorizedUsersQueryResult = Apollo.QueryResult<AllAuthorizedUsersQuery, AllAuthorizedUsersQueryVariables>;
export function refetchAllAuthorizedUsersQuery(variables?: AllAuthorizedUsersQueryVariables) {
      return { query: AllAuthorizedUsersDocument, variables: variables }
    }
export const UserByEmailDocument = gql`
    query UserByEmail($email: String!) {
  user: authorizedUserByEmail(email: $email) {
    oid
    email
    allAccounts: authorizedUserAuthorizedUsersAccountPartnerAccessesByAuthorizedUsers {
      account: accountByPartnerAccess {
        oid
        legacyId
        name
        active
        catalogs: catalogsByAccount {
          ...Catalog
          account: accountByAccount {
            logo
            name
            active
          }
          activeVersion: versionByActiveVersion {
            ...Version
          }
          versions: versionsByCatalog(orderBy: ID_DESC, offset: 0) {
            ...Version
          }
        }
      }
    }
  }
}
    ${CatalogFragmentDoc}
${VersionFragmentDoc}`;

/**
 * __useUserByEmailQuery__
 *
 * To run a query within a React component, call `useUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUserByEmailQuery(baseOptions?: Apollo.QueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>) {
        return Apollo.useQuery<UserByEmailQuery, UserByEmailQueryVariables>(UserByEmailDocument, baseOptions);
      }
export function useUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>) {
          return Apollo.useLazyQuery<UserByEmailQuery, UserByEmailQueryVariables>(UserByEmailDocument, baseOptions);
        }
export type UserByEmailQueryHookResult = ReturnType<typeof useUserByEmailQuery>;
export type UserByEmailLazyQueryHookResult = ReturnType<typeof useUserByEmailLazyQuery>;
export type UserByEmailQueryResult = Apollo.QueryResult<UserByEmailQuery, UserByEmailQueryVariables>;
export function refetchUserByEmailQuery(variables?: UserByEmailQueryVariables) {
      return { query: UserByEmailDocument, variables: variables }
    }
export const VersionFullByIdDocument = gql`
    query VersionFullById($id: Int!) {
  version: versionById(id: $id) {
    ...Version
    products: productsByVersionsByVersionOid {
      sku
    }
    pages: pagesByVersion {
      ...Page
    }
    catalog: catalogByCatalog {
      ...Catalog
      products: productsByCatalog {
        ...Product
      }
    }
  }
}
    ${VersionFragmentDoc}
${PageFragmentDoc}
${CatalogFragmentDoc}
${ProductFragmentDoc}`;

/**
 * __useVersionFullByIdQuery__
 *
 * To run a query within a React component, call `useVersionFullByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useVersionFullByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVersionFullByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVersionFullByIdQuery(baseOptions?: Apollo.QueryHookOptions<VersionFullByIdQuery, VersionFullByIdQueryVariables>) {
        return Apollo.useQuery<VersionFullByIdQuery, VersionFullByIdQueryVariables>(VersionFullByIdDocument, baseOptions);
      }
export function useVersionFullByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VersionFullByIdQuery, VersionFullByIdQueryVariables>) {
          return Apollo.useLazyQuery<VersionFullByIdQuery, VersionFullByIdQueryVariables>(VersionFullByIdDocument, baseOptions);
        }
export type VersionFullByIdQueryHookResult = ReturnType<typeof useVersionFullByIdQuery>;
export type VersionFullByIdLazyQueryHookResult = ReturnType<typeof useVersionFullByIdLazyQuery>;
export type VersionFullByIdQueryResult = Apollo.QueryResult<VersionFullByIdQuery, VersionFullByIdQueryVariables>;
export function refetchVersionFullByIdQuery(variables?: VersionFullByIdQueryVariables) {
      return { query: VersionFullByIdDocument, variables: variables }
    }
export const ProductsByVersionIdDocument = gql`
    query ProductsByVersionId($id: Int!) {
  version: versionById(id: $id) {
    id
    oid
    name
    catalog: catalogByCatalog {
      id
      oid
      products: productsByCatalog {
        ...Product
      }
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductsByVersionIdQuery__
 *
 * To run a query within a React component, call `useProductsByVersionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByVersionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByVersionIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductsByVersionIdQuery(baseOptions?: Apollo.QueryHookOptions<ProductsByVersionIdQuery, ProductsByVersionIdQueryVariables>) {
        return Apollo.useQuery<ProductsByVersionIdQuery, ProductsByVersionIdQueryVariables>(ProductsByVersionIdDocument, baseOptions);
      }
export function useProductsByVersionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByVersionIdQuery, ProductsByVersionIdQueryVariables>) {
          return Apollo.useLazyQuery<ProductsByVersionIdQuery, ProductsByVersionIdQueryVariables>(ProductsByVersionIdDocument, baseOptions);
        }
export type ProductsByVersionIdQueryHookResult = ReturnType<typeof useProductsByVersionIdQuery>;
export type ProductsByVersionIdLazyQueryHookResult = ReturnType<typeof useProductsByVersionIdLazyQuery>;
export type ProductsByVersionIdQueryResult = Apollo.QueryResult<ProductsByVersionIdQuery, ProductsByVersionIdQueryVariables>;
export function refetchProductsByVersionIdQuery(variables?: ProductsByVersionIdQueryVariables) {
      return { query: ProductsByVersionIdDocument, variables: variables }
    }
export const ActiveVersionByCatalogIdDocument = gql`
    query ActiveVersionByCatalogID($id: Int!) {
  catalog: catalogById(id: $id) {
    ...Catalog
    account: accountByAccount {
      logo
      name
      active
    }
    activeVersion: versionByActiveVersion {
      ...Version
    }
  }
}
    ${CatalogFragmentDoc}
${VersionFragmentDoc}`;

/**
 * __useActiveVersionByCatalogIdQuery__
 *
 * To run a query within a React component, call `useActiveVersionByCatalogIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveVersionByCatalogIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveVersionByCatalogIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActiveVersionByCatalogIdQuery(baseOptions?: Apollo.QueryHookOptions<ActiveVersionByCatalogIdQuery, ActiveVersionByCatalogIdQueryVariables>) {
        return Apollo.useQuery<ActiveVersionByCatalogIdQuery, ActiveVersionByCatalogIdQueryVariables>(ActiveVersionByCatalogIdDocument, baseOptions);
      }
export function useActiveVersionByCatalogIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveVersionByCatalogIdQuery, ActiveVersionByCatalogIdQueryVariables>) {
          return Apollo.useLazyQuery<ActiveVersionByCatalogIdQuery, ActiveVersionByCatalogIdQueryVariables>(ActiveVersionByCatalogIdDocument, baseOptions);
        }
export type ActiveVersionByCatalogIdQueryHookResult = ReturnType<typeof useActiveVersionByCatalogIdQuery>;
export type ActiveVersionByCatalogIdLazyQueryHookResult = ReturnType<typeof useActiveVersionByCatalogIdLazyQuery>;
export type ActiveVersionByCatalogIdQueryResult = Apollo.QueryResult<ActiveVersionByCatalogIdQuery, ActiveVersionByCatalogIdQueryVariables>;
export function refetchActiveVersionByCatalogIdQuery(variables?: ActiveVersionByCatalogIdQueryVariables) {
      return { query: ActiveVersionByCatalogIdDocument, variables: variables }
    }
export const ProductsCatalogDocument = gql`
    query ProductsCatalog($oid: UUID!) {
  catalog(oid: $oid) {
    id
    oid
    products: productsByCatalog {
      ...Product
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductsCatalogQuery__
 *
 * To run a query within a React component, call `useProductsCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsCatalogQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useProductsCatalogQuery(baseOptions?: Apollo.QueryHookOptions<ProductsCatalogQuery, ProductsCatalogQueryVariables>) {
        return Apollo.useQuery<ProductsCatalogQuery, ProductsCatalogQueryVariables>(ProductsCatalogDocument, baseOptions);
      }
export function useProductsCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsCatalogQuery, ProductsCatalogQueryVariables>) {
          return Apollo.useLazyQuery<ProductsCatalogQuery, ProductsCatalogQueryVariables>(ProductsCatalogDocument, baseOptions);
        }
export type ProductsCatalogQueryHookResult = ReturnType<typeof useProductsCatalogQuery>;
export type ProductsCatalogLazyQueryHookResult = ReturnType<typeof useProductsCatalogLazyQuery>;
export type ProductsCatalogQueryResult = Apollo.QueryResult<ProductsCatalogQuery, ProductsCatalogQueryVariables>;
export function refetchProductsCatalogQuery(variables?: ProductsCatalogQueryVariables) {
      return { query: ProductsCatalogDocument, variables: variables }
    }
export const ProductsByCatalogIdDocument = gql`
    query ProductsByCatalogId($id: Int!) {
  catalog: catalogById(id: $id) {
    id
    oid
    products: productsByCatalog {
      ...Product
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductsByCatalogIdQuery__
 *
 * To run a query within a React component, call `useProductsByCatalogIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByCatalogIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByCatalogIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductsByCatalogIdQuery(baseOptions?: Apollo.QueryHookOptions<ProductsByCatalogIdQuery, ProductsByCatalogIdQueryVariables>) {
        return Apollo.useQuery<ProductsByCatalogIdQuery, ProductsByCatalogIdQueryVariables>(ProductsByCatalogIdDocument, baseOptions);
      }
export function useProductsByCatalogIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByCatalogIdQuery, ProductsByCatalogIdQueryVariables>) {
          return Apollo.useLazyQuery<ProductsByCatalogIdQuery, ProductsByCatalogIdQueryVariables>(ProductsByCatalogIdDocument, baseOptions);
        }
export type ProductsByCatalogIdQueryHookResult = ReturnType<typeof useProductsByCatalogIdQuery>;
export type ProductsByCatalogIdLazyQueryHookResult = ReturnType<typeof useProductsByCatalogIdLazyQuery>;
export type ProductsByCatalogIdQueryResult = Apollo.QueryResult<ProductsByCatalogIdQuery, ProductsByCatalogIdQueryVariables>;
export function refetchProductsByCatalogIdQuery(variables?: ProductsByCatalogIdQueryVariables) {
      return { query: ProductsByCatalogIdDocument, variables: variables }
    }
export const CategoriesByCatalogIdDocument = gql`
    query CategoriesByCatalogId($oid: UUID!) {
  catalog(oid: $oid) {
    id
    oid
    categories: categoriesByCatalog {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCategoriesByCatalogIdQuery__
 *
 * To run a query within a React component, call `useCategoriesByCatalogIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesByCatalogIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesByCatalogIdQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useCategoriesByCatalogIdQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesByCatalogIdQuery, CategoriesByCatalogIdQueryVariables>) {
        return Apollo.useQuery<CategoriesByCatalogIdQuery, CategoriesByCatalogIdQueryVariables>(CategoriesByCatalogIdDocument, baseOptions);
      }
export function useCategoriesByCatalogIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesByCatalogIdQuery, CategoriesByCatalogIdQueryVariables>) {
          return Apollo.useLazyQuery<CategoriesByCatalogIdQuery, CategoriesByCatalogIdQueryVariables>(CategoriesByCatalogIdDocument, baseOptions);
        }
export type CategoriesByCatalogIdQueryHookResult = ReturnType<typeof useCategoriesByCatalogIdQuery>;
export type CategoriesByCatalogIdLazyQueryHookResult = ReturnType<typeof useCategoriesByCatalogIdLazyQuery>;
export type CategoriesByCatalogIdQueryResult = Apollo.QueryResult<CategoriesByCatalogIdQuery, CategoriesByCatalogIdQueryVariables>;
export function refetchCategoriesByCatalogIdQuery(variables?: CategoriesByCatalogIdQueryVariables) {
      return { query: CategoriesByCatalogIdDocument, variables: variables }
    }
export const CatalogCategoriesDocument = gql`
    query CatalogCategories($id: Int!) {
  catalog: catalogById(id: $id) {
    id
    oid
    categories: categoriesByCatalog {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCatalogCategoriesQuery__
 *
 * To run a query within a React component, call `useCatalogCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogCategoriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCatalogCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CatalogCategoriesQuery, CatalogCategoriesQueryVariables>) {
        return Apollo.useQuery<CatalogCategoriesQuery, CatalogCategoriesQueryVariables>(CatalogCategoriesDocument, baseOptions);
      }
export function useCatalogCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogCategoriesQuery, CatalogCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<CatalogCategoriesQuery, CatalogCategoriesQueryVariables>(CatalogCategoriesDocument, baseOptions);
        }
export type CatalogCategoriesQueryHookResult = ReturnType<typeof useCatalogCategoriesQuery>;
export type CatalogCategoriesLazyQueryHookResult = ReturnType<typeof useCatalogCategoriesLazyQuery>;
export type CatalogCategoriesQueryResult = Apollo.QueryResult<CatalogCategoriesQuery, CatalogCategoriesQueryVariables>;
export function refetchCatalogCategoriesQuery(variables?: CatalogCategoriesQueryVariables) {
      return { query: CatalogCategoriesDocument, variables: variables }
    }
export const CategoriesByVersionIdDocument = gql`
    query CategoriesByVersionId($id: Int!) {
  version: versionById(id: $id) {
    id
    oid
    name
    catalog: catalogByCatalog {
      id
      oid
      categories: categoriesByCatalog {
        ...Category
      }
    }
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCategoriesByVersionIdQuery__
 *
 * To run a query within a React component, call `useCategoriesByVersionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesByVersionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesByVersionIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoriesByVersionIdQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesByVersionIdQuery, CategoriesByVersionIdQueryVariables>) {
        return Apollo.useQuery<CategoriesByVersionIdQuery, CategoriesByVersionIdQueryVariables>(CategoriesByVersionIdDocument, baseOptions);
      }
export function useCategoriesByVersionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesByVersionIdQuery, CategoriesByVersionIdQueryVariables>) {
          return Apollo.useLazyQuery<CategoriesByVersionIdQuery, CategoriesByVersionIdQueryVariables>(CategoriesByVersionIdDocument, baseOptions);
        }
export type CategoriesByVersionIdQueryHookResult = ReturnType<typeof useCategoriesByVersionIdQuery>;
export type CategoriesByVersionIdLazyQueryHookResult = ReturnType<typeof useCategoriesByVersionIdLazyQuery>;
export type CategoriesByVersionIdQueryResult = Apollo.QueryResult<CategoriesByVersionIdQuery, CategoriesByVersionIdQueryVariables>;
export function refetchCategoriesByVersionIdQuery(variables?: CategoriesByVersionIdQueryVariables) {
      return { query: CategoriesByVersionIdDocument, variables: variables }
    }
export const LeadsAccountDocument = gql`
    query LeadsAccount($account: UUID!) {
  leads(condition: {account: $account}) {
    oid
    firstName
    lastName
    email
    phone
    catalogId
    versionId
    accountByAccount {
      name
    }
  }
}
    `;

/**
 * __useLeadsAccountQuery__
 *
 * To run a query within a React component, call `useLeadsAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeadsAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeadsAccountQuery({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useLeadsAccountQuery(baseOptions?: Apollo.QueryHookOptions<LeadsAccountQuery, LeadsAccountQueryVariables>) {
        return Apollo.useQuery<LeadsAccountQuery, LeadsAccountQueryVariables>(LeadsAccountDocument, baseOptions);
      }
export function useLeadsAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeadsAccountQuery, LeadsAccountQueryVariables>) {
          return Apollo.useLazyQuery<LeadsAccountQuery, LeadsAccountQueryVariables>(LeadsAccountDocument, baseOptions);
        }
export type LeadsAccountQueryHookResult = ReturnType<typeof useLeadsAccountQuery>;
export type LeadsAccountLazyQueryHookResult = ReturnType<typeof useLeadsAccountLazyQuery>;
export type LeadsAccountQueryResult = Apollo.QueryResult<LeadsAccountQuery, LeadsAccountQueryVariables>;
export function refetchLeadsAccountQuery(variables?: LeadsAccountQueryVariables) {
      return { query: LeadsAccountDocument, variables: variables }
    }
export const UpdatePageDocument = gql`
    mutation UpdatePage($id: UUID!, $payload: PagePatch!) {
  updatePage(input: {patch: $payload, oid: $id}) {
    page {
      ...Page
    }
  }
}
    ${PageFragmentDoc}`;
export type UpdatePageMutationFn = Apollo.MutationFunction<UpdatePageMutation, UpdatePageMutationVariables>;

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageMutation, UpdatePageMutationVariables>) {
        return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(UpdatePageDocument, baseOptions);
      }
export type UpdatePageMutationHookResult = ReturnType<typeof useUpdatePageMutation>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<UpdatePageMutation, UpdatePageMutationVariables>;
export const CreateCatalogDocument = gql`
    mutation CreateCatalog($catalog: CatalogInput!) {
  createCatalog(input: {catalog: $catalog}) {
    catalog {
      ...Catalog
      account: accountByAccount {
        logo
        name
        active
      }
      activeVersion: versionByActiveVersion {
        ...Version
      }
      versions: versionsByCatalog(orderBy: ID_DESC, offset: 0) {
        ...Version
      }
    }
  }
}
    ${CatalogFragmentDoc}
${VersionFragmentDoc}`;
export type CreateCatalogMutationFn = Apollo.MutationFunction<CreateCatalogMutation, CreateCatalogMutationVariables>;

/**
 * __useCreateCatalogMutation__
 *
 * To run a mutation, you first call `useCreateCatalogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCatalogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCatalogMutation, { data, loading, error }] = useCreateCatalogMutation({
 *   variables: {
 *      catalog: // value for 'catalog'
 *   },
 * });
 */
export function useCreateCatalogMutation(baseOptions?: Apollo.MutationHookOptions<CreateCatalogMutation, CreateCatalogMutationVariables>) {
        return Apollo.useMutation<CreateCatalogMutation, CreateCatalogMutationVariables>(CreateCatalogDocument, baseOptions);
      }
export type CreateCatalogMutationHookResult = ReturnType<typeof useCreateCatalogMutation>;
export type CreateCatalogMutationResult = Apollo.MutationResult<CreateCatalogMutation>;
export type CreateCatalogMutationOptions = Apollo.BaseMutationOptions<CreateCatalogMutation, CreateCatalogMutationVariables>;
export const UpdateCatalogDocument = gql`
    mutation UpdateCatalog($catalog: CatalogPatch!, $oid: UUID!) {
  updateCatalog(input: {patch: $catalog, oid: $oid}) {
    catalog {
      ...Catalog
      activeVersion: versionByActiveVersion {
        ...Version
      }
      versions: versionsByCatalog(orderBy: ID_DESC, offset: 0) {
        ...Version
      }
    }
  }
}
    ${CatalogFragmentDoc}
${VersionFragmentDoc}`;
export type UpdateCatalogMutationFn = Apollo.MutationFunction<UpdateCatalogMutation, UpdateCatalogMutationVariables>;

/**
 * __useUpdateCatalogMutation__
 *
 * To run a mutation, you first call `useUpdateCatalogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCatalogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCatalogMutation, { data, loading, error }] = useUpdateCatalogMutation({
 *   variables: {
 *      catalog: // value for 'catalog'
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useUpdateCatalogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCatalogMutation, UpdateCatalogMutationVariables>) {
        return Apollo.useMutation<UpdateCatalogMutation, UpdateCatalogMutationVariables>(UpdateCatalogDocument, baseOptions);
      }
export type UpdateCatalogMutationHookResult = ReturnType<typeof useUpdateCatalogMutation>;
export type UpdateCatalogMutationResult = Apollo.MutationResult<UpdateCatalogMutation>;
export type UpdateCatalogMutationOptions = Apollo.BaseMutationOptions<UpdateCatalogMutation, UpdateCatalogMutationVariables>;
export const DeleteCatalogDocument = gql`
    mutation DeleteCatalog($oid: UUID!) {
  deleteCatalog(input: {oid: $oid}) {
    catalog {
      oid
      id
    }
  }
}
    `;
export type DeleteCatalogMutationFn = Apollo.MutationFunction<DeleteCatalogMutation, DeleteCatalogMutationVariables>;

/**
 * __useDeleteCatalogMutation__
 *
 * To run a mutation, you first call `useDeleteCatalogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCatalogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCatalogMutation, { data, loading, error }] = useDeleteCatalogMutation({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useDeleteCatalogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCatalogMutation, DeleteCatalogMutationVariables>) {
        return Apollo.useMutation<DeleteCatalogMutation, DeleteCatalogMutationVariables>(DeleteCatalogDocument, baseOptions);
      }
export type DeleteCatalogMutationHookResult = ReturnType<typeof useDeleteCatalogMutation>;
export type DeleteCatalogMutationResult = Apollo.MutationResult<DeleteCatalogMutation>;
export type DeleteCatalogMutationOptions = Apollo.BaseMutationOptions<DeleteCatalogMutation, DeleteCatalogMutationVariables>;
export const CreateVersionDocument = gql`
    mutation CreateVersion($version: VersionInput!) {
  createVersion(input: {version: $version}) {
    version {
      ...Version
      catalog: catalogByCatalog {
        ...Catalog
      }
    }
  }
}
    ${VersionFragmentDoc}
${CatalogFragmentDoc}`;
export type CreateVersionMutationFn = Apollo.MutationFunction<CreateVersionMutation, CreateVersionMutationVariables>;

/**
 * __useCreateVersionMutation__
 *
 * To run a mutation, you first call `useCreateVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVersionMutation, { data, loading, error }] = useCreateVersionMutation({
 *   variables: {
 *      version: // value for 'version'
 *   },
 * });
 */
export function useCreateVersionMutation(baseOptions?: Apollo.MutationHookOptions<CreateVersionMutation, CreateVersionMutationVariables>) {
        return Apollo.useMutation<CreateVersionMutation, CreateVersionMutationVariables>(CreateVersionDocument, baseOptions);
      }
export type CreateVersionMutationHookResult = ReturnType<typeof useCreateVersionMutation>;
export type CreateVersionMutationResult = Apollo.MutationResult<CreateVersionMutation>;
export type CreateVersionMutationOptions = Apollo.BaseMutationOptions<CreateVersionMutation, CreateVersionMutationVariables>;
export const UpdateVersionDocument = gql`
    mutation UpdateVersion($version: VersionPatch!, $oid: UUID!) {
  updateVersion(input: {patch: $version, oid: $oid}) {
    version {
      ...Version
      catalog: catalogByCatalog {
        ...Catalog
      }
    }
  }
}
    ${VersionFragmentDoc}
${CatalogFragmentDoc}`;
export type UpdateVersionMutationFn = Apollo.MutationFunction<UpdateVersionMutation, UpdateVersionMutationVariables>;

/**
 * __useUpdateVersionMutation__
 *
 * To run a mutation, you first call `useUpdateVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVersionMutation, { data, loading, error }] = useUpdateVersionMutation({
 *   variables: {
 *      version: // value for 'version'
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useUpdateVersionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVersionMutation, UpdateVersionMutationVariables>) {
        return Apollo.useMutation<UpdateVersionMutation, UpdateVersionMutationVariables>(UpdateVersionDocument, baseOptions);
      }
export type UpdateVersionMutationHookResult = ReturnType<typeof useUpdateVersionMutation>;
export type UpdateVersionMutationResult = Apollo.MutationResult<UpdateVersionMutation>;
export type UpdateVersionMutationOptions = Apollo.BaseMutationOptions<UpdateVersionMutation, UpdateVersionMutationVariables>;
export const DeleteVersionDocument = gql`
    mutation DeleteVersion($oid: UUID!) {
  deleteVersion(input: {oid: $oid}) {
    clientMutationId
    catalog: catalogByCatalog {
      oid
      id
    }
  }
}
    `;
export type DeleteVersionMutationFn = Apollo.MutationFunction<DeleteVersionMutation, DeleteVersionMutationVariables>;

/**
 * __useDeleteVersionMutation__
 *
 * To run a mutation, you first call `useDeleteVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVersionMutation, { data, loading, error }] = useDeleteVersionMutation({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useDeleteVersionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVersionMutation, DeleteVersionMutationVariables>) {
        return Apollo.useMutation<DeleteVersionMutation, DeleteVersionMutationVariables>(DeleteVersionDocument, baseOptions);
      }
export type DeleteVersionMutationHookResult = ReturnType<typeof useDeleteVersionMutation>;
export type DeleteVersionMutationResult = Apollo.MutationResult<DeleteVersionMutation>;
export type DeleteVersionMutationOptions = Apollo.BaseMutationOptions<DeleteVersionMutation, DeleteVersionMutationVariables>;
export const CreatePageDocument = gql`
    mutation CreatePage($page: PageInput!) {
  createPage(input: {page: $page}) {
    page {
      ...Page
    }
  }
}
    ${PageFragmentDoc}`;
export type CreatePageMutationFn = Apollo.MutationFunction<CreatePageMutation, CreatePageMutationVariables>;

/**
 * __useCreatePageMutation__
 *
 * To run a mutation, you first call `useCreatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageMutation, { data, loading, error }] = useCreatePageMutation({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useCreatePageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePageMutation, CreatePageMutationVariables>) {
        return Apollo.useMutation<CreatePageMutation, CreatePageMutationVariables>(CreatePageDocument, baseOptions);
      }
export type CreatePageMutationHookResult = ReturnType<typeof useCreatePageMutation>;
export type CreatePageMutationResult = Apollo.MutationResult<CreatePageMutation>;
export type CreatePageMutationOptions = Apollo.BaseMutationOptions<CreatePageMutation, CreatePageMutationVariables>;
export const DeletePageDocument = gql`
    mutation DeletePage($oid: UUID!) {
  deletePage(input: {oid: $oid}) {
    page {
      oid
    }
  }
}
    `;
export type DeletePageMutationFn = Apollo.MutationFunction<DeletePageMutation, DeletePageMutationVariables>;

/**
 * __useDeletePageMutation__
 *
 * To run a mutation, you first call `useDeletePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePageMutation, { data, loading, error }] = useDeletePageMutation({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useDeletePageMutation(baseOptions?: Apollo.MutationHookOptions<DeletePageMutation, DeletePageMutationVariables>) {
        return Apollo.useMutation<DeletePageMutation, DeletePageMutationVariables>(DeletePageDocument, baseOptions);
      }
export type DeletePageMutationHookResult = ReturnType<typeof useDeletePageMutation>;
export type DeletePageMutationResult = Apollo.MutationResult<DeletePageMutation>;
export type DeletePageMutationOptions = Apollo.BaseMutationOptions<DeletePageMutation, DeletePageMutationVariables>;
export const CatalogFeedsDocument = gql`
    query CatalogFeeds {
  feeds {
    ...Feed
  }
}
    ${FeedFragmentDoc}`;

/**
 * __useCatalogFeedsQuery__
 *
 * To run a query within a React component, call `useCatalogFeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogFeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogFeedsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCatalogFeedsQuery(baseOptions?: Apollo.QueryHookOptions<CatalogFeedsQuery, CatalogFeedsQueryVariables>) {
        return Apollo.useQuery<CatalogFeedsQuery, CatalogFeedsQueryVariables>(CatalogFeedsDocument, baseOptions);
      }
export function useCatalogFeedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogFeedsQuery, CatalogFeedsQueryVariables>) {
          return Apollo.useLazyQuery<CatalogFeedsQuery, CatalogFeedsQueryVariables>(CatalogFeedsDocument, baseOptions);
        }
export type CatalogFeedsQueryHookResult = ReturnType<typeof useCatalogFeedsQuery>;
export type CatalogFeedsLazyQueryHookResult = ReturnType<typeof useCatalogFeedsLazyQuery>;
export type CatalogFeedsQueryResult = Apollo.QueryResult<CatalogFeedsQuery, CatalogFeedsQueryVariables>;
export function refetchCatalogFeedsQuery(variables?: CatalogFeedsQueryVariables) {
      return { query: CatalogFeedsDocument, variables: variables }
    }
export const CreateFeedDocument = gql`
    mutation CreateFeed($feed: FeedInput!) {
  createFeed(input: {feed: $feed}) {
    feed {
      ...Feed
    }
  }
}
    ${FeedFragmentDoc}`;
export type CreateFeedMutationFn = Apollo.MutationFunction<CreateFeedMutation, CreateFeedMutationVariables>;

/**
 * __useCreateFeedMutation__
 *
 * To run a mutation, you first call `useCreateFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFeedMutation, { data, loading, error }] = useCreateFeedMutation({
 *   variables: {
 *      feed: // value for 'feed'
 *   },
 * });
 */
export function useCreateFeedMutation(baseOptions?: Apollo.MutationHookOptions<CreateFeedMutation, CreateFeedMutationVariables>) {
        return Apollo.useMutation<CreateFeedMutation, CreateFeedMutationVariables>(CreateFeedDocument, baseOptions);
      }
export type CreateFeedMutationHookResult = ReturnType<typeof useCreateFeedMutation>;
export type CreateFeedMutationResult = Apollo.MutationResult<CreateFeedMutation>;
export type CreateFeedMutationOptions = Apollo.BaseMutationOptions<CreateFeedMutation, CreateFeedMutationVariables>;
export const UpdateFeedDocument = gql`
    mutation UpdateFeed($feed: FeedPatch!, $oid: UUID!) {
  updateFeed(input: {patch: $feed, oid: $oid}) {
    feed {
      ...Feed
    }
  }
}
    ${FeedFragmentDoc}`;
export type UpdateFeedMutationFn = Apollo.MutationFunction<UpdateFeedMutation, UpdateFeedMutationVariables>;

/**
 * __useUpdateFeedMutation__
 *
 * To run a mutation, you first call `useUpdateFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFeedMutation, { data, loading, error }] = useUpdateFeedMutation({
 *   variables: {
 *      feed: // value for 'feed'
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useUpdateFeedMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFeedMutation, UpdateFeedMutationVariables>) {
        return Apollo.useMutation<UpdateFeedMutation, UpdateFeedMutationVariables>(UpdateFeedDocument, baseOptions);
      }
export type UpdateFeedMutationHookResult = ReturnType<typeof useUpdateFeedMutation>;
export type UpdateFeedMutationResult = Apollo.MutationResult<UpdateFeedMutation>;
export type UpdateFeedMutationOptions = Apollo.BaseMutationOptions<UpdateFeedMutation, UpdateFeedMutationVariables>;
export const DeleteFeedDocument = gql`
    mutation DeleteFeed($oid: UUID!) {
  deleteFeed(input: {oid: $oid}) {
    feed {
      oid
    }
  }
}
    `;
export type DeleteFeedMutationFn = Apollo.MutationFunction<DeleteFeedMutation, DeleteFeedMutationVariables>;

/**
 * __useDeleteFeedMutation__
 *
 * To run a mutation, you first call `useDeleteFeedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFeedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFeedMutation, { data, loading, error }] = useDeleteFeedMutation({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useDeleteFeedMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFeedMutation, DeleteFeedMutationVariables>) {
        return Apollo.useMutation<DeleteFeedMutation, DeleteFeedMutationVariables>(DeleteFeedDocument, baseOptions);
      }
export type DeleteFeedMutationHookResult = ReturnType<typeof useDeleteFeedMutation>;
export type DeleteFeedMutationResult = Apollo.MutationResult<DeleteFeedMutation>;
export type DeleteFeedMutationOptions = Apollo.BaseMutationOptions<DeleteFeedMutation, DeleteFeedMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($category: CategoryInput!) {
  createCategory(input: {category: $category}) {
    category {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, baseOptions);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($category: CategoryPatch!, $oid: UUID!) {
  updateCategory(input: {patch: $category, oid: $oid}) {
    category {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, baseOptions);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($oid: UUID!) {
  deleteCategory(input: {oid: $oid}) {
    category {
      oid
      id
    }
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, baseOptions);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($product: ProductInput!) {
  createProduct(input: {product: $product}) {
    product {
      ...Product
    }
  }
}
    ${ProductFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($product: ProductPatch!, $oid: UUID!) {
  updateProduct(input: {patch: $product, oid: $oid}) {
    product {
      ...Product
    }
  }
}
    ${ProductFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      product: // value for 'product'
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($oid: UUID!) {
  deleteProduct(input: {oid: $oid}) {
    product {
      oid
    }
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;