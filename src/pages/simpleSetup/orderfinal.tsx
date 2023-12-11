import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout'
import OrderFinalView from '../../components/simpleSetup/OrderFinalView'

const OrderFinalPage = () => {
    return (
        <>
            <Head>
                <title>Final order page | Netflix</title>
                <meta name="description" content="Final order page" />
            </Head>
            <SignupLayout>
                <OrderFinalView />
            </SignupLayout>
        </>
    )
}

export default OrderFinalPage
