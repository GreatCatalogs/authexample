import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type CatalogLiteFragment = (
  { __typename?: 'Catalog' }
  & Pick<Types.Catalog, 'id' | 'oid' | 'name' | 'merchantId' | 'customSubdomain' | 'text2Disclaimer' | 'options' | 'description'>
  & { account?: Types.Maybe<(
    { __typename?: 'Account' }
    & Pick<Types.Account, 'logo' | 'name' | 'active'>
  )> }
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

export type CatalogFragment = (
  { __typename?: 'Catalog' }
  & { activeVersion?: Types.Maybe<(
    { __typename?: 'Version' }
    & VersionLiteFragment
  )>, versions: Array<(
    { __typename?: 'Version' }
    & VersionLiteFragment
  )> }
  & CatalogLiteFragment
);

export type VersionLiteFragment = (
  { __typename?: 'Version' }
  & Pick<Types.Version, 'id' | 'oid' | 'name' | 'coverUrl' | 'enableCategoryCatalogs' | 'contactUrl' | 'description' | 'options' | 'versionNo'>
);

export type VersionFragment = (
  { __typename?: 'Version' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & CatalogLiteFragment
  )> }
  & VersionLiteFragment
);

export type CategoryFragment = (
  { __typename?: 'Category' }
  & Pick<Types.Category, 'id' | 'oid' | 'name' | 'image' | 'options'>
  & { subcategories: Array<(
    { __typename?: 'SubCategory' }
    & Pick<Types.SubCategory, 'id' | 'oid' | 'name' | 'image' | 'options'>
  )> }
);

export type ProductFragment = (
  { __typename?: 'Product' }
  & Pick<Types.Product, 'oid' | 'sku' | 'title' | 'price' | 'url' | 'src' | 'category' | 'brand' | 'tags' | 'color' | 'expired' | 'options'>
);

export type GetActiveAccountsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetActiveAccountsQuery = (
  { __typename?: 'Query' }
  & { accounts?: Types.Maybe<Array<(
    { __typename?: 'Account' }
    & Pick<Types.Account, 'oid' | 'name' | 'email' | 'legacyId' | 'active' | 'logo'>
    & { catalogs: Array<(
      { __typename?: 'Catalog' }
      & CatalogFragment
    )> }
  )>> }
);

export type GetCatalogByOidQueryVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type GetCatalogByOidQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & CatalogFragment
  )> }
);

export type GetCatalogByVersionIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetCatalogByVersionIdQuery = (
  { __typename?: 'Query' }
  & { version?: Types.Maybe<(
    { __typename?: 'Version' }
    & VersionFragment
  )> }
);

export type GetCatalogByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetCatalogByIdQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & CatalogFragment
  )> }
);

export type GetAllAuthorizedUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllAuthorizedUsersQuery = (
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

export type GetUserByEmailQueryVariables = Types.Exact<{
  email: Types.Scalars['String'];
}>;


export type GetUserByEmailQuery = (
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
          & CatalogFragment
        )> }
      )> }
    )> }
  )> }
);

export type GetVersionFullByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetVersionFullByIdQuery = (
  { __typename?: 'Query' }
  & { version?: Types.Maybe<(
    { __typename?: 'Version' }
    & { products: Array<(
      { __typename?: 'ProductsByVersion' }
      & Pick<Types.ProductsByVersion, 'sku'>
    )>, pages: Array<(
      { __typename?: 'Page' }
      & Pick<Types.Page, 'oid' | 'imageSource' | 'imageUrl' | 'pageType' | 'options'>
    )>, catalog?: Types.Maybe<(
      { __typename?: 'Catalog' }
      & { products: Array<(
        { __typename?: 'Product' }
        & ProductFragment
      )> }
      & CatalogLiteFragment
    )> }
    & VersionLiteFragment
  )> }
);

export type GetProductsByVersionIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetProductsByVersionIdQuery = (
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

export type GetActiveVersionByCatalogIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetActiveVersionByCatalogIdQuery = (
  { __typename?: 'Query' }
  & { catalog?: Types.Maybe<(
    { __typename?: 'Catalog' }
    & { activeVersion?: Types.Maybe<(
      { __typename?: 'Version' }
      & VersionLiteFragment
    )> }
    & CatalogLiteFragment
  )> }
);

export type GetProductsCatalogQueryVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type GetProductsCatalogQuery = (
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

export type GetProductsByCatalogIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetProductsByCatalogIdQuery = (
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

export type GetCategoriesByCatalogIdQueryVariables = Types.Exact<{
  oid: Types.Scalars['UUID'];
}>;


export type GetCategoriesByCatalogIdQuery = (
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

export type GetCatalogCategoriesQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetCatalogCategoriesQuery = (
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

export type GetCategoriesByVersionIdQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetCategoriesByVersionIdQuery = (
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

export type GetLeadsAccountQueryVariables = Types.Exact<{
  account: Types.Scalars['UUID'];
}>;


export type GetLeadsAccountQuery = (
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

export type GetCatalogFeedsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCatalogFeedsQuery = (
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
export const CatalogLiteFragmentDoc = gql`
    fragment CatalogLite on Catalog {
  id
  oid
  name
  merchantId
  customSubdomain
  text2Disclaimer
  options
  description
  account: accountByAccount {
    logo
    name
    active
  }
}
    `;
export const VersionLiteFragmentDoc = gql`
    fragment VersionLite on Version {
  id
  oid
  name
  coverUrl
  enableCategoryCatalogs
  contactUrl
  description
  options
  versionNo
}
    `;
export const CatalogFragmentDoc = gql`
    fragment Catalog on Catalog {
  ...CatalogLite
  activeVersion: versionByActiveVersion {
    ...VersionLite
  }
  versions: versionsByCatalog(orderBy: ID_DESC, offset: 0) {
    ...VersionLite
  }
}
    ${CatalogLiteFragmentDoc}
${VersionLiteFragmentDoc}`;
export const VersionFragmentDoc = gql`
    fragment Version on Version {
  ...VersionLite
  catalog: catalogByCatalog {
    ...CatalogLite
  }
}
    ${VersionLiteFragmentDoc}
${CatalogLiteFragmentDoc}`;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  oid
  name
  image
  options
  subcategories: subCategoriesByCategory {
    id
    oid
    name
    image
    options
  }
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  oid
  sku
  title
  price
  url
  src
  category
  brand
  tags
  color
  expired
  options
}
    `;
export const GetActiveAccountsDocument = gql`
    query GetActiveAccounts {
  accounts(condition: {active: true}, orderBy: NAME_ASC) {
    oid
    name
    email
    legacyId
    active
    logo
    catalogs: catalogsByAccount {
      ...Catalog
    }
  }
}
    ${CatalogFragmentDoc}`;

/**
 * __useGetActiveAccountsQuery__
 *
 * To run a query within a React component, call `useGetActiveAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveAccountsQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveAccountsQuery, GetActiveAccountsQueryVariables>) {
        return Apollo.useQuery<GetActiveAccountsQuery, GetActiveAccountsQueryVariables>(GetActiveAccountsDocument, baseOptions);
      }
export function useGetActiveAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveAccountsQuery, GetActiveAccountsQueryVariables>) {
          return Apollo.useLazyQuery<GetActiveAccountsQuery, GetActiveAccountsQueryVariables>(GetActiveAccountsDocument, baseOptions);
        }
export type GetActiveAccountsQueryHookResult = ReturnType<typeof useGetActiveAccountsQuery>;
export type GetActiveAccountsLazyQueryHookResult = ReturnType<typeof useGetActiveAccountsLazyQuery>;
export type GetActiveAccountsQueryResult = Apollo.QueryResult<GetActiveAccountsQuery, GetActiveAccountsQueryVariables>;
export function refetchGetActiveAccountsQuery(variables?: GetActiveAccountsQueryVariables) {
      return { query: GetActiveAccountsDocument, variables: variables }
    }
export const GetCatalogByOidDocument = gql`
    query GetCatalogByOid($oid: UUID!) {
  catalog(oid: $oid) {
    ...Catalog
  }
}
    ${CatalogFragmentDoc}`;

/**
 * __useGetCatalogByOidQuery__
 *
 * To run a query within a React component, call `useGetCatalogByOidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatalogByOidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatalogByOidQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useGetCatalogByOidQuery(baseOptions?: Apollo.QueryHookOptions<GetCatalogByOidQuery, GetCatalogByOidQueryVariables>) {
        return Apollo.useQuery<GetCatalogByOidQuery, GetCatalogByOidQueryVariables>(GetCatalogByOidDocument, baseOptions);
      }
export function useGetCatalogByOidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatalogByOidQuery, GetCatalogByOidQueryVariables>) {
          return Apollo.useLazyQuery<GetCatalogByOidQuery, GetCatalogByOidQueryVariables>(GetCatalogByOidDocument, baseOptions);
        }
export type GetCatalogByOidQueryHookResult = ReturnType<typeof useGetCatalogByOidQuery>;
export type GetCatalogByOidLazyQueryHookResult = ReturnType<typeof useGetCatalogByOidLazyQuery>;
export type GetCatalogByOidQueryResult = Apollo.QueryResult<GetCatalogByOidQuery, GetCatalogByOidQueryVariables>;
export function refetchGetCatalogByOidQuery(variables?: GetCatalogByOidQueryVariables) {
      return { query: GetCatalogByOidDocument, variables: variables }
    }
export const GetCatalogByVersionIdDocument = gql`
    query GetCatalogByVersionId($id: Int!) {
  version: versionById(id: $id) {
    ...Version
  }
}
    ${VersionFragmentDoc}`;

/**
 * __useGetCatalogByVersionIdQuery__
 *
 * To run a query within a React component, call `useGetCatalogByVersionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatalogByVersionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatalogByVersionIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCatalogByVersionIdQuery(baseOptions?: Apollo.QueryHookOptions<GetCatalogByVersionIdQuery, GetCatalogByVersionIdQueryVariables>) {
        return Apollo.useQuery<GetCatalogByVersionIdQuery, GetCatalogByVersionIdQueryVariables>(GetCatalogByVersionIdDocument, baseOptions);
      }
export function useGetCatalogByVersionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatalogByVersionIdQuery, GetCatalogByVersionIdQueryVariables>) {
          return Apollo.useLazyQuery<GetCatalogByVersionIdQuery, GetCatalogByVersionIdQueryVariables>(GetCatalogByVersionIdDocument, baseOptions);
        }
export type GetCatalogByVersionIdQueryHookResult = ReturnType<typeof useGetCatalogByVersionIdQuery>;
export type GetCatalogByVersionIdLazyQueryHookResult = ReturnType<typeof useGetCatalogByVersionIdLazyQuery>;
export type GetCatalogByVersionIdQueryResult = Apollo.QueryResult<GetCatalogByVersionIdQuery, GetCatalogByVersionIdQueryVariables>;
export function refetchGetCatalogByVersionIdQuery(variables?: GetCatalogByVersionIdQueryVariables) {
      return { query: GetCatalogByVersionIdDocument, variables: variables }
    }
export const GetCatalogByIdDocument = gql`
    query GetCatalogById($id: Int!) {
  catalog: catalogById(id: $id) {
    ...Catalog
  }
}
    ${CatalogFragmentDoc}`;

/**
 * __useGetCatalogByIdQuery__
 *
 * To run a query within a React component, call `useGetCatalogByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatalogByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatalogByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCatalogByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetCatalogByIdQuery, GetCatalogByIdQueryVariables>) {
        return Apollo.useQuery<GetCatalogByIdQuery, GetCatalogByIdQueryVariables>(GetCatalogByIdDocument, baseOptions);
      }
export function useGetCatalogByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatalogByIdQuery, GetCatalogByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetCatalogByIdQuery, GetCatalogByIdQueryVariables>(GetCatalogByIdDocument, baseOptions);
        }
export type GetCatalogByIdQueryHookResult = ReturnType<typeof useGetCatalogByIdQuery>;
export type GetCatalogByIdLazyQueryHookResult = ReturnType<typeof useGetCatalogByIdLazyQuery>;
export type GetCatalogByIdQueryResult = Apollo.QueryResult<GetCatalogByIdQuery, GetCatalogByIdQueryVariables>;
export function refetchGetCatalogByIdQuery(variables?: GetCatalogByIdQueryVariables) {
      return { query: GetCatalogByIdDocument, variables: variables }
    }
export const GetAllAuthorizedUsersDocument = gql`
    query GetAllAuthorizedUsers {
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
 * __useGetAllAuthorizedUsersQuery__
 *
 * To run a query within a React component, call `useGetAllAuthorizedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAuthorizedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAuthorizedUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAuthorizedUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAuthorizedUsersQuery, GetAllAuthorizedUsersQueryVariables>) {
        return Apollo.useQuery<GetAllAuthorizedUsersQuery, GetAllAuthorizedUsersQueryVariables>(GetAllAuthorizedUsersDocument, baseOptions);
      }
export function useGetAllAuthorizedUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAuthorizedUsersQuery, GetAllAuthorizedUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetAllAuthorizedUsersQuery, GetAllAuthorizedUsersQueryVariables>(GetAllAuthorizedUsersDocument, baseOptions);
        }
export type GetAllAuthorizedUsersQueryHookResult = ReturnType<typeof useGetAllAuthorizedUsersQuery>;
export type GetAllAuthorizedUsersLazyQueryHookResult = ReturnType<typeof useGetAllAuthorizedUsersLazyQuery>;
export type GetAllAuthorizedUsersQueryResult = Apollo.QueryResult<GetAllAuthorizedUsersQuery, GetAllAuthorizedUsersQueryVariables>;
export function refetchGetAllAuthorizedUsersQuery(variables?: GetAllAuthorizedUsersQueryVariables) {
      return { query: GetAllAuthorizedUsersDocument, variables: variables }
    }
export const GetUserByEmailDocument = gql`
    query GetUserByEmail($email: String!) {
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
        }
      }
    }
  }
}
    ${CatalogFragmentDoc}`;

/**
 * __useGetUserByEmailQuery__
 *
 * To run a query within a React component, call `useGetUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserByEmailQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
        return Apollo.useQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, baseOptions);
      }
export function useGetUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, baseOptions);
        }
export type GetUserByEmailQueryHookResult = ReturnType<typeof useGetUserByEmailQuery>;
export type GetUserByEmailLazyQueryHookResult = ReturnType<typeof useGetUserByEmailLazyQuery>;
export type GetUserByEmailQueryResult = Apollo.QueryResult<GetUserByEmailQuery, GetUserByEmailQueryVariables>;
export function refetchGetUserByEmailQuery(variables?: GetUserByEmailQueryVariables) {
      return { query: GetUserByEmailDocument, variables: variables }
    }
export const GetVersionFullByIdDocument = gql`
    query GetVersionFullById($id: Int!) {
  version: versionById(id: $id) {
    ...VersionLite
    products: productsByVersionsByVersionOid {
      sku
    }
    pages: pagesByVersion {
      oid
      imageSource
      imageUrl
      pageType
      options
    }
    catalog: catalogByCatalog {
      ...CatalogLite
      products: productsByCatalog {
        ...Product
      }
    }
  }
}
    ${VersionLiteFragmentDoc}
${CatalogLiteFragmentDoc}
${ProductFragmentDoc}`;

/**
 * __useGetVersionFullByIdQuery__
 *
 * To run a query within a React component, call `useGetVersionFullByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVersionFullByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVersionFullByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVersionFullByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetVersionFullByIdQuery, GetVersionFullByIdQueryVariables>) {
        return Apollo.useQuery<GetVersionFullByIdQuery, GetVersionFullByIdQueryVariables>(GetVersionFullByIdDocument, baseOptions);
      }
export function useGetVersionFullByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVersionFullByIdQuery, GetVersionFullByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetVersionFullByIdQuery, GetVersionFullByIdQueryVariables>(GetVersionFullByIdDocument, baseOptions);
        }
export type GetVersionFullByIdQueryHookResult = ReturnType<typeof useGetVersionFullByIdQuery>;
export type GetVersionFullByIdLazyQueryHookResult = ReturnType<typeof useGetVersionFullByIdLazyQuery>;
export type GetVersionFullByIdQueryResult = Apollo.QueryResult<GetVersionFullByIdQuery, GetVersionFullByIdQueryVariables>;
export function refetchGetVersionFullByIdQuery(variables?: GetVersionFullByIdQueryVariables) {
      return { query: GetVersionFullByIdDocument, variables: variables }
    }
export const GetProductsByVersionIdDocument = gql`
    query GetProductsByVersionId($id: Int!) {
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
 * __useGetProductsByVersionIdQuery__
 *
 * To run a query within a React component, call `useGetProductsByVersionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByVersionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByVersionIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductsByVersionIdQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsByVersionIdQuery, GetProductsByVersionIdQueryVariables>) {
        return Apollo.useQuery<GetProductsByVersionIdQuery, GetProductsByVersionIdQueryVariables>(GetProductsByVersionIdDocument, baseOptions);
      }
export function useGetProductsByVersionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsByVersionIdQuery, GetProductsByVersionIdQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsByVersionIdQuery, GetProductsByVersionIdQueryVariables>(GetProductsByVersionIdDocument, baseOptions);
        }
export type GetProductsByVersionIdQueryHookResult = ReturnType<typeof useGetProductsByVersionIdQuery>;
export type GetProductsByVersionIdLazyQueryHookResult = ReturnType<typeof useGetProductsByVersionIdLazyQuery>;
export type GetProductsByVersionIdQueryResult = Apollo.QueryResult<GetProductsByVersionIdQuery, GetProductsByVersionIdQueryVariables>;
export function refetchGetProductsByVersionIdQuery(variables?: GetProductsByVersionIdQueryVariables) {
      return { query: GetProductsByVersionIdDocument, variables: variables }
    }
export const GetActiveVersionByCatalogIdDocument = gql`
    query GetActiveVersionByCatalogID($id: Int!) {
  catalog: catalogById(id: $id) {
    ...CatalogLite
    activeVersion: versionByActiveVersion {
      ...VersionLite
    }
  }
}
    ${CatalogLiteFragmentDoc}
${VersionLiteFragmentDoc}`;

/**
 * __useGetActiveVersionByCatalogIdQuery__
 *
 * To run a query within a React component, call `useGetActiveVersionByCatalogIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveVersionByCatalogIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveVersionByCatalogIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetActiveVersionByCatalogIdQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveVersionByCatalogIdQuery, GetActiveVersionByCatalogIdQueryVariables>) {
        return Apollo.useQuery<GetActiveVersionByCatalogIdQuery, GetActiveVersionByCatalogIdQueryVariables>(GetActiveVersionByCatalogIdDocument, baseOptions);
      }
export function useGetActiveVersionByCatalogIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveVersionByCatalogIdQuery, GetActiveVersionByCatalogIdQueryVariables>) {
          return Apollo.useLazyQuery<GetActiveVersionByCatalogIdQuery, GetActiveVersionByCatalogIdQueryVariables>(GetActiveVersionByCatalogIdDocument, baseOptions);
        }
export type GetActiveVersionByCatalogIdQueryHookResult = ReturnType<typeof useGetActiveVersionByCatalogIdQuery>;
export type GetActiveVersionByCatalogIdLazyQueryHookResult = ReturnType<typeof useGetActiveVersionByCatalogIdLazyQuery>;
export type GetActiveVersionByCatalogIdQueryResult = Apollo.QueryResult<GetActiveVersionByCatalogIdQuery, GetActiveVersionByCatalogIdQueryVariables>;
export function refetchGetActiveVersionByCatalogIdQuery(variables?: GetActiveVersionByCatalogIdQueryVariables) {
      return { query: GetActiveVersionByCatalogIdDocument, variables: variables }
    }
export const GetProductsCatalogDocument = gql`
    query GetProductsCatalog($oid: UUID!) {
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
 * __useGetProductsCatalogQuery__
 *
 * To run a query within a React component, call `useGetProductsCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsCatalogQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useGetProductsCatalogQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsCatalogQuery, GetProductsCatalogQueryVariables>) {
        return Apollo.useQuery<GetProductsCatalogQuery, GetProductsCatalogQueryVariables>(GetProductsCatalogDocument, baseOptions);
      }
export function useGetProductsCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsCatalogQuery, GetProductsCatalogQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsCatalogQuery, GetProductsCatalogQueryVariables>(GetProductsCatalogDocument, baseOptions);
        }
export type GetProductsCatalogQueryHookResult = ReturnType<typeof useGetProductsCatalogQuery>;
export type GetProductsCatalogLazyQueryHookResult = ReturnType<typeof useGetProductsCatalogLazyQuery>;
export type GetProductsCatalogQueryResult = Apollo.QueryResult<GetProductsCatalogQuery, GetProductsCatalogQueryVariables>;
export function refetchGetProductsCatalogQuery(variables?: GetProductsCatalogQueryVariables) {
      return { query: GetProductsCatalogDocument, variables: variables }
    }
export const GetProductsByCatalogIdDocument = gql`
    query GetProductsByCatalogId($id: Int!) {
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
 * __useGetProductsByCatalogIdQuery__
 *
 * To run a query within a React component, call `useGetProductsByCatalogIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByCatalogIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByCatalogIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductsByCatalogIdQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsByCatalogIdQuery, GetProductsByCatalogIdQueryVariables>) {
        return Apollo.useQuery<GetProductsByCatalogIdQuery, GetProductsByCatalogIdQueryVariables>(GetProductsByCatalogIdDocument, baseOptions);
      }
export function useGetProductsByCatalogIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsByCatalogIdQuery, GetProductsByCatalogIdQueryVariables>) {
          return Apollo.useLazyQuery<GetProductsByCatalogIdQuery, GetProductsByCatalogIdQueryVariables>(GetProductsByCatalogIdDocument, baseOptions);
        }
export type GetProductsByCatalogIdQueryHookResult = ReturnType<typeof useGetProductsByCatalogIdQuery>;
export type GetProductsByCatalogIdLazyQueryHookResult = ReturnType<typeof useGetProductsByCatalogIdLazyQuery>;
export type GetProductsByCatalogIdQueryResult = Apollo.QueryResult<GetProductsByCatalogIdQuery, GetProductsByCatalogIdQueryVariables>;
export function refetchGetProductsByCatalogIdQuery(variables?: GetProductsByCatalogIdQueryVariables) {
      return { query: GetProductsByCatalogIdDocument, variables: variables }
    }
export const GetCategoriesByCatalogIdDocument = gql`
    query GetCategoriesByCatalogId($oid: UUID!) {
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
 * __useGetCategoriesByCatalogIdQuery__
 *
 * To run a query within a React component, call `useGetCategoriesByCatalogIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesByCatalogIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesByCatalogIdQuery({
 *   variables: {
 *      oid: // value for 'oid'
 *   },
 * });
 */
export function useGetCategoriesByCatalogIdQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesByCatalogIdQuery, GetCategoriesByCatalogIdQueryVariables>) {
        return Apollo.useQuery<GetCategoriesByCatalogIdQuery, GetCategoriesByCatalogIdQueryVariables>(GetCategoriesByCatalogIdDocument, baseOptions);
      }
export function useGetCategoriesByCatalogIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesByCatalogIdQuery, GetCategoriesByCatalogIdQueryVariables>) {
          return Apollo.useLazyQuery<GetCategoriesByCatalogIdQuery, GetCategoriesByCatalogIdQueryVariables>(GetCategoriesByCatalogIdDocument, baseOptions);
        }
export type GetCategoriesByCatalogIdQueryHookResult = ReturnType<typeof useGetCategoriesByCatalogIdQuery>;
export type GetCategoriesByCatalogIdLazyQueryHookResult = ReturnType<typeof useGetCategoriesByCatalogIdLazyQuery>;
export type GetCategoriesByCatalogIdQueryResult = Apollo.QueryResult<GetCategoriesByCatalogIdQuery, GetCategoriesByCatalogIdQueryVariables>;
export function refetchGetCategoriesByCatalogIdQuery(variables?: GetCategoriesByCatalogIdQueryVariables) {
      return { query: GetCategoriesByCatalogIdDocument, variables: variables }
    }
export const GetCatalogCategoriesDocument = gql`
    query GetCatalogCategories($id: Int!) {
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
 * __useGetCatalogCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCatalogCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatalogCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatalogCategoriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCatalogCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCatalogCategoriesQuery, GetCatalogCategoriesQueryVariables>) {
        return Apollo.useQuery<GetCatalogCategoriesQuery, GetCatalogCategoriesQueryVariables>(GetCatalogCategoriesDocument, baseOptions);
      }
export function useGetCatalogCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatalogCategoriesQuery, GetCatalogCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<GetCatalogCategoriesQuery, GetCatalogCategoriesQueryVariables>(GetCatalogCategoriesDocument, baseOptions);
        }
export type GetCatalogCategoriesQueryHookResult = ReturnType<typeof useGetCatalogCategoriesQuery>;
export type GetCatalogCategoriesLazyQueryHookResult = ReturnType<typeof useGetCatalogCategoriesLazyQuery>;
export type GetCatalogCategoriesQueryResult = Apollo.QueryResult<GetCatalogCategoriesQuery, GetCatalogCategoriesQueryVariables>;
export function refetchGetCatalogCategoriesQuery(variables?: GetCatalogCategoriesQueryVariables) {
      return { query: GetCatalogCategoriesDocument, variables: variables }
    }
export const GetCategoriesByVersionIdDocument = gql`
    query GetCategoriesByVersionId($id: Int!) {
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
 * __useGetCategoriesByVersionIdQuery__
 *
 * To run a query within a React component, call `useGetCategoriesByVersionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesByVersionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesByVersionIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoriesByVersionIdQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesByVersionIdQuery, GetCategoriesByVersionIdQueryVariables>) {
        return Apollo.useQuery<GetCategoriesByVersionIdQuery, GetCategoriesByVersionIdQueryVariables>(GetCategoriesByVersionIdDocument, baseOptions);
      }
export function useGetCategoriesByVersionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesByVersionIdQuery, GetCategoriesByVersionIdQueryVariables>) {
          return Apollo.useLazyQuery<GetCategoriesByVersionIdQuery, GetCategoriesByVersionIdQueryVariables>(GetCategoriesByVersionIdDocument, baseOptions);
        }
export type GetCategoriesByVersionIdQueryHookResult = ReturnType<typeof useGetCategoriesByVersionIdQuery>;
export type GetCategoriesByVersionIdLazyQueryHookResult = ReturnType<typeof useGetCategoriesByVersionIdLazyQuery>;
export type GetCategoriesByVersionIdQueryResult = Apollo.QueryResult<GetCategoriesByVersionIdQuery, GetCategoriesByVersionIdQueryVariables>;
export function refetchGetCategoriesByVersionIdQuery(variables?: GetCategoriesByVersionIdQueryVariables) {
      return { query: GetCategoriesByVersionIdDocument, variables: variables }
    }
export const GetLeadsAccountDocument = gql`
    query GetLeadsAccount($account: UUID!) {
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
 * __useGetLeadsAccountQuery__
 *
 * To run a query within a React component, call `useGetLeadsAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLeadsAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLeadsAccountQuery({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useGetLeadsAccountQuery(baseOptions?: Apollo.QueryHookOptions<GetLeadsAccountQuery, GetLeadsAccountQueryVariables>) {
        return Apollo.useQuery<GetLeadsAccountQuery, GetLeadsAccountQueryVariables>(GetLeadsAccountDocument, baseOptions);
      }
export function useGetLeadsAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLeadsAccountQuery, GetLeadsAccountQueryVariables>) {
          return Apollo.useLazyQuery<GetLeadsAccountQuery, GetLeadsAccountQueryVariables>(GetLeadsAccountDocument, baseOptions);
        }
export type GetLeadsAccountQueryHookResult = ReturnType<typeof useGetLeadsAccountQuery>;
export type GetLeadsAccountLazyQueryHookResult = ReturnType<typeof useGetLeadsAccountLazyQuery>;
export type GetLeadsAccountQueryResult = Apollo.QueryResult<GetLeadsAccountQuery, GetLeadsAccountQueryVariables>;
export function refetchGetLeadsAccountQuery(variables?: GetLeadsAccountQueryVariables) {
      return { query: GetLeadsAccountDocument, variables: variables }
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
    }
  }
}
    ${CatalogFragmentDoc}`;
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
    }
  }
}
    ${CatalogFragmentDoc}`;
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
    }
  }
}
    ${VersionFragmentDoc}`;
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
    }
  }
}
    ${VersionFragmentDoc}`;
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
export const GetCatalogFeedsDocument = gql`
    query GetCatalogFeeds {
  feeds {
    ...Feed
  }
}
    ${FeedFragmentDoc}`;

/**
 * __useGetCatalogFeedsQuery__
 *
 * To run a query within a React component, call `useGetCatalogFeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatalogFeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatalogFeedsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCatalogFeedsQuery(baseOptions?: Apollo.QueryHookOptions<GetCatalogFeedsQuery, GetCatalogFeedsQueryVariables>) {
        return Apollo.useQuery<GetCatalogFeedsQuery, GetCatalogFeedsQueryVariables>(GetCatalogFeedsDocument, baseOptions);
      }
export function useGetCatalogFeedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatalogFeedsQuery, GetCatalogFeedsQueryVariables>) {
          return Apollo.useLazyQuery<GetCatalogFeedsQuery, GetCatalogFeedsQueryVariables>(GetCatalogFeedsDocument, baseOptions);
        }
export type GetCatalogFeedsQueryHookResult = ReturnType<typeof useGetCatalogFeedsQuery>;
export type GetCatalogFeedsLazyQueryHookResult = ReturnType<typeof useGetCatalogFeedsLazyQuery>;
export type GetCatalogFeedsQueryResult = Apollo.QueryResult<GetCatalogFeedsQuery, GetCatalogFeedsQueryVariables>;
export function refetchGetCatalogFeedsQuery(variables?: GetCatalogFeedsQueryVariables) {
      return { query: GetCatalogFeedsDocument, variables: variables }
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