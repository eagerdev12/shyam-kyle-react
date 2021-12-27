import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { GRAPHQL_SERVER } from '../../config';

const httpLink = new HttpLink({
    uri: GRAPHQL_SERVER,
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink])
});