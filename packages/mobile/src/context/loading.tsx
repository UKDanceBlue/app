import type { ReactNode } from "react";
import { useCallback, useReducer } from "react";

import { Center } from "@/components/ui/center";
import { Portal } from "@/components/ui/portal";
import { Spinner } from "@/components/ui/spinner";

import { LoadingContext } from "./useLoading";

/**
 * Provides a loading context for the app, accessed via the useLoading hook. If any loading state is true, a spinner will be displayed.
 * @param params
 * @param params.children The app's content
 * @returns The app's content wrapped in a loading context
 */
export const LoadingWrapper = ({ children }: { children: ReactNode }) => {
  const [loadingReasons, updateLoadingReasons] = useReducer(
    (
      state: Partial<Record<string, boolean>>,
      [id, stateChange]: [string, boolean]
    ) => {
      return {
        ...state,
        [id]: stateChange,
      };
    },
    {}
  );

  const setLoading = useCallback((state: boolean, id: string) => {
    updateLoadingReasons([id, state]);
  }, []);

  return (
    <LoadingContext.Provider value={[loadingReasons, setLoading]}>
      <Portal isOpen={Object.values(loadingReasons).some(Boolean)}>
        <Center className="h-full w-full">
          <Spinner className="text-primary-500" size="large" />
        </Center>
      </Portal>
      {children}
    </LoadingContext.Provider>
  );
};
