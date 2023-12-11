import Head from 'next/head'

import Page404View from '../components/errorPages/Page404View'

const Page404 = () => {
    return (
        <>
            <Head>
                <title>404 error | Netflix</title>
                <meta name="description" content="404 error page" />
            </Head>
            <Page404View />
        </>
    )
}

export default Page404
