import Head from 'next/head'

import RegistrationView from '../../components/signup/registration/RegistrationView'
import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'

import ReactProviderCookiesData from '../../components/layouts/ReactProviderCookiesData'

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
