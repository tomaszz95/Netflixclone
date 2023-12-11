import Head from 'next/head'

import RegistrationView from '../../components/signup/RegistrationView'
import SignupLayout from '../../components/layouts/SignupLayout'

import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'

const RegistrationPage = () => {
    return (
        <>
            <Head>
                <title>Registration | Netflix</title>
                <meta name="description" content="Registration page" />
            </Head>
            <ReactProviderCookiesData>
                <SignupLayout>
                    <RegistrationView />
                </SignupLayout>
            </ReactProviderCookiesData>
        </>
    )
}

export default RegistrationPage
