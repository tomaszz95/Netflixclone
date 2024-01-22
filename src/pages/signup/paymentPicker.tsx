import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'
import PaymentPickerView from '../../components/signup/PaymentPickerView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const PaymentPickerPage = () => {
    return (
        <>
            <Head>
                <title>Payment Picker | Netflix</title>
                <meta name="description" content="Payment Picker page" />
            </Head>
            <SignupLayout>
                <WithoutAuth />
                <PaymentPickerView />
            </SignupLayout>
        </>
    )
}

export default PaymentPickerPage
