import Head from 'next/head'

import TransferProfileView from '../../../components/profile/transferProfile/TransferProfileView'

import ReactProviderCookiesData from '../../../components/layouts/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/WithoutAuth'

const TransferProfileSite = () => {
    return (
        <>
            <Head>
                <title>Transfer Profile | Netflix</title>
                <meta name="description" content="Transfer Profile page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <TransferProfileView />
            </ReactProviderCookiesData>
        </>
    )
}

export default TransferProfileSite
