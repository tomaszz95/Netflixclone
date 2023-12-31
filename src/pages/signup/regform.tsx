import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout'
import RegformView from '../../components/signup/RegformView'

import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'

const RegformPage = () => {
    return (
        <>
            <Head>
                <title>Register | Netflix</title>
                <meta name="description" content="Register page" />
            </Head>

            <ReactProviderCookiesData>
                <SignupLayout>
                    <RegformView />
                </SignupLayout>
            </ReactProviderCookiesData>
        </>
    )
}

export default RegformPage
