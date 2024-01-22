import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'
import PaypalView from '../../components/payOptions/PaypalView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const PaypalPage = () => {
    return (
        <>
            <Head>
                <title>PayPal Payment | Netflix</title>
                <meta name="description" content="PayPal Payment page" />
            </Head>
            <SignupLayout>
                <WithoutAuth />
                <PaypalView />
            </SignupLayout>
        </>
    )
}

export default PaypalPage
