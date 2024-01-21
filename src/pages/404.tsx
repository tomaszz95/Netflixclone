import Head from 'next/head'

import ErrorPage from '../components/errorPages/ErrorPage'

const ErrorPage404 = () => {
    return (
        <>
            <Head>
                <title>404 error | Netflix</title>
                <meta name="description" content="404 error page" />
            </Head>
            <ErrorPage
                errorTitle="Lost your way?"
                errorText="Sorry, we can't find that page. You'll find lots to explore on the home page."
            />
        </>
    )
}

export default ErrorPage404
