import Head from 'next/head'

import Page500View from '../components/errorPages/Page500View'

const Page404 = () => {
    return (
        <>
            <Head>
                <title>500 error | Netflix</title>
                <meta name="description" content="500 error page" />
            </Head>
            <Page500View />
        </>
    )
}

export default Page404
