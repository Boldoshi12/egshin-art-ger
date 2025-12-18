import { ref } from 'vue';

/**
 * GraphQL query ажиллуулах composable
 * @param {DocumentNode} query - GraphQL query
 * @param {Object} variables - Query variables
 * @returns {{data: Ref, loading: Ref<boolean>, error: Ref, refetch: Function}}
 */
export const useGraphQLQuery = (query, variables) => {
  const { $apollo } = useNuxtApp();
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const execute = async () => {
    loading.value = true;
    error.value = null;

    try {
      const result = await $apollo.query({
        query,
        variables,
      });

      data.value = result.data;
    } catch (err) {
      error.value = err;
      console.error('GraphQL Query Error:', err);
    } finally {
      loading.value = false;
    }
  };

  // Automatic execution on mount
  onMounted(() => {
    execute();
  });

  return {
    data,
    loading,
    error,
    refetch: execute,
  };
};

/**
 * GraphQL mutation ажиллуулах composable
 * @param {DocumentNode} mutation - GraphQL mutation
 * @returns {{data: Ref, loading: Ref<boolean>, error: Ref, mutate: Function}}
 */
export const useGraphQLMutation = (mutation) => {
  const { $apollo } = useNuxtApp();
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const mutate = async (variables) => {
    loading.value = true;
    error.value = null;

    try {
      const result = await $apollo.mutate({
        mutation,
        variables,
      });

      data.value = result.data;
      return result.data;
    } catch (err) {
      error.value = err;
      console.error('GraphQL Mutation Error:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    loading,
    error,
    mutate,
  };
};
