// default Options
export const defaultOptions = {
    queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
    },
}

// refetchOnWindowFocus: automatically requests fresh data in the background if user leaves the app and returns to stale data.
// refetchOnmount: if true, refetch on mount if the data is stale.
// refetchOnReconnect: if true, refetch on reconnect if the data is stale.
// retry: if true, failed queries will retry infinitely.
// staleTime: the time in milliseconds after data is considered stale. Defaults to 0.