import { API_BASE_URL } from "@common/apiUrl";
import { DANCEBLUE_TOKEN_KEY } from "@common/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authExchange } from "@urql/exchange-auth";
import type { ReactNode } from "react";
import { createContext, useContext, useMemo, useReducer } from "react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";

const invalidateCacheContext = createContext<() => void>(() => {});

export function UrqlContext({ children }: { children: ReactNode }) {
  const [cacheInvalidation, invalidateCache] = useReducer(
    (state: number) => state + 1,
    1
  );

  const client = useMemo(() => {
    cacheInvalidation;
    return new Client({
      url: `${API_BASE_URL}/graphql`,
      exchanges: [
        cacheExchange,
        authExchange(async ({ appendHeaders }) => {
          const token = await AsyncStorage.getItem(DANCEBLUE_TOKEN_KEY);

          return {
            addAuthToOperation: (operation) => {
              if (token) {
                return appendHeaders(operation, {
                  Authorization: `Bearer ${token}`,
                });
              }
              return operation;
            },
            refreshAuth: async () => {
              await AsyncStorage.removeItem(DANCEBLUE_TOKEN_KEY);
              invalidateCache();
            },
            didAuthError: ({ message }) => {
              return (
                message ===
                  "Access denied! You don't have permission for this action!" ||
                message === "Context creation failed: Invalid JWT payload"
              );
            },
          };
        }),
        fetchExchange,
      ],
    });
  }, [cacheInvalidation]);
  client;
  return (
    <invalidateCacheContext.Provider value={invalidateCache}>
      <Provider value={client}>{children}</Provider>
    </invalidateCacheContext.Provider>
  );
}

export function useInvalidateCache() {
  return useContext(invalidateCacheContext);
}
