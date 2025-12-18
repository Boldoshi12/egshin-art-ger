import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

/**
 * Apollo Client үүсгэх функц
 * @param {string} graphqlEndpoint - GraphQL endpoint URL
 * @returns {ApolloClient} Apollo Client instance
 */
export function createApolloClient(graphqlEndpoint) {
  // HTTP Link үүсгэх
  const httpLink = new HttpLink({
    uri: graphqlEndpoint,
    credentials: 'same-origin', // Cookie илгээх бол 'include' ашиглана
  });

  // Apollo Client үүсгэх
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // Cache policies (хэрэв шаардлагатай бол)
          },
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });

  return apolloClient;
}
