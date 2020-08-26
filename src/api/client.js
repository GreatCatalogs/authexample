import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://gql.catalogshub.com/new',
    cache: new InMemoryCache({ dataIdFromObject: (object) => object.oid || null })
});

export default client;
