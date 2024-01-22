import Head from 'next/head'

import CookiesModal from '../components/cookies/CookiesModal'
import MainView from '../components/mainSite/MainView'

import ReactProviderCookiesData from '../components/layouts/ReactProviderCookiesData'

const HomePage = () => {
    return (
        <ReactProviderCookiesData>
            <Head>
                <title>Homepage | Netflix</title>
                <meta name="description" content="Homepage netflix site" />
            </Head>
            <CookiesModal />
            <MainView />
        </ReactProviderCookiesData>
    )
}

export default HomePage
