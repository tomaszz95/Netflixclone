import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout'
import CreditOptionView from '../../components/payOptions/CreditOptionView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const PaymentPickerPage = () => {
    return (
        <>
            <Head>
                <title>Credit Card Payment | Netflix</title>
                <meta name="description" content="Credit Card Payment page" />
            </Head>
            <SignupLayout>
                <WithoutAuth />
                <CreditOptionView />
            </SignupLayout>
        </>
    )
}

export default PaymentPickerPage
