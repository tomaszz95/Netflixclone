import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import store from '../components/store'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Netflix clone homepage site" />
                <meta name="author" content="Tomasz Żuber" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}
