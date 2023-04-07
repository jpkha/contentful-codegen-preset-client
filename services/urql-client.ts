import { NextPage } from 'next';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import NextApp from 'next/app';
import { Client, SSRExchange, cacheExchange, fetchExchange, ssrExchange } from 'urql';

let client: Client | null;
let ssrCache: SSRExchange;

export function initContentfulSsrClient() {
    if (!ssrCache) {
        ssrCache = ssrExchange({ isClient: false })
    }

    if (!client) {
        client = initUrqlClient(
            {
                url: `${process.env.CONTENTFUL_URL}`,
                exchanges: [cacheExchange, ssrCache, fetchExchange],
                fetchOptions: {
                    headers: {
                        authorization:
                            `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                    },
                },
            },
            false
        );
    }


    return { client, ssrCache };
}

export function withContentfulPublicClient<
    C extends NextPage<any, any> | typeof NextApp
>(AppOrPage: C) {
    return withUrqlClient(() => ({
            url: `${process.env.CONTENTFUL_URL}`,
        }),
        { ssr: false }
    )(AppOrPage)
}
