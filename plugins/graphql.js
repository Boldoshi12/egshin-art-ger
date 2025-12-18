import { createApolloClient } from '~/graphql/client';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  // GraphQL endpoint URL (default: http://127.0.0.1:8080/graphql)
  // .env файлдаа NUXT_PUBLIC_GRAPHQL_ENDPOINT зааж өөрчилж болно
  const graphqlEndpoint = config.public.graphqlEndpoint || 'http://127.0.0.1:8080/graphql';
  
  // Apollo Client үүсгэх
  const apolloClient = createApolloClient(graphqlEndpoint);
  
  return {
    provide: {
      apollo: apolloClient,
    },
  };
});
