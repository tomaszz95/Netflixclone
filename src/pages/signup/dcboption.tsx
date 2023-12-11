import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout'
import MobileView from '../../components/payOptions/MobileView'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const DbcoptionPage = () => {
    return (
        <>
            <Head>
                <title>Dcb Option Payment | Netflix</title>
                <meta name="description" content="Dcb Option Payment page" />
            </Head>
            <SignupLayout>
                <WithoutAuth />
                <MobileView />
            </SignupLayout>
        </>
    )
}

export default DbcoptionPage
