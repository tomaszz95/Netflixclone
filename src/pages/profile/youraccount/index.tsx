import Head from 'next/head'

import YourAccountView from '../../../components/profile/account/YourAccountView'

import ReactProviderCookiesData from '../../../helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/WithoutAuth'

const AccountSite = () => {
    return (
        <>
            <Head>
                <title>Your Account | Netflix</title>
                <meta name="description" content="Your Account page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <YourAccountView />
            </ReactProviderCookiesData>
        </>
    )
}

export default AccountSite
