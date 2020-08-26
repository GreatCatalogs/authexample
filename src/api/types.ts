export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: any;
  /** A signed eight-byte integer. The upper big integer values are greater than the max value for a JavaScript number. Therefore all big integers will be output as strings and not numbers. */
  BigInt: any;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
};

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. */
  query: Query;
  /** Reads and enables pagination through a set of `Account`. */
  accountsConnection?: Maybe<AccountsConnection>;
  /** Reads a set of `Account`. */
  accounts?: Maybe<Array<Account>>;
  /** Reads and enables pagination through a set of `AuthorizedUser`. */
  authorizedUsersConnection?: Maybe<AuthorizedUsersConnection>;
  /** Reads a set of `AuthorizedUser`. */
  authorizedUsers?: Maybe<Array<AuthorizedUser>>;
  /** Reads and enables pagination through a set of `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserAuthorizedUsersAccountPartnerAccessesConnection?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessesConnection>;
  /** Reads a set of `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserAuthorizedUsersAccountPartnerAccesses?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccess>>;
  /** Reads and enables pagination through a set of `Campaign`. */
  campaignsConnection?: Maybe<CampaignsConnection>;
  /** Reads a set of `Campaign`. */
  campaigns?: Maybe<Array<Campaign>>;
  /** Reads and enables pagination through a set of `CampaignGroup`. */
  campaignGroupsConnection?: Maybe<CampaignGroupsConnection>;
  /** Reads a set of `CampaignGroup`. */
  campaignGroups?: Maybe<Array<CampaignGroup>>;
  /** Reads and enables pagination through a set of `CampaignUser`. */
  campaignUsersConnection?: Maybe<CampaignUsersConnection>;
  /** Reads a set of `CampaignUser`. */
  campaignUsers?: Maybe<Array<CampaignUser>>;
  /** Reads and enables pagination through a set of `Catalog`. */
  catalogsConnection?: Maybe<CatalogsConnection>;
  /** Reads a set of `Catalog`. */
  catalogs?: Maybe<Array<Catalog>>;
  /** Reads and enables pagination through a set of `Category`. */
  categoriesConnection?: Maybe<CategoriesConnection>;
  /** Reads a set of `Category`. */
  categories?: Maybe<Array<Category>>;
  /** Reads and enables pagination through a set of `CategoryByCatalog`. */
  categoryByCatalogsConnection?: Maybe<CategoryByCatalogsConnection>;
  /** Reads a set of `CategoryByCatalog`. */
  categoryByCatalogs?: Maybe<Array<CategoryByCatalog>>;
  /** Reads and enables pagination through a set of `Contact`. */
  contactsConnection?: Maybe<ContactsConnection>;
  /** Reads a set of `Contact`. */
  contacts?: Maybe<Array<Contact>>;
  /** Reads and enables pagination through a set of `Department`. */
  departmentsConnection?: Maybe<DepartmentsConnection>;
  /** Reads a set of `Department`. */
  departments?: Maybe<Array<Department>>;
  /** Reads and enables pagination through a set of `DepartmentDepartmentsCatalogListing`. */
  departmentDepartmentsCatalogListingsConnection?: Maybe<DepartmentDepartmentsCatalogListingsConnection>;
  /** Reads a set of `DepartmentDepartmentsCatalogListing`. */
  departmentDepartmentsCatalogListings?: Maybe<Array<DepartmentDepartmentsCatalogListing>>;
  /** Reads and enables pagination through a set of `Feed`. */
  feedsConnection?: Maybe<FeedsConnection>;
  /** Reads a set of `Feed`. */
  feeds?: Maybe<Array<Feed>>;
  /** Reads and enables pagination through a set of `FeedHistory`. */
  feedHistoriesConnection?: Maybe<FeedHistoriesConnection>;
  /** Reads a set of `FeedHistory`. */
  feedHistories?: Maybe<Array<FeedHistory>>;
  /** Reads and enables pagination through a set of `Lead`. */
  leadsConnection?: Maybe<LeadsConnection>;
  /** Reads a set of `Lead`. */
  leads?: Maybe<Array<Lead>>;
  /** Reads and enables pagination through a set of `LinkOut`. */
  linkOutsConnection?: Maybe<LinkOutsConnection>;
  /** Reads a set of `LinkOut`. */
  linkOuts?: Maybe<Array<LinkOut>>;
  /** Reads and enables pagination through a set of `NavigationItem`. */
  navigationItemsConnection?: Maybe<NavigationItemsConnection>;
  /** Reads a set of `NavigationItem`. */
  navigationItems?: Maybe<Array<NavigationItem>>;
  /** Reads and enables pagination through a set of `Offer`. */
  offersConnection?: Maybe<OffersConnection>;
  /** Reads a set of `Offer`. */
  offers?: Maybe<Array<Offer>>;
  /** Reads and enables pagination through a set of `Order`. */
  ordersConnection?: Maybe<OrdersConnection>;
  /** Reads a set of `Order`. */
  orders?: Maybe<Array<Order>>;
  /** Reads and enables pagination through a set of `OrderProduct`. */
  orderProductsConnection?: Maybe<OrderProductsConnection>;
  /** Reads a set of `OrderProduct`. */
  orderProducts?: Maybe<Array<OrderProduct>>;
  /** Reads and enables pagination through a set of `Page`. */
  pagesConnection?: Maybe<PagesConnection>;
  /** Reads a set of `Page`. */
  pages?: Maybe<Array<Page>>;
  /** Reads and enables pagination through a set of `Product`. */
  productsConnection?: Maybe<ProductsConnection>;
  /** Reads a set of `Product`. */
  products?: Maybe<Array<Product>>;
  /** Reads and enables pagination through a set of `ProductsByVersion`. */
  productsByVersionsConnection?: Maybe<ProductsByVersionsConnection>;
  /** Reads a set of `ProductsByVersion`. */
  productsByVersions?: Maybe<Array<ProductsByVersion>>;
  /** Reads and enables pagination through a set of `Profile`. */
  profilesConnection?: Maybe<ProfilesConnection>;
  /** Reads a set of `Profile`. */
  profiles?: Maybe<Array<Profile>>;
  /** Reads and enables pagination through a set of `SubCategory`. */
  subCategoriesConnection?: Maybe<SubCategoriesConnection>;
  /** Reads a set of `SubCategory`. */
  subCategories?: Maybe<Array<SubCategory>>;
  /** Reads and enables pagination through a set of `SubProduct`. */
  subProductsConnection?: Maybe<SubProductsConnection>;
  /** Reads a set of `SubProduct`. */
  subProducts?: Maybe<Array<SubProduct>>;
  /** Reads and enables pagination through a set of `Subscription`. */
  subscriptionsConnection?: Maybe<SubscriptionsConnection>;
  /** Reads a set of `Subscription`. */
  subscriptions?: Maybe<Array<Subscription>>;
  /** Reads and enables pagination through a set of `Version`. */
  versionsConnection?: Maybe<VersionsConnection>;
  /** Reads a set of `Version`. */
  versions?: Maybe<Array<Version>>;
  /** Reads and enables pagination through a set of `CatalogSearch`. */
  catalogSearchesConnection?: Maybe<CatalogSearchesConnection>;
  /** Reads a set of `CatalogSearch`. */
  catalogSearches?: Maybe<Array<CatalogSearch>>;
  account?: Maybe<Account>;
  authorizedUser?: Maybe<AuthorizedUser>;
  authorizedUserByEmail?: Maybe<AuthorizedUser>;
  authorizedUserAuthorizedUsersAccountPartnerAccess?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccess>;
  campaign?: Maybe<Campaign>;
  campaignGroup?: Maybe<CampaignGroup>;
  campaignUser?: Maybe<CampaignUser>;
  catalog?: Maybe<Catalog>;
  catalogById?: Maybe<Catalog>;
  category?: Maybe<Category>;
  categoryById?: Maybe<Category>;
  contact?: Maybe<Contact>;
  department?: Maybe<Department>;
  departmentDepartmentsCatalogListing?: Maybe<DepartmentDepartmentsCatalogListing>;
  feed?: Maybe<Feed>;
  feedHistory?: Maybe<FeedHistory>;
  lead?: Maybe<Lead>;
  linkOut?: Maybe<LinkOut>;
  navigationItem?: Maybe<NavigationItem>;
  offer?: Maybe<Offer>;
  order?: Maybe<Order>;
  orderProduct?: Maybe<OrderProduct>;
  page?: Maybe<Page>;
  product?: Maybe<Product>;
  profile?: Maybe<Profile>;
  subCategory?: Maybe<SubCategory>;
  subCategoryById?: Maybe<SubCategory>;
  subscription?: Maybe<Subscription>;
  version?: Maybe<Version>;
  versionById?: Maybe<Version>;
  jsonIntext?: Maybe<Scalars['JSON']>;
  /** Reads and enables pagination through a set of `Catalog`. */
  searchCatalogConnection: CatalogsConnection;
  /** Reads and enables pagination through a set of `Catalog`. */
  searchCatalog?: Maybe<Array<Maybe<Catalog>>>;
  /** Reads and enables pagination through a set of `Catalog`. */
  searchCatalogDeptConnection: CatalogsConnection;
  /** Reads and enables pagination through a set of `Catalog`. */
  searchCatalogDept?: Maybe<Array<Maybe<Catalog>>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
  condition?: Maybe<AccountCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
  condition?: Maybe<AccountCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorizedUsersConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AuthorizedUsersOrderBy>>;
  condition?: Maybe<AuthorizedUserCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorizedUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AuthorizedUsersOrderBy>>;
  condition?: Maybe<AuthorizedUserCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorizedUserAuthorizedUsersAccountPartnerAccessesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
  condition?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorizedUserAuthorizedUsersAccountPartnerAccessesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
  condition?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CampaignsOrderBy>>;
  condition?: Maybe<CampaignCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CampaignsOrderBy>>;
  condition?: Maybe<CampaignCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignGroupsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
  condition?: Maybe<CampaignGroupCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignGroupsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
  condition?: Maybe<CampaignGroupCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignUsersConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
  condition?: Maybe<CampaignUserCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
  condition?: Maybe<CampaignUserCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCatalogsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
  condition?: Maybe<CatalogCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCatalogsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
  condition?: Maybe<CatalogCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoriesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
  condition?: Maybe<CategoryCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
  condition?: Maybe<CategoryCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByCatalogsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CategoryByCatalogsOrderBy>>;
  condition?: Maybe<CategoryByCatalogCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByCatalogsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CategoryByCatalogsOrderBy>>;
  condition?: Maybe<CategoryByCatalogCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryContactsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ContactsOrderBy>>;
  condition?: Maybe<ContactCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryContactsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ContactsOrderBy>>;
  condition?: Maybe<ContactCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDepartmentsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DepartmentsOrderBy>>;
  condition?: Maybe<DepartmentCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDepartmentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DepartmentsOrderBy>>;
  condition?: Maybe<DepartmentCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDepartmentDepartmentsCatalogListingsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
  condition?: Maybe<DepartmentDepartmentsCatalogListingCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDepartmentDepartmentsCatalogListingsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
  condition?: Maybe<DepartmentDepartmentsCatalogListingCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeedsOrderBy>>;
  condition?: Maybe<FeedCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<FeedsOrderBy>>;
  condition?: Maybe<FeedCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedHistoriesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeedHistoriesOrderBy>>;
  condition?: Maybe<FeedHistoryCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedHistoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<FeedHistoriesOrderBy>>;
  condition?: Maybe<FeedHistoryCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLeadsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LeadsOrderBy>>;
  condition?: Maybe<LeadCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLeadsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LeadsOrderBy>>;
  condition?: Maybe<LeadCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLinkOutsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
  condition?: Maybe<LinkOutCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLinkOutsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
  condition?: Maybe<LinkOutCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNavigationItemsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<NavigationItemsOrderBy>>;
  condition?: Maybe<NavigationItemCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNavigationItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<NavigationItemsOrderBy>>;
  condition?: Maybe<NavigationItemCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOffersConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<OffersOrderBy>>;
  condition?: Maybe<OfferCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOffersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OffersOrderBy>>;
  condition?: Maybe<OfferCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOrdersConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<OrdersOrderBy>>;
  condition?: Maybe<OrderCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OrdersOrderBy>>;
  condition?: Maybe<OrderCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOrderProductsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<OrderProductsOrderBy>>;
  condition?: Maybe<OrderProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOrderProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OrderProductsOrderBy>>;
  condition?: Maybe<OrderProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPagesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PagesOrderBy>>;
  condition?: Maybe<PageCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PagesOrderBy>>;
  condition?: Maybe<PageCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProductsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProductsByVersionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProductsByVersionsOrderBy>>;
  condition?: Maybe<ProductsByVersionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProductsByVersionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProductsByVersionsOrderBy>>;
  condition?: Maybe<ProductsByVersionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProfilesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProfilesOrderBy>>;
  condition?: Maybe<ProfileCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProfilesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProfilesOrderBy>>;
  condition?: Maybe<ProfileCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubCategoriesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubCategoriesOrderBy>>;
  condition?: Maybe<SubCategoryCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SubCategoriesOrderBy>>;
  condition?: Maybe<SubCategoryCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubProductsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubProductsOrderBy>>;
  condition?: Maybe<SubProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SubProductsOrderBy>>;
  condition?: Maybe<SubProductCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
  condition?: Maybe<SubscriptionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
  condition?: Maybe<SubscriptionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryVersionsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<VersionsOrderBy>>;
  condition?: Maybe<VersionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryVersionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<VersionsOrderBy>>;
  condition?: Maybe<VersionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCatalogSearchesConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CatalogSearchesOrderBy>>;
  condition?: Maybe<CatalogSearchCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCatalogSearchesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CatalogSearchesOrderBy>>;
  condition?: Maybe<CatalogSearchCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorizedUserArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorizedUserByEmailArgs = {
  email: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorizedUserAuthorizedUsersAccountPartnerAccessArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignGroupArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCampaignUserArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCatalogArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCatalogByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContactArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDepartmentArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDepartmentDepartmentsCatalogListingArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFeedHistoryArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLeadArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLinkOutArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNavigationItemArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOfferArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrderArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrderProductArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPageArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProductArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProfileArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubCategoryArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubCategoryByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVersionArgs = {
  oid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVersionByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJsonIntextArgs = {
  arg0?: Maybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchCatalogConnectionArgs = {
  search?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchCatalogArgs = {
  search?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchCatalogDeptConnectionArgs = {
  search?: Maybe<Scalars['String']>;
  primarydepartment?: Maybe<Scalars['UUID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchCatalogDeptArgs = {
  search?: Maybe<Scalars['String']>;
  primarydepartment?: Maybe<Scalars['UUID']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  ImageUrlAsc = 'IMAGE_URL_ASC',
  ImageUrlDesc = 'IMAGE_URL_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  StreetAsc = 'STREET_ASC',
  StreetDesc = 'STREET_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  ZipPostalAsc = 'ZIP_POSTAL_ASC',
  ZipPostalDesc = 'ZIP_POSTAL_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  LoginAsc = 'LOGIN_ASC',
  LoginDesc = 'LOGIN_DESC',
  CommentsAsc = 'COMMENTS_ASC',
  CommentsDesc = 'COMMENTS_DESC',
  DefaultTrackingCodeAsc = 'DEFAULT_TRACKING_CODE_ASC',
  DefaultTrackingCodeDesc = 'DEFAULT_TRACKING_CODE_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  CreatedOnAsc = 'CREATED_ON_ASC',
  CreatedOnDesc = 'CREATED_ON_DESC',
  HomePageUrlAsc = 'HOME_PAGE_URL_ASC',
  HomePageUrlDesc = 'HOME_PAGE_URL_DESC',
  LegacyIdAsc = 'LEGACY_ID_ASC',
  LegacyIdDesc = 'LEGACY_ID_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  CustomSmsNumberAsc = 'CUSTOM_SMS_NUMBER_ASC',
  CustomSmsNumberDesc = 'CUSTOM_SMS_NUMBER_DESC',
  LogoAsc = 'LOGO_ASC',
  LogoDesc = 'LOGO_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `imageUrl` field. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `street` field. */
  street?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `state` field. */
  state?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `zipPostal` field. */
  zipPostal?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `active` field. */
  active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `login` field. */
  login?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `comments` field. */
  comments?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `defaultTrackingCode` field. */
  defaultTrackingCode?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdOn` field. */
  createdOn?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `homePageUrl` field. */
  homePageUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `legacyId` field. */
  legacyId?: Maybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `customSmsNumber` field. */
  customSmsNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `logo` field. */
  logo?: Maybe<Scalars['String']>;
};





/** A connection to a list of `Account` values. */
export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Account = {
  __typename?: 'Account';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Catalog`. */
  catalogsByAccountConnection: CatalogsConnection;
  /** Reads and enables pagination through a set of `Catalog`. */
  catalogsByAccount: Array<Catalog>;
  /** Reads and enables pagination through a set of `Contact`. */
  contactsByParentConnection: ContactsConnection;
  /** Reads and enables pagination through a set of `Contact`. */
  contactsByParent: Array<Contact>;
  /** Reads and enables pagination through a set of `Campaign`. */
  campaignsByAccountConnection: CampaignsConnection;
  /** Reads and enables pagination through a set of `Campaign`. */
  campaignsByAccount: Array<Campaign>;
  /** Reads and enables pagination through a set of `Lead`. */
  leadsByAccountConnection: LeadsConnection;
  /** Reads and enables pagination through a set of `Lead`. */
  leadsByAccount: Array<Lead>;
  /** Reads and enables pagination through a set of `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserAuthorizedUsersAccountPartnerAccessesByPartnerAccessConnection: AuthorizedUserAuthorizedUsersAccountPartnerAccessesConnection;
  /** Reads and enables pagination through a set of `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserAuthorizedUsersAccountPartnerAccessesByPartnerAccess: Array<AuthorizedUserAuthorizedUsersAccountPartnerAccess>;
};


export type AccountCatalogsByAccountConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
  condition?: Maybe<CatalogCondition>;
};


export type AccountCatalogsByAccountArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
  condition?: Maybe<CatalogCondition>;
};


export type AccountContactsByParentConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ContactsOrderBy>>;
  condition?: Maybe<ContactCondition>;
};


export type AccountContactsByParentArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ContactsOrderBy>>;
  condition?: Maybe<ContactCondition>;
};


export type AccountCampaignsByAccountConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CampaignsOrderBy>>;
  condition?: Maybe<CampaignCondition>;
};


export type AccountCampaignsByAccountArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CampaignsOrderBy>>;
  condition?: Maybe<CampaignCondition>;
};


export type AccountLeadsByAccountConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LeadsOrderBy>>;
  condition?: Maybe<LeadCondition>;
};


export type AccountLeadsByAccountArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LeadsOrderBy>>;
  condition?: Maybe<LeadCondition>;
};


export type AccountAuthorizedUserAuthorizedUsersAccountPartnerAccessesByPartnerAccessConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
  condition?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessCondition>;
};


export type AccountAuthorizedUserAuthorizedUsersAccountPartnerAccessesByPartnerAccessArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
  condition?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessCondition>;
};

/** Methods to use when ordering `Catalog`. */
export enum CatalogsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  CoverAsc = 'COVER_ASC',
  CoverDesc = 'COVER_DESC',
  ViewableAsc = 'VIEWABLE_ASC',
  ViewableDesc = 'VIEWABLE_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  CatalogFormatAsc = 'CATALOG_FORMAT_ASC',
  CatalogFormatDesc = 'CATALOG_FORMAT_DESC',
  LinkUrlAsc = 'LINK_URL_ASC',
  LinkUrlDesc = 'LINK_URL_DESC',
  LeadChargeAsc = 'LEAD_CHARGE_ASC',
  LeadChargeDesc = 'LEAD_CHARGE_DESC',
  LinkChargeAsc = 'LINK_CHARGE_ASC',
  LinkChargeDesc = 'LINK_CHARGE_DESC',
  FlatFeeAsc = 'FLAT_FEE_ASC',
  FlatFeeDesc = 'FLAT_FEE_DESC',
  DateExpiredAsc = 'DATE_EXPIRED_ASC',
  DateExpiredDesc = 'DATE_EXPIRED_DESC',
  TrackingCodeAsc = 'TRACKING_CODE_ASC',
  TrackingCodeDesc = 'TRACKING_CODE_DESC',
  HeadingAsc = 'HEADING_ASC',
  HeadingDesc = 'HEADING_DESC',
  ShowCategoryLinksAsc = 'SHOW_CATEGORY_LINKS_ASC',
  ShowCategoryLinksDesc = 'SHOW_CATEGORY_LINKS_DESC',
  CommentsAsc = 'COMMENTS_ASC',
  CommentsDesc = 'COMMENTS_DESC',
  StartDateAsc = 'START_DATE_ASC',
  StartDateDesc = 'START_DATE_DESC',
  OfferCopyAsc = 'OFFER_COPY_ASC',
  OfferCopyDesc = 'OFFER_COPY_DESC',
  IntroCopyAsc = 'INTRO_COPY_ASC',
  IntroCopyDesc = 'INTRO_COPY_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  MetaDescriptionAsc = 'META_DESCRIPTION_ASC',
  MetaDescriptionDesc = 'META_DESCRIPTION_DESC',
  BlurbAsc = 'BLURB_ASC',
  BlurbDesc = 'BLURB_DESC',
  FeatureCopyAsc = 'FEATURE_COPY_ASC',
  FeatureCopyDesc = 'FEATURE_COPY_DESC',
  AltTextAsc = 'ALT_TEXT_ASC',
  AltTextDesc = 'ALT_TEXT_DESC',
  KeywordsAsc = 'KEYWORDS_ASC',
  KeywordsDesc = 'KEYWORDS_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  LongDescriptionAsc = 'LONG_DESCRIPTION_ASC',
  LongDescriptionDesc = 'LONG_DESCRIPTION_DESC',
  ClassAsc = 'CLASS_ASC',
  ClassDesc = 'CLASS_DESC',
  SearchAppendCodeAsc = 'SEARCH_APPEND_CODE_ASC',
  SearchAppendCodeDesc = 'SEARCH_APPEND_CODE_DESC',
  AccountAsc = 'ACCOUNT_ASC',
  AccountDesc = 'ACCOUNT_DESC',
  PrimaryDepartmentAsc = 'PRIMARY_DEPARTMENT_ASC',
  PrimaryDepartmentDesc = 'PRIMARY_DEPARTMENT_DESC',
  IsDigitalAsc = 'IS_DIGITAL_ASC',
  IsDigitalDesc = 'IS_DIGITAL_DESC',
  MerchantIdAsc = 'MERCHANT_ID_ASC',
  MerchantIdDesc = 'MERCHANT_ID_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  AutoActivateAsc = 'AUTO_ACTIVATE_ASC',
  AutoActivateDesc = 'AUTO_ACTIVATE_DESC',
  GroupHubspotIdAsc = 'GROUP_HUBSPOT_ID_ASC',
  GroupHubspotIdDesc = 'GROUP_HUBSPOT_ID_DESC',
  CustomSubdomainAsc = 'CUSTOM_SUBDOMAIN_ASC',
  CustomSubdomainDesc = 'CUSTOM_SUBDOMAIN_DESC',
  Text2DisclaimerAsc = 'TEXT2DISCLAIMER_ASC',
  Text2DisclaimerDesc = 'TEXT2DISCLAIMER_DESC',
  ActiveVersionAsc = 'ACTIVE_VERSION_ASC',
  ActiveVersionDesc = 'ACTIVE_VERSION_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  ShortDescriptionAsc = 'SHORT_DESCRIPTION_ASC',
  ShortDescriptionDesc = 'SHORT_DESCRIPTION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Catalog` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CatalogCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `cover` field. */
  cover?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `viewable` field. */
  viewable?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `active` field. */
  active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `catalogFormat` field. */
  catalogFormat?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `linkUrl` field. */
  linkUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `leadCharge` field. */
  leadCharge?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `linkCharge` field. */
  linkCharge?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `flatFee` field. */
  flatFee?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `dateExpired` field. */
  dateExpired?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `trackingCode` field. */
  trackingCode?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `heading` field. */
  heading?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `showCategoryLinks` field. */
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `comments` field. */
  comments?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `startDate` field. */
  startDate?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `offerCopy` field. */
  offerCopy?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `introCopy` field. */
  introCopy?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `metaTitle` field. */
  metaTitle?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `metaDescription` field. */
  metaDescription?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `blurb` field. */
  blurb?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `featureCopy` field. */
  featureCopy?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `altText` field. */
  altText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `keywords` field. */
  keywords?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `longDescription` field. */
  longDescription?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `class` field. */
  class?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `searchAppendCode` field. */
  searchAppendCode?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `account` field. */
  account?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `primaryDepartment` field. */
  primaryDepartment?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `isDigital` field. */
  isDigital?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `merchantId` field. */
  merchantId?: Maybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `label` field. */
  label?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `autoActivate` field. */
  autoActivate?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `groupHubspotId` field. */
  groupHubspotId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `customSubdomain` field. */
  customSubdomain?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `text2Disclaimer` field. */
  text2Disclaimer?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `activeVersion` field. */
  activeVersion?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `shortDescription` field. */
  shortDescription?: Maybe<Scalars['String']>;
};


/** A connection to a list of `Catalog` values. */
export type CatalogsConnection = {
  __typename?: 'CatalogsConnection';
  /** A list of `Catalog` objects. */
  nodes: Array<Maybe<Catalog>>;
  /** A list of edges which contains the `Catalog` and cursor to aid in pagination. */
  edges: Array<CatalogsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Catalog` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Catalog = {
  __typename?: 'Catalog';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  /** Reads a single `Account` that is related to this `Catalog`. */
  accountByAccount?: Maybe<Account>;
  /** Reads a single `Department` that is related to this `Catalog`. */
  departmentByPrimaryDepartment?: Maybe<Department>;
  /** Reads a single `Version` that is related to this `Catalog`. */
  versionByActiveVersion?: Maybe<Version>;
  /** Reads and enables pagination through a set of `DepartmentDepartmentsCatalogListing`. */
  departmentDepartmentsCatalogListingsByListingsConnection: DepartmentDepartmentsCatalogListingsConnection;
  /** Reads and enables pagination through a set of `DepartmentDepartmentsCatalogListing`. */
  departmentDepartmentsCatalogListingsByListings: Array<DepartmentDepartmentsCatalogListing>;
  /** Reads and enables pagination through a set of `Version`. */
  versionsByCatalogConnection: VersionsConnection;
  /** Reads and enables pagination through a set of `Version`. */
  versionsByCatalog: Array<Version>;
  /** Reads and enables pagination through a set of `Offer`. */
  offersByCatalogConnection: OffersConnection;
  /** Reads and enables pagination through a set of `Offer`. */
  offersByCatalog: Array<Offer>;
  /** Reads and enables pagination through a set of `Category`. */
  categoriesByCatalogConnection: CategoriesConnection;
  /** Reads and enables pagination through a set of `Category`. */
  categoriesByCatalog: Array<Category>;
  /** Reads and enables pagination through a set of `Feed`. */
  feedsByCatalogConnection: FeedsConnection;
  /** Reads and enables pagination through a set of `Feed`. */
  feedsByCatalog: Array<Feed>;
  /** Reads and enables pagination through a set of `Product`. */
  productsByCatalogConnection: ProductsConnection;
  /** Reads and enables pagination through a set of `Product`. */
  productsByCatalog: Array<Product>;
  /** Reads and enables pagination through a set of `CampaignGroup`. */
  campaignGroupsByCatalogConnection: CampaignGroupsConnection;
  /** Reads and enables pagination through a set of `CampaignGroup`. */
  campaignGroupsByCatalog: Array<CampaignGroup>;
  /** Reads and enables pagination through a set of `Subscription`. */
  subscriptionsByCatalogConnection: SubscriptionsConnection;
  /** Reads and enables pagination through a set of `Subscription`. */
  subscriptionsByCatalog: Array<Subscription>;
  /** Reads and enables pagination through a set of `LinkOut`. */
  linkOutsByCatalogConnection: LinkOutsConnection;
  /** Reads and enables pagination through a set of `LinkOut`. */
  linkOutsByCatalog: Array<LinkOut>;
  /** Reads and enables pagination through a set of `CategoryByCatalog`. */
  categoryByCatalogsByCatalogConnection: CategoryByCatalogsConnection;
  /** Reads and enables pagination through a set of `CategoryByCatalog`. */
  categoryByCatalogsByCatalog: Array<CategoryByCatalog>;
};


export type CatalogDepartmentDepartmentsCatalogListingsByListingsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
  condition?: Maybe<DepartmentDepartmentsCatalogListingCondition>;
};


export type CatalogDepartmentDepartmentsCatalogListingsByListingsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
  condition?: Maybe<DepartmentDepartmentsCatalogListingCondition>;
};


export type CatalogVersionsByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<VersionsOrderBy>>;
  condition?: Maybe<VersionCondition>;
};


export type CatalogVersionsByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<VersionsOrderBy>>;
  condition?: Maybe<VersionCondition>;
};


export type CatalogOffersByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<OffersOrderBy>>;
  condition?: Maybe<OfferCondition>;
};


export type CatalogOffersByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OffersOrderBy>>;
  condition?: Maybe<OfferCondition>;
};


export type CatalogCategoriesByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
  condition?: Maybe<CategoryCondition>;
};


export type CatalogCategoriesByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
  condition?: Maybe<CategoryCondition>;
};


export type CatalogFeedsByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeedsOrderBy>>;
  condition?: Maybe<FeedCondition>;
};


export type CatalogFeedsByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<FeedsOrderBy>>;
  condition?: Maybe<FeedCondition>;
};


export type CatalogProductsByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};


export type CatalogProductsByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};


export type CatalogCampaignGroupsByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
  condition?: Maybe<CampaignGroupCondition>;
};


export type CatalogCampaignGroupsByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
  condition?: Maybe<CampaignGroupCondition>;
};


export type CatalogSubscriptionsByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
  condition?: Maybe<SubscriptionCondition>;
};


export type CatalogSubscriptionsByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
  condition?: Maybe<SubscriptionCondition>;
};


export type CatalogLinkOutsByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
  condition?: Maybe<LinkOutCondition>;
};


export type CatalogLinkOutsByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
  condition?: Maybe<LinkOutCondition>;
};


export type CatalogCategoryByCatalogsByCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CategoryByCatalogsOrderBy>>;
  condition?: Maybe<CategoryByCatalogCondition>;
};


export type CatalogCategoryByCatalogsByCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CategoryByCatalogsOrderBy>>;
  condition?: Maybe<CategoryByCatalogCondition>;
};

export type Department = {
  __typename?: 'Department';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Department` that is related to this `Department`. */
  departmentByParentDepartment?: Maybe<Department>;
  /** Reads and enables pagination through a set of `Catalog`. */
  catalogsByPrimaryDepartmentConnection: CatalogsConnection;
  /** Reads and enables pagination through a set of `Catalog`. */
  catalogsByPrimaryDepartment: Array<Catalog>;
  /** Reads and enables pagination through a set of `Department`. */
  departmentsByParentDepartmentConnection: DepartmentsConnection;
  /** Reads and enables pagination through a set of `Department`. */
  departmentsByParentDepartment: Array<Department>;
  /** Reads and enables pagination through a set of `DepartmentDepartmentsCatalogListing`. */
  departmentDepartmentsCatalogListingsByDepartmentsConnection: DepartmentDepartmentsCatalogListingsConnection;
  /** Reads and enables pagination through a set of `DepartmentDepartmentsCatalogListing`. */
  departmentDepartmentsCatalogListingsByDepartments: Array<DepartmentDepartmentsCatalogListing>;
  /** Reads and enables pagination through a set of `NavigationItem`. */
  navigationItemsByDepartmentConnection: NavigationItemsConnection;
  /** Reads and enables pagination through a set of `NavigationItem`. */
  navigationItemsByDepartment: Array<NavigationItem>;
};


export type DepartmentCatalogsByPrimaryDepartmentConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
  condition?: Maybe<CatalogCondition>;
};


export type DepartmentCatalogsByPrimaryDepartmentArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
  condition?: Maybe<CatalogCondition>;
};


export type DepartmentDepartmentsByParentDepartmentConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DepartmentsOrderBy>>;
  condition?: Maybe<DepartmentCondition>;
};


export type DepartmentDepartmentsByParentDepartmentArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DepartmentsOrderBy>>;
  condition?: Maybe<DepartmentCondition>;
};


export type DepartmentDepartmentDepartmentsCatalogListingsByDepartmentsConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
  condition?: Maybe<DepartmentDepartmentsCatalogListingCondition>;
};


export type DepartmentDepartmentDepartmentsCatalogListingsByDepartmentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
  condition?: Maybe<DepartmentDepartmentsCatalogListingCondition>;
};


export type DepartmentNavigationItemsByDepartmentConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<NavigationItemsOrderBy>>;
  condition?: Maybe<NavigationItemCondition>;
};


export type DepartmentNavigationItemsByDepartmentArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<NavigationItemsOrderBy>>;
  condition?: Maybe<NavigationItemCondition>;
};

/** Methods to use when ordering `Department`. */
export enum DepartmentsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  DepartmentIdAsc = 'DEPARTMENT_ID_ASC',
  DepartmentIdDesc = 'DEPARTMENT_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  MetaTitleAsc = 'META_TITLE_ASC',
  MetaTitleDesc = 'META_TITLE_DESC',
  MetakeysAsc = 'METAKEYS_ASC',
  MetakeysDesc = 'METAKEYS_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  AltTextAsc = 'ALT_TEXT_ASC',
  AltTextDesc = 'ALT_TEXT_DESC',
  SearchTextAsc = 'SEARCH_TEXT_ASC',
  SearchTextDesc = 'SEARCH_TEXT_DESC',
  AdviceAsc = 'ADVICE_ASC',
  AdviceDesc = 'ADVICE_DESC',
  HiwIdAsc = 'HIW_ID_ASC',
  HiwIdDesc = 'HIW_ID_DESC',
  MetaTitleArticleAsc = 'META_TITLE_ARTICLE_ASC',
  MetaTitleArticleDesc = 'META_TITLE_ARTICLE_DESC',
  MetaKeysArticleAsc = 'META_KEYS_ARTICLE_ASC',
  MetaKeysArticleDesc = 'META_KEYS_ARTICLE_DESC',
  MetaDescrArticleAsc = 'META_DESCR_ARTICLE_ASC',
  MetaDescrArticleDesc = 'META_DESCR_ARTICLE_DESC',
  MetaKeysProductAsc = 'META_KEYS_PRODUCT_ASC',
  MetaKeysProductDesc = 'META_KEYS_PRODUCT_DESC',
  ArticleDeptAsc = 'ARTICLE_DEPT_ASC',
  ArticleDeptDesc = 'ARTICLE_DEPT_DESC',
  ParentDepartmentAsc = 'PARENT_DEPARTMENT_ASC',
  ParentDepartmentDesc = 'PARENT_DEPARTMENT_DESC',
  DeptTypeAsc = 'DEPT_TYPE_ASC',
  DeptTypeDesc = 'DEPT_TYPE_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Department` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DepartmentCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `departmentId` field. */
  departmentId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `active` field. */
  active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `metaTitle` field. */
  metaTitle?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `metakeys` field. */
  metakeys?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `altText` field. */
  altText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `searchText` field. */
  searchText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `advice` field. */
  advice?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `hiwId` field. */
  hiwId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `metaTitleArticle` field. */
  metaTitleArticle?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `metaKeysArticle` field. */
  metaKeysArticle?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `metaDescrArticle` field. */
  metaDescrArticle?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `metaKeysProduct` field. */
  metaKeysProduct?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `articleDept` field. */
  articleDept?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `parentDepartment` field. */
  parentDepartment?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `deptType` field. */
  deptType?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Department` values. */
export type DepartmentsConnection = {
  __typename?: 'DepartmentsConnection';
  /** A list of `Department` objects. */
  nodes: Array<Maybe<Department>>;
  /** A list of edges which contains the `Department` and cursor to aid in pagination. */
  edges: Array<DepartmentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Department` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Department` edge in the connection. */
export type DepartmentsEdge = {
  __typename?: 'DepartmentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Department` at the end of the edge. */
  node?: Maybe<Department>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** Methods to use when ordering `DepartmentDepartmentsCatalogListing`. */
export enum DepartmentDepartmentsCatalogListingsOrderBy {
  Natural = 'NATURAL',
  ListingsAsc = 'LISTINGS_ASC',
  ListingsDesc = 'LISTINGS_DESC',
  DepartmentsAsc = 'DEPARTMENTS_ASC',
  DepartmentsDesc = 'DEPARTMENTS_DESC',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `DepartmentDepartmentsCatalogListing` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DepartmentDepartmentsCatalogListingCondition = {
  /** Checks for equality with the object’s `listings` field. */
  listings?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `departments` field. */
  departments?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `DepartmentDepartmentsCatalogListing` values. */
export type DepartmentDepartmentsCatalogListingsConnection = {
  __typename?: 'DepartmentDepartmentsCatalogListingsConnection';
  /** A list of `DepartmentDepartmentsCatalogListing` objects. */
  nodes: Array<Maybe<DepartmentDepartmentsCatalogListing>>;
  /** A list of edges which contains the `DepartmentDepartmentsCatalogListing` and cursor to aid in pagination. */
  edges: Array<DepartmentDepartmentsCatalogListingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `DepartmentDepartmentsCatalogListing` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type DepartmentDepartmentsCatalogListing = {
  __typename?: 'DepartmentDepartmentsCatalogListing';
  listings?: Maybe<Scalars['UUID']>;
  departments?: Maybe<Scalars['UUID']>;
  oid: Scalars['UUID'];
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Catalog` that is related to this `DepartmentDepartmentsCatalogListing`. */
  catalogByListings?: Maybe<Catalog>;
  /** Reads a single `Department` that is related to this `DepartmentDepartmentsCatalogListing`. */
  departmentByDepartments?: Maybe<Department>;
};

/** A `DepartmentDepartmentsCatalogListing` edge in the connection. */
export type DepartmentDepartmentsCatalogListingsEdge = {
  __typename?: 'DepartmentDepartmentsCatalogListingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `DepartmentDepartmentsCatalogListing` at the end of the edge. */
  node?: Maybe<DepartmentDepartmentsCatalogListing>;
};

/** Methods to use when ordering `NavigationItem`. */
export enum NavigationItemsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  OrderIndexAsc = 'ORDER_INDEX_ASC',
  OrderIndexDesc = 'ORDER_INDEX_DESC',
  GroupTextAsc = 'GROUP_TEXT_ASC',
  GroupTextDesc = 'GROUP_TEXT_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  DepartmentAsc = 'DEPARTMENT_ASC',
  DepartmentDesc = 'DEPARTMENT_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `NavigationItem` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type NavigationItemCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `orderIndex` field. */
  orderIndex?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `groupText` field. */
  groupText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  url?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `department` field. */
  department?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `NavigationItem` values. */
export type NavigationItemsConnection = {
  __typename?: 'NavigationItemsConnection';
  /** A list of `NavigationItem` objects. */
  nodes: Array<Maybe<NavigationItem>>;
  /** A list of edges which contains the `NavigationItem` and cursor to aid in pagination. */
  edges: Array<NavigationItemsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NavigationItem` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  orderIndex?: Maybe<Scalars['Int']>;
  groupText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Department` that is related to this `NavigationItem`. */
  departmentByDepartment?: Maybe<Department>;
};

/** A `NavigationItem` edge in the connection. */
export type NavigationItemsEdge = {
  __typename?: 'NavigationItemsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `NavigationItem` at the end of the edge. */
  node?: Maybe<NavigationItem>;
};

export type Version = {
  __typename?: 'Version';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  catalog?: Maybe<Scalars['UUID']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Catalog` that is related to this `Version`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads and enables pagination through a set of `Catalog`. */
  catalogsByActiveVersionConnection: CatalogsConnection;
  /** Reads and enables pagination through a set of `Catalog`. */
  catalogsByActiveVersion: Array<Catalog>;
  /** Reads and enables pagination through a set of `Page`. */
  pagesByVersionConnection: PagesConnection;
  /** Reads and enables pagination through a set of `Page`. */
  pagesByVersion: Array<Page>;
  /** Reads and enables pagination through a set of `ProductsByVersion`. */
  productsByVersionsByVersionOidConnection: ProductsByVersionsConnection;
  /** Reads and enables pagination through a set of `ProductsByVersion`. */
  productsByVersionsByVersionOid: Array<ProductsByVersion>;
};


export type VersionCatalogsByActiveVersionConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
  condition?: Maybe<CatalogCondition>;
};


export type VersionCatalogsByActiveVersionArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
  condition?: Maybe<CatalogCondition>;
};


export type VersionPagesByVersionConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PagesOrderBy>>;
  condition?: Maybe<PageCondition>;
};


export type VersionPagesByVersionArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PagesOrderBy>>;
  condition?: Maybe<PageCondition>;
};


export type VersionProductsByVersionsByVersionOidConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProductsByVersionsOrderBy>>;
  condition?: Maybe<ProductsByVersionCondition>;
};


export type VersionProductsByVersionsByVersionOidArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProductsByVersionsOrderBy>>;
  condition?: Maybe<ProductsByVersionCondition>;
};

/** Methods to use when ordering `Page`. */
export enum PagesOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  ImageUrlAsc = 'IMAGE_URL_ASC',
  ImageUrlDesc = 'IMAGE_URL_DESC',
  ImageMetaAsc = 'IMAGE_META_ASC',
  ImageMetaDesc = 'IMAGE_META_DESC',
  ImageSourceAsc = 'IMAGE_SOURCE_ASC',
  ImageSourceDesc = 'IMAGE_SOURCE_DESC',
  PageTypeAsc = 'PAGE_TYPE_ASC',
  PageTypeDesc = 'PAGE_TYPE_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Page` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PageCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `version` field. */
  version?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `imageUrl` field. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `imageMeta` field. */
  imageMeta?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `imageSource` field. */
  imageSource?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `pageType` field. */
  pageType?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Page` values. */
export type PagesConnection = {
  __typename?: 'PagesConnection';
  /** A list of `Page` objects. */
  nodes: Array<Maybe<Page>>;
  /** A list of edges which contains the `Page` and cursor to aid in pagination. */
  edges: Array<PagesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Page` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Page = {
  __typename?: 'Page';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  version?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  imageMeta?: Maybe<Scalars['String']>;
  imageSource?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Version` that is related to this `Page`. */
  versionByVersion?: Maybe<Version>;
};

/** A `Page` edge in the connection. */
export type PagesEdge = {
  __typename?: 'PagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Page` at the end of the edge. */
  node?: Maybe<Page>;
};

/** Methods to use when ordering `ProductsByVersion`. */
export enum ProductsByVersionsOrderBy {
  Natural = 'NATURAL',
  VersionIdAsc = 'VERSION_ID_ASC',
  VersionIdDesc = 'VERSION_ID_DESC',
  VersionOidAsc = 'VERSION_OID_ASC',
  VersionOidDesc = 'VERSION_OID_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  SkuAsc = 'SKU_ASC',
  SkuDesc = 'SKU_DESC',
  MainAsc = 'MAIN_ASC',
  MainDesc = 'MAIN_DESC',
  SubAsc = 'SUB_ASC',
  SubDesc = 'SUB_DESC'
}

/** A condition to be used against `ProductsByVersion` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProductsByVersionCondition = {
  /** Checks for equality with the object’s `versionId` field. */
  versionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `versionOid` field. */
  versionOid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `sku` field. */
  sku?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `main` field. */
  main?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `sub` field. */
  sub?: Maybe<Scalars['String']>;
};

/** A connection to a list of `ProductsByVersion` values. */
export type ProductsByVersionsConnection = {
  __typename?: 'ProductsByVersionsConnection';
  /** A list of `ProductsByVersion` objects. */
  nodes: Array<Maybe<ProductsByVersion>>;
  /** A list of edges which contains the `ProductsByVersion` and cursor to aid in pagination. */
  edges: Array<ProductsByVersionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ProductsByVersion` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type ProductsByVersion = {
  __typename?: 'ProductsByVersion';
  versionId?: Maybe<Scalars['Int']>;
  versionOid?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  sku?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  /** Reads a single `Version` that is related to this `ProductsByVersion`. */
  versionByVersionOid?: Maybe<Version>;
};

/** A `ProductsByVersion` edge in the connection. */
export type ProductsByVersionsEdge = {
  __typename?: 'ProductsByVersionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ProductsByVersion` at the end of the edge. */
  node?: Maybe<ProductsByVersion>;
};

/** Methods to use when ordering `Version`. */
export enum VersionsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  CoverUrlAsc = 'COVER_URL_ASC',
  CoverUrlDesc = 'COVER_URL_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  CoverMetaAsc = 'COVER_META_ASC',
  CoverMetaDesc = 'COVER_META_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  DateCreatedAsc = 'DATE_CREATED_ASC',
  DateCreatedDesc = 'DATE_CREATED_DESC',
  DateModifiedAsc = 'DATE_MODIFIED_ASC',
  DateModifiedDesc = 'DATE_MODIFIED_DESC',
  VersionNoAsc = 'VERSION_NO_ASC',
  VersionNoDesc = 'VERSION_NO_DESC',
  AutoProcessAsc = 'AUTO_PROCESS_ASC',
  AutoProcessDesc = 'AUTO_PROCESS_DESC',
  ContactUrlAsc = 'CONTACT_URL_ASC',
  ContactUrlDesc = 'CONTACT_URL_DESC',
  EnableCategoryCatalogsAsc = 'ENABLE_CATEGORY_CATALOGS_ASC',
  EnableCategoryCatalogsDesc = 'ENABLE_CATEGORY_CATALOGS_DESC',
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  CurrencySymbolAsc = 'CURRENCY_SYMBOL_ASC',
  CurrencySymbolDesc = 'CURRENCY_SYMBOL_DESC',
  LeadZapEmailAsc = 'LEAD_ZAP_EMAIL_ASC',
  LeadZapEmailDesc = 'LEAD_ZAP_EMAIL_DESC',
  AgentIdAsc = 'AGENT_ID_ASC',
  AgentIdDesc = 'AGENT_ID_DESC',
  ShortNameAsc = 'SHORT_NAME_ASC',
  ShortNameDesc = 'SHORT_NAME_DESC',
  IsFtpAsc = 'IS_FTP_ASC',
  IsFtpDesc = 'IS_FTP_DESC',
  CatalogCloneIdAsc = 'CATALOG_CLONE_ID_ASC',
  CatalogCloneIdDesc = 'CATALOG_CLONE_ID_DESC',
  FeedAlertNotifcationAsc = 'FEED_ALERT_NOTIFCATION_ASC',
  FeedAlertNotifcationDesc = 'FEED_ALERT_NOTIFCATION_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  OrderAsc = 'ORDER_ASC',
  OrderDesc = 'ORDER_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Version` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type VersionCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `coverUrl` field. */
  coverUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `active` field. */
  active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `coverMeta` field. */
  coverMeta?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  url?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dateCreated` field. */
  dateCreated?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `dateModified` field. */
  dateModified?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `versionNo` field. */
  versionNo?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `autoProcess` field. */
  autoProcess?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `contactUrl` field. */
  contactUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `enableCategoryCatalogs` field. */
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `language` field. */
  language?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `currencySymbol` field. */
  currencySymbol?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `leadZapEmail` field. */
  leadZapEmail?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `agentId` field. */
  agentId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `shortName` field. */
  shortName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `isFtp` field. */
  isFtp?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `catalogCloneId` field. */
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `feedAlertNotifcation` field. */
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `order` field. */
  order?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Version` values. */
export type VersionsConnection = {
  __typename?: 'VersionsConnection';
  /** A list of `Version` objects. */
  nodes: Array<Maybe<Version>>;
  /** A list of edges which contains the `Version` and cursor to aid in pagination. */
  edges: Array<VersionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Version` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Version` edge in the connection. */
export type VersionsEdge = {
  __typename?: 'VersionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Version` at the end of the edge. */
  node?: Maybe<Version>;
};

/** Methods to use when ordering `Offer`. */
export enum OffersOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  DiscountInPercentAsc = 'DISCOUNT_IN_PERCENT_ASC',
  DiscountInPercentDesc = 'DISCOUNT_IN_PERCENT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  CertificateAsc = 'CERTIFICATE_ASC',
  CertificateDesc = 'CERTIFICATE_DESC',
  ExpiryDateAsc = 'EXPIRY_DATE_ASC',
  ExpiryDateDesc = 'EXPIRY_DATE_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC',
  DisclaimerAsc = 'DISCLAIMER_ASC',
  DisclaimerDesc = 'DISCLAIMER_DESC',
  BurstAsc = 'BURST_ASC',
  BurstDesc = 'BURST_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Offer` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type OfferCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `code` field. */
  code?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `image` field. */
  image?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `discountInPercent` field. */
  discountInPercent?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `certificate` field. */
  certificate?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `expiryDate` field. */
  expiryDate?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `disclaimer` field. */
  disclaimer?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `burst` field. */
  burst?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Offer` values. */
export type OffersConnection = {
  __typename?: 'OffersConnection';
  /** A list of `Offer` objects. */
  nodes: Array<Maybe<Offer>>;
  /** A list of edges which contains the `Offer` and cursor to aid in pagination. */
  edges: Array<OffersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Offer` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Offer = {
  __typename?: 'Offer';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  certificate?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['String']>;
  disclaimer?: Maybe<Scalars['String']>;
  burst?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Catalog` that is related to this `Offer`. */
  catalogByCatalog?: Maybe<Catalog>;
};

/** A `Offer` edge in the connection. */
export type OffersEdge = {
  __typename?: 'OffersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Offer` at the end of the edge. */
  node?: Maybe<Offer>;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  FeaturedAsc = 'FEATURED_ASC',
  FeaturedDesc = 'FEATURED_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  LinkoutUrlAsc = 'LINKOUT_URL_ASC',
  LinkoutUrlDesc = 'LINKOUT_URL_DESC',
  ProductsPerPageAsc = 'PRODUCTS_PER_PAGE_ASC',
  ProductsPerPageDesc = 'PRODUCTS_PER_PAGE_DESC',
  ImageOrientationAsc = 'IMAGE_ORIENTATION_ASC',
  ImageOrientationDesc = 'IMAGE_ORIENTATION_DESC',
  ProductBorderAsc = 'PRODUCT_BORDER_ASC',
  ProductBorderDesc = 'PRODUCT_BORDER_DESC',
  AnimatedAsc = 'ANIMATED_ASC',
  AnimatedDesc = 'ANIMATED_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  RankOrderAsc = 'RANK_ORDER_ASC',
  RankOrderDesc = 'RANK_ORDER_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Category` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CategoryCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `featured` field. */
  featured?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `image` field. */
  image?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `active` field. */
  active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `linkoutUrl` field. */
  linkoutUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `productsPerPage` field. */
  productsPerPage?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `imageOrientation` field. */
  imageOrientation?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `productBorder` field. */
  productBorder?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `animated` field. */
  animated?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `rankOrder` field. */
  rankOrder?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  /** A list of `Category` objects. */
  nodes: Array<Maybe<Category>>;
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  catalog?: Maybe<Scalars['UUID']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Catalog` that is related to this `Category`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads and enables pagination through a set of `SubCategory`. */
  subCategoriesByCategoryConnection: SubCategoriesConnection;
  /** Reads and enables pagination through a set of `SubCategory`. */
  subCategoriesByCategory: Array<SubCategory>;
  /** Reads and enables pagination through a set of `SubProduct`. */
  subProductsByMainAndCatalogConnection: SubProductsConnection;
  /** Reads and enables pagination through a set of `SubProduct`. */
  subProductsByMainAndCatalog: Array<SubProduct>;
};


export type CategorySubCategoriesByCategoryConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubCategoriesOrderBy>>;
  condition?: Maybe<SubCategoryCondition>;
};


export type CategorySubCategoriesByCategoryArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SubCategoriesOrderBy>>;
  condition?: Maybe<SubCategoryCondition>;
};


export type CategorySubProductsByMainAndCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubProductsOrderBy>>;
  condition?: Maybe<SubProductCondition>;
};


export type CategorySubProductsByMainAndCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SubProductsOrderBy>>;
  condition?: Maybe<SubProductCondition>;
};

/** Methods to use when ordering `SubCategory`. */
export enum SubCategoriesOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  FeaturedAsc = 'FEATURED_ASC',
  FeaturedDesc = 'FEATURED_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  ActiveAsc = 'ACTIVE_ASC',
  ActiveDesc = 'ACTIVE_DESC',
  LinkoutUrlAsc = 'LINKOUT_URL_ASC',
  LinkoutUrlDesc = 'LINKOUT_URL_DESC',
  ProductsPerPageAsc = 'PRODUCTS_PER_PAGE_ASC',
  ProductsPerPageDesc = 'PRODUCTS_PER_PAGE_DESC',
  ImageOrientationAsc = 'IMAGE_ORIENTATION_ASC',
  ImageOrientationDesc = 'IMAGE_ORIENTATION_DESC',
  ProductBorderAsc = 'PRODUCT_BORDER_ASC',
  ProductBorderDesc = 'PRODUCT_BORDER_DESC',
  AnimatedAsc = 'ANIMATED_ASC',
  AnimatedDesc = 'ANIMATED_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `SubCategory` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SubCategoryCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `featured` field. */
  featured?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `image` field. */
  image?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `active` field. */
  active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `linkoutUrl` field. */
  linkoutUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `productsPerPage` field. */
  productsPerPage?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `imageOrientation` field. */
  imageOrientation?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `productBorder` field. */
  productBorder?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `animated` field. */
  animated?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `category` field. */
  category?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `SubCategory` values. */
export type SubCategoriesConnection = {
  __typename?: 'SubCategoriesConnection';
  /** A list of `SubCategory` objects. */
  nodes: Array<Maybe<SubCategory>>;
  /** A list of edges which contains the `SubCategory` and cursor to aid in pagination. */
  edges: Array<SubCategoriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SubCategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type SubCategory = {
  __typename?: 'SubCategory';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Category` that is related to this `SubCategory`. */
  categoryByCategory?: Maybe<Category>;
};

/** A `SubCategory` edge in the connection. */
export type SubCategoriesEdge = {
  __typename?: 'SubCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SubCategory` at the end of the edge. */
  node?: Maybe<SubCategory>;
};

/** Methods to use when ordering `SubProduct`. */
export enum SubProductsOrderBy {
  Natural = 'NATURAL',
  MainAsc = 'MAIN_ASC',
  MainDesc = 'MAIN_DESC',
  SubAsc = 'SUB_ASC',
  SubDesc = 'SUB_DESC',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  BrandAsc = 'BRAND_ASC',
  BrandDesc = 'BRAND_DESC',
  ColorAsc = 'COLOR_ASC',
  ColorDesc = 'COLOR_DESC',
  SkuAsc = 'SKU_ASC',
  SkuDesc = 'SKU_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  DateEnteredAsc = 'DATE_ENTERED_ASC',
  DateEnteredDesc = 'DATE_ENTERED_DESC',
  SrcOriginalAsc = 'SRC_ORIGINAL_ASC',
  SrcOriginalDesc = 'SRC_ORIGINAL_DESC',
  AdditionalImagesAsc = 'ADDITIONAL_IMAGES_ASC',
  AdditionalImagesDesc = 'ADDITIONAL_IMAGES_DESC',
  AdditionalFieldsAsc = 'ADDITIONAL_FIELDS_ASC',
  AdditionalFieldsDesc = 'ADDITIONAL_FIELDS_DESC',
  ChangeHistoryAsc = 'CHANGE_HISTORY_ASC',
  ChangeHistoryDesc = 'CHANGE_HISTORY_DESC',
  DateModifiedAsc = 'DATE_MODIFIED_ASC',
  DateModifiedDesc = 'DATE_MODIFIED_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  SalePriceAsc = 'SALE_PRICE_ASC',
  SalePriceDesc = 'SALE_PRICE_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  ExpiredAsc = 'EXPIRED_ASC',
  ExpiredDesc = 'EXPIRED_DESC',
  SrcAsc = 'SRC_ASC',
  SrcDesc = 'SRC_DESC',
  RotatedAsc = 'ROTATED_ASC',
  RotatedDesc = 'ROTATED_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC'
}

/** A condition to be used against `SubProduct` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SubProductCondition = {
  /** Checks for equality with the object’s `main` field. */
  main?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `sub` field. */
  sub?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `brand` field. */
  brand?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `color` field. */
  color?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `sku` field. */
  sku?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  url?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `price` field. */
  price?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `dateEntered` field. */
  dateEntered?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `srcOriginal` field. */
  srcOriginal?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `additionalImages` field. */
  additionalImages?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `additionalFields` field. */
  additionalFields?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `changeHistory` field. */
  changeHistory?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `dateModified` field. */
  dateModified?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `salePrice` field. */
  salePrice?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `category` field. */
  category?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `expired` field. */
  expired?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `src` field. */
  src?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `rotated` field. */
  rotated?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `SubProduct` values. */
export type SubProductsConnection = {
  __typename?: 'SubProductsConnection';
  /** A list of `SubProduct` objects. */
  nodes: Array<Maybe<SubProduct>>;
  /** A list of edges which contains the `SubProduct` and cursor to aid in pagination. */
  edges: Array<SubProductsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SubProduct` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type SubProduct = {
  __typename?: 'SubProduct';
  main?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  category?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Category` that is related to this `SubProduct`. */
  categoryByMainAndCatalog?: Maybe<Category>;
};

/** A `SubProduct` edge in the connection. */
export type SubProductsEdge = {
  __typename?: 'SubProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SubProduct` at the end of the edge. */
  node?: Maybe<SubProduct>;
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: 'CategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Category` at the end of the edge. */
  node?: Maybe<Category>;
};

/** Methods to use when ordering `Feed`. */
export enum FeedsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  FeedTypeAsc = 'FEED_TYPE_ASC',
  FeedTypeDesc = 'FEED_TYPE_DESC',
  FeedMapAsc = 'FEED_MAP_ASC',
  FeedMapDesc = 'FEED_MAP_DESC',
  ProductMapAsc = 'PRODUCT_MAP_ASC',
  ProductMapDesc = 'PRODUCT_MAP_DESC',
  DateModifiedAsc = 'DATE_MODIFIED_ASC',
  DateModifiedDesc = 'DATE_MODIFIED_DESC',
  AutoUpdateAsc = 'AUTO_UPDATE_ASC',
  AutoUpdateDesc = 'AUTO_UPDATE_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Feed` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FeedCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `feedType` field. */
  feedType?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `feedMap` field. */
  feedMap?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `productMap` field. */
  productMap?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `dateModified` field. */
  dateModified?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `autoUpdate` field. */
  autoUpdate?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Feed` values. */
export type FeedsConnection = {
  __typename?: 'FeedsConnection';
  /** A list of `Feed` objects. */
  nodes: Array<Maybe<Feed>>;
  /** A list of edges which contains the `Feed` and cursor to aid in pagination. */
  edges: Array<FeedsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Feed` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Feed = {
  __typename?: 'Feed';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  feedType?: Maybe<Scalars['String']>;
  feedMap?: Maybe<Scalars['String']>;
  productMap?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  autoUpdate?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Catalog` that is related to this `Feed`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads and enables pagination through a set of `FeedHistory`. */
  feedHistoriesByFeedConnection: FeedHistoriesConnection;
  /** Reads and enables pagination through a set of `FeedHistory`. */
  feedHistoriesByFeed: Array<FeedHistory>;
};


export type FeedFeedHistoriesByFeedConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<FeedHistoriesOrderBy>>;
  condition?: Maybe<FeedHistoryCondition>;
};


export type FeedFeedHistoriesByFeedArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<FeedHistoriesOrderBy>>;
  condition?: Maybe<FeedHistoryCondition>;
};

/** Methods to use when ordering `FeedHistory`. */
export enum FeedHistoriesOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  FeedAsc = 'FEED_ASC',
  FeedDesc = 'FEED_DESC',
  PreUpdateStatsAsc = 'PRE_UPDATE_STATS_ASC',
  PreUpdateStatsDesc = 'PRE_UPDATE_STATS_DESC',
  PostUpdateStatsAsc = 'POST_UPDATE_STATS_ASC',
  PostUpdateStatsDesc = 'POST_UPDATE_STATS_DESC',
  FeedPathAsc = 'FEED_PATH_ASC',
  FeedPathDesc = 'FEED_PATH_DESC',
  FeedJsonAsc = 'FEED_JSON_ASC',
  FeedJsonDesc = 'FEED_JSON_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `FeedHistory` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FeedHistoryCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `feed` field. */
  feed?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `preUpdateStats` field. */
  preUpdateStats?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `postUpdateStats` field. */
  postUpdateStats?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `feedPath` field. */
  feedPath?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `feedJson` field. */
  feedJson?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `FeedHistory` values. */
export type FeedHistoriesConnection = {
  __typename?: 'FeedHistoriesConnection';
  /** A list of `FeedHistory` objects. */
  nodes: Array<Maybe<FeedHistory>>;
  /** A list of edges which contains the `FeedHistory` and cursor to aid in pagination. */
  edges: Array<FeedHistoriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FeedHistory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type FeedHistory = {
  __typename?: 'FeedHistory';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  feed?: Maybe<Scalars['UUID']>;
  preUpdateStats?: Maybe<Scalars['JSON']>;
  postUpdateStats?: Maybe<Scalars['JSON']>;
  feedPath?: Maybe<Scalars['String']>;
  feedJson?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Feed` that is related to this `FeedHistory`. */
  feedByFeed?: Maybe<Feed>;
};

/** A `FeedHistory` edge in the connection. */
export type FeedHistoriesEdge = {
  __typename?: 'FeedHistoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FeedHistory` at the end of the edge. */
  node?: Maybe<FeedHistory>;
};

/** A `Feed` edge in the connection. */
export type FeedsEdge = {
  __typename?: 'FeedsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Feed` at the end of the edge. */
  node?: Maybe<Feed>;
};

/** Methods to use when ordering `Product`. */
export enum ProductsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  BrandAsc = 'BRAND_ASC',
  BrandDesc = 'BRAND_DESC',
  ColorAsc = 'COLOR_ASC',
  ColorDesc = 'COLOR_DESC',
  SkuAsc = 'SKU_ASC',
  SkuDesc = 'SKU_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  DateEnteredAsc = 'DATE_ENTERED_ASC',
  DateEnteredDesc = 'DATE_ENTERED_DESC',
  SrcOriginalAsc = 'SRC_ORIGINAL_ASC',
  SrcOriginalDesc = 'SRC_ORIGINAL_DESC',
  AdditionalImagesAsc = 'ADDITIONAL_IMAGES_ASC',
  AdditionalImagesDesc = 'ADDITIONAL_IMAGES_DESC',
  AdditionalFieldsAsc = 'ADDITIONAL_FIELDS_ASC',
  AdditionalFieldsDesc = 'ADDITIONAL_FIELDS_DESC',
  ChangeHistoryAsc = 'CHANGE_HISTORY_ASC',
  ChangeHistoryDesc = 'CHANGE_HISTORY_DESC',
  DateModifiedAsc = 'DATE_MODIFIED_ASC',
  DateModifiedDesc = 'DATE_MODIFIED_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  SalePriceAsc = 'SALE_PRICE_ASC',
  SalePriceDesc = 'SALE_PRICE_DESC',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  ExpiredAsc = 'EXPIRED_ASC',
  ExpiredDesc = 'EXPIRED_DESC',
  SrcAsc = 'SRC_ASC',
  SrcDesc = 'SRC_DESC',
  RotatedAsc = 'ROTATED_ASC',
  RotatedDesc = 'ROTATED_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  SubCategoryAsc = 'SUB_CATEGORY_ASC',
  SubCategoryDesc = 'SUB_CATEGORY_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Product` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProductCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `brand` field. */
  brand?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `color` field. */
  color?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `sku` field. */
  sku?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  url?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `price` field. */
  price?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `dateEntered` field. */
  dateEntered?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `srcOriginal` field. */
  srcOriginal?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `additionalImages` field. */
  additionalImages?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `additionalFields` field. */
  additionalFields?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `changeHistory` field. */
  changeHistory?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `dateModified` field. */
  dateModified?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `salePrice` field. */
  salePrice?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `category` field. */
  category?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `expired` field. */
  expired?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `src` field. */
  src?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `rotated` field. */
  rotated?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `subCategory` field. */
  subCategory?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Product` values. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of `Product` objects. */
  nodes: Array<Maybe<Product>>;
  /** A list of edges which contains the `Product` and cursor to aid in pagination. */
  edges: Array<ProductsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Product` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  category?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  subCategory?: Maybe<Scalars['String']>;
  /** Reads a single `Catalog` that is related to this `Product`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads a single `CategoryByCatalog` that is related to this `Product`. */
  categoryByCatalogByCategoryAndCatalog?: Maybe<CategoryByCatalog>;
};

export type CategoryByCatalog = {
  __typename?: 'CategoryByCatalog';
  category?: Maybe<Scalars['String']>;
  catalog?: Maybe<Scalars['UUID']>;
  main?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  /** Reads a single `Catalog` that is related to this `CategoryByCatalog`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads and enables pagination through a set of `Product`. */
  productsByCategoryAndCatalogConnection: ProductsConnection;
  /** Reads and enables pagination through a set of `Product`. */
  productsByCategoryAndCatalog: Array<Product>;
};


export type CategoryByCatalogProductsByCategoryAndCatalogConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};


export type CategoryByCatalogProductsByCategoryAndCatalogArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProductsOrderBy>>;
  condition?: Maybe<ProductCondition>;
};

/** A `Product` edge in the connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Product` at the end of the edge. */
  node?: Maybe<Product>;
};

/** Methods to use when ordering `CampaignGroup`. */
export enum CampaignGroupsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  CampaignAsc = 'CAMPAIGN_ASC',
  CampaignDesc = 'CAMPAIGN_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `CampaignGroup` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CampaignGroupCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `campaign` field. */
  campaign?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `CampaignGroup` values. */
export type CampaignGroupsConnection = {
  __typename?: 'CampaignGroupsConnection';
  /** A list of `CampaignGroup` objects. */
  nodes: Array<Maybe<CampaignGroup>>;
  /** A list of edges which contains the `CampaignGroup` and cursor to aid in pagination. */
  edges: Array<CampaignGroupsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CampaignGroup` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type CampaignGroup = {
  __typename?: 'CampaignGroup';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Campaign` that is related to this `CampaignGroup`. */
  campaignByCampaign?: Maybe<Campaign>;
  /** Reads a single `Catalog` that is related to this `CampaignGroup`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads and enables pagination through a set of `CampaignUser`. */
  campaignUsersByCampaignGroupConnection: CampaignUsersConnection;
  /** Reads and enables pagination through a set of `CampaignUser`. */
  campaignUsersByCampaignGroup: Array<CampaignUser>;
};


export type CampaignGroupCampaignUsersByCampaignGroupConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
  condition?: Maybe<CampaignUserCondition>;
};


export type CampaignGroupCampaignUsersByCampaignGroupArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
  condition?: Maybe<CampaignUserCondition>;
};

export type Campaign = {
  __typename?: 'Campaign';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  account?: Maybe<Scalars['UUID']>;
  sender?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  distributionDate?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  opens?: Maybe<Scalars['Int']>;
  clicks?: Maybe<Scalars['Int']>;
  dynalogViews?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Account` that is related to this `Campaign`. */
  accountByAccount?: Maybe<Account>;
  /** Reads and enables pagination through a set of `CampaignGroup`. */
  campaignGroupsByCampaignConnection: CampaignGroupsConnection;
  /** Reads and enables pagination through a set of `CampaignGroup`. */
  campaignGroupsByCampaign: Array<CampaignGroup>;
};


export type CampaignCampaignGroupsByCampaignConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
  condition?: Maybe<CampaignGroupCondition>;
};


export type CampaignCampaignGroupsByCampaignArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
  condition?: Maybe<CampaignGroupCondition>;
};

/** Methods to use when ordering `CampaignUser`. */
export enum CampaignUsersOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  LeadAsc = 'LEAD_ASC',
  LeadDesc = 'LEAD_DESC',
  CampaignGroupAsc = 'CAMPAIGN_GROUP_ASC',
  CampaignGroupDesc = 'CAMPAIGN_GROUP_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `CampaignUser` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CampaignUserCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `lead` field. */
  lead?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `campaignGroup` field. */
  campaignGroup?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `CampaignUser` values. */
export type CampaignUsersConnection = {
  __typename?: 'CampaignUsersConnection';
  /** A list of `CampaignUser` objects. */
  nodes: Array<Maybe<CampaignUser>>;
  /** A list of edges which contains the `CampaignUser` and cursor to aid in pagination. */
  edges: Array<CampaignUsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CampaignUser` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type CampaignUser = {
  __typename?: 'CampaignUser';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  lead?: Maybe<Scalars['UUID']>;
  campaignGroup?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Lead` that is related to this `CampaignUser`. */
  leadByLead?: Maybe<Lead>;
  /** Reads a single `CampaignGroup` that is related to this `CampaignUser`. */
  campaignGroupByCampaignGroup?: Maybe<CampaignGroup>;
};

export type Lead = {
  __typename?: 'Lead';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  account?: Maybe<Scalars['UUID']>;
  profile?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Account` that is related to this `Lead`. */
  accountByAccount?: Maybe<Account>;
  /** Reads a single `Profile` that is related to this `Lead`. */
  profileByProfile?: Maybe<Profile>;
  /** Reads and enables pagination through a set of `CampaignUser`. */
  campaignUsersByLeadConnection: CampaignUsersConnection;
  /** Reads and enables pagination through a set of `CampaignUser`. */
  campaignUsersByLead: Array<CampaignUser>;
};


export type LeadCampaignUsersByLeadConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
  condition?: Maybe<CampaignUserCondition>;
};


export type LeadCampaignUsersByLeadArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
  condition?: Maybe<CampaignUserCondition>;
};

export type Profile = {
  __typename?: 'Profile';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `Lead`. */
  leadsByProfileConnection: LeadsConnection;
  /** Reads and enables pagination through a set of `Lead`. */
  leadsByProfile: Array<Lead>;
  /** Reads and enables pagination through a set of `Subscription`. */
  subscriptionsByCustomerConnection: SubscriptionsConnection;
  /** Reads and enables pagination through a set of `Subscription`. */
  subscriptionsByCustomer: Array<Subscription>;
  /** Reads and enables pagination through a set of `LinkOut`. */
  linkOutsByCustomerConnection: LinkOutsConnection;
  /** Reads and enables pagination through a set of `LinkOut`. */
  linkOutsByCustomer: Array<LinkOut>;
};


export type ProfileLeadsByProfileConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LeadsOrderBy>>;
  condition?: Maybe<LeadCondition>;
};


export type ProfileLeadsByProfileArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LeadsOrderBy>>;
  condition?: Maybe<LeadCondition>;
};


export type ProfileSubscriptionsByCustomerConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
  condition?: Maybe<SubscriptionCondition>;
};


export type ProfileSubscriptionsByCustomerArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
  condition?: Maybe<SubscriptionCondition>;
};


export type ProfileLinkOutsByCustomerConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
  condition?: Maybe<LinkOutCondition>;
};


export type ProfileLinkOutsByCustomerArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
  condition?: Maybe<LinkOutCondition>;
};

/** Methods to use when ordering `Lead`. */
export enum LeadsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  ImageUrlAsc = 'IMAGE_URL_ASC',
  ImageUrlDesc = 'IMAGE_URL_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  StreetAsc = 'STREET_ASC',
  StreetDesc = 'STREET_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  ZipPostalAsc = 'ZIP_POSTAL_ASC',
  ZipPostalDesc = 'ZIP_POSTAL_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  CompanyAsc = 'COMPANY_ASC',
  CompanyDesc = 'COMPANY_DESC',
  CommentsAsc = 'COMMENTS_ASC',
  CommentsDesc = 'COMMENTS_DESC',
  DateCollectedAsc = 'DATE_COLLECTED_ASC',
  DateCollectedDesc = 'DATE_COLLECTED_DESC',
  AccountAsc = 'ACCOUNT_ASC',
  AccountDesc = 'ACCOUNT_DESC',
  ProfileAsc = 'PROFILE_ASC',
  ProfileDesc = 'PROFILE_DESC',
  CatalogIdAsc = 'CATALOG_ID_ASC',
  CatalogIdDesc = 'CATALOG_ID_DESC',
  VersionIdAsc = 'VERSION_ID_ASC',
  VersionIdDesc = 'VERSION_ID_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Lead` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LeadCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `imageUrl` field. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `street` field. */
  street?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `state` field. */
  state?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `zipPostal` field. */
  zipPostal?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `company` field. */
  company?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `comments` field. */
  comments?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dateCollected` field. */
  dateCollected?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `account` field. */
  account?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `profile` field. */
  profile?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `catalogId` field. */
  catalogId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `versionId` field. */
  versionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Lead` values. */
export type LeadsConnection = {
  __typename?: 'LeadsConnection';
  /** A list of `Lead` objects. */
  nodes: Array<Maybe<Lead>>;
  /** A list of edges which contains the `Lead` and cursor to aid in pagination. */
  edges: Array<LeadsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Lead` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Lead` edge in the connection. */
export type LeadsEdge = {
  __typename?: 'LeadsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Lead` at the end of the edge. */
  node?: Maybe<Lead>;
};

/** Methods to use when ordering `Subscription`. */
export enum SubscriptionsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  CustomerAsc = 'CUSTOMER_ASC',
  CustomerDesc = 'CUSTOMER_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  ChargeAsc = 'CHARGE_ASC',
  ChargeDesc = 'CHARGE_DESC',
  ListingIdAsc = 'LISTING_ID_ASC',
  ListingIdDesc = 'LISTING_ID_DESC',
  ExportStatusAsc = 'EXPORT_STATUS_ASC',
  ExportStatusDesc = 'EXPORT_STATUS_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Subscription` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SubscriptionCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `customer` field. */
  customer?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `charge` field. */
  charge?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `listingId` field. */
  listingId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `exportStatus` field. */
  exportStatus?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Subscription` values. */
export type SubscriptionsConnection = {
  __typename?: 'SubscriptionsConnection';
  /** A list of `Subscription` objects. */
  nodes: Array<Maybe<Subscription>>;
  /** A list of edges which contains the `Subscription` and cursor to aid in pagination. */
  edges: Array<SubscriptionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Subscription` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['Datetime']>;
  charge?: Maybe<Scalars['BigFloat']>;
  listingId?: Maybe<Scalars['Int']>;
  exportStatus?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Profile` that is related to this `Subscription`. */
  profileByCustomer?: Maybe<Profile>;
  /** Reads a single `Catalog` that is related to this `Subscription`. */
  catalogByCatalog?: Maybe<Catalog>;
};

/** A `Subscription` edge in the connection. */
export type SubscriptionsEdge = {
  __typename?: 'SubscriptionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Subscription` at the end of the edge. */
  node?: Maybe<Subscription>;
};

/** Methods to use when ordering `LinkOut`. */
export enum LinkOutsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  LinkTimeAsc = 'LINK_TIME_ASC',
  LinkTimeDesc = 'LINK_TIME_DESC',
  LinkAsc = 'LINK_ASC',
  LinkDesc = 'LINK_DESC',
  ChargeAsc = 'CHARGE_ASC',
  ChargeDesc = 'CHARGE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  CustomerIpAsc = 'CUSTOMER_IP_ASC',
  CustomerIpDesc = 'CUSTOMER_IP_DESC',
  CustomerAsc = 'CUSTOMER_ASC',
  CustomerDesc = 'CUSTOMER_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `LinkOut` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LinkOutCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `linkTime` field. */
  linkTime?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `link` field. */
  link?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `charge` field. */
  charge?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `customerIp` field. */
  customerIp?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `customer` field. */
  customer?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `LinkOut` values. */
export type LinkOutsConnection = {
  __typename?: 'LinkOutsConnection';
  /** A list of `LinkOut` objects. */
  nodes: Array<Maybe<LinkOut>>;
  /** A list of edges which contains the `LinkOut` and cursor to aid in pagination. */
  edges: Array<LinkOutsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LinkOut` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type LinkOut = {
  __typename?: 'LinkOut';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  linkTime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  charge?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  customerIp?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Profile` that is related to this `LinkOut`. */
  profileByCustomer?: Maybe<Profile>;
  /** Reads a single `Catalog` that is related to this `LinkOut`. */
  catalogByCatalog?: Maybe<Catalog>;
};

/** A `LinkOut` edge in the connection. */
export type LinkOutsEdge = {
  __typename?: 'LinkOutsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LinkOut` at the end of the edge. */
  node?: Maybe<LinkOut>;
};

/** A `CampaignUser` edge in the connection. */
export type CampaignUsersEdge = {
  __typename?: 'CampaignUsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CampaignUser` at the end of the edge. */
  node?: Maybe<CampaignUser>;
};

/** A `CampaignGroup` edge in the connection. */
export type CampaignGroupsEdge = {
  __typename?: 'CampaignGroupsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CampaignGroup` at the end of the edge. */
  node?: Maybe<CampaignGroup>;
};

/** Methods to use when ordering `CategoryByCatalog`. */
export enum CategoryByCatalogsOrderBy {
  Natural = 'NATURAL',
  CategoryAsc = 'CATEGORY_ASC',
  CategoryDesc = 'CATEGORY_DESC',
  CatalogAsc = 'CATALOG_ASC',
  CatalogDesc = 'CATALOG_DESC',
  MainAsc = 'MAIN_ASC',
  MainDesc = 'MAIN_DESC',
  SubAsc = 'SUB_ASC',
  SubDesc = 'SUB_DESC'
}

/** A condition to be used against `CategoryByCatalog` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CategoryByCatalogCondition = {
  /** Checks for equality with the object’s `category` field. */
  category?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `catalog` field. */
  catalog?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `main` field. */
  main?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `sub` field. */
  sub?: Maybe<Scalars['String']>;
};

/** A connection to a list of `CategoryByCatalog` values. */
export type CategoryByCatalogsConnection = {
  __typename?: 'CategoryByCatalogsConnection';
  /** A list of `CategoryByCatalog` objects. */
  nodes: Array<Maybe<CategoryByCatalog>>;
  /** A list of edges which contains the `CategoryByCatalog` and cursor to aid in pagination. */
  edges: Array<CategoryByCatalogsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CategoryByCatalog` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `CategoryByCatalog` edge in the connection. */
export type CategoryByCatalogsEdge = {
  __typename?: 'CategoryByCatalogsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CategoryByCatalog` at the end of the edge. */
  node?: Maybe<CategoryByCatalog>;
};

/** A `Catalog` edge in the connection. */
export type CatalogsEdge = {
  __typename?: 'CatalogsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Catalog` at the end of the edge. */
  node?: Maybe<Catalog>;
};

/** Methods to use when ordering `Contact`. */
export enum ContactsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  ImageUrlAsc = 'IMAGE_URL_ASC',
  ImageUrlDesc = 'IMAGE_URL_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  StreetAsc = 'STREET_ASC',
  StreetDesc = 'STREET_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  ZipPostalAsc = 'ZIP_POSTAL_ASC',
  ZipPostalDesc = 'ZIP_POSTAL_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  CompanyAsc = 'COMPANY_ASC',
  CompanyDesc = 'COMPANY_DESC',
  ParentAsc = 'PARENT_ASC',
  ParentDesc = 'PARENT_DESC',
  AppProfileAsc = 'APP_PROFILE_ASC',
  AppProfileDesc = 'APP_PROFILE_DESC',
  DateCreatedAsc = 'DATE_CREATED_ASC',
  DateCreatedDesc = 'DATE_CREATED_DESC',
  OldIdAsc = 'OLD_ID_ASC',
  OldIdDesc = 'OLD_ID_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Contact` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ContactCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `imageUrl` field. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `street` field. */
  street?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `state` field. */
  state?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `zipPostal` field. */
  zipPostal?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `company` field. */
  company?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `parent` field. */
  parent?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `appProfile` field. */
  appProfile?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `dateCreated` field. */
  dateCreated?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `oldId` field. */
  oldId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Contact` values. */
export type ContactsConnection = {
  __typename?: 'ContactsConnection';
  /** A list of `Contact` objects. */
  nodes: Array<Maybe<Contact>>;
  /** A list of edges which contains the `Contact` and cursor to aid in pagination. */
  edges: Array<ContactsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Contact` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Contact = {
  __typename?: 'Contact';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['UUID']>;
  appProfile?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  oldId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByParent?: Maybe<Account>;
};

/** A `Contact` edge in the connection. */
export type ContactsEdge = {
  __typename?: 'ContactsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Contact` at the end of the edge. */
  node?: Maybe<Contact>;
};

/** Methods to use when ordering `Campaign`. */
export enum CampaignsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  AccountAsc = 'ACCOUNT_ASC',
  AccountDesc = 'ACCOUNT_DESC',
  SenderAsc = 'SENDER_ASC',
  SenderDesc = 'SENDER_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  DistributionDateAsc = 'DISTRIBUTION_DATE_ASC',
  DistributionDateDesc = 'DISTRIBUTION_DATE_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  TermsAsc = 'TERMS_ASC',
  TermsDesc = 'TERMS_DESC',
  RateAsc = 'RATE_ASC',
  RateDesc = 'RATE_DESC',
  TotalCostAsc = 'TOTAL_COST_ASC',
  TotalCostDesc = 'TOTAL_COST_DESC',
  VendorAsc = 'VENDOR_ASC',
  VendorDesc = 'VENDOR_DESC',
  OpensAsc = 'OPENS_ASC',
  OpensDesc = 'OPENS_DESC',
  ClicksAsc = 'CLICKS_ASC',
  ClicksDesc = 'CLICKS_DESC',
  DynalogViewsAsc = 'DYNALOG_VIEWS_ASC',
  DynalogViewsDesc = 'DYNALOG_VIEWS_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Campaign` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CampaignCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `account` field. */
  account?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `sender` field. */
  sender?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `distributionDate` field. */
  distributionDate?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `quantity` field. */
  quantity?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `terms` field. */
  terms?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `rate` field. */
  rate?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `totalCost` field. */
  totalCost?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `vendor` field. */
  vendor?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `opens` field. */
  opens?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `clicks` field. */
  clicks?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `dynalogViews` field. */
  dynalogViews?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Campaign` values. */
export type CampaignsConnection = {
  __typename?: 'CampaignsConnection';
  /** A list of `Campaign` objects. */
  nodes: Array<Maybe<Campaign>>;
  /** A list of edges which contains the `Campaign` and cursor to aid in pagination. */
  edges: Array<CampaignsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Campaign` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Campaign` edge in the connection. */
export type CampaignsEdge = {
  __typename?: 'CampaignsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Campaign` at the end of the edge. */
  node?: Maybe<Campaign>;
};

/** Methods to use when ordering `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
export enum AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy {
  Natural = 'NATURAL',
  PartnerAccessAsc = 'PARTNER_ACCESS_ASC',
  PartnerAccessDesc = 'PARTNER_ACCESS_DESC',
  AuthorizedUsersAsc = 'AUTHORIZED_USERS_ASC',
  AuthorizedUsersDesc = 'AUTHORIZED_USERS_DESC',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `AuthorizedUserAuthorizedUsersAccountPartnerAccess` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessCondition = {
  /** Checks for equality with the object’s `partnerAccess` field. */
  partnerAccess?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `authorizedUsers` field. */
  authorizedUsers?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `AuthorizedUserAuthorizedUsersAccountPartnerAccess` values. */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessesConnection = {
  __typename?: 'AuthorizedUserAuthorizedUsersAccountPartnerAccessesConnection';
  /** A list of `AuthorizedUserAuthorizedUsersAccountPartnerAccess` objects. */
  nodes: Array<Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccess>>;
  /** A list of edges which contains the `AuthorizedUserAuthorizedUsersAccountPartnerAccess` and cursor to aid in pagination. */
  edges: Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AuthorizedUserAuthorizedUsersAccountPartnerAccess` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type AuthorizedUserAuthorizedUsersAccountPartnerAccess = {
  __typename?: 'AuthorizedUserAuthorizedUsersAccountPartnerAccess';
  partnerAccess?: Maybe<Scalars['UUID']>;
  authorizedUsers?: Maybe<Scalars['UUID']>;
  oid: Scalars['UUID'];
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Account` that is related to this `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  accountByPartnerAccess?: Maybe<Account>;
  /** Reads a single `AuthorizedUser` that is related to this `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserByAuthorizedUsers?: Maybe<AuthorizedUser>;
};

export type AuthorizedUser = {
  __typename?: 'AuthorizedUser';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  faceBookId?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  linkedInId?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserAuthorizedUsersAccountPartnerAccessesByAuthorizedUsersConnection: AuthorizedUserAuthorizedUsersAccountPartnerAccessesConnection;
  /** Reads and enables pagination through a set of `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserAuthorizedUsersAccountPartnerAccessesByAuthorizedUsers: Array<AuthorizedUserAuthorizedUsersAccountPartnerAccess>;
};


export type AuthorizedUserAuthorizedUserAuthorizedUsersAccountPartnerAccessesByAuthorizedUsersConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
  condition?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessCondition>;
};


export type AuthorizedUserAuthorizedUserAuthorizedUsersAccountPartnerAccessesByAuthorizedUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
  condition?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessCondition>;
};

/** A `AuthorizedUserAuthorizedUsersAccountPartnerAccess` edge in the connection. */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessesEdge = {
  __typename?: 'AuthorizedUserAuthorizedUsersAccountPartnerAccessesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `AuthorizedUserAuthorizedUsersAccountPartnerAccess` at the end of the edge. */
  node?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccess>;
};

/** A `Account` edge in the connection. */
export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};

/** Methods to use when ordering `AuthorizedUser`. */
export enum AuthorizedUsersOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FaceBookIdAsc = 'FACE_BOOK_ID_ASC',
  FaceBookIdDesc = 'FACE_BOOK_ID_DESC',
  GoogleIdAsc = 'GOOGLE_ID_ASC',
  GoogleIdDesc = 'GOOGLE_ID_DESC',
  LinkedInIdAsc = 'LINKED_IN_ID_ASC',
  LinkedInIdDesc = 'LINKED_IN_ID_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `AuthorizedUser` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AuthorizedUserCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `faceBookId` field. */
  faceBookId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `googleId` field. */
  googleId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `linkedInId` field. */
  linkedInId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `AuthorizedUser` values. */
export type AuthorizedUsersConnection = {
  __typename?: 'AuthorizedUsersConnection';
  /** A list of `AuthorizedUser` objects. */
  nodes: Array<Maybe<AuthorizedUser>>;
  /** A list of edges which contains the `AuthorizedUser` and cursor to aid in pagination. */
  edges: Array<AuthorizedUsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AuthorizedUser` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `AuthorizedUser` edge in the connection. */
export type AuthorizedUsersEdge = {
  __typename?: 'AuthorizedUsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `AuthorizedUser` at the end of the edge. */
  node?: Maybe<AuthorizedUser>;
};

/** Methods to use when ordering `Order`. */
export enum OrdersOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  DeliveryAddressAsc = 'DELIVERY_ADDRESS_ASC',
  DeliveryAddressDesc = 'DELIVERY_ADDRESS_DESC',
  SubTotalAsc = 'SUB_TOTAL_ASC',
  SubTotalDesc = 'SUB_TOTAL_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  DeliveryFeeAsc = 'DELIVERY_FEE_ASC',
  DeliveryFeeDesc = 'DELIVERY_FEE_DESC',
  DeliveryTimeAsc = 'DELIVERY_TIME_ASC',
  DeliveryTimeDesc = 'DELIVERY_TIME_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Order` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type OrderCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `deliveryAddress` field. */
  deliveryAddress?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `subTotal` field. */
  subTotal?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `date` field. */
  date?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `amount` field. */
  amount?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `deliveryFee` field. */
  deliveryFee?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `deliveryTime` field. */
  deliveryTime?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Order` values. */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  /** A list of `Order` objects. */
  nodes: Array<Maybe<Order>>;
  /** A list of edges which contains the `Order` and cursor to aid in pagination. */
  edges: Array<OrdersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Order` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Order = {
  __typename?: 'Order';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Datetime']>;
  amount?: Maybe<Scalars['Float']>;
  deliveryFee?: Maybe<Scalars['BigFloat']>;
  deliveryTime?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `OrderProduct`. */
  orderProductsByOrderConnection: OrderProductsConnection;
  /** Reads and enables pagination through a set of `OrderProduct`. */
  orderProductsByOrder: Array<OrderProduct>;
};


export type OrderOrderProductsByOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<OrderProductsOrderBy>>;
  condition?: Maybe<OrderProductCondition>;
};


export type OrderOrderProductsByOrderArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OrderProductsOrderBy>>;
  condition?: Maybe<OrderProductCondition>;
};

/** Methods to use when ordering `OrderProduct`. */
export enum OrderProductsOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  OrderAsc = 'ORDER_ASC',
  OrderDesc = 'ORDER_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  TotalAsc = 'TOTAL_ASC',
  TotalDesc = 'TOTAL_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `OrderProduct` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type OrderProductCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `order` field. */
  order?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `image` field. */
  image?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `total` field. */
  total?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `price` field. */
  price?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `quantity` field. */
  quantity?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `weight` field. */
  weight?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `OrderProduct` values. */
export type OrderProductsConnection = {
  __typename?: 'OrderProductsConnection';
  /** A list of `OrderProduct` objects. */
  nodes: Array<Maybe<OrderProduct>>;
  /** A list of edges which contains the `OrderProduct` and cursor to aid in pagination. */
  edges: Array<OrderProductsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OrderProduct` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  order?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  /** Reads a single `Order` that is related to this `OrderProduct`. */
  orderByOrder?: Maybe<Order>;
};

/** A `OrderProduct` edge in the connection. */
export type OrderProductsEdge = {
  __typename?: 'OrderProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `OrderProduct` at the end of the edge. */
  node?: Maybe<OrderProduct>;
};

/** A `Order` edge in the connection. */
export type OrdersEdge = {
  __typename?: 'OrdersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Order` at the end of the edge. */
  node?: Maybe<Order>;
};

/** Methods to use when ordering `Profile`. */
export enum ProfilesOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  OptionsAsc = 'OPTIONS_ASC',
  OptionsDesc = 'OPTIONS_DESC',
  ImageUrlAsc = 'IMAGE_URL_ASC',
  ImageUrlDesc = 'IMAGE_URL_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  StreetAsc = 'STREET_ASC',
  StreetDesc = 'STREET_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  ZipPostalAsc = 'ZIP_POSTAL_ASC',
  ZipPostalDesc = 'ZIP_POSTAL_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  CompanyAsc = 'COMPANY_ASC',
  CompanyDesc = 'COMPANY_DESC',
  OptimisticLockFieldAsc = 'OPTIMISTIC_LOCK_FIELD_ASC',
  OptimisticLockFieldDesc = 'OPTIMISTIC_LOCK_FIELD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Profile` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProfileCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `options` field. */
  options?: Maybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `imageUrl` field. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phone` field. */
  phone?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `street` field. */
  street?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `state` field. */
  state?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `zipPostal` field. */
  zipPostal?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `company` field. */
  company?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `optimisticLockField` field. */
  optimisticLockField?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Profile` values. */
export type ProfilesConnection = {
  __typename?: 'ProfilesConnection';
  /** A list of `Profile` objects. */
  nodes: Array<Maybe<Profile>>;
  /** A list of edges which contains the `Profile` and cursor to aid in pagination. */
  edges: Array<ProfilesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Profile` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Profile` edge in the connection. */
export type ProfilesEdge = {
  __typename?: 'ProfilesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Profile` at the end of the edge. */
  node?: Maybe<Profile>;
};

/** Methods to use when ordering `CatalogSearch`. */
export enum CatalogSearchesOrderBy {
  Natural = 'NATURAL',
  OidAsc = 'OID_ASC',
  OidDesc = 'OID_DESC',
  PrimaryDepartmentAsc = 'PRIMARY_DEPARTMENT_ASC',
  PrimaryDepartmentDesc = 'PRIMARY_DEPARTMENT_DESC',
  TextsearchAsc = 'TEXTSEARCH_ASC',
  TextsearchDesc = 'TEXTSEARCH_DESC'
}

/** A condition to be used against `CatalogSearch` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CatalogSearchCondition = {
  /** Checks for equality with the object’s `oid` field. */
  oid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `primaryDepartment` field. */
  primaryDepartment?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `textsearch` field. */
  textsearch?: Maybe<Scalars['String']>;
};

/** A connection to a list of `CatalogSearch` values. */
export type CatalogSearchesConnection = {
  __typename?: 'CatalogSearchesConnection';
  /** A list of `CatalogSearch` objects. */
  nodes: Array<Maybe<CatalogSearch>>;
  /** A list of edges which contains the `CatalogSearch` and cursor to aid in pagination. */
  edges: Array<CatalogSearchesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CatalogSearch` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type CatalogSearch = {
  __typename?: 'CatalogSearch';
  oid?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  textsearch?: Maybe<Scalars['String']>;
};

/** A `CatalogSearch` edge in the connection. */
export type CatalogSearchesEdge = {
  __typename?: 'CatalogSearchesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CatalogSearch` at the end of the edge. */
  node?: Maybe<CatalogSearch>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Account`. */
  createAccount?: Maybe<CreateAccountPayload>;
  /** Creates a single `AuthorizedUser`. */
  createAuthorizedUser?: Maybe<CreateAuthorizedUserPayload>;
  /** Creates a single `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  createAuthorizedUserAuthorizedUsersAccountPartnerAccess?: Maybe<CreateAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload>;
  /** Creates a single `Campaign`. */
  createCampaign?: Maybe<CreateCampaignPayload>;
  /** Creates a single `CampaignGroup`. */
  createCampaignGroup?: Maybe<CreateCampaignGroupPayload>;
  /** Creates a single `CampaignUser`. */
  createCampaignUser?: Maybe<CreateCampaignUserPayload>;
  /** Creates a single `Catalog`. */
  createCatalog?: Maybe<CreateCatalogPayload>;
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `Contact`. */
  createContact?: Maybe<CreateContactPayload>;
  /** Creates a single `Department`. */
  createDepartment?: Maybe<CreateDepartmentPayload>;
  /** Creates a single `DepartmentDepartmentsCatalogListing`. */
  createDepartmentDepartmentsCatalogListing?: Maybe<CreateDepartmentDepartmentsCatalogListingPayload>;
  /** Creates a single `Feed`. */
  createFeed?: Maybe<CreateFeedPayload>;
  /** Creates a single `FeedHistory`. */
  createFeedHistory?: Maybe<CreateFeedHistoryPayload>;
  /** Creates a single `Lead`. */
  createLead?: Maybe<CreateLeadPayload>;
  /** Creates a single `LinkOut`. */
  createLinkOut?: Maybe<CreateLinkOutPayload>;
  /** Creates a single `NavigationItem`. */
  createNavigationItem?: Maybe<CreateNavigationItemPayload>;
  /** Creates a single `Offer`. */
  createOffer?: Maybe<CreateOfferPayload>;
  /** Creates a single `Order`. */
  createOrder?: Maybe<CreateOrderPayload>;
  /** Creates a single `OrderProduct`. */
  createOrderProduct?: Maybe<CreateOrderProductPayload>;
  /** Creates a single `Page`. */
  createPage?: Maybe<CreatePagePayload>;
  /** Creates a single `Product`. */
  createProduct?: Maybe<CreateProductPayload>;
  /** Creates a single `Profile`. */
  createProfile?: Maybe<CreateProfilePayload>;
  /** Creates a single `SubCategory`. */
  createSubCategory?: Maybe<CreateSubCategoryPayload>;
  /** Creates a single `Subscription`. */
  createSubscription?: Maybe<CreateSubscriptionPayload>;
  /** Creates a single `Version`. */
  createVersion?: Maybe<CreateVersionPayload>;
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccount?: Maybe<UpdateAccountPayload>;
  /** Updates a single `AuthorizedUser` using a unique key and a patch. */
  updateAuthorizedUser?: Maybe<UpdateAuthorizedUserPayload>;
  /** Updates a single `AuthorizedUser` using a unique key and a patch. */
  updateAuthorizedUserByEmail?: Maybe<UpdateAuthorizedUserPayload>;
  /** Updates a single `AuthorizedUserAuthorizedUsersAccountPartnerAccess` using a unique key and a patch. */
  updateAuthorizedUserAuthorizedUsersAccountPartnerAccess?: Maybe<UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload>;
  /** Updates a single `Campaign` using a unique key and a patch. */
  updateCampaign?: Maybe<UpdateCampaignPayload>;
  /** Updates a single `CampaignGroup` using a unique key and a patch. */
  updateCampaignGroup?: Maybe<UpdateCampaignGroupPayload>;
  /** Updates a single `CampaignUser` using a unique key and a patch. */
  updateCampaignUser?: Maybe<UpdateCampaignUserPayload>;
  /** Updates a single `Catalog` using a unique key and a patch. */
  updateCatalog?: Maybe<UpdateCatalogPayload>;
  /** Updates a single `Catalog` using a unique key and a patch. */
  updateCatalogById?: Maybe<UpdateCatalogPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryById?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Contact` using a unique key and a patch. */
  updateContact?: Maybe<UpdateContactPayload>;
  /** Updates a single `Department` using a unique key and a patch. */
  updateDepartment?: Maybe<UpdateDepartmentPayload>;
  /** Updates a single `DepartmentDepartmentsCatalogListing` using a unique key and a patch. */
  updateDepartmentDepartmentsCatalogListing?: Maybe<UpdateDepartmentDepartmentsCatalogListingPayload>;
  /** Updates a single `Feed` using a unique key and a patch. */
  updateFeed?: Maybe<UpdateFeedPayload>;
  /** Updates a single `FeedHistory` using a unique key and a patch. */
  updateFeedHistory?: Maybe<UpdateFeedHistoryPayload>;
  /** Updates a single `Lead` using a unique key and a patch. */
  updateLead?: Maybe<UpdateLeadPayload>;
  /** Updates a single `LinkOut` using a unique key and a patch. */
  updateLinkOut?: Maybe<UpdateLinkOutPayload>;
  /** Updates a single `NavigationItem` using a unique key and a patch. */
  updateNavigationItem?: Maybe<UpdateNavigationItemPayload>;
  /** Updates a single `Offer` using a unique key and a patch. */
  updateOffer?: Maybe<UpdateOfferPayload>;
  /** Updates a single `Order` using a unique key and a patch. */
  updateOrder?: Maybe<UpdateOrderPayload>;
  /** Updates a single `OrderProduct` using a unique key and a patch. */
  updateOrderProduct?: Maybe<UpdateOrderProductPayload>;
  /** Updates a single `Page` using a unique key and a patch. */
  updatePage?: Maybe<UpdatePagePayload>;
  /** Updates a single `Product` using a unique key and a patch. */
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Updates a single `Profile` using a unique key and a patch. */
  updateProfile?: Maybe<UpdateProfilePayload>;
  /** Updates a single `SubCategory` using a unique key and a patch. */
  updateSubCategory?: Maybe<UpdateSubCategoryPayload>;
  /** Updates a single `SubCategory` using a unique key and a patch. */
  updateSubCategoryById?: Maybe<UpdateSubCategoryPayload>;
  /** Updates a single `Subscription` using a unique key and a patch. */
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  /** Updates a single `Version` using a unique key and a patch. */
  updateVersion?: Maybe<UpdateVersionPayload>;
  /** Updates a single `Version` using a unique key and a patch. */
  updateVersionById?: Maybe<UpdateVersionPayload>;
  /** Deletes a single `Account` using a unique key. */
  deleteAccount?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `AuthorizedUser` using a unique key. */
  deleteAuthorizedUser?: Maybe<DeleteAuthorizedUserPayload>;
  /** Deletes a single `AuthorizedUser` using a unique key. */
  deleteAuthorizedUserByEmail?: Maybe<DeleteAuthorizedUserPayload>;
  /** Deletes a single `AuthorizedUserAuthorizedUsersAccountPartnerAccess` using a unique key. */
  deleteAuthorizedUserAuthorizedUsersAccountPartnerAccess?: Maybe<DeleteAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload>;
  /** Deletes a single `Campaign` using a unique key. */
  deleteCampaign?: Maybe<DeleteCampaignPayload>;
  /** Deletes a single `CampaignGroup` using a unique key. */
  deleteCampaignGroup?: Maybe<DeleteCampaignGroupPayload>;
  /** Deletes a single `CampaignUser` using a unique key. */
  deleteCampaignUser?: Maybe<DeleteCampaignUserPayload>;
  /** Deletes a single `Catalog` using a unique key. */
  deleteCatalog?: Maybe<DeleteCatalogPayload>;
  /** Deletes a single `Catalog` using a unique key. */
  deleteCatalogById?: Maybe<DeleteCatalogPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryById?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Contact` using a unique key. */
  deleteContact?: Maybe<DeleteContactPayload>;
  /** Deletes a single `Department` using a unique key. */
  deleteDepartment?: Maybe<DeleteDepartmentPayload>;
  /** Deletes a single `DepartmentDepartmentsCatalogListing` using a unique key. */
  deleteDepartmentDepartmentsCatalogListing?: Maybe<DeleteDepartmentDepartmentsCatalogListingPayload>;
  /** Deletes a single `Feed` using a unique key. */
  deleteFeed?: Maybe<DeleteFeedPayload>;
  /** Deletes a single `FeedHistory` using a unique key. */
  deleteFeedHistory?: Maybe<DeleteFeedHistoryPayload>;
  /** Deletes a single `Lead` using a unique key. */
  deleteLead?: Maybe<DeleteLeadPayload>;
  /** Deletes a single `LinkOut` using a unique key. */
  deleteLinkOut?: Maybe<DeleteLinkOutPayload>;
  /** Deletes a single `NavigationItem` using a unique key. */
  deleteNavigationItem?: Maybe<DeleteNavigationItemPayload>;
  /** Deletes a single `Offer` using a unique key. */
  deleteOffer?: Maybe<DeleteOfferPayload>;
  /** Deletes a single `Order` using a unique key. */
  deleteOrder?: Maybe<DeleteOrderPayload>;
  /** Deletes a single `OrderProduct` using a unique key. */
  deleteOrderProduct?: Maybe<DeleteOrderProductPayload>;
  /** Deletes a single `Page` using a unique key. */
  deletePage?: Maybe<DeletePagePayload>;
  /** Deletes a single `Product` using a unique key. */
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Deletes a single `Profile` using a unique key. */
  deleteProfile?: Maybe<DeleteProfilePayload>;
  /** Deletes a single `SubCategory` using a unique key. */
  deleteSubCategory?: Maybe<DeleteSubCategoryPayload>;
  /** Deletes a single `SubCategory` using a unique key. */
  deleteSubCategoryById?: Maybe<DeleteSubCategoryPayload>;
  /** Deletes a single `Subscription` using a unique key. */
  deleteSubscription?: Maybe<DeleteSubscriptionPayload>;
  /** Deletes a single `Version` using a unique key. */
  deleteVersion?: Maybe<DeleteVersionPayload>;
  /** Deletes a single `Version` using a unique key. */
  deleteVersionById?: Maybe<DeleteVersionPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAuthorizedUserArgs = {
  input: CreateAuthorizedUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAuthorizedUserAuthorizedUsersAccountPartnerAccessArgs = {
  input: CreateAuthorizedUserAuthorizedUsersAccountPartnerAccessInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCampaignArgs = {
  input: CreateCampaignInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCampaignGroupArgs = {
  input: CreateCampaignGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCampaignUserArgs = {
  input: CreateCampaignUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCatalogArgs = {
  input: CreateCatalogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContactArgs = {
  input: CreateContactInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDepartmentArgs = {
  input: CreateDepartmentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDepartmentDepartmentsCatalogListingArgs = {
  input: CreateDepartmentDepartmentsCatalogListingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFeedArgs = {
  input: CreateFeedInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFeedHistoryArgs = {
  input: CreateFeedHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLeadArgs = {
  input: CreateLeadInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLinkOutArgs = {
  input: CreateLinkOutInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateNavigationItemArgs = {
  input: CreateNavigationItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOfferArgs = {
  input: CreateOfferInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrderProductArgs = {
  input: CreateOrderProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSubCategoryArgs = {
  input: CreateSubCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVersionArgs = {
  input: CreateVersionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorizedUserArgs = {
  input: UpdateAuthorizedUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorizedUserByEmailArgs = {
  input: UpdateAuthorizedUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessArgs = {
  input: UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCampaignArgs = {
  input: UpdateCampaignInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCampaignGroupArgs = {
  input: UpdateCampaignGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCampaignUserArgs = {
  input: UpdateCampaignUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCatalogArgs = {
  input: UpdateCatalogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCatalogByIdArgs = {
  input: UpdateCatalogByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByIdArgs = {
  input: UpdateCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContactArgs = {
  input: UpdateContactInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDepartmentArgs = {
  input: UpdateDepartmentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDepartmentDepartmentsCatalogListingArgs = {
  input: UpdateDepartmentDepartmentsCatalogListingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeedArgs = {
  input: UpdateFeedInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFeedHistoryArgs = {
  input: UpdateFeedHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLeadArgs = {
  input: UpdateLeadInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLinkOutArgs = {
  input: UpdateLinkOutInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNavigationItemArgs = {
  input: UpdateNavigationItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOfferArgs = {
  input: UpdateOfferInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrderProductArgs = {
  input: UpdateOrderProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubCategoryArgs = {
  input: UpdateSubCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubCategoryByIdArgs = {
  input: UpdateSubCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVersionArgs = {
  input: UpdateVersionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVersionByIdArgs = {
  input: UpdateVersionByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorizedUserArgs = {
  input: DeleteAuthorizedUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorizedUserByEmailArgs = {
  input: DeleteAuthorizedUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorizedUserAuthorizedUsersAccountPartnerAccessArgs = {
  input: DeleteAuthorizedUserAuthorizedUsersAccountPartnerAccessInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCampaignArgs = {
  input: DeleteCampaignInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCampaignGroupArgs = {
  input: DeleteCampaignGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCampaignUserArgs = {
  input: DeleteCampaignUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCatalogArgs = {
  input: DeleteCatalogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCatalogByIdArgs = {
  input: DeleteCatalogByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByIdArgs = {
  input: DeleteCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContactArgs = {
  input: DeleteContactInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDepartmentArgs = {
  input: DeleteDepartmentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDepartmentDepartmentsCatalogListingArgs = {
  input: DeleteDepartmentDepartmentsCatalogListingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeedArgs = {
  input: DeleteFeedInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFeedHistoryArgs = {
  input: DeleteFeedHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLeadArgs = {
  input: DeleteLeadInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLinkOutArgs = {
  input: DeleteLinkOutInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNavigationItemArgs = {
  input: DeleteNavigationItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOfferArgs = {
  input: DeleteOfferInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrderProductArgs = {
  input: DeleteOrderProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePageArgs = {
  input: DeletePageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProfileArgs = {
  input: DeleteProfileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubCategoryArgs = {
  input: DeleteSubCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubCategoryByIdArgs = {
  input: DeleteSubCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubscriptionArgs = {
  input: DeleteSubscriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVersionArgs = {
  input: DeleteVersionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVersionByIdArgs = {
  input: DeleteVersionByIdInput;
};

/** All input for the create `Account` mutation. */
export type CreateAccountInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` to be created by this mutation. */
  account: AccountInput;
};

/** An input for mutations affecting `Account` */
export type AccountInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** Input for the nested mutation of `catalog` in the `AccountInput` mutation. */
export type FkCatalogAccountInverseInput = {
  /** Flag indicating whether all other `catalog` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CatalogPkCatalogConnect>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<Array<CatalogCatalogByIdConnect>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CatalogPkCatalogDelete>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<Array<CatalogCatalogByIdDelete>>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CatalogOnCatalogForFkCatalogAccountUsingPkCatalogUpdate>>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<Array<CatalogOnCatalogForFkCatalogAccountUsingCatalogByIdUpdate>>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCatalogAccountCatalogCreateInput>>;
};

/** The fields on `catalog` to look up the row to connect. */
export type CatalogPkCatalogConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `catalog` to look up the row to connect. */
export type CatalogCatalogByIdConnect = {
  id: Scalars['Int'];
};

/** The fields on `catalog` to look up the row to delete. */
export type CatalogPkCatalogDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `catalog` to look up the row to delete. */
export type CatalogCatalogByIdDelete = {
  id: Scalars['Int'];
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCatalogForFkCatalogAccountUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCatalogForFkCatalogAccountPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnCatalogForFkCatalogAccountPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `account` in the `CatalogInput` mutation. */
export type FkCatalogAccountInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByOid?: Maybe<AccountPkAccountConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByOid?: Maybe<AccountPkAccountDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByOid?: Maybe<AccountOnCatalogForFkCatalogAccountUsingPkAccountUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<FkCatalogAccountAccountCreateInput>;
};

/** The fields on `account` to look up the row to connect. */
export type AccountPkAccountConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `account` to look up the row to delete. */
export type AccountPkAccountDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `account` to look up the row to update. */
export type AccountOnCatalogForFkCatalogAccountUsingPkAccountUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  patch: UpdateAccountOnCatalogForFkCatalogAccountPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnCatalogForFkCatalogAccountPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** Input for the nested mutation of `contact` in the `AccountInput` mutation. */
export type FkContactParentInverseInput = {
  /** Flag indicating whether all other `contact` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `contact` for the far side of the relationship. */
  connectByOid?: Maybe<Array<ContactPkContactConnect>>;
  /** The primary key(s) for `contact` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<ContactPkContactDelete>>;
  /** The primary key(s) and patch data for `contact` for the far side of the relationship. */
  updateByOid?: Maybe<Array<ContactOnContactForFkContactParentUsingPkContactUpdate>>;
  /** A `ContactInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkContactParentContactCreateInput>>;
};

/** The fields on `contact` to look up the row to connect. */
export type ContactPkContactConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `contact` to look up the row to delete. */
export type ContactPkContactDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `contact` to look up the row to update. */
export type ContactOnContactForFkContactParentUsingPkContactUpdate = {
  /** An object where the defined keys will be set on the `contact` being updated. */
  patch: UpdateContactOnContactForFkContactParentPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `contact` being updated. */
export type UpdateContactOnContactForFkContactParentPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  appProfile?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  oldId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToParent?: Maybe<FkContactParentInput>;
};

/** Input for the nested mutation of `account` in the `ContactInput` mutation. */
export type FkContactParentInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByOid?: Maybe<AccountPkAccountConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByOid?: Maybe<AccountPkAccountDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByOid?: Maybe<AccountOnContactForFkContactParentUsingPkAccountUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<FkContactParentAccountCreateInput>;
};

/** The fields on `account` to look up the row to update. */
export type AccountOnContactForFkContactParentUsingPkAccountUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  patch: UpdateAccountOnContactForFkContactParentPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnContactForFkContactParentPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** Input for the nested mutation of `campaign` in the `AccountInput` mutation. */
export type FkCampaignAccountInverseInput = {
  /** Flag indicating whether all other `campaign` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `campaign` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CampaignPkCampaignConnect>>;
  /** The primary key(s) for `campaign` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CampaignPkCampaignDelete>>;
  /** The primary key(s) and patch data for `campaign` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CampaignOnCampaignForFkCampaignAccountUsingPkCampaignUpdate>>;
  /** A `CampaignInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCampaignAccountCampaignCreateInput>>;
};

/** The fields on `campaign` to look up the row to connect. */
export type CampaignPkCampaignConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `campaign` to look up the row to delete. */
export type CampaignPkCampaignDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `campaign` to look up the row to update. */
export type CampaignOnCampaignForFkCampaignAccountUsingPkCampaignUpdate = {
  /** An object where the defined keys will be set on the `campaign` being updated. */
  patch: UpdateCampaignOnCampaignForFkCampaignAccountPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `campaign` being updated. */
export type UpdateCampaignOnCampaignForFkCampaignAccountPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  sender?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  distributionDate?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  opens?: Maybe<Scalars['Int']>;
  clicks?: Maybe<Scalars['Int']>;
  dynalogViews?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkCampaignAccountInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCampaignInverseInput>;
};

/** Input for the nested mutation of `account` in the `CampaignInput` mutation. */
export type FkCampaignAccountInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByOid?: Maybe<AccountPkAccountConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByOid?: Maybe<AccountPkAccountDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByOid?: Maybe<AccountOnCampaignForFkCampaignAccountUsingPkAccountUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<FkCampaignAccountAccountCreateInput>;
};

/** The fields on `account` to look up the row to update. */
export type AccountOnCampaignForFkCampaignAccountUsingPkAccountUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  patch: UpdateAccountOnCampaignForFkCampaignAccountPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnCampaignForFkCampaignAccountPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** Input for the nested mutation of `lead` in the `AccountInput` mutation. */
export type FkLeadAccountInverseInput = {
  /** Flag indicating whether all other `lead` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `lead` for the far side of the relationship. */
  connectByOid?: Maybe<Array<LeadPkLeadConnect>>;
  /** The primary key(s) for `lead` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<LeadPkLeadDelete>>;
  /** The primary key(s) and patch data for `lead` for the far side of the relationship. */
  updateByOid?: Maybe<Array<LeadOnLeadForFkLeadAccountUsingPkLeadUpdate>>;
  /** A `LeadInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkLeadAccountLeadCreateInput>>;
};

/** The fields on `lead` to look up the row to connect. */
export type LeadPkLeadConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `lead` to look up the row to delete. */
export type LeadPkLeadDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `lead` to look up the row to update. */
export type LeadOnLeadForFkLeadAccountUsingPkLeadUpdate = {
  /** An object where the defined keys will be set on the `lead` being updated. */
  patch: UpdateLeadOnLeadForFkLeadAccountPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `lead` being updated. */
export type UpdateLeadOnLeadForFkLeadAccountPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  profile?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkLeadAccountInput>;
  profileToProfile?: Maybe<FkLeadProfileInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserLeadInverseInput>;
};

/** Input for the nested mutation of `account` in the `LeadInput` mutation. */
export type FkLeadAccountInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByOid?: Maybe<AccountPkAccountConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByOid?: Maybe<AccountPkAccountDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByOid?: Maybe<AccountOnLeadForFkLeadAccountUsingPkAccountUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<FkLeadAccountAccountCreateInput>;
};

/** The fields on `account` to look up the row to update. */
export type AccountOnLeadForFkLeadAccountUsingPkAccountUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  patch: UpdateAccountOnLeadForFkLeadAccountPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnLeadForFkLeadAccountPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** Input for the nested mutation of `authorizedUserAuthorizedUsersAccountPartnerAccess` in the `AccountInput` mutation. */
export type FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput = {
  /** Flag indicating whether all other `authorizedUserAuthorizedUsersAccountPartnerAccess` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `authorizedUserAuthorizedUsersAccountPartnerAccess` for the far side of the relationship. */
  connectByOid?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessPkAuthorizedUserAuthorizedUsersAccountPartnerAccessConnect>>;
  /** The primary key(s) for `authorizedUserAuthorizedUsersAccountPartnerAccess` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessPkAuthorizedUserAuthorizedUsersAccountPartnerAccessDelete>>;
  /** The primary key(s) and patch data for `authorizedUserAuthorizedUsersAccountPartnerAccess` for the far side of the relationship. */
  updateByOid?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EUsingPkAuthorizedUserAuthorizedUsersAccountPartnerAccessUpdate>>;
  /** A `AuthorizedUserAuthorizedUsersAccountPartnerAccessInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EAuthorizedUserAuthorizedUsersAccountPartnerAccessCreateInput>>;
};

/** The fields on `authorizedUserAuthorizedUsersAccountPartnerAccess` to look up the row to connect. */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessPkAuthorizedUserAuthorizedUsersAccountPartnerAccessConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `authorizedUserAuthorizedUsersAccountPartnerAccess` to look up the row to delete. */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessPkAuthorizedUserAuthorizedUsersAccountPartnerAccessDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `authorizedUserAuthorizedUsersAccountPartnerAccess` to look up the row to update. */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EUsingPkAuthorizedUserAuthorizedUsersAccountPartnerAccessUpdate = {
  /** An object where the defined keys will be set on the `authorizedUserAuthorizedUsersAccountPartnerAccess` being updated. */
  patch: UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `authorizedUserAuthorizedUsersAccountPartnerAccess` being updated. */
export type UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EPatch = {
  authorizedUsers?: Maybe<Scalars['UUID']>;
  oid?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToPartnerAccess?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInput>;
  authorizedUserToAuthorizedUsers?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInput>;
};

/** Input for the nested mutation of `account` in the `AuthorizedUserAuthorizedUsersAccountPartnerAccessInput` mutation. */
export type FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByOid?: Maybe<AccountPkAccountConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByOid?: Maybe<AccountPkAccountDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByOid?: Maybe<AccountOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EUsingPkAccountUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EAccountCreateInput>;
};

/** The fields on `account` to look up the row to update. */
export type AccountOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EUsingPkAccountUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  patch: UpdateAccountOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** The `account` to be created by this mutation. */
export type FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EAccountCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** Input for the nested mutation of `authorizedUser` in the `AuthorizedUserAuthorizedUsersAccountPartnerAccessInput` mutation. */
export type FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInput = {
  /** The primary key(s) for `authorizedUser` for the far side of the relationship. */
  connectByOid?: Maybe<AuthorizedUserPkAuthorizedUserConnect>;
  /** The primary key(s) for `authorizedUser` for the far side of the relationship. */
  connectByEmail?: Maybe<AuthorizedUserAuthorizedUserByEmailConnect>;
  /** The primary key(s) for `authorizedUser` for the far side of the relationship. */
  deleteByOid?: Maybe<AuthorizedUserPkAuthorizedUserDelete>;
  /** The primary key(s) for `authorizedUser` for the far side of the relationship. */
  deleteByEmail?: Maybe<AuthorizedUserAuthorizedUserByEmailDelete>;
  /** The primary key(s) and patch data for `authorizedUser` for the far side of the relationship. */
  updateByOid?: Maybe<AuthorizedUserOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfUsingPkAuthorizedUserUpdate>;
  /** The primary key(s) and patch data for `authorizedUser` for the far side of the relationship. */
  updateByEmail?: Maybe<AuthorizedUserOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfUsingAuthorizedUserByEmailUpdate>;
  /** A `AuthorizedUserInput` object that will be created and connected to this object. */
  create?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfAuthorizedUserCreateInput>;
};

/** The fields on `authorizedUser` to look up the row to connect. */
export type AuthorizedUserPkAuthorizedUserConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `authorizedUser` to look up the row to connect. */
export type AuthorizedUserAuthorizedUserByEmailConnect = {
  email: Scalars['String'];
};

/** The fields on `authorizedUser` to look up the row to delete. */
export type AuthorizedUserPkAuthorizedUserDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `authorizedUser` to look up the row to delete. */
export type AuthorizedUserAuthorizedUserByEmailDelete = {
  email: Scalars['String'];
};

/** The fields on `authorizedUser` to look up the row to update. */
export type AuthorizedUserOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfUsingPkAuthorizedUserUpdate = {
  /** An object where the defined keys will be set on the `authorizedUser` being updated. */
  patch: UpdateAuthorizedUserOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `authorizedUser` being updated. */
export type UpdateAuthorizedUserOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  faceBookId?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  linkedInId?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInverseInput>;
};

/** Input for the nested mutation of `authorizedUserAuthorizedUsersAccountPartnerAccess` in the `AuthorizedUserInput` mutation. */
export type FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInverseInput = {
  /** Flag indicating whether all other `authorizedUserAuthorizedUsersAccountPartnerAccess` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `authorizedUserAuthorizedUsersAccountPartnerAccess` for the far side of the relationship. */
  connectByOid?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessPkAuthorizedUserAuthorizedUsersAccountPartnerAccessConnect>>;
  /** The primary key(s) for `authorizedUserAuthorizedUsersAccountPartnerAccess` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessPkAuthorizedUserAuthorizedUsersAccountPartnerAccessDelete>>;
  /** The primary key(s) and patch data for `authorizedUserAuthorizedUsersAccountPartnerAccess` for the far side of the relationship. */
  updateByOid?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfUsingPkAuthorizedUserAuthorizedUsersAccountPartnerAccessUpdate>>;
  /** A `AuthorizedUserAuthorizedUsersAccountPartnerAccessInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfAuthorizedUserAuthorizedUsersAccountPartnerAccessCreateInput>>;
};

/** The fields on `authorizedUserAuthorizedUsersAccountPartnerAccess` to look up the row to update. */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfUsingPkAuthorizedUserAuthorizedUsersAccountPartnerAccessUpdate = {
  /** An object where the defined keys will be set on the `authorizedUserAuthorizedUsersAccountPartnerAccess` being updated. */
  patch: UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `authorizedUserAuthorizedUsersAccountPartnerAccess` being updated. */
export type UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfPatch = {
  partnerAccess?: Maybe<Scalars['UUID']>;
  oid?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToPartnerAccess?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInput>;
  authorizedUserToAuthorizedUsers?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInput>;
};

/** The `authorizedUserAuthorizedUsersAccountPartnerAccess` to be created by this mutation. */
export type FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfAuthorizedUserAuthorizedUsersAccountPartnerAccessCreateInput = {
  partnerAccess?: Maybe<Scalars['UUID']>;
  oid: Scalars['UUID'];
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToPartnerAccess?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInput>;
  authorizedUserToAuthorizedUsers?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInput>;
};

/** The fields on `authorizedUser` to look up the row to update. */
export type AuthorizedUserOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfUsingAuthorizedUserByEmailUpdate = {
  /** An object where the defined keys will be set on the `authorizedUser` being updated. */
  patch: UpdateAuthorizedUserOnAuthorizedUserAuthorizedUsersAccountPartnerAccessForFkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfPatch;
  email: Scalars['String'];
};

/** The `authorizedUser` to be created by this mutation. */
export type FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfAuthorizedUserCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  faceBookId?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  linkedInId?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInverseInput>;
};

/** The `authorizedUserAuthorizedUsersAccountPartnerAccess` to be created by this mutation. */
export type FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EAuthorizedUserAuthorizedUsersAccountPartnerAccessCreateInput = {
  authorizedUsers?: Maybe<Scalars['UUID']>;
  oid: Scalars['UUID'];
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToPartnerAccess?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInput>;
  authorizedUserToAuthorizedUsers?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInput>;
};

/** The `account` to be created by this mutation. */
export type FkLeadAccountAccountCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** Input for the nested mutation of `profile` in the `LeadInput` mutation. */
export type FkLeadProfileInput = {
  /** The primary key(s) for `profile` for the far side of the relationship. */
  connectByOid?: Maybe<ProfilePkProfileConnect>;
  /** The primary key(s) for `profile` for the far side of the relationship. */
  deleteByOid?: Maybe<ProfilePkProfileDelete>;
  /** The primary key(s) and patch data for `profile` for the far side of the relationship. */
  updateByOid?: Maybe<ProfileOnLeadForFkLeadProfileUsingPkProfileUpdate>;
  /** A `ProfileInput` object that will be created and connected to this object. */
  create?: Maybe<FkLeadProfileProfileCreateInput>;
};

/** The fields on `profile` to look up the row to connect. */
export type ProfilePkProfileConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `profile` to look up the row to delete. */
export type ProfilePkProfileDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `profile` to look up the row to update. */
export type ProfileOnLeadForFkLeadProfileUsingPkProfileUpdate = {
  /** An object where the defined keys will be set on the `profile` being updated. */
  patch: UpdateProfileOnLeadForFkLeadProfilePatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `profile` being updated. */
export type UpdateProfileOnLeadForFkLeadProfilePatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadsUsingOid?: Maybe<FkLeadProfileInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCustomerInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCustomerInverseInput>;
};

/** Input for the nested mutation of `lead` in the `ProfileInput` mutation. */
export type FkLeadProfileInverseInput = {
  /** Flag indicating whether all other `lead` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `lead` for the far side of the relationship. */
  connectByOid?: Maybe<Array<LeadPkLeadConnect>>;
  /** The primary key(s) for `lead` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<LeadPkLeadDelete>>;
  /** The primary key(s) and patch data for `lead` for the far side of the relationship. */
  updateByOid?: Maybe<Array<LeadOnLeadForFkLeadProfileUsingPkLeadUpdate>>;
  /** A `LeadInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkLeadProfileLeadCreateInput>>;
};

/** The fields on `lead` to look up the row to update. */
export type LeadOnLeadForFkLeadProfileUsingPkLeadUpdate = {
  /** An object where the defined keys will be set on the `lead` being updated. */
  patch: UpdateLeadOnLeadForFkLeadProfilePatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `lead` being updated. */
export type UpdateLeadOnLeadForFkLeadProfilePatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  account?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkLeadAccountInput>;
  profileToProfile?: Maybe<FkLeadProfileInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserLeadInverseInput>;
};

/** Input for the nested mutation of `campaignUser` in the `LeadInput` mutation. */
export type FkCampaignUserLeadInverseInput = {
  /** Flag indicating whether all other `campaignUser` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `campaignUser` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CampaignUserPkCampaignUserConnect>>;
  /** The primary key(s) for `campaignUser` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CampaignUserPkCampaignUserDelete>>;
  /** The primary key(s) and patch data for `campaignUser` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CampaignUserOnCampaignUserForFkCampaignUserLeadUsingPkCampaignUserUpdate>>;
  /** A `CampaignUserInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCampaignUserLeadCampaignUserCreateInput>>;
};

/** The fields on `campaignUser` to look up the row to connect. */
export type CampaignUserPkCampaignUserConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `campaignUser` to look up the row to delete. */
export type CampaignUserPkCampaignUserDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `campaignUser` to look up the row to update. */
export type CampaignUserOnCampaignUserForFkCampaignUserLeadUsingPkCampaignUserUpdate = {
  /** An object where the defined keys will be set on the `campaignUser` being updated. */
  patch: UpdateCampaignUserOnCampaignUserForFkCampaignUserLeadPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `campaignUser` being updated. */
export type UpdateCampaignUserOnCampaignUserForFkCampaignUserLeadPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  campaignGroup?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadToLead?: Maybe<FkCampaignUserLeadInput>;
  campaignGroupToCampaignGroup?: Maybe<FkCampaignUserCampaignGroupInput>;
};

/** Input for the nested mutation of `lead` in the `CampaignUserInput` mutation. */
export type FkCampaignUserLeadInput = {
  /** The primary key(s) for `lead` for the far side of the relationship. */
  connectByOid?: Maybe<LeadPkLeadConnect>;
  /** The primary key(s) for `lead` for the far side of the relationship. */
  deleteByOid?: Maybe<LeadPkLeadDelete>;
  /** The primary key(s) and patch data for `lead` for the far side of the relationship. */
  updateByOid?: Maybe<LeadOnCampaignUserForFkCampaignUserLeadUsingPkLeadUpdate>;
  /** A `LeadInput` object that will be created and connected to this object. */
  create?: Maybe<FkCampaignUserLeadLeadCreateInput>;
};

/** The fields on `lead` to look up the row to update. */
export type LeadOnCampaignUserForFkCampaignUserLeadUsingPkLeadUpdate = {
  /** An object where the defined keys will be set on the `lead` being updated. */
  patch: UpdateLeadOnCampaignUserForFkCampaignUserLeadPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `lead` being updated. */
export type UpdateLeadOnCampaignUserForFkCampaignUserLeadPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  account?: Maybe<Scalars['UUID']>;
  profile?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkLeadAccountInput>;
  profileToProfile?: Maybe<FkLeadProfileInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserLeadInverseInput>;
};

/** The `lead` to be created by this mutation. */
export type FkCampaignUserLeadLeadCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  account?: Maybe<Scalars['UUID']>;
  profile?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkLeadAccountInput>;
  profileToProfile?: Maybe<FkLeadProfileInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserLeadInverseInput>;
};

/** Input for the nested mutation of `campaignGroup` in the `CampaignUserInput` mutation. */
export type FkCampaignUserCampaignGroupInput = {
  /** The primary key(s) for `campaignGroup` for the far side of the relationship. */
  connectByOid?: Maybe<CampaignGroupPkCampaignGroupConnect>;
  /** The primary key(s) for `campaignGroup` for the far side of the relationship. */
  deleteByOid?: Maybe<CampaignGroupPkCampaignGroupDelete>;
  /** The primary key(s) and patch data for `campaignGroup` for the far side of the relationship. */
  updateByOid?: Maybe<CampaignGroupOnCampaignUserForFkCampaignUserCampaignGroupUsingPkCampaignGroupUpdate>;
  /** A `CampaignGroupInput` object that will be created and connected to this object. */
  create?: Maybe<FkCampaignUserCampaignGroupCampaignGroupCreateInput>;
};

/** The fields on `campaignGroup` to look up the row to connect. */
export type CampaignGroupPkCampaignGroupConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `campaignGroup` to look up the row to delete. */
export type CampaignGroupPkCampaignGroupDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `campaignGroup` to look up the row to update. */
export type CampaignGroupOnCampaignUserForFkCampaignUserCampaignGroupUsingPkCampaignGroupUpdate = {
  /** An object where the defined keys will be set on the `campaignGroup` being updated. */
  patch: UpdateCampaignGroupOnCampaignUserForFkCampaignUserCampaignGroupPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `campaignGroup` being updated. */
export type UpdateCampaignGroupOnCampaignUserForFkCampaignUserCampaignGroupPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  campaignToCampaign?: Maybe<FkCampaignGroupCampaignInput>;
  catalogToCatalog?: Maybe<FkCampaignGroupCatalogInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserCampaignGroupInverseInput>;
};

/** Input for the nested mutation of `campaign` in the `CampaignGroupInput` mutation. */
export type FkCampaignGroupCampaignInput = {
  /** The primary key(s) for `campaign` for the far side of the relationship. */
  connectByOid?: Maybe<CampaignPkCampaignConnect>;
  /** The primary key(s) for `campaign` for the far side of the relationship. */
  deleteByOid?: Maybe<CampaignPkCampaignDelete>;
  /** The primary key(s) and patch data for `campaign` for the far side of the relationship. */
  updateByOid?: Maybe<CampaignOnCampaignGroupForFkCampaignGroupCampaignUsingPkCampaignUpdate>;
  /** A `CampaignInput` object that will be created and connected to this object. */
  create?: Maybe<FkCampaignGroupCampaignCampaignCreateInput>;
};

/** The fields on `campaign` to look up the row to update. */
export type CampaignOnCampaignGroupForFkCampaignGroupCampaignUsingPkCampaignUpdate = {
  /** An object where the defined keys will be set on the `campaign` being updated. */
  patch: UpdateCampaignOnCampaignGroupForFkCampaignGroupCampaignPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `campaign` being updated. */
export type UpdateCampaignOnCampaignGroupForFkCampaignGroupCampaignPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  account?: Maybe<Scalars['UUID']>;
  sender?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  distributionDate?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  opens?: Maybe<Scalars['Int']>;
  clicks?: Maybe<Scalars['Int']>;
  dynalogViews?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkCampaignAccountInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCampaignInverseInput>;
};

/** Input for the nested mutation of `campaignGroup` in the `CampaignInput` mutation. */
export type FkCampaignGroupCampaignInverseInput = {
  /** Flag indicating whether all other `campaignGroup` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `campaignGroup` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CampaignGroupPkCampaignGroupConnect>>;
  /** The primary key(s) for `campaignGroup` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CampaignGroupPkCampaignGroupDelete>>;
  /** The primary key(s) and patch data for `campaignGroup` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CampaignGroupOnCampaignGroupForFkCampaignGroupCampaignUsingPkCampaignGroupUpdate>>;
  /** A `CampaignGroupInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCampaignGroupCampaignCampaignGroupCreateInput>>;
};

/** The fields on `campaignGroup` to look up the row to update. */
export type CampaignGroupOnCampaignGroupForFkCampaignGroupCampaignUsingPkCampaignGroupUpdate = {
  /** An object where the defined keys will be set on the `campaignGroup` being updated. */
  patch: UpdateCampaignGroupOnCampaignGroupForFkCampaignGroupCampaignPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `campaignGroup` being updated. */
export type UpdateCampaignGroupOnCampaignGroupForFkCampaignGroupCampaignPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  campaignToCampaign?: Maybe<FkCampaignGroupCampaignInput>;
  catalogToCatalog?: Maybe<FkCampaignGroupCatalogInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserCampaignGroupInverseInput>;
};

/** Input for the nested mutation of `catalog` in the `CampaignGroupInput` mutation. */
export type FkCampaignGroupCatalogInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnCampaignGroupForFkCampaignGroupCatalogUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnCampaignGroupForFkCampaignGroupCatalogUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkCampaignGroupCatalogCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCampaignGroupForFkCampaignGroupCatalogUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCampaignGroupForFkCampaignGroupCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnCampaignGroupForFkCampaignGroupCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `department` in the `CatalogInput` mutation. */
export type FkCatalogPrimaryDepartmentInput = {
  /** The primary key(s) for `department` for the far side of the relationship. */
  connectByOid?: Maybe<DepartmentPkDepartmentConnect>;
  /** The primary key(s) for `department` for the far side of the relationship. */
  deleteByOid?: Maybe<DepartmentPkDepartmentDelete>;
  /** The primary key(s) and patch data for `department` for the far side of the relationship. */
  updateByOid?: Maybe<DepartmentOnCatalogForFkCatalogPrimaryDepartmentUsingPkDepartmentUpdate>;
  /** A `DepartmentInput` object that will be created and connected to this object. */
  create?: Maybe<FkCatalogPrimaryDepartmentDepartmentCreateInput>;
};

/** The fields on `department` to look up the row to connect. */
export type DepartmentPkDepartmentConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `department` to look up the row to delete. */
export type DepartmentPkDepartmentDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `department` to look up the row to update. */
export type DepartmentOnCatalogForFkCatalogPrimaryDepartmentUsingPkDepartmentUpdate = {
  /** An object where the defined keys will be set on the `department` being updated. */
  patch: UpdateDepartmentOnCatalogForFkCatalogPrimaryDepartmentPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `department` being updated. */
export type UpdateDepartmentOnCatalogForFkCatalogPrimaryDepartmentPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** Input for the nested mutation of `department` in the `DepartmentInput` mutation. */
export type FkDepartmentParentDepartmentInput = {
  /** The primary key(s) for `department` for the far side of the relationship. */
  connectByOid?: Maybe<DepartmentPkDepartmentConnect>;
  /** The primary key(s) for `department` for the far side of the relationship. */
  deleteByOid?: Maybe<DepartmentPkDepartmentDelete>;
  /** The primary key(s) and patch data for `department` for the far side of the relationship. */
  updateByOid?: Maybe<DepartmentOnDepartmentForFkDepartmentParentDepartmentUsingPkDepartmentUpdate>;
  /** A `DepartmentInput` object that will be created and connected to this object. */
  create?: Maybe<FkDepartmentParentDepartmentDepartmentCreateInput>;
};

/** The fields on `department` to look up the row to update. */
export type DepartmentOnDepartmentForFkDepartmentParentDepartmentUsingPkDepartmentUpdate = {
  /** An object where the defined keys will be set on the `department` being updated. */
  patch: UpdateDepartmentOnDepartmentForFkDepartmentParentDepartmentPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `department` being updated. */
export type UpdateDepartmentOnDepartmentForFkDepartmentParentDepartmentPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** Input for the nested mutation of `catalog` in the `DepartmentInput` mutation. */
export type FkCatalogPrimaryDepartmentInverseInput = {
  /** Flag indicating whether all other `catalog` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CatalogPkCatalogConnect>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<Array<CatalogCatalogByIdConnect>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CatalogPkCatalogDelete>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<Array<CatalogCatalogByIdDelete>>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CatalogOnCatalogForFkCatalogPrimaryDepartmentUsingPkCatalogUpdate>>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<Array<CatalogOnCatalogForFkCatalogPrimaryDepartmentUsingCatalogByIdUpdate>>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCatalogPrimaryDepartmentCatalogCreateInput>>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCatalogForFkCatalogPrimaryDepartmentUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCatalogForFkCatalogPrimaryDepartmentPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnCatalogForFkCatalogPrimaryDepartmentPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `version` in the `CatalogInput` mutation. */
export type FkCatalogActiveVersionInput = {
  /** The primary key(s) for `version` for the far side of the relationship. */
  connectByOid?: Maybe<VersionPkVersionConnect>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  connectById?: Maybe<VersionVersionByIdConnect>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  deleteByOid?: Maybe<VersionPkVersionDelete>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  deleteById?: Maybe<VersionVersionByIdDelete>;
  /** The primary key(s) and patch data for `version` for the far side of the relationship. */
  updateByOid?: Maybe<VersionOnCatalogForFkCatalogActiveVersionUsingPkVersionUpdate>;
  /** The primary key(s) and patch data for `version` for the far side of the relationship. */
  updateById?: Maybe<VersionOnCatalogForFkCatalogActiveVersionUsingVersionByIdUpdate>;
  /** A `VersionInput` object that will be created and connected to this object. */
  create?: Maybe<FkCatalogActiveVersionVersionCreateInput>;
};

/** The fields on `version` to look up the row to connect. */
export type VersionPkVersionConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `version` to look up the row to connect. */
export type VersionVersionByIdConnect = {
  id: Scalars['Int'];
};

/** The fields on `version` to look up the row to delete. */
export type VersionPkVersionDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `version` to look up the row to delete. */
export type VersionVersionByIdDelete = {
  id: Scalars['Int'];
};

/** The fields on `version` to look up the row to update. */
export type VersionOnCatalogForFkCatalogActiveVersionUsingPkVersionUpdate = {
  /** An object where the defined keys will be set on the `version` being updated. */
  patch: UpdateVersionOnCatalogForFkCatalogActiveVersionPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `version` being updated. */
export type UpdateVersionOnCatalogForFkCatalogActiveVersionPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  catalog?: Maybe<Scalars['UUID']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkVersionCatalogInput>;
  catalogsUsingOid?: Maybe<FkCatalogActiveVersionInverseInput>;
  pagesUsingOid?: Maybe<FkPageVersionInverseInput>;
};

/** Input for the nested mutation of `catalog` in the `VersionInput` mutation. */
export type FkVersionCatalogInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnVersionForFkVersionCatalogUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnVersionForFkVersionCatalogUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkVersionCatalogCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnVersionForFkVersionCatalogUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnVersionForFkVersionCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnVersionForFkVersionCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `departmentDepartmentsCatalogListing` in the `CatalogInput` mutation. */
export type FkDepartmentDepartmentsCatalogListingsListingsInverseInput = {
  /** Flag indicating whether all other `departmentDepartmentsCatalogListing` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `departmentDepartmentsCatalogListing` for the far side of the relationship. */
  connectByOid?: Maybe<Array<DepartmentDepartmentsCatalogListingPkDepartmentDepartmentsCatalogListingsConnect>>;
  /** The primary key(s) for `departmentDepartmentsCatalogListing` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<DepartmentDepartmentsCatalogListingPkDepartmentDepartmentsCatalogListingsDelete>>;
  /** The primary key(s) and patch data for `departmentDepartmentsCatalogListing` for the far side of the relationship. */
  updateByOid?: Maybe<Array<DepartmentDepartmentsCatalogListingOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsUsingPkDepartmentDepartmentsCatalogListingsUpdate>>;
  /** A `DepartmentDepartmentsCatalogListingInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkDepartmentDepartmentsCatalogListingsListingsDepartmentDepartmentsCatalogListingsCreateInput>>;
};

/** The fields on `departmentDepartmentsCatalogListing` to look up the row to connect. */
export type DepartmentDepartmentsCatalogListingPkDepartmentDepartmentsCatalogListingsConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `departmentDepartmentsCatalogListing` to look up the row to delete. */
export type DepartmentDepartmentsCatalogListingPkDepartmentDepartmentsCatalogListingsDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `departmentDepartmentsCatalogListing` to look up the row to update. */
export type DepartmentDepartmentsCatalogListingOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsUsingPkDepartmentDepartmentsCatalogListingsUpdate = {
  /** An object where the defined keys will be set on the `departmentDepartmentsCatalogListing` being updated. */
  patch: UpdateDepartmentDepartmentsCatalogListingOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `departmentDepartmentsCatalogListing` being updated. */
export type UpdateDepartmentDepartmentsCatalogListingOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsPatch = {
  departments?: Maybe<Scalars['UUID']>;
  oid?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToListings?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInput>;
  departmentToDepartments?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInput>;
};

/** Input for the nested mutation of `catalog` in the `DepartmentDepartmentsCatalogListingInput` mutation. */
export type FkDepartmentDepartmentsCatalogListingsListingsInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `version` in the `CatalogInput` mutation. */
export type FkVersionCatalogInverseInput = {
  /** Flag indicating whether all other `version` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  connectByOid?: Maybe<Array<VersionPkVersionConnect>>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  connectById?: Maybe<Array<VersionVersionByIdConnect>>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<VersionPkVersionDelete>>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  deleteById?: Maybe<Array<VersionVersionByIdDelete>>;
  /** The primary key(s) and patch data for `version` for the far side of the relationship. */
  updateByOid?: Maybe<Array<VersionOnVersionForFkVersionCatalogUsingPkVersionUpdate>>;
  /** The primary key(s) and patch data for `version` for the far side of the relationship. */
  updateById?: Maybe<Array<VersionOnVersionForFkVersionCatalogUsingVersionByIdUpdate>>;
  /** A `VersionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkVersionCatalogVersionCreateInput>>;
};

/** The fields on `version` to look up the row to update. */
export type VersionOnVersionForFkVersionCatalogUsingPkVersionUpdate = {
  /** An object where the defined keys will be set on the `version` being updated. */
  patch: UpdateVersionOnVersionForFkVersionCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `version` being updated. */
export type UpdateVersionOnVersionForFkVersionCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkVersionCatalogInput>;
  catalogsUsingOid?: Maybe<FkCatalogActiveVersionInverseInput>;
  pagesUsingOid?: Maybe<FkPageVersionInverseInput>;
};

/** Input for the nested mutation of `catalog` in the `VersionInput` mutation. */
export type FkCatalogActiveVersionInverseInput = {
  /** Flag indicating whether all other `catalog` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CatalogPkCatalogConnect>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<Array<CatalogCatalogByIdConnect>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CatalogPkCatalogDelete>>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<Array<CatalogCatalogByIdDelete>>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CatalogOnCatalogForFkCatalogActiveVersionUsingPkCatalogUpdate>>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<Array<CatalogOnCatalogForFkCatalogActiveVersionUsingCatalogByIdUpdate>>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCatalogActiveVersionCatalogCreateInput>>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCatalogForFkCatalogActiveVersionUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCatalogForFkCatalogActiveVersionPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnCatalogForFkCatalogActiveVersionPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `offer` in the `CatalogInput` mutation. */
export type FkOfferCatalogInverseInput = {
  /** Flag indicating whether all other `offer` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `offer` for the far side of the relationship. */
  connectByOid?: Maybe<Array<OfferPkOfferConnect>>;
  /** The primary key(s) for `offer` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<OfferPkOfferDelete>>;
  /** The primary key(s) and patch data for `offer` for the far side of the relationship. */
  updateByOid?: Maybe<Array<OfferOnOfferForFkOfferCatalogUsingPkOfferUpdate>>;
  /** A `OfferInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkOfferCatalogOfferCreateInput>>;
};

/** The fields on `offer` to look up the row to connect. */
export type OfferPkOfferConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `offer` to look up the row to delete. */
export type OfferPkOfferDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `offer` to look up the row to update. */
export type OfferOnOfferForFkOfferCatalogUsingPkOfferUpdate = {
  /** An object where the defined keys will be set on the `offer` being updated. */
  patch: UpdateOfferOnOfferForFkOfferCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `offer` being updated. */
export type UpdateOfferOnOfferForFkOfferCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  code?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  certificate?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['String']>;
  disclaimer?: Maybe<Scalars['String']>;
  burst?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkOfferCatalogInput>;
};

/** Input for the nested mutation of `catalog` in the `OfferInput` mutation. */
export type FkOfferCatalogInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnOfferForFkOfferCatalogUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnOfferForFkOfferCatalogUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkOfferCatalogCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnOfferForFkOfferCatalogUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnOfferForFkOfferCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnOfferForFkOfferCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `category` in the `CatalogInput` mutation. */
export type FkCategoryCatalogInverseInput = {
  /** Flag indicating whether all other `category` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CategoryPkCategoryConnect>>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: Maybe<Array<CategoryCategoryByIdConnect>>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CategoryPkCategoryDelete>>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: Maybe<Array<CategoryCategoryByIdDelete>>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CategoryOnCategoryForFkCategoryCatalogUsingPkCategoryUpdate>>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: Maybe<Array<CategoryOnCategoryForFkCategoryCatalogUsingCategoryByIdUpdate>>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCategoryCatalogCategoryCreateInput>>;
};

/** The fields on `category` to look up the row to connect. */
export type CategoryPkCategoryConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `category` to look up the row to connect. */
export type CategoryCategoryByIdConnect = {
  id: Scalars['Int'];
};

/** The fields on `category` to look up the row to delete. */
export type CategoryPkCategoryDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `category` to look up the row to delete. */
export type CategoryCategoryByIdDelete = {
  id: Scalars['Int'];
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnCategoryForFkCategoryCatalogUsingPkCategoryUpdate = {
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnCategoryForFkCategoryCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnCategoryForFkCategoryCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkCategoryCatalogInput>;
  subCategoriesUsingOid?: Maybe<FkSubCategoryCategoryInverseInput>;
  subProductsUsingNameAndCatalog?: Maybe<FakePublicSubProductsForeignKey0InverseInput>;
};

/** Input for the nested mutation of `catalog` in the `CategoryInput` mutation. */
export type FkCategoryCatalogInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnCategoryForFkCategoryCatalogUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnCategoryForFkCategoryCatalogUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkCategoryCatalogCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCategoryForFkCategoryCatalogUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCategoryForFkCategoryCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnCategoryForFkCategoryCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `feed` in the `CatalogInput` mutation. */
export type FkFeedCatalogInverseInput = {
  /** Flag indicating whether all other `feed` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `feed` for the far side of the relationship. */
  connectByOid?: Maybe<Array<FeedPkFeedConnect>>;
  /** The primary key(s) for `feed` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<FeedPkFeedDelete>>;
  /** The primary key(s) and patch data for `feed` for the far side of the relationship. */
  updateByOid?: Maybe<Array<FeedOnFeedForFkFeedCatalogUsingPkFeedUpdate>>;
  /** A `FeedInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkFeedCatalogFeedCreateInput>>;
};

/** The fields on `feed` to look up the row to connect. */
export type FeedPkFeedConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `feed` to look up the row to delete. */
export type FeedPkFeedDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `feed` to look up the row to update. */
export type FeedOnFeedForFkFeedCatalogUsingPkFeedUpdate = {
  /** An object where the defined keys will be set on the `feed` being updated. */
  patch: UpdateFeedOnFeedForFkFeedCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `feed` being updated. */
export type UpdateFeedOnFeedForFkFeedCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  feedType?: Maybe<Scalars['String']>;
  feedMap?: Maybe<Scalars['String']>;
  productMap?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  autoUpdate?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkFeedCatalogInput>;
  feedHistoriesUsingOid?: Maybe<FkFeedHistoryFeedInverseInput>;
};

/** Input for the nested mutation of `catalog` in the `FeedInput` mutation. */
export type FkFeedCatalogInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnFeedForFkFeedCatalogUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnFeedForFkFeedCatalogUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkFeedCatalogCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnFeedForFkFeedCatalogUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnFeedForFkFeedCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnFeedForFkFeedCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `product` in the `CatalogInput` mutation. */
export type FkProductCatalogInverseInput = {
  /** Flag indicating whether all other `product` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectByOid?: Maybe<Array<ProductPkProductConnect>>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<ProductPkProductDelete>>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateByOid?: Maybe<Array<ProductOnProductForFkProductCatalogUsingPkProductUpdate>>;
  /** A `ProductInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkProductCatalogProductCreateInput>>;
};

/** The fields on `product` to look up the row to connect. */
export type ProductPkProductConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `product` to look up the row to delete. */
export type ProductPkProductDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `product` to look up the row to update. */
export type ProductOnProductForFkProductCatalogUsingPkProductUpdate = {
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnProductForFkProductCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnProductForFkProductCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  category?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  subCategory?: Maybe<Scalars['String']>;
  catalogToCatalog?: Maybe<FkProductCatalogInput>;
  categoryByCatalogToCategoryAndCatalog?: Maybe<FakePublicProductForeignKey0Input>;
};

/** Input for the nested mutation of `catalog` in the `ProductInput` mutation. */
export type FkProductCatalogInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnProductForFkProductCatalogUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnProductForFkProductCatalogUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkProductCatalogCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnProductForFkProductCatalogUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnProductForFkProductCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnProductForFkProductCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `campaignGroup` in the `CatalogInput` mutation. */
export type FkCampaignGroupCatalogInverseInput = {
  /** Flag indicating whether all other `campaignGroup` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `campaignGroup` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CampaignGroupPkCampaignGroupConnect>>;
  /** The primary key(s) for `campaignGroup` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CampaignGroupPkCampaignGroupDelete>>;
  /** The primary key(s) and patch data for `campaignGroup` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CampaignGroupOnCampaignGroupForFkCampaignGroupCatalogUsingPkCampaignGroupUpdate>>;
  /** A `CampaignGroupInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCampaignGroupCatalogCampaignGroupCreateInput>>;
};

/** The fields on `campaignGroup` to look up the row to update. */
export type CampaignGroupOnCampaignGroupForFkCampaignGroupCatalogUsingPkCampaignGroupUpdate = {
  /** An object where the defined keys will be set on the `campaignGroup` being updated. */
  patch: UpdateCampaignGroupOnCampaignGroupForFkCampaignGroupCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `campaignGroup` being updated. */
export type UpdateCampaignGroupOnCampaignGroupForFkCampaignGroupCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  campaignToCampaign?: Maybe<FkCampaignGroupCampaignInput>;
  catalogToCatalog?: Maybe<FkCampaignGroupCatalogInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserCampaignGroupInverseInput>;
};

/** Input for the nested mutation of `campaignUser` in the `CampaignGroupInput` mutation. */
export type FkCampaignUserCampaignGroupInverseInput = {
  /** Flag indicating whether all other `campaignUser` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `campaignUser` for the far side of the relationship. */
  connectByOid?: Maybe<Array<CampaignUserPkCampaignUserConnect>>;
  /** The primary key(s) for `campaignUser` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<CampaignUserPkCampaignUserDelete>>;
  /** The primary key(s) and patch data for `campaignUser` for the far side of the relationship. */
  updateByOid?: Maybe<Array<CampaignUserOnCampaignUserForFkCampaignUserCampaignGroupUsingPkCampaignUserUpdate>>;
  /** A `CampaignUserInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkCampaignUserCampaignGroupCampaignUserCreateInput>>;
};

/** The fields on `campaignUser` to look up the row to update. */
export type CampaignUserOnCampaignUserForFkCampaignUserCampaignGroupUsingPkCampaignUserUpdate = {
  /** An object where the defined keys will be set on the `campaignUser` being updated. */
  patch: UpdateCampaignUserOnCampaignUserForFkCampaignUserCampaignGroupPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `campaignUser` being updated. */
export type UpdateCampaignUserOnCampaignUserForFkCampaignUserCampaignGroupPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  lead?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadToLead?: Maybe<FkCampaignUserLeadInput>;
  campaignGroupToCampaignGroup?: Maybe<FkCampaignUserCampaignGroupInput>;
};

/** The `campaignUser` to be created by this mutation. */
export type FkCampaignUserCampaignGroupCampaignUserCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  lead?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadToLead?: Maybe<FkCampaignUserLeadInput>;
  campaignGroupToCampaignGroup?: Maybe<FkCampaignUserCampaignGroupInput>;
};

/** The `campaignGroup` to be created by this mutation. */
export type FkCampaignGroupCatalogCampaignGroupCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  campaignToCampaign?: Maybe<FkCampaignGroupCampaignInput>;
  catalogToCatalog?: Maybe<FkCampaignGroupCatalogInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserCampaignGroupInverseInput>;
};

/** Input for the nested mutation of `subscription` in the `CatalogInput` mutation. */
export type FkSubscriptionCatalogInverseInput = {
  /** Flag indicating whether all other `subscription` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  connectByOid?: Maybe<Array<SubscriptionPkSubscriptionConnect>>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<SubscriptionPkSubscriptionDelete>>;
  /** The primary key(s) and patch data for `subscription` for the far side of the relationship. */
  updateByOid?: Maybe<Array<SubscriptionOnSubscriptionForFkSubscriptionCatalogUsingPkSubscriptionUpdate>>;
  /** A `SubscriptionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkSubscriptionCatalogSubscriptionCreateInput>>;
};

/** The fields on `subscription` to look up the row to connect. */
export type SubscriptionPkSubscriptionConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `subscription` to look up the row to delete. */
export type SubscriptionPkSubscriptionDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `subscription` to look up the row to update. */
export type SubscriptionOnSubscriptionForFkSubscriptionCatalogUsingPkSubscriptionUpdate = {
  /** An object where the defined keys will be set on the `subscription` being updated. */
  patch: UpdateSubscriptionOnSubscriptionForFkSubscriptionCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `subscription` being updated. */
export type UpdateSubscriptionOnSubscriptionForFkSubscriptionCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['Datetime']>;
  charge?: Maybe<Scalars['BigFloat']>;
  listingId?: Maybe<Scalars['Int']>;
  exportStatus?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkSubscriptionCustomerInput>;
  catalogToCatalog?: Maybe<FkSubscriptionCatalogInput>;
};

/** Input for the nested mutation of `profile` in the `SubscriptionInput` mutation. */
export type FkSubscriptionCustomerInput = {
  /** The primary key(s) for `profile` for the far side of the relationship. */
  connectByOid?: Maybe<ProfilePkProfileConnect>;
  /** The primary key(s) for `profile` for the far side of the relationship. */
  deleteByOid?: Maybe<ProfilePkProfileDelete>;
  /** The primary key(s) and patch data for `profile` for the far side of the relationship. */
  updateByOid?: Maybe<ProfileOnSubscriptionForFkSubscriptionCustomerUsingPkProfileUpdate>;
  /** A `ProfileInput` object that will be created and connected to this object. */
  create?: Maybe<FkSubscriptionCustomerProfileCreateInput>;
};

/** The fields on `profile` to look up the row to update. */
export type ProfileOnSubscriptionForFkSubscriptionCustomerUsingPkProfileUpdate = {
  /** An object where the defined keys will be set on the `profile` being updated. */
  patch: UpdateProfileOnSubscriptionForFkSubscriptionCustomerPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `profile` being updated. */
export type UpdateProfileOnSubscriptionForFkSubscriptionCustomerPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadsUsingOid?: Maybe<FkLeadProfileInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCustomerInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCustomerInverseInput>;
};

/** Input for the nested mutation of `subscription` in the `ProfileInput` mutation. */
export type FkSubscriptionCustomerInverseInput = {
  /** Flag indicating whether all other `subscription` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  connectByOid?: Maybe<Array<SubscriptionPkSubscriptionConnect>>;
  /** The primary key(s) for `subscription` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<SubscriptionPkSubscriptionDelete>>;
  /** The primary key(s) and patch data for `subscription` for the far side of the relationship. */
  updateByOid?: Maybe<Array<SubscriptionOnSubscriptionForFkSubscriptionCustomerUsingPkSubscriptionUpdate>>;
  /** A `SubscriptionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkSubscriptionCustomerSubscriptionCreateInput>>;
};

/** The fields on `subscription` to look up the row to update. */
export type SubscriptionOnSubscriptionForFkSubscriptionCustomerUsingPkSubscriptionUpdate = {
  /** An object where the defined keys will be set on the `subscription` being updated. */
  patch: UpdateSubscriptionOnSubscriptionForFkSubscriptionCustomerPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `subscription` being updated. */
export type UpdateSubscriptionOnSubscriptionForFkSubscriptionCustomerPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  catalog?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['Datetime']>;
  charge?: Maybe<Scalars['BigFloat']>;
  listingId?: Maybe<Scalars['Int']>;
  exportStatus?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkSubscriptionCustomerInput>;
  catalogToCatalog?: Maybe<FkSubscriptionCatalogInput>;
};

/** Input for the nested mutation of `catalog` in the `SubscriptionInput` mutation. */
export type FkSubscriptionCatalogInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnSubscriptionForFkSubscriptionCatalogUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnSubscriptionForFkSubscriptionCatalogUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkSubscriptionCatalogCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnSubscriptionForFkSubscriptionCatalogUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnSubscriptionForFkSubscriptionCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnSubscriptionForFkSubscriptionCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `linkOut` in the `CatalogInput` mutation. */
export type FkLinkOutCatalogInverseInput = {
  /** Flag indicating whether all other `linkOut` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `linkOut` for the far side of the relationship. */
  connectByOid?: Maybe<Array<LinkOutPkLinkOutConnect>>;
  /** The primary key(s) for `linkOut` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<LinkOutPkLinkOutDelete>>;
  /** The primary key(s) and patch data for `linkOut` for the far side of the relationship. */
  updateByOid?: Maybe<Array<LinkOutOnLinkOutForFkLinkOutCatalogUsingPkLinkOutUpdate>>;
  /** A `LinkOutInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkLinkOutCatalogLinkOutCreateInput>>;
};

/** The fields on `linkOut` to look up the row to connect. */
export type LinkOutPkLinkOutConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `linkOut` to look up the row to delete. */
export type LinkOutPkLinkOutDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `linkOut` to look up the row to update. */
export type LinkOutOnLinkOutForFkLinkOutCatalogUsingPkLinkOutUpdate = {
  /** An object where the defined keys will be set on the `linkOut` being updated. */
  patch: UpdateLinkOutOnLinkOutForFkLinkOutCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `linkOut` being updated. */
export type UpdateLinkOutOnLinkOutForFkLinkOutCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  linkTime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  charge?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  customerIp?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkLinkOutCustomerInput>;
  catalogToCatalog?: Maybe<FkLinkOutCatalogInput>;
};

/** Input for the nested mutation of `profile` in the `LinkOutInput` mutation. */
export type FkLinkOutCustomerInput = {
  /** The primary key(s) for `profile` for the far side of the relationship. */
  connectByOid?: Maybe<ProfilePkProfileConnect>;
  /** The primary key(s) for `profile` for the far side of the relationship. */
  deleteByOid?: Maybe<ProfilePkProfileDelete>;
  /** The primary key(s) and patch data for `profile` for the far side of the relationship. */
  updateByOid?: Maybe<ProfileOnLinkOutForFkLinkOutCustomerUsingPkProfileUpdate>;
  /** A `ProfileInput` object that will be created and connected to this object. */
  create?: Maybe<FkLinkOutCustomerProfileCreateInput>;
};

/** The fields on `profile` to look up the row to update. */
export type ProfileOnLinkOutForFkLinkOutCustomerUsingPkProfileUpdate = {
  /** An object where the defined keys will be set on the `profile` being updated. */
  patch: UpdateProfileOnLinkOutForFkLinkOutCustomerPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `profile` being updated. */
export type UpdateProfileOnLinkOutForFkLinkOutCustomerPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadsUsingOid?: Maybe<FkLeadProfileInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCustomerInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCustomerInverseInput>;
};

/** Input for the nested mutation of `linkOut` in the `ProfileInput` mutation. */
export type FkLinkOutCustomerInverseInput = {
  /** Flag indicating whether all other `linkOut` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `linkOut` for the far side of the relationship. */
  connectByOid?: Maybe<Array<LinkOutPkLinkOutConnect>>;
  /** The primary key(s) for `linkOut` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<LinkOutPkLinkOutDelete>>;
  /** The primary key(s) and patch data for `linkOut` for the far side of the relationship. */
  updateByOid?: Maybe<Array<LinkOutOnLinkOutForFkLinkOutCustomerUsingPkLinkOutUpdate>>;
  /** A `LinkOutInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkLinkOutCustomerLinkOutCreateInput>>;
};

/** The fields on `linkOut` to look up the row to update. */
export type LinkOutOnLinkOutForFkLinkOutCustomerUsingPkLinkOutUpdate = {
  /** An object where the defined keys will be set on the `linkOut` being updated. */
  patch: UpdateLinkOutOnLinkOutForFkLinkOutCustomerPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `linkOut` being updated. */
export type UpdateLinkOutOnLinkOutForFkLinkOutCustomerPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  linkTime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  charge?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  customerIp?: Maybe<Scalars['String']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkLinkOutCustomerInput>;
  catalogToCatalog?: Maybe<FkLinkOutCatalogInput>;
};

/** Input for the nested mutation of `catalog` in the `LinkOutInput` mutation. */
export type FkLinkOutCatalogInput = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnLinkOutForFkLinkOutCatalogUsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnLinkOutForFkLinkOutCatalogUsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FkLinkOutCatalogCatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnLinkOutForFkLinkOutCatalogUsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnLinkOutForFkLinkOutCatalogPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnLinkOutForFkLinkOutCatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `categoryByCatalog` in the `CatalogInput` mutation. */
export type FakePublicCategoryByCatalogForeignKey0InverseInput = {
  /** A `CategoryByCatalogInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FakePublicCategoryByCatalogForeignKey0CategoryByCatalogCreateInput>>;
};

/** The `categoryByCatalog` to be created by this mutation. */
export type FakePublicCategoryByCatalogForeignKey0CategoryByCatalogCreateInput = {
  category?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  catalogToCatalog?: Maybe<FakePublicCategoryByCatalogForeignKey0Input>;
  productsUsingCategoryAndCatalog?: Maybe<FakePublicProductForeignKey0InverseInput>;
};

/** Input for the nested mutation of `catalog` in the `CategoryByCatalogInput` mutation. */
export type FakePublicCategoryByCatalogForeignKey0Input = {
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectByOid?: Maybe<CatalogPkCatalogConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  connectById?: Maybe<CatalogCatalogByIdConnect>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteByOid?: Maybe<CatalogPkCatalogDelete>;
  /** The primary key(s) for `catalog` for the far side of the relationship. */
  deleteById?: Maybe<CatalogCatalogByIdDelete>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateByOid?: Maybe<CatalogOnCategoryByCatalogForFakePublicCategoryByCatalogForeignKey0UsingPkCatalogUpdate>;
  /** The primary key(s) and patch data for `catalog` for the far side of the relationship. */
  updateById?: Maybe<CatalogOnCategoryByCatalogForFakePublicCategoryByCatalogForeignKey0UsingCatalogByIdUpdate>;
  /** A `CatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FakePublicCategoryByCatalogForeignKey0CatalogCreateInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCategoryByCatalogForFakePublicCategoryByCatalogForeignKey0UsingPkCatalogUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCategoryByCatalogForFakePublicCategoryByCatalogForeignKey0Patch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `catalog` being updated. */
export type UpdateCatalogOnCategoryByCatalogForFakePublicCategoryByCatalogForeignKey0Patch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCategoryByCatalogForFakePublicCategoryByCatalogForeignKey0UsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCategoryByCatalogForFakePublicCategoryByCatalogForeignKey0Patch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FakePublicCategoryByCatalogForeignKey0CatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `product` in the `CategoryByCatalogInput` mutation. */
export type FakePublicProductForeignKey0InverseInput = {
  /** Flag indicating whether all other `product` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  connectByOid?: Maybe<Array<ProductPkProductConnect>>;
  /** The primary key(s) for `product` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<ProductPkProductDelete>>;
  /** The primary key(s) and patch data for `product` for the far side of the relationship. */
  updateByOid?: Maybe<Array<ProductOnProductForFakePublicProductForeignKey0UsingPkProductUpdate>>;
  /** A `ProductInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FakePublicProductForeignKey0ProductCreateInput>>;
};

/** The fields on `product` to look up the row to update. */
export type ProductOnProductForFakePublicProductForeignKey0UsingPkProductUpdate = {
  /** An object where the defined keys will be set on the `product` being updated. */
  patch: UpdateProductOnProductForFakePublicProductForeignKey0Patch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `product` being updated. */
export type UpdateProductOnProductForFakePublicProductForeignKey0Patch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  subCategory?: Maybe<Scalars['String']>;
  catalogToCatalog?: Maybe<FkProductCatalogInput>;
  categoryByCatalogToCategoryAndCatalog?: Maybe<FakePublicProductForeignKey0Input>;
};

/** Input for the nested mutation of `categoryByCatalog` in the `ProductInput` mutation. */
export type FakePublicProductForeignKey0Input = {
  /** A `CategoryByCatalogInput` object that will be created and connected to this object. */
  create?: Maybe<FakePublicProductForeignKey0CategoryByCatalogCreateInput>;
};

/** The `categoryByCatalog` to be created by this mutation. */
export type FakePublicProductForeignKey0CategoryByCatalogCreateInput = {
  main?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  catalogToCatalog?: Maybe<FakePublicCategoryByCatalogForeignKey0Input>;
  productsUsingCategoryAndCatalog?: Maybe<FakePublicProductForeignKey0InverseInput>;
};

/** The `product` to be created by this mutation. */
export type FakePublicProductForeignKey0ProductCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  subCategory?: Maybe<Scalars['String']>;
  catalogToCatalog?: Maybe<FkProductCatalogInput>;
  categoryByCatalogToCategoryAndCatalog?: Maybe<FakePublicProductForeignKey0Input>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnLinkOutForFkLinkOutCatalogUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnLinkOutForFkLinkOutCatalogPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkLinkOutCatalogCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The `linkOut` to be created by this mutation. */
export type FkLinkOutCustomerLinkOutCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  linkTime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  charge?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  customerIp?: Maybe<Scalars['String']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkLinkOutCustomerInput>;
  catalogToCatalog?: Maybe<FkLinkOutCatalogInput>;
};

/** The `profile` to be created by this mutation. */
export type FkLinkOutCustomerProfileCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadsUsingOid?: Maybe<FkLeadProfileInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCustomerInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCustomerInverseInput>;
};

/** The `linkOut` to be created by this mutation. */
export type FkLinkOutCatalogLinkOutCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  linkTime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  charge?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  customerIp?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkLinkOutCustomerInput>;
  catalogToCatalog?: Maybe<FkLinkOutCatalogInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnSubscriptionForFkSubscriptionCatalogUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnSubscriptionForFkSubscriptionCatalogPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkSubscriptionCatalogCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The `subscription` to be created by this mutation. */
export type FkSubscriptionCustomerSubscriptionCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  catalog?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['Datetime']>;
  charge?: Maybe<Scalars['BigFloat']>;
  listingId?: Maybe<Scalars['Int']>;
  exportStatus?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkSubscriptionCustomerInput>;
  catalogToCatalog?: Maybe<FkSubscriptionCatalogInput>;
};

/** The `profile` to be created by this mutation. */
export type FkSubscriptionCustomerProfileCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadsUsingOid?: Maybe<FkLeadProfileInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCustomerInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCustomerInverseInput>;
};

/** The `subscription` to be created by this mutation. */
export type FkSubscriptionCatalogSubscriptionCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['Datetime']>;
  charge?: Maybe<Scalars['BigFloat']>;
  listingId?: Maybe<Scalars['Int']>;
  exportStatus?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkSubscriptionCustomerInput>;
  catalogToCatalog?: Maybe<FkSubscriptionCatalogInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnProductForFkProductCatalogUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnProductForFkProductCatalogPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkProductCatalogCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The `product` to be created by this mutation. */
export type FkProductCatalogProductCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  category?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  subCategory?: Maybe<Scalars['String']>;
  catalogToCatalog?: Maybe<FkProductCatalogInput>;
  categoryByCatalogToCategoryAndCatalog?: Maybe<FakePublicProductForeignKey0Input>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnFeedForFkFeedCatalogUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnFeedForFkFeedCatalogPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkFeedCatalogCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `feedHistory` in the `FeedInput` mutation. */
export type FkFeedHistoryFeedInverseInput = {
  /** Flag indicating whether all other `feedHistory` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `feedHistory` for the far side of the relationship. */
  connectByOid?: Maybe<Array<FeedHistoryPkFeedHistoryConnect>>;
  /** The primary key(s) for `feedHistory` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<FeedHistoryPkFeedHistoryDelete>>;
  /** The primary key(s) and patch data for `feedHistory` for the far side of the relationship. */
  updateByOid?: Maybe<Array<FeedHistoryOnFeedHistoryForFkFeedHistoryFeedUsingPkFeedHistoryUpdate>>;
  /** A `FeedHistoryInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkFeedHistoryFeedFeedHistoryCreateInput>>;
};

/** The fields on `feedHistory` to look up the row to connect. */
export type FeedHistoryPkFeedHistoryConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `feedHistory` to look up the row to delete. */
export type FeedHistoryPkFeedHistoryDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `feedHistory` to look up the row to update. */
export type FeedHistoryOnFeedHistoryForFkFeedHistoryFeedUsingPkFeedHistoryUpdate = {
  /** An object where the defined keys will be set on the `feedHistory` being updated. */
  patch: UpdateFeedHistoryOnFeedHistoryForFkFeedHistoryFeedPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `feedHistory` being updated. */
export type UpdateFeedHistoryOnFeedHistoryForFkFeedHistoryFeedPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  preUpdateStats?: Maybe<Scalars['JSON']>;
  postUpdateStats?: Maybe<Scalars['JSON']>;
  feedPath?: Maybe<Scalars['String']>;
  feedJson?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  feedToFeed?: Maybe<FkFeedHistoryFeedInput>;
};

/** Input for the nested mutation of `feed` in the `FeedHistoryInput` mutation. */
export type FkFeedHistoryFeedInput = {
  /** The primary key(s) for `feed` for the far side of the relationship. */
  connectByOid?: Maybe<FeedPkFeedConnect>;
  /** The primary key(s) for `feed` for the far side of the relationship. */
  deleteByOid?: Maybe<FeedPkFeedDelete>;
  /** The primary key(s) and patch data for `feed` for the far side of the relationship. */
  updateByOid?: Maybe<FeedOnFeedHistoryForFkFeedHistoryFeedUsingPkFeedUpdate>;
  /** A `FeedInput` object that will be created and connected to this object. */
  create?: Maybe<FkFeedHistoryFeedFeedCreateInput>;
};

/** The fields on `feed` to look up the row to update. */
export type FeedOnFeedHistoryForFkFeedHistoryFeedUsingPkFeedUpdate = {
  /** An object where the defined keys will be set on the `feed` being updated. */
  patch: UpdateFeedOnFeedHistoryForFkFeedHistoryFeedPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `feed` being updated. */
export type UpdateFeedOnFeedHistoryForFkFeedHistoryFeedPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  feedType?: Maybe<Scalars['String']>;
  feedMap?: Maybe<Scalars['String']>;
  productMap?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  autoUpdate?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkFeedCatalogInput>;
  feedHistoriesUsingOid?: Maybe<FkFeedHistoryFeedInverseInput>;
};

/** The `feed` to be created by this mutation. */
export type FkFeedHistoryFeedFeedCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  feedType?: Maybe<Scalars['String']>;
  feedMap?: Maybe<Scalars['String']>;
  productMap?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  autoUpdate?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkFeedCatalogInput>;
  feedHistoriesUsingOid?: Maybe<FkFeedHistoryFeedInverseInput>;
};

/** The `feedHistory` to be created by this mutation. */
export type FkFeedHistoryFeedFeedHistoryCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  preUpdateStats?: Maybe<Scalars['JSON']>;
  postUpdateStats?: Maybe<Scalars['JSON']>;
  feedPath?: Maybe<Scalars['String']>;
  feedJson?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  feedToFeed?: Maybe<FkFeedHistoryFeedInput>;
};

/** The `feed` to be created by this mutation. */
export type FkFeedCatalogFeedCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  feedType?: Maybe<Scalars['String']>;
  feedMap?: Maybe<Scalars['String']>;
  productMap?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  autoUpdate?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkFeedCatalogInput>;
  feedHistoriesUsingOid?: Maybe<FkFeedHistoryFeedInverseInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCategoryForFkCategoryCatalogUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCategoryForFkCategoryCatalogPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkCategoryCatalogCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `subCategory` in the `CategoryInput` mutation. */
export type FkSubCategoryCategoryInverseInput = {
  /** Flag indicating whether all other `subCategory` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `subCategory` for the far side of the relationship. */
  connectByOid?: Maybe<Array<SubCategoryPkSubCategoryConnect>>;
  /** The primary key(s) for `subCategory` for the far side of the relationship. */
  connectById?: Maybe<Array<SubCategorySubCategoryByIdConnect>>;
  /** The primary key(s) for `subCategory` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<SubCategoryPkSubCategoryDelete>>;
  /** The primary key(s) for `subCategory` for the far side of the relationship. */
  deleteById?: Maybe<Array<SubCategorySubCategoryByIdDelete>>;
  /** The primary key(s) and patch data for `subCategory` for the far side of the relationship. */
  updateByOid?: Maybe<Array<SubCategoryOnSubCategoryForFkSubCategoryCategoryUsingPkSubCategoryUpdate>>;
  /** The primary key(s) and patch data for `subCategory` for the far side of the relationship. */
  updateById?: Maybe<Array<SubCategoryOnSubCategoryForFkSubCategoryCategoryUsingSubCategoryByIdUpdate>>;
  /** A `SubCategoryInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkSubCategoryCategorySubCategoryCreateInput>>;
};

/** The fields on `subCategory` to look up the row to connect. */
export type SubCategoryPkSubCategoryConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `subCategory` to look up the row to connect. */
export type SubCategorySubCategoryByIdConnect = {
  id: Scalars['Int'];
};

/** The fields on `subCategory` to look up the row to delete. */
export type SubCategoryPkSubCategoryDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `subCategory` to look up the row to delete. */
export type SubCategorySubCategoryByIdDelete = {
  id: Scalars['Int'];
};

/** The fields on `subCategory` to look up the row to update. */
export type SubCategoryOnSubCategoryForFkSubCategoryCategoryUsingPkSubCategoryUpdate = {
  /** An object where the defined keys will be set on the `subCategory` being updated. */
  patch: UpdateSubCategoryOnSubCategoryForFkSubCategoryCategoryPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `subCategory` being updated. */
export type UpdateSubCategoryOnSubCategoryForFkSubCategoryCategoryPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  categoryToCategory?: Maybe<FkSubCategoryCategoryInput>;
};

/** Input for the nested mutation of `category` in the `SubCategoryInput` mutation. */
export type FkSubCategoryCategoryInput = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectByOid?: Maybe<CategoryPkCategoryConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: Maybe<CategoryCategoryByIdConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteByOid?: Maybe<CategoryPkCategoryDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: Maybe<CategoryCategoryByIdDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateByOid?: Maybe<CategoryOnSubCategoryForFkSubCategoryCategoryUsingPkCategoryUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: Maybe<CategoryOnSubCategoryForFkSubCategoryCategoryUsingCategoryByIdUpdate>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: Maybe<FkSubCategoryCategoryCategoryCreateInput>;
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnSubCategoryForFkSubCategoryCategoryUsingPkCategoryUpdate = {
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnSubCategoryForFkSubCategoryCategoryPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnSubCategoryForFkSubCategoryCategoryPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  catalog?: Maybe<Scalars['UUID']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkCategoryCatalogInput>;
  subCategoriesUsingOid?: Maybe<FkSubCategoryCategoryInverseInput>;
  subProductsUsingNameAndCatalog?: Maybe<FakePublicSubProductsForeignKey0InverseInput>;
};

/** Input for the nested mutation of `subProduct` in the `CategoryInput` mutation. */
export type FakePublicSubProductsForeignKey0InverseInput = {
  /** A `SubProductInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FakePublicSubProductsForeignKey0SubProductsCreateInput>>;
};

/** The `subProduct` to be created by this mutation. */
export type FakePublicSubProductsForeignKey0SubProductsCreateInput = {
  sub?: Maybe<Scalars['String']>;
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  category?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  categoryToMainAndCatalog?: Maybe<FakePublicSubProductsForeignKey0Input>;
};

/** Input for the nested mutation of `category` in the `SubProductInput` mutation. */
export type FakePublicSubProductsForeignKey0Input = {
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectByOid?: Maybe<CategoryPkCategoryConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  connectById?: Maybe<CategoryCategoryByIdConnect>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteByOid?: Maybe<CategoryPkCategoryDelete>;
  /** The primary key(s) for `category` for the far side of the relationship. */
  deleteById?: Maybe<CategoryCategoryByIdDelete>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateByOid?: Maybe<CategoryOnSubProductForFakePublicSubProductsForeignKey0UsingPkCategoryUpdate>;
  /** The primary key(s) and patch data for `category` for the far side of the relationship. */
  updateById?: Maybe<CategoryOnSubProductForFakePublicSubProductsForeignKey0UsingCategoryByIdUpdate>;
  /** A `CategoryInput` object that will be created and connected to this object. */
  create?: Maybe<FakePublicSubProductsForeignKey0CategoryCreateInput>;
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnSubProductForFakePublicSubProductsForeignKey0UsingPkCategoryUpdate = {
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnSubProductForFakePublicSubProductsForeignKey0Patch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `category` being updated. */
export type UpdateCategoryOnSubProductForFakePublicSubProductsForeignKey0Patch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkCategoryCatalogInput>;
  subCategoriesUsingOid?: Maybe<FkSubCategoryCategoryInverseInput>;
  subProductsUsingNameAndCatalog?: Maybe<FakePublicSubProductsForeignKey0InverseInput>;
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnSubProductForFakePublicSubProductsForeignKey0UsingCategoryByIdUpdate = {
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnSubProductForFakePublicSubProductsForeignKey0Patch;
  id: Scalars['Int'];
};

/** The `category` to be created by this mutation. */
export type FakePublicSubProductsForeignKey0CategoryCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkCategoryCatalogInput>;
  subCategoriesUsingOid?: Maybe<FkSubCategoryCategoryInverseInput>;
  subProductsUsingNameAndCatalog?: Maybe<FakePublicSubProductsForeignKey0InverseInput>;
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnSubCategoryForFkSubCategoryCategoryUsingCategoryByIdUpdate = {
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnSubCategoryForFkSubCategoryCategoryPatch;
  id: Scalars['Int'];
};

/** The `category` to be created by this mutation. */
export type FkSubCategoryCategoryCategoryCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  catalog?: Maybe<Scalars['UUID']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkCategoryCatalogInput>;
  subCategoriesUsingOid?: Maybe<FkSubCategoryCategoryInverseInput>;
  subProductsUsingNameAndCatalog?: Maybe<FakePublicSubProductsForeignKey0InverseInput>;
};

/** The fields on `subCategory` to look up the row to update. */
export type SubCategoryOnSubCategoryForFkSubCategoryCategoryUsingSubCategoryByIdUpdate = {
  /** An object where the defined keys will be set on the `subCategory` being updated. */
  patch: UpdateSubCategoryOnSubCategoryForFkSubCategoryCategoryPatch;
  id: Scalars['Int'];
};

/** The `subCategory` to be created by this mutation. */
export type FkSubCategoryCategorySubCategoryCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  categoryToCategory?: Maybe<FkSubCategoryCategoryInput>;
};

/** The fields on `category` to look up the row to update. */
export type CategoryOnCategoryForFkCategoryCatalogUsingCategoryByIdUpdate = {
  /** An object where the defined keys will be set on the `category` being updated. */
  patch: UpdateCategoryOnCategoryForFkCategoryCatalogPatch;
  id: Scalars['Int'];
};

/** The `category` to be created by this mutation. */
export type FkCategoryCatalogCategoryCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkCategoryCatalogInput>;
  subCategoriesUsingOid?: Maybe<FkSubCategoryCategoryInverseInput>;
  subProductsUsingNameAndCatalog?: Maybe<FakePublicSubProductsForeignKey0InverseInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnOfferForFkOfferCatalogUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnOfferForFkOfferCatalogPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkOfferCatalogCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The `offer` to be created by this mutation. */
export type FkOfferCatalogOfferCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  code?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  certificate?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['String']>;
  disclaimer?: Maybe<Scalars['String']>;
  burst?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkOfferCatalogInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCatalogForFkCatalogActiveVersionUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCatalogForFkCatalogActiveVersionPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkCatalogActiveVersionCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `page` in the `VersionInput` mutation. */
export type FkPageVersionInverseInput = {
  /** Flag indicating whether all other `page` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `page` for the far side of the relationship. */
  connectByOid?: Maybe<Array<PagePkPageConnect>>;
  /** The primary key(s) for `page` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<PagePkPageDelete>>;
  /** The primary key(s) and patch data for `page` for the far side of the relationship. */
  updateByOid?: Maybe<Array<PageOnPageForFkPageVersionUsingPkPageUpdate>>;
  /** A `PageInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkPageVersionPageCreateInput>>;
};

/** The fields on `page` to look up the row to connect. */
export type PagePkPageConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `page` to look up the row to delete. */
export type PagePkPageDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `page` to look up the row to update. */
export type PageOnPageForFkPageVersionUsingPkPageUpdate = {
  /** An object where the defined keys will be set on the `page` being updated. */
  patch: UpdatePageOnPageForFkPageVersionPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `page` being updated. */
export type UpdatePageOnPageForFkPageVersionPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  imageMeta?: Maybe<Scalars['String']>;
  imageSource?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  versionToVersion?: Maybe<FkPageVersionInput>;
};

/** Input for the nested mutation of `version` in the `PageInput` mutation. */
export type FkPageVersionInput = {
  /** The primary key(s) for `version` for the far side of the relationship. */
  connectByOid?: Maybe<VersionPkVersionConnect>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  connectById?: Maybe<VersionVersionByIdConnect>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  deleteByOid?: Maybe<VersionPkVersionDelete>;
  /** The primary key(s) for `version` for the far side of the relationship. */
  deleteById?: Maybe<VersionVersionByIdDelete>;
  /** The primary key(s) and patch data for `version` for the far side of the relationship. */
  updateByOid?: Maybe<VersionOnPageForFkPageVersionUsingPkVersionUpdate>;
  /** The primary key(s) and patch data for `version` for the far side of the relationship. */
  updateById?: Maybe<VersionOnPageForFkPageVersionUsingVersionByIdUpdate>;
  /** A `VersionInput` object that will be created and connected to this object. */
  create?: Maybe<FkPageVersionVersionCreateInput>;
};

/** The fields on `version` to look up the row to update. */
export type VersionOnPageForFkPageVersionUsingPkVersionUpdate = {
  /** An object where the defined keys will be set on the `version` being updated. */
  patch: UpdateVersionOnPageForFkPageVersionPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `version` being updated. */
export type UpdateVersionOnPageForFkPageVersionPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  catalog?: Maybe<Scalars['UUID']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkVersionCatalogInput>;
  catalogsUsingOid?: Maybe<FkCatalogActiveVersionInverseInput>;
  pagesUsingOid?: Maybe<FkPageVersionInverseInput>;
};

/** The fields on `version` to look up the row to update. */
export type VersionOnPageForFkPageVersionUsingVersionByIdUpdate = {
  /** An object where the defined keys will be set on the `version` being updated. */
  patch: UpdateVersionOnPageForFkPageVersionPatch;
  id: Scalars['Int'];
};

/** The `version` to be created by this mutation. */
export type FkPageVersionVersionCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  catalog?: Maybe<Scalars['UUID']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkVersionCatalogInput>;
  catalogsUsingOid?: Maybe<FkCatalogActiveVersionInverseInput>;
  pagesUsingOid?: Maybe<FkPageVersionInverseInput>;
};

/** The `page` to be created by this mutation. */
export type FkPageVersionPageCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  imageMeta?: Maybe<Scalars['String']>;
  imageSource?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  versionToVersion?: Maybe<FkPageVersionInput>;
};

/** The fields on `version` to look up the row to update. */
export type VersionOnVersionForFkVersionCatalogUsingVersionByIdUpdate = {
  /** An object where the defined keys will be set on the `version` being updated. */
  patch: UpdateVersionOnVersionForFkVersionCatalogPatch;
  id: Scalars['Int'];
};

/** The `version` to be created by this mutation. */
export type FkVersionCatalogVersionCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkVersionCatalogInput>;
  catalogsUsingOid?: Maybe<FkCatalogActiveVersionInverseInput>;
  pagesUsingOid?: Maybe<FkPageVersionInverseInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsListingsPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkDepartmentDepartmentsCatalogListingsListingsCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** Input for the nested mutation of `department` in the `DepartmentDepartmentsCatalogListingInput` mutation. */
export type FkDepartmentDepartmentsCatalogListingsDepartmentsInput = {
  /** The primary key(s) for `department` for the far side of the relationship. */
  connectByOid?: Maybe<DepartmentPkDepartmentConnect>;
  /** The primary key(s) for `department` for the far side of the relationship. */
  deleteByOid?: Maybe<DepartmentPkDepartmentDelete>;
  /** The primary key(s) and patch data for `department` for the far side of the relationship. */
  updateByOid?: Maybe<DepartmentOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsDepartmentsUsingPkDepartmentUpdate>;
  /** A `DepartmentInput` object that will be created and connected to this object. */
  create?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsDepartmentCreateInput>;
};

/** The fields on `department` to look up the row to update. */
export type DepartmentOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsDepartmentsUsingPkDepartmentUpdate = {
  /** An object where the defined keys will be set on the `department` being updated. */
  patch: UpdateDepartmentOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsDepartmentsPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `department` being updated. */
export type UpdateDepartmentOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsDepartmentsPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** Input for the nested mutation of `departmentDepartmentsCatalogListing` in the `DepartmentInput` mutation. */
export type FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput = {
  /** Flag indicating whether all other `departmentDepartmentsCatalogListing` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `departmentDepartmentsCatalogListing` for the far side of the relationship. */
  connectByOid?: Maybe<Array<DepartmentDepartmentsCatalogListingPkDepartmentDepartmentsCatalogListingsConnect>>;
  /** The primary key(s) for `departmentDepartmentsCatalogListing` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<DepartmentDepartmentsCatalogListingPkDepartmentDepartmentsCatalogListingsDelete>>;
  /** The primary key(s) and patch data for `departmentDepartmentsCatalogListing` for the far side of the relationship. */
  updateByOid?: Maybe<Array<DepartmentDepartmentsCatalogListingOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsDepartmentsUsingPkDepartmentDepartmentsCatalogListingsUpdate>>;
  /** A `DepartmentDepartmentsCatalogListingInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkDepartmentDepartmentsCatalogListingsDepartmentsDepartmentDepartmentsCatalogListingsCreateInput>>;
};

/** The fields on `departmentDepartmentsCatalogListing` to look up the row to update. */
export type DepartmentDepartmentsCatalogListingOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsDepartmentsUsingPkDepartmentDepartmentsCatalogListingsUpdate = {
  /** An object where the defined keys will be set on the `departmentDepartmentsCatalogListing` being updated. */
  patch: UpdateDepartmentDepartmentsCatalogListingOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsDepartmentsPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `departmentDepartmentsCatalogListing` being updated. */
export type UpdateDepartmentDepartmentsCatalogListingOnDepartmentDepartmentsCatalogListingForFkDepartmentDepartmentsCatalogListingsDepartmentsPatch = {
  listings?: Maybe<Scalars['UUID']>;
  oid?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToListings?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInput>;
  departmentToDepartments?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInput>;
};

/** The `departmentDepartmentsCatalogListing` to be created by this mutation. */
export type FkDepartmentDepartmentsCatalogListingsDepartmentsDepartmentDepartmentsCatalogListingsCreateInput = {
  listings?: Maybe<Scalars['UUID']>;
  oid: Scalars['UUID'];
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToListings?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInput>;
  departmentToDepartments?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInput>;
};

/** Input for the nested mutation of `navigationItem` in the `DepartmentInput` mutation. */
export type FkNavigationItemDepartmentInverseInput = {
  /** Flag indicating whether all other `navigationItem` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `navigationItem` for the far side of the relationship. */
  connectByOid?: Maybe<Array<NavigationItemPkNavigationItemConnect>>;
  /** The primary key(s) for `navigationItem` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<NavigationItemPkNavigationItemDelete>>;
  /** The primary key(s) and patch data for `navigationItem` for the far side of the relationship. */
  updateByOid?: Maybe<Array<NavigationItemOnNavigationItemForFkNavigationItemDepartmentUsingPkNavigationItemUpdate>>;
  /** A `NavigationItemInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkNavigationItemDepartmentNavigationItemCreateInput>>;
};

/** The fields on `navigationItem` to look up the row to connect. */
export type NavigationItemPkNavigationItemConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `navigationItem` to look up the row to delete. */
export type NavigationItemPkNavigationItemDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `navigationItem` to look up the row to update. */
export type NavigationItemOnNavigationItemForFkNavigationItemDepartmentUsingPkNavigationItemUpdate = {
  /** An object where the defined keys will be set on the `navigationItem` being updated. */
  patch: UpdateNavigationItemOnNavigationItemForFkNavigationItemDepartmentPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `navigationItem` being updated. */
export type UpdateNavigationItemOnNavigationItemForFkNavigationItemDepartmentPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  orderIndex?: Maybe<Scalars['Int']>;
  groupText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToDepartment?: Maybe<FkNavigationItemDepartmentInput>;
};

/** Input for the nested mutation of `department` in the `NavigationItemInput` mutation. */
export type FkNavigationItemDepartmentInput = {
  /** The primary key(s) for `department` for the far side of the relationship. */
  connectByOid?: Maybe<DepartmentPkDepartmentConnect>;
  /** The primary key(s) for `department` for the far side of the relationship. */
  deleteByOid?: Maybe<DepartmentPkDepartmentDelete>;
  /** The primary key(s) and patch data for `department` for the far side of the relationship. */
  updateByOid?: Maybe<DepartmentOnNavigationItemForFkNavigationItemDepartmentUsingPkDepartmentUpdate>;
  /** A `DepartmentInput` object that will be created and connected to this object. */
  create?: Maybe<FkNavigationItemDepartmentDepartmentCreateInput>;
};

/** The fields on `department` to look up the row to update. */
export type DepartmentOnNavigationItemForFkNavigationItemDepartmentUsingPkDepartmentUpdate = {
  /** An object where the defined keys will be set on the `department` being updated. */
  patch: UpdateDepartmentOnNavigationItemForFkNavigationItemDepartmentPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `department` being updated. */
export type UpdateDepartmentOnNavigationItemForFkNavigationItemDepartmentPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** The `department` to be created by this mutation. */
export type FkNavigationItemDepartmentDepartmentCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** The `navigationItem` to be created by this mutation. */
export type FkNavigationItemDepartmentNavigationItemCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  orderIndex?: Maybe<Scalars['Int']>;
  groupText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToDepartment?: Maybe<FkNavigationItemDepartmentInput>;
};

/** The `department` to be created by this mutation. */
export type FkDepartmentDepartmentsCatalogListingsDepartmentsDepartmentCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** The `departmentDepartmentsCatalogListing` to be created by this mutation. */
export type FkDepartmentDepartmentsCatalogListingsListingsDepartmentDepartmentsCatalogListingsCreateInput = {
  departments?: Maybe<Scalars['UUID']>;
  oid: Scalars['UUID'];
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToListings?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInput>;
  departmentToDepartments?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnVersionForFkVersionCatalogUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnVersionForFkVersionCatalogPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkVersionCatalogCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The fields on `version` to look up the row to update. */
export type VersionOnCatalogForFkCatalogActiveVersionUsingVersionByIdUpdate = {
  /** An object where the defined keys will be set on the `version` being updated. */
  patch: UpdateVersionOnCatalogForFkCatalogActiveVersionPatch;
  id: Scalars['Int'];
};

/** The `version` to be created by this mutation. */
export type FkCatalogActiveVersionVersionCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  catalog?: Maybe<Scalars['UUID']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkVersionCatalogInput>;
  catalogsUsingOid?: Maybe<FkCatalogActiveVersionInverseInput>;
  pagesUsingOid?: Maybe<FkPageVersionInverseInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCatalogForFkCatalogPrimaryDepartmentUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCatalogForFkCatalogPrimaryDepartmentPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkCatalogPrimaryDepartmentCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The `department` to be created by this mutation. */
export type FkDepartmentParentDepartmentDepartmentCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** The `department` to be created by this mutation. */
export type FkCatalogPrimaryDepartmentDepartmentCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCampaignGroupForFkCampaignGroupCatalogUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCampaignGroupForFkCampaignGroupCatalogPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkCampaignGroupCatalogCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The `campaignGroup` to be created by this mutation. */
export type FkCampaignGroupCampaignCampaignGroupCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  campaignToCampaign?: Maybe<FkCampaignGroupCampaignInput>;
  catalogToCatalog?: Maybe<FkCampaignGroupCatalogInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserCampaignGroupInverseInput>;
};

/** The `campaign` to be created by this mutation. */
export type FkCampaignGroupCampaignCampaignCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  account?: Maybe<Scalars['UUID']>;
  sender?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  distributionDate?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  opens?: Maybe<Scalars['Int']>;
  clicks?: Maybe<Scalars['Int']>;
  dynalogViews?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkCampaignAccountInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCampaignInverseInput>;
};

/** The `campaignGroup` to be created by this mutation. */
export type FkCampaignUserCampaignGroupCampaignGroupCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  campaignToCampaign?: Maybe<FkCampaignGroupCampaignInput>;
  catalogToCatalog?: Maybe<FkCampaignGroupCatalogInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserCampaignGroupInverseInput>;
};

/** The `campaignUser` to be created by this mutation. */
export type FkCampaignUserLeadCampaignUserCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  campaignGroup?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadToLead?: Maybe<FkCampaignUserLeadInput>;
  campaignGroupToCampaignGroup?: Maybe<FkCampaignUserCampaignGroupInput>;
};

/** The `lead` to be created by this mutation. */
export type FkLeadProfileLeadCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  account?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkLeadAccountInput>;
  profileToProfile?: Maybe<FkLeadProfileInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserLeadInverseInput>;
};

/** The `profile` to be created by this mutation. */
export type FkLeadProfileProfileCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadsUsingOid?: Maybe<FkLeadProfileInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCustomerInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCustomerInverseInput>;
};

/** The `lead` to be created by this mutation. */
export type FkLeadAccountLeadCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  profile?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkLeadAccountInput>;
  profileToProfile?: Maybe<FkLeadProfileInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserLeadInverseInput>;
};

/** The `account` to be created by this mutation. */
export type FkCampaignAccountAccountCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** The `campaign` to be created by this mutation. */
export type FkCampaignAccountCampaignCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  sender?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  distributionDate?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  opens?: Maybe<Scalars['Int']>;
  clicks?: Maybe<Scalars['Int']>;
  dynalogViews?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkCampaignAccountInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCampaignInverseInput>;
};

/** The `account` to be created by this mutation. */
export type FkContactParentAccountCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** The `contact` to be created by this mutation. */
export type FkContactParentContactCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  appProfile?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  oldId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToParent?: Maybe<FkContactParentInput>;
};

/** The `account` to be created by this mutation. */
export type FkCatalogAccountAccountCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** The fields on `catalog` to look up the row to update. */
export type CatalogOnCatalogForFkCatalogAccountUsingCatalogByIdUpdate = {
  /** An object where the defined keys will be set on the `catalog` being updated. */
  patch: UpdateCatalogOnCatalogForFkCatalogAccountPatch;
  id: Scalars['Int'];
};

/** The `catalog` to be created by this mutation. */
export type FkCatalogAccountCatalogCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The output of our create `Account` mutation. */
export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was created by this mutation. */
  account?: Maybe<Account>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>;
};


/** The output of our create `Account` mutation. */
export type CreateAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};

/** All input for the create `AuthorizedUser` mutation. */
export type CreateAuthorizedUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AuthorizedUser` to be created by this mutation. */
  authorizedUser: AuthorizedUserInput;
};

/** An input for mutations affecting `AuthorizedUser` */
export type AuthorizedUserInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  faceBookId?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  linkedInId?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInverseInput>;
};

/** The output of our create `AuthorizedUser` mutation. */
export type CreateAuthorizedUserPayload = {
  __typename?: 'CreateAuthorizedUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AuthorizedUser` that was created by this mutation. */
  authorizedUser?: Maybe<AuthorizedUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `AuthorizedUser`. May be used by Relay 1. */
  authorizedUserEdge?: Maybe<AuthorizedUsersEdge>;
};


/** The output of our create `AuthorizedUser` mutation. */
export type CreateAuthorizedUserPayloadAuthorizedUserEdgeArgs = {
  orderBy?: Maybe<Array<AuthorizedUsersOrderBy>>;
};

/** All input for the create `AuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type CreateAuthorizedUserAuthorizedUsersAccountPartnerAccessInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AuthorizedUserAuthorizedUsersAccountPartnerAccess` to be created by this mutation. */
  authorizedUserAuthorizedUsersAccountPartnerAccess: AuthorizedUserAuthorizedUsersAccountPartnerAccessInput;
};

/** An input for mutations affecting `AuthorizedUserAuthorizedUsersAccountPartnerAccess` */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessInput = {
  partnerAccess?: Maybe<Scalars['UUID']>;
  authorizedUsers?: Maybe<Scalars['UUID']>;
  oid: Scalars['UUID'];
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToPartnerAccess?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInput>;
  authorizedUserToAuthorizedUsers?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInput>;
};

/** The output of our create `AuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type CreateAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload = {
  __typename?: 'CreateAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AuthorizedUserAuthorizedUsersAccountPartnerAccess` that was created by this mutation. */
  authorizedUserAuthorizedUsersAccountPartnerAccess?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccess>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  accountByPartnerAccess?: Maybe<Account>;
  /** Reads a single `AuthorizedUser` that is related to this `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserByAuthorizedUsers?: Maybe<AuthorizedUser>;
  /** An edge for our `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. May be used by Relay 1. */
  authorizedUserAuthorizedUsersAccountPartnerAccessEdge?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessesEdge>;
};


/** The output of our create `AuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type CreateAuthorizedUserAuthorizedUsersAccountPartnerAccessPayloadAuthorizedUserAuthorizedUsersAccountPartnerAccessEdgeArgs = {
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
};

/** All input for the create `Campaign` mutation. */
export type CreateCampaignInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Campaign` to be created by this mutation. */
  campaign: CampaignInput;
};

/** An input for mutations affecting `Campaign` */
export type CampaignInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  account?: Maybe<Scalars['UUID']>;
  sender?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  distributionDate?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  opens?: Maybe<Scalars['Int']>;
  clicks?: Maybe<Scalars['Int']>;
  dynalogViews?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkCampaignAccountInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCampaignInverseInput>;
};

/** The output of our create `Campaign` mutation. */
export type CreateCampaignPayload = {
  __typename?: 'CreateCampaignPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Campaign` that was created by this mutation. */
  campaign?: Maybe<Campaign>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Campaign`. */
  accountByAccount?: Maybe<Account>;
  /** An edge for our `Campaign`. May be used by Relay 1. */
  campaignEdge?: Maybe<CampaignsEdge>;
};


/** The output of our create `Campaign` mutation. */
export type CreateCampaignPayloadCampaignEdgeArgs = {
  orderBy?: Maybe<Array<CampaignsOrderBy>>;
};

/** All input for the create `CampaignGroup` mutation. */
export type CreateCampaignGroupInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CampaignGroup` to be created by this mutation. */
  campaignGroup: CampaignGroupInput;
};

/** An input for mutations affecting `CampaignGroup` */
export type CampaignGroupInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  campaignToCampaign?: Maybe<FkCampaignGroupCampaignInput>;
  catalogToCatalog?: Maybe<FkCampaignGroupCatalogInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserCampaignGroupInverseInput>;
};

/** The output of our create `CampaignGroup` mutation. */
export type CreateCampaignGroupPayload = {
  __typename?: 'CreateCampaignGroupPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CampaignGroup` that was created by this mutation. */
  campaignGroup?: Maybe<CampaignGroup>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Campaign` that is related to this `CampaignGroup`. */
  campaignByCampaign?: Maybe<Campaign>;
  /** Reads a single `Catalog` that is related to this `CampaignGroup`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `CampaignGroup`. May be used by Relay 1. */
  campaignGroupEdge?: Maybe<CampaignGroupsEdge>;
};


/** The output of our create `CampaignGroup` mutation. */
export type CreateCampaignGroupPayloadCampaignGroupEdgeArgs = {
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
};

/** All input for the create `CampaignUser` mutation. */
export type CreateCampaignUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CampaignUser` to be created by this mutation. */
  campaignUser: CampaignUserInput;
};

/** An input for mutations affecting `CampaignUser` */
export type CampaignUserInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  lead?: Maybe<Scalars['UUID']>;
  campaignGroup?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadToLead?: Maybe<FkCampaignUserLeadInput>;
  campaignGroupToCampaignGroup?: Maybe<FkCampaignUserCampaignGroupInput>;
};

/** The output of our create `CampaignUser` mutation. */
export type CreateCampaignUserPayload = {
  __typename?: 'CreateCampaignUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CampaignUser` that was created by this mutation. */
  campaignUser?: Maybe<CampaignUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Lead` that is related to this `CampaignUser`. */
  leadByLead?: Maybe<Lead>;
  /** Reads a single `CampaignGroup` that is related to this `CampaignUser`. */
  campaignGroupByCampaignGroup?: Maybe<CampaignGroup>;
  /** An edge for our `CampaignUser`. May be used by Relay 1. */
  campaignUserEdge?: Maybe<CampaignUsersEdge>;
};


/** The output of our create `CampaignUser` mutation. */
export type CreateCampaignUserPayloadCampaignUserEdgeArgs = {
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
};

/** All input for the create `Catalog` mutation. */
export type CreateCatalogInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Catalog` to be created by this mutation. */
  catalog: CatalogInput;
};

/** An input for mutations affecting `Catalog` */
export type CatalogInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The output of our create `Catalog` mutation. */
export type CreateCatalogPayload = {
  __typename?: 'CreateCatalogPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Catalog` that was created by this mutation. */
  catalog?: Maybe<Catalog>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Catalog`. */
  accountByAccount?: Maybe<Account>;
  /** Reads a single `Department` that is related to this `Catalog`. */
  departmentByPrimaryDepartment?: Maybe<Department>;
  /** Reads a single `Version` that is related to this `Catalog`. */
  versionByActiveVersion?: Maybe<Version>;
  /** An edge for our `Catalog`. May be used by Relay 1. */
  catalogEdge?: Maybe<CatalogsEdge>;
};


/** The output of our create `Catalog` mutation. */
export type CreateCatalogPayloadCatalogEdgeArgs = {
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  catalog?: Maybe<Scalars['UUID']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkCategoryCatalogInput>;
  subCategoriesUsingOid?: Maybe<FkSubCategoryCategoryInverseInput>;
  subProductsUsingNameAndCatalog?: Maybe<FakePublicSubProductsForeignKey0InverseInput>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Category`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
};


/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `Contact` mutation. */
export type CreateContactInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Contact` to be created by this mutation. */
  contact: ContactInput;
};

/** An input for mutations affecting `Contact` */
export type ContactInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['UUID']>;
  appProfile?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  oldId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToParent?: Maybe<FkContactParentInput>;
};

/** The output of our create `Contact` mutation. */
export type CreateContactPayload = {
  __typename?: 'CreateContactPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Contact` that was created by this mutation. */
  contact?: Maybe<Contact>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByParent?: Maybe<Account>;
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactsEdge>;
};


/** The output of our create `Contact` mutation. */
export type CreateContactPayloadContactEdgeArgs = {
  orderBy?: Maybe<Array<ContactsOrderBy>>;
};

/** All input for the create `Department` mutation. */
export type CreateDepartmentInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Department` to be created by this mutation. */
  department: DepartmentInput;
};

/** An input for mutations affecting `Department` */
export type DepartmentInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** The output of our create `Department` mutation. */
export type CreateDepartmentPayload = {
  __typename?: 'CreateDepartmentPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Department` that was created by this mutation. */
  department?: Maybe<Department>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Department` that is related to this `Department`. */
  departmentByParentDepartment?: Maybe<Department>;
  /** An edge for our `Department`. May be used by Relay 1. */
  departmentEdge?: Maybe<DepartmentsEdge>;
};


/** The output of our create `Department` mutation. */
export type CreateDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: Maybe<Array<DepartmentsOrderBy>>;
};

/** All input for the create `DepartmentDepartmentsCatalogListing` mutation. */
export type CreateDepartmentDepartmentsCatalogListingInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DepartmentDepartmentsCatalogListing` to be created by this mutation. */
  departmentDepartmentsCatalogListing: DepartmentDepartmentsCatalogListingInput;
};

/** An input for mutations affecting `DepartmentDepartmentsCatalogListing` */
export type DepartmentDepartmentsCatalogListingInput = {
  listings?: Maybe<Scalars['UUID']>;
  departments?: Maybe<Scalars['UUID']>;
  oid: Scalars['UUID'];
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToListings?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInput>;
  departmentToDepartments?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInput>;
};

/** The output of our create `DepartmentDepartmentsCatalogListing` mutation. */
export type CreateDepartmentDepartmentsCatalogListingPayload = {
  __typename?: 'CreateDepartmentDepartmentsCatalogListingPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DepartmentDepartmentsCatalogListing` that was created by this mutation. */
  departmentDepartmentsCatalogListing?: Maybe<DepartmentDepartmentsCatalogListing>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `DepartmentDepartmentsCatalogListing`. */
  catalogByListings?: Maybe<Catalog>;
  /** Reads a single `Department` that is related to this `DepartmentDepartmentsCatalogListing`. */
  departmentByDepartments?: Maybe<Department>;
  /** An edge for our `DepartmentDepartmentsCatalogListing`. May be used by Relay 1. */
  departmentDepartmentsCatalogListingEdge?: Maybe<DepartmentDepartmentsCatalogListingsEdge>;
};


/** The output of our create `DepartmentDepartmentsCatalogListing` mutation. */
export type CreateDepartmentDepartmentsCatalogListingPayloadDepartmentDepartmentsCatalogListingEdgeArgs = {
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
};

/** All input for the create `Feed` mutation. */
export type CreateFeedInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feed` to be created by this mutation. */
  feed: FeedInput;
};

/** An input for mutations affecting `Feed` */
export type FeedInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  feedType?: Maybe<Scalars['String']>;
  feedMap?: Maybe<Scalars['String']>;
  productMap?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  autoUpdate?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkFeedCatalogInput>;
  feedHistoriesUsingOid?: Maybe<FkFeedHistoryFeedInverseInput>;
};

/** The output of our create `Feed` mutation. */
export type CreateFeedPayload = {
  __typename?: 'CreateFeedPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feed` that was created by this mutation. */
  feed?: Maybe<Feed>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Feed`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Feed`. May be used by Relay 1. */
  feedEdge?: Maybe<FeedsEdge>;
};


/** The output of our create `Feed` mutation. */
export type CreateFeedPayloadFeedEdgeArgs = {
  orderBy?: Maybe<Array<FeedsOrderBy>>;
};

/** All input for the create `FeedHistory` mutation. */
export type CreateFeedHistoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeedHistory` to be created by this mutation. */
  feedHistory: FeedHistoryInput;
};

/** An input for mutations affecting `FeedHistory` */
export type FeedHistoryInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  feed?: Maybe<Scalars['UUID']>;
  preUpdateStats?: Maybe<Scalars['JSON']>;
  postUpdateStats?: Maybe<Scalars['JSON']>;
  feedPath?: Maybe<Scalars['String']>;
  feedJson?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  feedToFeed?: Maybe<FkFeedHistoryFeedInput>;
};

/** The output of our create `FeedHistory` mutation. */
export type CreateFeedHistoryPayload = {
  __typename?: 'CreateFeedHistoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeedHistory` that was created by this mutation. */
  feedHistory?: Maybe<FeedHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feed` that is related to this `FeedHistory`. */
  feedByFeed?: Maybe<Feed>;
  /** An edge for our `FeedHistory`. May be used by Relay 1. */
  feedHistoryEdge?: Maybe<FeedHistoriesEdge>;
};


/** The output of our create `FeedHistory` mutation. */
export type CreateFeedHistoryPayloadFeedHistoryEdgeArgs = {
  orderBy?: Maybe<Array<FeedHistoriesOrderBy>>;
};

/** All input for the create `Lead` mutation. */
export type CreateLeadInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Lead` to be created by this mutation. */
  lead: LeadInput;
};

/** An input for mutations affecting `Lead` */
export type LeadInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  account?: Maybe<Scalars['UUID']>;
  profile?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkLeadAccountInput>;
  profileToProfile?: Maybe<FkLeadProfileInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserLeadInverseInput>;
};

/** The output of our create `Lead` mutation. */
export type CreateLeadPayload = {
  __typename?: 'CreateLeadPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Lead` that was created by this mutation. */
  lead?: Maybe<Lead>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Lead`. */
  accountByAccount?: Maybe<Account>;
  /** Reads a single `Profile` that is related to this `Lead`. */
  profileByProfile?: Maybe<Profile>;
  /** An edge for our `Lead`. May be used by Relay 1. */
  leadEdge?: Maybe<LeadsEdge>;
};


/** The output of our create `Lead` mutation. */
export type CreateLeadPayloadLeadEdgeArgs = {
  orderBy?: Maybe<Array<LeadsOrderBy>>;
};

/** All input for the create `LinkOut` mutation. */
export type CreateLinkOutInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LinkOut` to be created by this mutation. */
  linkOut: LinkOutInput;
};

/** An input for mutations affecting `LinkOut` */
export type LinkOutInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  linkTime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  charge?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  customerIp?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkLinkOutCustomerInput>;
  catalogToCatalog?: Maybe<FkLinkOutCatalogInput>;
};

/** The output of our create `LinkOut` mutation. */
export type CreateLinkOutPayload = {
  __typename?: 'CreateLinkOutPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LinkOut` that was created by this mutation. */
  linkOut?: Maybe<LinkOut>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Profile` that is related to this `LinkOut`. */
  profileByCustomer?: Maybe<Profile>;
  /** Reads a single `Catalog` that is related to this `LinkOut`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `LinkOut`. May be used by Relay 1. */
  linkOutEdge?: Maybe<LinkOutsEdge>;
};


/** The output of our create `LinkOut` mutation. */
export type CreateLinkOutPayloadLinkOutEdgeArgs = {
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
};

/** All input for the create `NavigationItem` mutation. */
export type CreateNavigationItemInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `NavigationItem` to be created by this mutation. */
  navigationItem: NavigationItemInput;
};

/** An input for mutations affecting `NavigationItem` */
export type NavigationItemInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  orderIndex?: Maybe<Scalars['Int']>;
  groupText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToDepartment?: Maybe<FkNavigationItemDepartmentInput>;
};

/** The output of our create `NavigationItem` mutation. */
export type CreateNavigationItemPayload = {
  __typename?: 'CreateNavigationItemPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `NavigationItem` that was created by this mutation. */
  navigationItem?: Maybe<NavigationItem>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Department` that is related to this `NavigationItem`. */
  departmentByDepartment?: Maybe<Department>;
  /** An edge for our `NavigationItem`. May be used by Relay 1. */
  navigationItemEdge?: Maybe<NavigationItemsEdge>;
};


/** The output of our create `NavigationItem` mutation. */
export type CreateNavigationItemPayloadNavigationItemEdgeArgs = {
  orderBy?: Maybe<Array<NavigationItemsOrderBy>>;
};

/** All input for the create `Offer` mutation. */
export type CreateOfferInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Offer` to be created by this mutation. */
  offer: OfferInput;
};

/** An input for mutations affecting `Offer` */
export type OfferInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  certificate?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['String']>;
  disclaimer?: Maybe<Scalars['String']>;
  burst?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkOfferCatalogInput>;
};

/** The output of our create `Offer` mutation. */
export type CreateOfferPayload = {
  __typename?: 'CreateOfferPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Offer` that was created by this mutation. */
  offer?: Maybe<Offer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Offer`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Offer`. May be used by Relay 1. */
  offerEdge?: Maybe<OffersEdge>;
};


/** The output of our create `Offer` mutation. */
export type CreateOfferPayloadOfferEdgeArgs = {
  orderBy?: Maybe<Array<OffersOrderBy>>;
};

/** All input for the create `Order` mutation. */
export type CreateOrderInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Order` to be created by this mutation. */
  order: OrderInput;
};

/** An input for mutations affecting `Order` */
export type OrderInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Datetime']>;
  amount?: Maybe<Scalars['Float']>;
  deliveryFee?: Maybe<Scalars['BigFloat']>;
  deliveryTime?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  orderProductsUsingOid?: Maybe<FkOrderProductOrderInverseInput>;
};

/** Input for the nested mutation of `orderProduct` in the `OrderInput` mutation. */
export type FkOrderProductOrderInverseInput = {
  /** Flag indicating whether all other `orderProduct` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `orderProduct` for the far side of the relationship. */
  connectByOid?: Maybe<Array<OrderProductPkOrderProductConnect>>;
  /** The primary key(s) for `orderProduct` for the far side of the relationship. */
  deleteByOid?: Maybe<Array<OrderProductPkOrderProductDelete>>;
  /** The primary key(s) and patch data for `orderProduct` for the far side of the relationship. */
  updateByOid?: Maybe<Array<OrderProductOnOrderProductForFkOrderProductOrderUsingPkOrderProductUpdate>>;
  /** A `OrderProductInput` object that will be created and connected to this object. */
  create?: Maybe<Array<FkOrderProductOrderOrderProductCreateInput>>;
};

/** The fields on `orderProduct` to look up the row to connect. */
export type OrderProductPkOrderProductConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `orderProduct` to look up the row to delete. */
export type OrderProductPkOrderProductDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `orderProduct` to look up the row to update. */
export type OrderProductOnOrderProductForFkOrderProductOrderUsingPkOrderProductUpdate = {
  /** An object where the defined keys will be set on the `orderProduct` being updated. */
  patch: UpdateOrderProductOnOrderProductForFkOrderProductOrderPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `orderProduct` being updated. */
export type UpdateOrderProductOnOrderProductForFkOrderProductOrderPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  orderToOrder?: Maybe<FkOrderProductOrderInput>;
};

/** Input for the nested mutation of `order` in the `OrderProductInput` mutation. */
export type FkOrderProductOrderInput = {
  /** The primary key(s) for `order` for the far side of the relationship. */
  connectByOid?: Maybe<OrderPkOrderConnect>;
  /** The primary key(s) for `order` for the far side of the relationship. */
  deleteByOid?: Maybe<OrderPkOrderDelete>;
  /** The primary key(s) and patch data for `order` for the far side of the relationship. */
  updateByOid?: Maybe<OrderOnOrderProductForFkOrderProductOrderUsingPkOrderUpdate>;
  /** A `OrderInput` object that will be created and connected to this object. */
  create?: Maybe<FkOrderProductOrderOrderCreateInput>;
};

/** The fields on `order` to look up the row to connect. */
export type OrderPkOrderConnect = {
  oid: Scalars['UUID'];
};

/** The fields on `order` to look up the row to delete. */
export type OrderPkOrderDelete = {
  oid: Scalars['UUID'];
};

/** The fields on `order` to look up the row to update. */
export type OrderOnOrderProductForFkOrderProductOrderUsingPkOrderUpdate = {
  /** An object where the defined keys will be set on the `order` being updated. */
  patch: UpdateOrderOnOrderProductForFkOrderProductOrderPatch;
  oid: Scalars['UUID'];
};

/** An object where the defined keys will be set on the `order` being updated. */
export type UpdateOrderOnOrderProductForFkOrderProductOrderPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Datetime']>;
  amount?: Maybe<Scalars['Float']>;
  deliveryFee?: Maybe<Scalars['BigFloat']>;
  deliveryTime?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  orderProductsUsingOid?: Maybe<FkOrderProductOrderInverseInput>;
};

/** The `order` to be created by this mutation. */
export type FkOrderProductOrderOrderCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Datetime']>;
  amount?: Maybe<Scalars['Float']>;
  deliveryFee?: Maybe<Scalars['BigFloat']>;
  deliveryTime?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  orderProductsUsingOid?: Maybe<FkOrderProductOrderInverseInput>;
};

/** The `orderProduct` to be created by this mutation. */
export type FkOrderProductOrderOrderProductCreateInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  orderToOrder?: Maybe<FkOrderProductOrderInput>;
};

/** The output of our create `Order` mutation. */
export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Order` that was created by this mutation. */
  order?: Maybe<Order>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
};


/** The output of our create `Order` mutation. */
export type CreateOrderPayloadOrderEdgeArgs = {
  orderBy?: Maybe<Array<OrdersOrderBy>>;
};

/** All input for the create `OrderProduct` mutation. */
export type CreateOrderProductInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OrderProduct` to be created by this mutation. */
  orderProduct: OrderProductInput;
};

/** An input for mutations affecting `OrderProduct` */
export type OrderProductInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  order?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  orderToOrder?: Maybe<FkOrderProductOrderInput>;
};

/** The output of our create `OrderProduct` mutation. */
export type CreateOrderProductPayload = {
  __typename?: 'CreateOrderProductPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OrderProduct` that was created by this mutation. */
  orderProduct?: Maybe<OrderProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Order` that is related to this `OrderProduct`. */
  orderByOrder?: Maybe<Order>;
  /** An edge for our `OrderProduct`. May be used by Relay 1. */
  orderProductEdge?: Maybe<OrderProductsEdge>;
};


/** The output of our create `OrderProduct` mutation. */
export type CreateOrderProductPayloadOrderProductEdgeArgs = {
  orderBy?: Maybe<Array<OrderProductsOrderBy>>;
};

/** All input for the create `Page` mutation. */
export type CreatePageInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Page` to be created by this mutation. */
  page: PageInput;
};

/** An input for mutations affecting `Page` */
export type PageInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  version?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  imageMeta?: Maybe<Scalars['String']>;
  imageSource?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  versionToVersion?: Maybe<FkPageVersionInput>;
};

/** The output of our create `Page` mutation. */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Page` that was created by this mutation. */
  page?: Maybe<Page>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Version` that is related to this `Page`. */
  versionByVersion?: Maybe<Version>;
  /** An edge for our `Page`. May be used by Relay 1. */
  pageEdge?: Maybe<PagesEdge>;
};


/** The output of our create `Page` mutation. */
export type CreatePagePayloadPageEdgeArgs = {
  orderBy?: Maybe<Array<PagesOrderBy>>;
};

/** All input for the create `Product` mutation. */
export type CreateProductInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` to be created by this mutation. */
  product: ProductInput;
};

/** An input for mutations affecting `Product` */
export type ProductInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  category?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  subCategory?: Maybe<Scalars['String']>;
  catalogToCatalog?: Maybe<FkProductCatalogInput>;
  categoryByCatalogToCategoryAndCatalog?: Maybe<FakePublicProductForeignKey0Input>;
};

/** The output of our create `Product` mutation. */
export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was created by this mutation. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Product`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads a single `CategoryByCatalog` that is related to this `Product`. */
  categoryByCatalogByCategoryAndCatalog?: Maybe<CategoryByCatalog>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
};


/** The output of our create `Product` mutation. */
export type CreateProductPayloadProductEdgeArgs = {
  orderBy?: Maybe<Array<ProductsOrderBy>>;
};

/** All input for the create `Profile` mutation. */
export type CreateProfileInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Profile` to be created by this mutation. */
  profile: ProfileInput;
};

/** An input for mutations affecting `Profile` */
export type ProfileInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadsUsingOid?: Maybe<FkLeadProfileInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCustomerInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCustomerInverseInput>;
};

/** The output of our create `Profile` mutation. */
export type CreateProfilePayload = {
  __typename?: 'CreateProfilePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Profile` that was created by this mutation. */
  profile?: Maybe<Profile>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>;
};


/** The output of our create `Profile` mutation. */
export type CreateProfilePayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>;
};

/** All input for the create `SubCategory` mutation. */
export type CreateSubCategoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubCategory` to be created by this mutation. */
  subCategory: SubCategoryInput;
};

/** An input for mutations affecting `SubCategory` */
export type SubCategoryInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  categoryToCategory?: Maybe<FkSubCategoryCategoryInput>;
};

/** The output of our create `SubCategory` mutation. */
export type CreateSubCategoryPayload = {
  __typename?: 'CreateSubCategoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubCategory` that was created by this mutation. */
  subCategory?: Maybe<SubCategory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Category` that is related to this `SubCategory`. */
  categoryByCategory?: Maybe<Category>;
  /** An edge for our `SubCategory`. May be used by Relay 1. */
  subCategoryEdge?: Maybe<SubCategoriesEdge>;
};


/** The output of our create `SubCategory` mutation. */
export type CreateSubCategoryPayloadSubCategoryEdgeArgs = {
  orderBy?: Maybe<Array<SubCategoriesOrderBy>>;
};

/** All input for the create `Subscription` mutation. */
export type CreateSubscriptionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Subscription` to be created by this mutation. */
  subscription: SubscriptionInput;
};

/** An input for mutations affecting `Subscription` */
export type SubscriptionInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['Datetime']>;
  charge?: Maybe<Scalars['BigFloat']>;
  listingId?: Maybe<Scalars['Int']>;
  exportStatus?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkSubscriptionCustomerInput>;
  catalogToCatalog?: Maybe<FkSubscriptionCatalogInput>;
};

/** The output of our create `Subscription` mutation. */
export type CreateSubscriptionPayload = {
  __typename?: 'CreateSubscriptionPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Subscription` that was created by this mutation. */
  subscription?: Maybe<Subscription>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Profile` that is related to this `Subscription`. */
  profileByCustomer?: Maybe<Profile>;
  /** Reads a single `Catalog` that is related to this `Subscription`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Subscription`. May be used by Relay 1. */
  subscriptionEdge?: Maybe<SubscriptionsEdge>;
};


/** The output of our create `Subscription` mutation. */
export type CreateSubscriptionPayloadSubscriptionEdgeArgs = {
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
};

/** All input for the create `Version` mutation. */
export type CreateVersionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Version` to be created by this mutation. */
  version: VersionInput;
};

/** An input for mutations affecting `Version` */
export type VersionInput = {
  oid: Scalars['UUID'];
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  catalog?: Maybe<Scalars['UUID']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkVersionCatalogInput>;
  catalogsUsingOid?: Maybe<FkCatalogActiveVersionInverseInput>;
  pagesUsingOid?: Maybe<FkPageVersionInverseInput>;
};

/** The output of our create `Version` mutation. */
export type CreateVersionPayload = {
  __typename?: 'CreateVersionPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Version` that was created by this mutation. */
  version?: Maybe<Version>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Version`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Version`. May be used by Relay 1. */
  versionEdge?: Maybe<VersionsEdge>;
};


/** The output of our create `Version` mutation. */
export type CreateVersionPayloadVersionEdgeArgs = {
  orderBy?: Maybe<Array<VersionsOrderBy>>;
};

/** All input for the `updateAccount` mutation. */
export type UpdateAccountInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Account` being updated. */
  patch: AccountPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  defaultTrackingCode?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['Datetime']>;
  homePageUrl?: Maybe<Scalars['String']>;
  legacyId?: Maybe<Scalars['BigInt']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  customSmsNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  catalogsUsingOid?: Maybe<FkCatalogAccountInverseInput>;
  contactsUsingOid?: Maybe<FkContactParentInverseInput>;
  campaignsUsingOid?: Maybe<FkCampaignAccountInverseInput>;
  leadsUsingOid?: Maybe<FkLeadAccountInverseInput>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInverseInput>;
};

/** The output of our update `Account` mutation. */
export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was updated by this mutation. */
  account?: Maybe<Account>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>;
};


/** The output of our update `Account` mutation. */
export type UpdateAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};

/** All input for the `updateAuthorizedUser` mutation. */
export type UpdateAuthorizedUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `AuthorizedUser` being updated. */
  patch: AuthorizedUserPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `AuthorizedUser`. Fields that are set will be updated. */
export type AuthorizedUserPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  faceBookId?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  linkedInId?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  authorizedUserAuthorizedUsersAccountPartnerAccessesUsingOid?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInverseInput>;
};

/** The output of our update `AuthorizedUser` mutation. */
export type UpdateAuthorizedUserPayload = {
  __typename?: 'UpdateAuthorizedUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AuthorizedUser` that was updated by this mutation. */
  authorizedUser?: Maybe<AuthorizedUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `AuthorizedUser`. May be used by Relay 1. */
  authorizedUserEdge?: Maybe<AuthorizedUsersEdge>;
};


/** The output of our update `AuthorizedUser` mutation. */
export type UpdateAuthorizedUserPayloadAuthorizedUserEdgeArgs = {
  orderBy?: Maybe<Array<AuthorizedUsersOrderBy>>;
};

/** All input for the `updateAuthorizedUserByEmail` mutation. */
export type UpdateAuthorizedUserByEmailInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `AuthorizedUser` being updated. */
  patch: AuthorizedUserPatch;
  email: Scalars['String'];
};

/** All input for the `updateAuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `AuthorizedUserAuthorizedUsersAccountPartnerAccess` being updated. */
  patch: AuthorizedUserAuthorizedUsersAccountPartnerAccessPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. Fields that are set will be updated. */
export type AuthorizedUserAuthorizedUsersAccountPartnerAccessPatch = {
  partnerAccess?: Maybe<Scalars['UUID']>;
  authorizedUsers?: Maybe<Scalars['UUID']>;
  oid?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToPartnerAccess?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccess4E22214EInput>;
  authorizedUserToAuthorizedUsers?: Maybe<FkAuthorizedUserAuthorizedUsersAccountPartnerAccessB343B2CfInput>;
};

/** The output of our update `AuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload = {
  __typename?: 'UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AuthorizedUserAuthorizedUsersAccountPartnerAccess` that was updated by this mutation. */
  authorizedUserAuthorizedUsersAccountPartnerAccess?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccess>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  accountByPartnerAccess?: Maybe<Account>;
  /** Reads a single `AuthorizedUser` that is related to this `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserByAuthorizedUsers?: Maybe<AuthorizedUser>;
  /** An edge for our `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. May be used by Relay 1. */
  authorizedUserAuthorizedUsersAccountPartnerAccessEdge?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessesEdge>;
};


/** The output of our update `AuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type UpdateAuthorizedUserAuthorizedUsersAccountPartnerAccessPayloadAuthorizedUserAuthorizedUsersAccountPartnerAccessEdgeArgs = {
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
};

/** All input for the `updateCampaign` mutation. */
export type UpdateCampaignInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Campaign` being updated. */
  patch: CampaignPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Campaign`. Fields that are set will be updated. */
export type CampaignPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  account?: Maybe<Scalars['UUID']>;
  sender?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  distributionDate?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  terms?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  opens?: Maybe<Scalars['Int']>;
  clicks?: Maybe<Scalars['Int']>;
  dynalogViews?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkCampaignAccountInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCampaignInverseInput>;
};

/** The output of our update `Campaign` mutation. */
export type UpdateCampaignPayload = {
  __typename?: 'UpdateCampaignPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Campaign` that was updated by this mutation. */
  campaign?: Maybe<Campaign>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Campaign`. */
  accountByAccount?: Maybe<Account>;
  /** An edge for our `Campaign`. May be used by Relay 1. */
  campaignEdge?: Maybe<CampaignsEdge>;
};


/** The output of our update `Campaign` mutation. */
export type UpdateCampaignPayloadCampaignEdgeArgs = {
  orderBy?: Maybe<Array<CampaignsOrderBy>>;
};

/** All input for the `updateCampaignGroup` mutation. */
export type UpdateCampaignGroupInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `CampaignGroup` being updated. */
  patch: CampaignGroupPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `CampaignGroup`. Fields that are set will be updated. */
export type CampaignGroupPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  campaignToCampaign?: Maybe<FkCampaignGroupCampaignInput>;
  catalogToCatalog?: Maybe<FkCampaignGroupCatalogInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserCampaignGroupInverseInput>;
};

/** The output of our update `CampaignGroup` mutation. */
export type UpdateCampaignGroupPayload = {
  __typename?: 'UpdateCampaignGroupPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CampaignGroup` that was updated by this mutation. */
  campaignGroup?: Maybe<CampaignGroup>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Campaign` that is related to this `CampaignGroup`. */
  campaignByCampaign?: Maybe<Campaign>;
  /** Reads a single `Catalog` that is related to this `CampaignGroup`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `CampaignGroup`. May be used by Relay 1. */
  campaignGroupEdge?: Maybe<CampaignGroupsEdge>;
};


/** The output of our update `CampaignGroup` mutation. */
export type UpdateCampaignGroupPayloadCampaignGroupEdgeArgs = {
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
};

/** All input for the `updateCampaignUser` mutation. */
export type UpdateCampaignUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `CampaignUser` being updated. */
  patch: CampaignUserPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `CampaignUser`. Fields that are set will be updated. */
export type CampaignUserPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  lead?: Maybe<Scalars['UUID']>;
  campaignGroup?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadToLead?: Maybe<FkCampaignUserLeadInput>;
  campaignGroupToCampaignGroup?: Maybe<FkCampaignUserCampaignGroupInput>;
};

/** The output of our update `CampaignUser` mutation. */
export type UpdateCampaignUserPayload = {
  __typename?: 'UpdateCampaignUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CampaignUser` that was updated by this mutation. */
  campaignUser?: Maybe<CampaignUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Lead` that is related to this `CampaignUser`. */
  leadByLead?: Maybe<Lead>;
  /** Reads a single `CampaignGroup` that is related to this `CampaignUser`. */
  campaignGroupByCampaignGroup?: Maybe<CampaignGroup>;
  /** An edge for our `CampaignUser`. May be used by Relay 1. */
  campaignUserEdge?: Maybe<CampaignUsersEdge>;
};


/** The output of our update `CampaignUser` mutation. */
export type UpdateCampaignUserPayloadCampaignUserEdgeArgs = {
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
};

/** All input for the `updateCatalog` mutation. */
export type UpdateCatalogInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Catalog` being updated. */
  patch: CatalogPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Catalog`. Fields that are set will be updated. */
export type CatalogPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  viewable?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  catalogFormat?: Maybe<Scalars['String']>;
  linkUrl?: Maybe<Scalars['String']>;
  leadCharge?: Maybe<Scalars['BigFloat']>;
  linkCharge?: Maybe<Scalars['BigFloat']>;
  flatFee?: Maybe<Scalars['BigFloat']>;
  dateExpired?: Maybe<Scalars['Datetime']>;
  trackingCode?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  showCategoryLinks?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Datetime']>;
  offerCopy?: Maybe<Scalars['String']>;
  introCopy?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  featureCopy?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  searchAppendCode?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['UUID']>;
  primaryDepartment?: Maybe<Scalars['UUID']>;
  isDigital?: Maybe<Scalars['Boolean']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  autoActivate?: Maybe<Scalars['Boolean']>;
  groupHubspotId?: Maybe<Scalars['String']>;
  customSubdomain?: Maybe<Scalars['String']>;
  text2Disclaimer?: Maybe<Scalars['String']>;
  activeVersion?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  shortDescription?: Maybe<Scalars['String']>;
  accountToAccount?: Maybe<FkCatalogAccountInput>;
  departmentToPrimaryDepartment?: Maybe<FkCatalogPrimaryDepartmentInput>;
  versionToActiveVersion?: Maybe<FkCatalogActiveVersionInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInverseInput>;
  versionsUsingOid?: Maybe<FkVersionCatalogInverseInput>;
  offersUsingOid?: Maybe<FkOfferCatalogInverseInput>;
  categoriesUsingOid?: Maybe<FkCategoryCatalogInverseInput>;
  feedsUsingOid?: Maybe<FkFeedCatalogInverseInput>;
  productsUsingOid?: Maybe<FkProductCatalogInverseInput>;
  campaignGroupsUsingOid?: Maybe<FkCampaignGroupCatalogInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCatalogInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCatalogInverseInput>;
  categoryByCatalogsUsingOid?: Maybe<FakePublicCategoryByCatalogForeignKey0InverseInput>;
};

/** The output of our update `Catalog` mutation. */
export type UpdateCatalogPayload = {
  __typename?: 'UpdateCatalogPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Catalog` that was updated by this mutation. */
  catalog?: Maybe<Catalog>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Catalog`. */
  accountByAccount?: Maybe<Account>;
  /** Reads a single `Department` that is related to this `Catalog`. */
  departmentByPrimaryDepartment?: Maybe<Department>;
  /** Reads a single `Version` that is related to this `Catalog`. */
  versionByActiveVersion?: Maybe<Version>;
  /** An edge for our `Catalog`. May be used by Relay 1. */
  catalogEdge?: Maybe<CatalogsEdge>;
};


/** The output of our update `Catalog` mutation. */
export type UpdateCatalogPayloadCatalogEdgeArgs = {
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
};

/** All input for the `updateCatalogById` mutation. */
export type UpdateCatalogByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Catalog` being updated. */
  patch: CatalogPatch;
  id: Scalars['Int'];
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  catalog?: Maybe<Scalars['UUID']>;
  rankOrder?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkCategoryCatalogInput>;
  subCategoriesUsingOid?: Maybe<FkSubCategoryCategoryInverseInput>;
  subProductsUsingNameAndCatalog?: Maybe<FakePublicSubProductsForeignKey0InverseInput>;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Category`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
};


/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateCategoryById` mutation. */
export type UpdateCategoryByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
  id: Scalars['Int'];
};

/** All input for the `updateContact` mutation. */
export type UpdateContactInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Contact` being updated. */
  patch: ContactPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Contact`. Fields that are set will be updated. */
export type ContactPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['UUID']>;
  appProfile?: Maybe<Scalars['Boolean']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  oldId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToParent?: Maybe<FkContactParentInput>;
};

/** The output of our update `Contact` mutation. */
export type UpdateContactPayload = {
  __typename?: 'UpdateContactPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Contact` that was updated by this mutation. */
  contact?: Maybe<Contact>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByParent?: Maybe<Account>;
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactsEdge>;
};


/** The output of our update `Contact` mutation. */
export type UpdateContactPayloadContactEdgeArgs = {
  orderBy?: Maybe<Array<ContactsOrderBy>>;
};

/** All input for the `updateDepartment` mutation. */
export type UpdateDepartmentInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Department` being updated. */
  patch: DepartmentPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Department`. Fields that are set will be updated. */
export type DepartmentPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metakeys?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  advice?: Maybe<Scalars['String']>;
  hiwId?: Maybe<Scalars['Int']>;
  metaTitleArticle?: Maybe<Scalars['String']>;
  metaKeysArticle?: Maybe<Scalars['String']>;
  metaDescrArticle?: Maybe<Scalars['String']>;
  metaKeysProduct?: Maybe<Scalars['String']>;
  articleDept?: Maybe<Scalars['Int']>;
  parentDepartment?: Maybe<Scalars['UUID']>;
  deptType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToParentDepartment?: Maybe<FkDepartmentParentDepartmentInput>;
  catalogsUsingOid?: Maybe<FkCatalogPrimaryDepartmentInverseInput>;
  departmentDepartmentsCatalogListingsUsingOid?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInverseInput>;
  navigationItemsUsingOid?: Maybe<FkNavigationItemDepartmentInverseInput>;
};

/** The output of our update `Department` mutation. */
export type UpdateDepartmentPayload = {
  __typename?: 'UpdateDepartmentPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Department` that was updated by this mutation. */
  department?: Maybe<Department>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Department` that is related to this `Department`. */
  departmentByParentDepartment?: Maybe<Department>;
  /** An edge for our `Department`. May be used by Relay 1. */
  departmentEdge?: Maybe<DepartmentsEdge>;
};


/** The output of our update `Department` mutation. */
export type UpdateDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: Maybe<Array<DepartmentsOrderBy>>;
};

/** All input for the `updateDepartmentDepartmentsCatalogListing` mutation. */
export type UpdateDepartmentDepartmentsCatalogListingInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `DepartmentDepartmentsCatalogListing` being updated. */
  patch: DepartmentDepartmentsCatalogListingPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `DepartmentDepartmentsCatalogListing`. Fields that are set will be updated. */
export type DepartmentDepartmentsCatalogListingPatch = {
  listings?: Maybe<Scalars['UUID']>;
  departments?: Maybe<Scalars['UUID']>;
  oid?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToListings?: Maybe<FkDepartmentDepartmentsCatalogListingsListingsInput>;
  departmentToDepartments?: Maybe<FkDepartmentDepartmentsCatalogListingsDepartmentsInput>;
};

/** The output of our update `DepartmentDepartmentsCatalogListing` mutation. */
export type UpdateDepartmentDepartmentsCatalogListingPayload = {
  __typename?: 'UpdateDepartmentDepartmentsCatalogListingPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DepartmentDepartmentsCatalogListing` that was updated by this mutation. */
  departmentDepartmentsCatalogListing?: Maybe<DepartmentDepartmentsCatalogListing>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `DepartmentDepartmentsCatalogListing`. */
  catalogByListings?: Maybe<Catalog>;
  /** Reads a single `Department` that is related to this `DepartmentDepartmentsCatalogListing`. */
  departmentByDepartments?: Maybe<Department>;
  /** An edge for our `DepartmentDepartmentsCatalogListing`. May be used by Relay 1. */
  departmentDepartmentsCatalogListingEdge?: Maybe<DepartmentDepartmentsCatalogListingsEdge>;
};


/** The output of our update `DepartmentDepartmentsCatalogListing` mutation. */
export type UpdateDepartmentDepartmentsCatalogListingPayloadDepartmentDepartmentsCatalogListingEdgeArgs = {
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
};

/** All input for the `updateFeed` mutation. */
export type UpdateFeedInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Feed` being updated. */
  patch: FeedPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Feed`. Fields that are set will be updated. */
export type FeedPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  feedType?: Maybe<Scalars['String']>;
  feedMap?: Maybe<Scalars['String']>;
  productMap?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  autoUpdate?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkFeedCatalogInput>;
  feedHistoriesUsingOid?: Maybe<FkFeedHistoryFeedInverseInput>;
};

/** The output of our update `Feed` mutation. */
export type UpdateFeedPayload = {
  __typename?: 'UpdateFeedPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feed` that was updated by this mutation. */
  feed?: Maybe<Feed>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Feed`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Feed`. May be used by Relay 1. */
  feedEdge?: Maybe<FeedsEdge>;
};


/** The output of our update `Feed` mutation. */
export type UpdateFeedPayloadFeedEdgeArgs = {
  orderBy?: Maybe<Array<FeedsOrderBy>>;
};

/** All input for the `updateFeedHistory` mutation. */
export type UpdateFeedHistoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FeedHistory` being updated. */
  patch: FeedHistoryPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `FeedHistory`. Fields that are set will be updated. */
export type FeedHistoryPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  feed?: Maybe<Scalars['UUID']>;
  preUpdateStats?: Maybe<Scalars['JSON']>;
  postUpdateStats?: Maybe<Scalars['JSON']>;
  feedPath?: Maybe<Scalars['String']>;
  feedJson?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  feedToFeed?: Maybe<FkFeedHistoryFeedInput>;
};

/** The output of our update `FeedHistory` mutation. */
export type UpdateFeedHistoryPayload = {
  __typename?: 'UpdateFeedHistoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeedHistory` that was updated by this mutation. */
  feedHistory?: Maybe<FeedHistory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feed` that is related to this `FeedHistory`. */
  feedByFeed?: Maybe<Feed>;
  /** An edge for our `FeedHistory`. May be used by Relay 1. */
  feedHistoryEdge?: Maybe<FeedHistoriesEdge>;
};


/** The output of our update `FeedHistory` mutation. */
export type UpdateFeedHistoryPayloadFeedHistoryEdgeArgs = {
  orderBy?: Maybe<Array<FeedHistoriesOrderBy>>;
};

/** All input for the `updateLead` mutation. */
export type UpdateLeadInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Lead` being updated. */
  patch: LeadPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Lead`. Fields that are set will be updated. */
export type LeadPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateCollected?: Maybe<Scalars['Datetime']>;
  account?: Maybe<Scalars['UUID']>;
  profile?: Maybe<Scalars['UUID']>;
  catalogId?: Maybe<Scalars['Int']>;
  versionId?: Maybe<Scalars['Int']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  accountToAccount?: Maybe<FkLeadAccountInput>;
  profileToProfile?: Maybe<FkLeadProfileInput>;
  campaignUsersUsingOid?: Maybe<FkCampaignUserLeadInverseInput>;
};

/** The output of our update `Lead` mutation. */
export type UpdateLeadPayload = {
  __typename?: 'UpdateLeadPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Lead` that was updated by this mutation. */
  lead?: Maybe<Lead>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Lead`. */
  accountByAccount?: Maybe<Account>;
  /** Reads a single `Profile` that is related to this `Lead`. */
  profileByProfile?: Maybe<Profile>;
  /** An edge for our `Lead`. May be used by Relay 1. */
  leadEdge?: Maybe<LeadsEdge>;
};


/** The output of our update `Lead` mutation. */
export type UpdateLeadPayloadLeadEdgeArgs = {
  orderBy?: Maybe<Array<LeadsOrderBy>>;
};

/** All input for the `updateLinkOut` mutation. */
export type UpdateLinkOutInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `LinkOut` being updated. */
  patch: LinkOutPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `LinkOut`. Fields that are set will be updated. */
export type LinkOutPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  linkTime?: Maybe<Scalars['Datetime']>;
  link?: Maybe<Scalars['String']>;
  charge?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  customerIp?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkLinkOutCustomerInput>;
  catalogToCatalog?: Maybe<FkLinkOutCatalogInput>;
};

/** The output of our update `LinkOut` mutation. */
export type UpdateLinkOutPayload = {
  __typename?: 'UpdateLinkOutPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LinkOut` that was updated by this mutation. */
  linkOut?: Maybe<LinkOut>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Profile` that is related to this `LinkOut`. */
  profileByCustomer?: Maybe<Profile>;
  /** Reads a single `Catalog` that is related to this `LinkOut`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `LinkOut`. May be used by Relay 1. */
  linkOutEdge?: Maybe<LinkOutsEdge>;
};


/** The output of our update `LinkOut` mutation. */
export type UpdateLinkOutPayloadLinkOutEdgeArgs = {
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
};

/** All input for the `updateNavigationItem` mutation. */
export type UpdateNavigationItemInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `NavigationItem` being updated. */
  patch: NavigationItemPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `NavigationItem`. Fields that are set will be updated. */
export type NavigationItemPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  orderIndex?: Maybe<Scalars['Int']>;
  groupText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  departmentToDepartment?: Maybe<FkNavigationItemDepartmentInput>;
};

/** The output of our update `NavigationItem` mutation. */
export type UpdateNavigationItemPayload = {
  __typename?: 'UpdateNavigationItemPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `NavigationItem` that was updated by this mutation. */
  navigationItem?: Maybe<NavigationItem>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Department` that is related to this `NavigationItem`. */
  departmentByDepartment?: Maybe<Department>;
  /** An edge for our `NavigationItem`. May be used by Relay 1. */
  navigationItemEdge?: Maybe<NavigationItemsEdge>;
};


/** The output of our update `NavigationItem` mutation. */
export type UpdateNavigationItemPayloadNavigationItemEdgeArgs = {
  orderBy?: Maybe<Array<NavigationItemsOrderBy>>;
};

/** All input for the `updateOffer` mutation. */
export type UpdateOfferInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Offer` being updated. */
  patch: OfferPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Offer`. Fields that are set will be updated. */
export type OfferPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  code?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  certificate?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['String']>;
  disclaimer?: Maybe<Scalars['String']>;
  burst?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkOfferCatalogInput>;
};

/** The output of our update `Offer` mutation. */
export type UpdateOfferPayload = {
  __typename?: 'UpdateOfferPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Offer` that was updated by this mutation. */
  offer?: Maybe<Offer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Offer`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Offer`. May be used by Relay 1. */
  offerEdge?: Maybe<OffersEdge>;
};


/** The output of our update `Offer` mutation. */
export type UpdateOfferPayloadOfferEdgeArgs = {
  orderBy?: Maybe<Array<OffersOrderBy>>;
};

/** All input for the `updateOrder` mutation. */
export type UpdateOrderInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Order` being updated. */
  patch: OrderPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Order`. Fields that are set will be updated. */
export type OrderPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Datetime']>;
  amount?: Maybe<Scalars['Float']>;
  deliveryFee?: Maybe<Scalars['BigFloat']>;
  deliveryTime?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  orderProductsUsingOid?: Maybe<FkOrderProductOrderInverseInput>;
};

/** The output of our update `Order` mutation. */
export type UpdateOrderPayload = {
  __typename?: 'UpdateOrderPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Order` that was updated by this mutation. */
  order?: Maybe<Order>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
};


/** The output of our update `Order` mutation. */
export type UpdateOrderPayloadOrderEdgeArgs = {
  orderBy?: Maybe<Array<OrdersOrderBy>>;
};

/** All input for the `updateOrderProduct` mutation. */
export type UpdateOrderProductInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `OrderProduct` being updated. */
  patch: OrderProductPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `OrderProduct`. Fields that are set will be updated. */
export type OrderProductPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  order?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  orderToOrder?: Maybe<FkOrderProductOrderInput>;
};

/** The output of our update `OrderProduct` mutation. */
export type UpdateOrderProductPayload = {
  __typename?: 'UpdateOrderProductPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OrderProduct` that was updated by this mutation. */
  orderProduct?: Maybe<OrderProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Order` that is related to this `OrderProduct`. */
  orderByOrder?: Maybe<Order>;
  /** An edge for our `OrderProduct`. May be used by Relay 1. */
  orderProductEdge?: Maybe<OrderProductsEdge>;
};


/** The output of our update `OrderProduct` mutation. */
export type UpdateOrderProductPayloadOrderProductEdgeArgs = {
  orderBy?: Maybe<Array<OrderProductsOrderBy>>;
};

/** All input for the `updatePage` mutation. */
export type UpdatePageInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Page` being updated. */
  patch: PagePatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Page`. Fields that are set will be updated. */
export type PagePatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  version?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  imageMeta?: Maybe<Scalars['String']>;
  imageSource?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  versionToVersion?: Maybe<FkPageVersionInput>;
};

/** The output of our update `Page` mutation. */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Page` that was updated by this mutation. */
  page?: Maybe<Page>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Version` that is related to this `Page`. */
  versionByVersion?: Maybe<Version>;
  /** An edge for our `Page`. May be used by Relay 1. */
  pageEdge?: Maybe<PagesEdge>;
};


/** The output of our update `Page` mutation. */
export type UpdatePagePayloadPageEdgeArgs = {
  orderBy?: Maybe<Array<PagesOrderBy>>;
};

/** All input for the `updateProduct` mutation. */
export type UpdateProductInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Product` being updated. */
  patch: ProductPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Product`. Fields that are set will be updated. */
export type ProductPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  catalog?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  dateEntered?: Maybe<Scalars['Datetime']>;
  srcOriginal?: Maybe<Scalars['String']>;
  additionalImages?: Maybe<Scalars['JSON']>;
  additionalFields?: Maybe<Scalars['JSON']>;
  changeHistory?: Maybe<Scalars['JSON']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['BigFloat']>;
  category?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  rotated?: Maybe<Scalars['Boolean']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  subCategory?: Maybe<Scalars['String']>;
  catalogToCatalog?: Maybe<FkProductCatalogInput>;
  categoryByCatalogToCategoryAndCatalog?: Maybe<FakePublicProductForeignKey0Input>;
};

/** The output of our update `Product` mutation. */
export type UpdateProductPayload = {
  __typename?: 'UpdateProductPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was updated by this mutation. */
  product?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Product`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads a single `CategoryByCatalog` that is related to this `Product`. */
  categoryByCatalogByCategoryAndCatalog?: Maybe<CategoryByCatalog>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
};


/** The output of our update `Product` mutation. */
export type UpdateProductPayloadProductEdgeArgs = {
  orderBy?: Maybe<Array<ProductsOrderBy>>;
};

/** All input for the `updateProfile` mutation. */
export type UpdateProfileInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Profile` being updated. */
  patch: ProfilePatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Profile`. Fields that are set will be updated. */
export type ProfilePatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  imageUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zipPostal?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  leadsUsingOid?: Maybe<FkLeadProfileInverseInput>;
  subscriptionsUsingOid?: Maybe<FkSubscriptionCustomerInverseInput>;
  linkOutsUsingOid?: Maybe<FkLinkOutCustomerInverseInput>;
};

/** The output of our update `Profile` mutation. */
export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Profile` that was updated by this mutation. */
  profile?: Maybe<Profile>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>;
};


/** The output of our update `Profile` mutation. */
export type UpdateProfilePayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>;
};

/** All input for the `updateSubCategory` mutation. */
export type UpdateSubCategoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SubCategory` being updated. */
  patch: SubCategoryPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `SubCategory`. Fields that are set will be updated. */
export type SubCategoryPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  linkoutUrl?: Maybe<Scalars['String']>;
  productsPerPage?: Maybe<Scalars['Int']>;
  imageOrientation?: Maybe<Scalars['Boolean']>;
  productBorder?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['UUID']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  categoryToCategory?: Maybe<FkSubCategoryCategoryInput>;
};

/** The output of our update `SubCategory` mutation. */
export type UpdateSubCategoryPayload = {
  __typename?: 'UpdateSubCategoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubCategory` that was updated by this mutation. */
  subCategory?: Maybe<SubCategory>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Category` that is related to this `SubCategory`. */
  categoryByCategory?: Maybe<Category>;
  /** An edge for our `SubCategory`. May be used by Relay 1. */
  subCategoryEdge?: Maybe<SubCategoriesEdge>;
};


/** The output of our update `SubCategory` mutation. */
export type UpdateSubCategoryPayloadSubCategoryEdgeArgs = {
  orderBy?: Maybe<Array<SubCategoriesOrderBy>>;
};

/** All input for the `updateSubCategoryById` mutation. */
export type UpdateSubCategoryByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SubCategory` being updated. */
  patch: SubCategoryPatch;
  id: Scalars['Int'];
};

/** All input for the `updateSubscription` mutation. */
export type UpdateSubscriptionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Subscription` being updated. */
  patch: SubscriptionPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Subscription`. Fields that are set will be updated. */
export type SubscriptionPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['UUID']>;
  catalog?: Maybe<Scalars['UUID']>;
  date?: Maybe<Scalars['Datetime']>;
  charge?: Maybe<Scalars['BigFloat']>;
  listingId?: Maybe<Scalars['Int']>;
  exportStatus?: Maybe<Scalars['String']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  profileToCustomer?: Maybe<FkSubscriptionCustomerInput>;
  catalogToCatalog?: Maybe<FkSubscriptionCatalogInput>;
};

/** The output of our update `Subscription` mutation. */
export type UpdateSubscriptionPayload = {
  __typename?: 'UpdateSubscriptionPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Subscription` that was updated by this mutation. */
  subscription?: Maybe<Subscription>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Profile` that is related to this `Subscription`. */
  profileByCustomer?: Maybe<Profile>;
  /** Reads a single `Catalog` that is related to this `Subscription`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Subscription`. May be used by Relay 1. */
  subscriptionEdge?: Maybe<SubscriptionsEdge>;
};


/** The output of our update `Subscription` mutation. */
export type UpdateSubscriptionPayloadSubscriptionEdgeArgs = {
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
};

/** All input for the `updateVersion` mutation. */
export type UpdateVersionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Version` being updated. */
  patch: VersionPatch;
  oid: Scalars['UUID'];
};

/** Represents an update to a `Version`. Fields that are set will be updated. */
export type VersionPatch = {
  oid?: Maybe<Scalars['UUID']>;
  options?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  coverMeta?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Datetime']>;
  dateModified?: Maybe<Scalars['Datetime']>;
  versionNo?: Maybe<Scalars['Int']>;
  autoProcess?: Maybe<Scalars['Boolean']>;
  contactUrl?: Maybe<Scalars['String']>;
  enableCategoryCatalogs?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  leadZapEmail?: Maybe<Scalars['String']>;
  agentId?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isFtp?: Maybe<Scalars['Boolean']>;
  catalogCloneId?: Maybe<Scalars['BigInt']>;
  feedAlertNotifcation?: Maybe<Scalars['Datetime']>;
  catalog?: Maybe<Scalars['UUID']>;
  order?: Maybe<Scalars['JSON']>;
  optimisticLockField?: Maybe<Scalars['Int']>;
  catalogToCatalog?: Maybe<FkVersionCatalogInput>;
  catalogsUsingOid?: Maybe<FkCatalogActiveVersionInverseInput>;
  pagesUsingOid?: Maybe<FkPageVersionInverseInput>;
};

/** The output of our update `Version` mutation. */
export type UpdateVersionPayload = {
  __typename?: 'UpdateVersionPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Version` that was updated by this mutation. */
  version?: Maybe<Version>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Version`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Version`. May be used by Relay 1. */
  versionEdge?: Maybe<VersionsEdge>;
};


/** The output of our update `Version` mutation. */
export type UpdateVersionPayloadVersionEdgeArgs = {
  orderBy?: Maybe<Array<VersionsOrderBy>>;
};

/** All input for the `updateVersionById` mutation. */
export type UpdateVersionByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Version` being updated. */
  patch: VersionPatch;
  id: Scalars['Int'];
};

/** All input for the `deleteAccount` mutation. */
export type DeleteAccountInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was deleted by this mutation. */
  account?: Maybe<Account>;
  deletedAccountNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>;
};


/** The output of our delete `Account` mutation. */
export type DeleteAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};

/** All input for the `deleteAuthorizedUser` mutation. */
export type DeleteAuthorizedUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `AuthorizedUser` mutation. */
export type DeleteAuthorizedUserPayload = {
  __typename?: 'DeleteAuthorizedUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AuthorizedUser` that was deleted by this mutation. */
  authorizedUser?: Maybe<AuthorizedUser>;
  deletedAuthorizedUserNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `AuthorizedUser`. May be used by Relay 1. */
  authorizedUserEdge?: Maybe<AuthorizedUsersEdge>;
};


/** The output of our delete `AuthorizedUser` mutation. */
export type DeleteAuthorizedUserPayloadAuthorizedUserEdgeArgs = {
  orderBy?: Maybe<Array<AuthorizedUsersOrderBy>>;
};

/** All input for the `deleteAuthorizedUserByEmail` mutation. */
export type DeleteAuthorizedUserByEmailInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

/** All input for the `deleteAuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type DeleteAuthorizedUserAuthorizedUsersAccountPartnerAccessInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `AuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type DeleteAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload = {
  __typename?: 'DeleteAuthorizedUserAuthorizedUsersAccountPartnerAccessPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AuthorizedUserAuthorizedUsersAccountPartnerAccess` that was deleted by this mutation. */
  authorizedUserAuthorizedUsersAccountPartnerAccess?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccess>;
  deletedAuthorizedUserAuthorizedUsersAccountPartnerAccessNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  accountByPartnerAccess?: Maybe<Account>;
  /** Reads a single `AuthorizedUser` that is related to this `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. */
  authorizedUserByAuthorizedUsers?: Maybe<AuthorizedUser>;
  /** An edge for our `AuthorizedUserAuthorizedUsersAccountPartnerAccess`. May be used by Relay 1. */
  authorizedUserAuthorizedUsersAccountPartnerAccessEdge?: Maybe<AuthorizedUserAuthorizedUsersAccountPartnerAccessesEdge>;
};


/** The output of our delete `AuthorizedUserAuthorizedUsersAccountPartnerAccess` mutation. */
export type DeleteAuthorizedUserAuthorizedUsersAccountPartnerAccessPayloadAuthorizedUserAuthorizedUsersAccountPartnerAccessEdgeArgs = {
  orderBy?: Maybe<Array<AuthorizedUserAuthorizedUsersAccountPartnerAccessesOrderBy>>;
};

/** All input for the `deleteCampaign` mutation. */
export type DeleteCampaignInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Campaign` mutation. */
export type DeleteCampaignPayload = {
  __typename?: 'DeleteCampaignPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Campaign` that was deleted by this mutation. */
  campaign?: Maybe<Campaign>;
  deletedCampaignNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Campaign`. */
  accountByAccount?: Maybe<Account>;
  /** An edge for our `Campaign`. May be used by Relay 1. */
  campaignEdge?: Maybe<CampaignsEdge>;
};


/** The output of our delete `Campaign` mutation. */
export type DeleteCampaignPayloadCampaignEdgeArgs = {
  orderBy?: Maybe<Array<CampaignsOrderBy>>;
};

/** All input for the `deleteCampaignGroup` mutation. */
export type DeleteCampaignGroupInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `CampaignGroup` mutation. */
export type DeleteCampaignGroupPayload = {
  __typename?: 'DeleteCampaignGroupPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CampaignGroup` that was deleted by this mutation. */
  campaignGroup?: Maybe<CampaignGroup>;
  deletedCampaignGroupNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Campaign` that is related to this `CampaignGroup`. */
  campaignByCampaign?: Maybe<Campaign>;
  /** Reads a single `Catalog` that is related to this `CampaignGroup`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `CampaignGroup`. May be used by Relay 1. */
  campaignGroupEdge?: Maybe<CampaignGroupsEdge>;
};


/** The output of our delete `CampaignGroup` mutation. */
export type DeleteCampaignGroupPayloadCampaignGroupEdgeArgs = {
  orderBy?: Maybe<Array<CampaignGroupsOrderBy>>;
};

/** All input for the `deleteCampaignUser` mutation. */
export type DeleteCampaignUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `CampaignUser` mutation. */
export type DeleteCampaignUserPayload = {
  __typename?: 'DeleteCampaignUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CampaignUser` that was deleted by this mutation. */
  campaignUser?: Maybe<CampaignUser>;
  deletedCampaignUserNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Lead` that is related to this `CampaignUser`. */
  leadByLead?: Maybe<Lead>;
  /** Reads a single `CampaignGroup` that is related to this `CampaignUser`. */
  campaignGroupByCampaignGroup?: Maybe<CampaignGroup>;
  /** An edge for our `CampaignUser`. May be used by Relay 1. */
  campaignUserEdge?: Maybe<CampaignUsersEdge>;
};


/** The output of our delete `CampaignUser` mutation. */
export type DeleteCampaignUserPayloadCampaignUserEdgeArgs = {
  orderBy?: Maybe<Array<CampaignUsersOrderBy>>;
};

/** All input for the `deleteCatalog` mutation. */
export type DeleteCatalogInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Catalog` mutation. */
export type DeleteCatalogPayload = {
  __typename?: 'DeleteCatalogPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Catalog` that was deleted by this mutation. */
  catalog?: Maybe<Catalog>;
  deletedCatalogNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Catalog`. */
  accountByAccount?: Maybe<Account>;
  /** Reads a single `Department` that is related to this `Catalog`. */
  departmentByPrimaryDepartment?: Maybe<Department>;
  /** Reads a single `Version` that is related to this `Catalog`. */
  versionByActiveVersion?: Maybe<Version>;
  /** An edge for our `Catalog`. May be used by Relay 1. */
  catalogEdge?: Maybe<CatalogsEdge>;
};


/** The output of our delete `Catalog` mutation. */
export type DeleteCatalogPayloadCatalogEdgeArgs = {
  orderBy?: Maybe<Array<CatalogsOrderBy>>;
};

/** All input for the `deleteCatalogById` mutation. */
export type DeleteCatalogByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  deletedCategoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Category`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
};


/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteCategoryById` mutation. */
export type DeleteCategoryByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteContact` mutation. */
export type DeleteContactInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Contact` mutation. */
export type DeleteContactPayload = {
  __typename?: 'DeleteContactPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Contact` that was deleted by this mutation. */
  contact?: Maybe<Contact>;
  deletedContactNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Contact`. */
  accountByParent?: Maybe<Account>;
  /** An edge for our `Contact`. May be used by Relay 1. */
  contactEdge?: Maybe<ContactsEdge>;
};


/** The output of our delete `Contact` mutation. */
export type DeleteContactPayloadContactEdgeArgs = {
  orderBy?: Maybe<Array<ContactsOrderBy>>;
};

/** All input for the `deleteDepartment` mutation. */
export type DeleteDepartmentInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Department` mutation. */
export type DeleteDepartmentPayload = {
  __typename?: 'DeleteDepartmentPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Department` that was deleted by this mutation. */
  department?: Maybe<Department>;
  deletedDepartmentNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Department` that is related to this `Department`. */
  departmentByParentDepartment?: Maybe<Department>;
  /** An edge for our `Department`. May be used by Relay 1. */
  departmentEdge?: Maybe<DepartmentsEdge>;
};


/** The output of our delete `Department` mutation. */
export type DeleteDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: Maybe<Array<DepartmentsOrderBy>>;
};

/** All input for the `deleteDepartmentDepartmentsCatalogListing` mutation. */
export type DeleteDepartmentDepartmentsCatalogListingInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `DepartmentDepartmentsCatalogListing` mutation. */
export type DeleteDepartmentDepartmentsCatalogListingPayload = {
  __typename?: 'DeleteDepartmentDepartmentsCatalogListingPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DepartmentDepartmentsCatalogListing` that was deleted by this mutation. */
  departmentDepartmentsCatalogListing?: Maybe<DepartmentDepartmentsCatalogListing>;
  deletedDepartmentDepartmentsCatalogListingNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `DepartmentDepartmentsCatalogListing`. */
  catalogByListings?: Maybe<Catalog>;
  /** Reads a single `Department` that is related to this `DepartmentDepartmentsCatalogListing`. */
  departmentByDepartments?: Maybe<Department>;
  /** An edge for our `DepartmentDepartmentsCatalogListing`. May be used by Relay 1. */
  departmentDepartmentsCatalogListingEdge?: Maybe<DepartmentDepartmentsCatalogListingsEdge>;
};


/** The output of our delete `DepartmentDepartmentsCatalogListing` mutation. */
export type DeleteDepartmentDepartmentsCatalogListingPayloadDepartmentDepartmentsCatalogListingEdgeArgs = {
  orderBy?: Maybe<Array<DepartmentDepartmentsCatalogListingsOrderBy>>;
};

/** All input for the `deleteFeed` mutation. */
export type DeleteFeedInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Feed` mutation. */
export type DeleteFeedPayload = {
  __typename?: 'DeleteFeedPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Feed` that was deleted by this mutation. */
  feed?: Maybe<Feed>;
  deletedFeedNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Feed`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Feed`. May be used by Relay 1. */
  feedEdge?: Maybe<FeedsEdge>;
};


/** The output of our delete `Feed` mutation. */
export type DeleteFeedPayloadFeedEdgeArgs = {
  orderBy?: Maybe<Array<FeedsOrderBy>>;
};

/** All input for the `deleteFeedHistory` mutation. */
export type DeleteFeedHistoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `FeedHistory` mutation. */
export type DeleteFeedHistoryPayload = {
  __typename?: 'DeleteFeedHistoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FeedHistory` that was deleted by this mutation. */
  feedHistory?: Maybe<FeedHistory>;
  deletedFeedHistoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Feed` that is related to this `FeedHistory`. */
  feedByFeed?: Maybe<Feed>;
  /** An edge for our `FeedHistory`. May be used by Relay 1. */
  feedHistoryEdge?: Maybe<FeedHistoriesEdge>;
};


/** The output of our delete `FeedHistory` mutation. */
export type DeleteFeedHistoryPayloadFeedHistoryEdgeArgs = {
  orderBy?: Maybe<Array<FeedHistoriesOrderBy>>;
};

/** All input for the `deleteLead` mutation. */
export type DeleteLeadInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Lead` mutation. */
export type DeleteLeadPayload = {
  __typename?: 'DeleteLeadPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Lead` that was deleted by this mutation. */
  lead?: Maybe<Lead>;
  deletedLeadNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Lead`. */
  accountByAccount?: Maybe<Account>;
  /** Reads a single `Profile` that is related to this `Lead`. */
  profileByProfile?: Maybe<Profile>;
  /** An edge for our `Lead`. May be used by Relay 1. */
  leadEdge?: Maybe<LeadsEdge>;
};


/** The output of our delete `Lead` mutation. */
export type DeleteLeadPayloadLeadEdgeArgs = {
  orderBy?: Maybe<Array<LeadsOrderBy>>;
};

/** All input for the `deleteLinkOut` mutation. */
export type DeleteLinkOutInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `LinkOut` mutation. */
export type DeleteLinkOutPayload = {
  __typename?: 'DeleteLinkOutPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LinkOut` that was deleted by this mutation. */
  linkOut?: Maybe<LinkOut>;
  deletedLinkOutNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Profile` that is related to this `LinkOut`. */
  profileByCustomer?: Maybe<Profile>;
  /** Reads a single `Catalog` that is related to this `LinkOut`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `LinkOut`. May be used by Relay 1. */
  linkOutEdge?: Maybe<LinkOutsEdge>;
};


/** The output of our delete `LinkOut` mutation. */
export type DeleteLinkOutPayloadLinkOutEdgeArgs = {
  orderBy?: Maybe<Array<LinkOutsOrderBy>>;
};

/** All input for the `deleteNavigationItem` mutation. */
export type DeleteNavigationItemInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `NavigationItem` mutation. */
export type DeleteNavigationItemPayload = {
  __typename?: 'DeleteNavigationItemPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `NavigationItem` that was deleted by this mutation. */
  navigationItem?: Maybe<NavigationItem>;
  deletedNavigationItemNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Department` that is related to this `NavigationItem`. */
  departmentByDepartment?: Maybe<Department>;
  /** An edge for our `NavigationItem`. May be used by Relay 1. */
  navigationItemEdge?: Maybe<NavigationItemsEdge>;
};


/** The output of our delete `NavigationItem` mutation. */
export type DeleteNavigationItemPayloadNavigationItemEdgeArgs = {
  orderBy?: Maybe<Array<NavigationItemsOrderBy>>;
};

/** All input for the `deleteOffer` mutation. */
export type DeleteOfferInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Offer` mutation. */
export type DeleteOfferPayload = {
  __typename?: 'DeleteOfferPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Offer` that was deleted by this mutation. */
  offer?: Maybe<Offer>;
  deletedOfferNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Offer`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Offer`. May be used by Relay 1. */
  offerEdge?: Maybe<OffersEdge>;
};


/** The output of our delete `Offer` mutation. */
export type DeleteOfferPayloadOfferEdgeArgs = {
  orderBy?: Maybe<Array<OffersOrderBy>>;
};

/** All input for the `deleteOrder` mutation. */
export type DeleteOrderInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Order` mutation. */
export type DeleteOrderPayload = {
  __typename?: 'DeleteOrderPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Order` that was deleted by this mutation. */
  order?: Maybe<Order>;
  deletedOrderNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Order`. May be used by Relay 1. */
  orderEdge?: Maybe<OrdersEdge>;
};


/** The output of our delete `Order` mutation. */
export type DeleteOrderPayloadOrderEdgeArgs = {
  orderBy?: Maybe<Array<OrdersOrderBy>>;
};

/** All input for the `deleteOrderProduct` mutation. */
export type DeleteOrderProductInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `OrderProduct` mutation. */
export type DeleteOrderProductPayload = {
  __typename?: 'DeleteOrderProductPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OrderProduct` that was deleted by this mutation. */
  orderProduct?: Maybe<OrderProduct>;
  deletedOrderProductNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Order` that is related to this `OrderProduct`. */
  orderByOrder?: Maybe<Order>;
  /** An edge for our `OrderProduct`. May be used by Relay 1. */
  orderProductEdge?: Maybe<OrderProductsEdge>;
};


/** The output of our delete `OrderProduct` mutation. */
export type DeleteOrderProductPayloadOrderProductEdgeArgs = {
  orderBy?: Maybe<Array<OrderProductsOrderBy>>;
};

/** All input for the `deletePage` mutation. */
export type DeletePageInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Page` mutation. */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Page` that was deleted by this mutation. */
  page?: Maybe<Page>;
  deletedPageNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Version` that is related to this `Page`. */
  versionByVersion?: Maybe<Version>;
  /** An edge for our `Page`. May be used by Relay 1. */
  pageEdge?: Maybe<PagesEdge>;
};


/** The output of our delete `Page` mutation. */
export type DeletePagePayloadPageEdgeArgs = {
  orderBy?: Maybe<Array<PagesOrderBy>>;
};

/** All input for the `deleteProduct` mutation. */
export type DeleteProductInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Product` mutation. */
export type DeleteProductPayload = {
  __typename?: 'DeleteProductPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was deleted by this mutation. */
  product?: Maybe<Product>;
  deletedProductNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Product`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** Reads a single `CategoryByCatalog` that is related to this `Product`. */
  categoryByCatalogByCategoryAndCatalog?: Maybe<CategoryByCatalog>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
};


/** The output of our delete `Product` mutation. */
export type DeleteProductPayloadProductEdgeArgs = {
  orderBy?: Maybe<Array<ProductsOrderBy>>;
};

/** All input for the `deleteProfile` mutation. */
export type DeleteProfileInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Profile` mutation. */
export type DeleteProfilePayload = {
  __typename?: 'DeleteProfilePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Profile` that was deleted by this mutation. */
  profile?: Maybe<Profile>;
  deletedProfileNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Profile`. May be used by Relay 1. */
  profileEdge?: Maybe<ProfilesEdge>;
};


/** The output of our delete `Profile` mutation. */
export type DeleteProfilePayloadProfileEdgeArgs = {
  orderBy?: Maybe<Array<ProfilesOrderBy>>;
};

/** All input for the `deleteSubCategory` mutation. */
export type DeleteSubCategoryInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `SubCategory` mutation. */
export type DeleteSubCategoryPayload = {
  __typename?: 'DeleteSubCategoryPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `SubCategory` that was deleted by this mutation. */
  subCategory?: Maybe<SubCategory>;
  deletedSubCategoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Category` that is related to this `SubCategory`. */
  categoryByCategory?: Maybe<Category>;
  /** An edge for our `SubCategory`. May be used by Relay 1. */
  subCategoryEdge?: Maybe<SubCategoriesEdge>;
};


/** The output of our delete `SubCategory` mutation. */
export type DeleteSubCategoryPayloadSubCategoryEdgeArgs = {
  orderBy?: Maybe<Array<SubCategoriesOrderBy>>;
};

/** All input for the `deleteSubCategoryById` mutation. */
export type DeleteSubCategoryByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteSubscription` mutation. */
export type DeleteSubscriptionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Subscription` mutation. */
export type DeleteSubscriptionPayload = {
  __typename?: 'DeleteSubscriptionPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Subscription` that was deleted by this mutation. */
  subscription?: Maybe<Subscription>;
  deletedSubscriptionNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Profile` that is related to this `Subscription`. */
  profileByCustomer?: Maybe<Profile>;
  /** Reads a single `Catalog` that is related to this `Subscription`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Subscription`. May be used by Relay 1. */
  subscriptionEdge?: Maybe<SubscriptionsEdge>;
};


/** The output of our delete `Subscription` mutation. */
export type DeleteSubscriptionPayloadSubscriptionEdgeArgs = {
  orderBy?: Maybe<Array<SubscriptionsOrderBy>>;
};

/** All input for the `deleteVersion` mutation. */
export type DeleteVersionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  oid: Scalars['UUID'];
};

/** The output of our delete `Version` mutation. */
export type DeleteVersionPayload = {
  __typename?: 'DeleteVersionPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Version` that was deleted by this mutation. */
  version?: Maybe<Version>;
  deletedVersionNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Catalog` that is related to this `Version`. */
  catalogByCatalog?: Maybe<Catalog>;
  /** An edge for our `Version`. May be used by Relay 1. */
  versionEdge?: Maybe<VersionsEdge>;
};


/** The output of our delete `Version` mutation. */
export type DeleteVersionPayloadVersionEdgeArgs = {
  orderBy?: Maybe<Array<VersionsOrderBy>>;
};

/** All input for the `deleteVersionById` mutation. */
export type DeleteVersionByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};
