import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'
import GiftView from '../../components/payOptions/GiftView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const GiftOptionPage = () => {
    return (
        <>
            <Head>
                <title>Gift Option Payment | Netflix</title>
                <meta name="description" content="Gift Option Payment page" />
            </Head>
            <SignupLayout>
                <WithoutAuth />
                <GiftView />
            </SignupLayout>
        </>
    )
}

export default GiftOptionPage
