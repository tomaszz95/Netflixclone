import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'
import LanguagesView from '../../components/simpleSetup/LanguagesView'

const LanguagesPage = () => {
    return (
        <>
            <Head>
                <title>Secondary Languages | Netflix</title>
                <meta name="description" content="Choose Secondary Languages page" />
            </Head>
            <SignupLayout>
                <LanguagesView />
            </SignupLayout>
        </>
    )
}

export default LanguagesPage
