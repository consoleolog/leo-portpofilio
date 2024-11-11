"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as StoreProvider } from "react-redux"
import {store} from "@/lib/store";

export const Provider = ({children}: PropsWithChildren) => {
    const [queryClient] = useState(()=> new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
                retry: 0,
            },
        },
    }));
    return (
        <QueryClientProvider client={queryClient}>
            <StoreProvider store={store}>
                {children}
            </StoreProvider>
        </QueryClientProvider>
    );
}