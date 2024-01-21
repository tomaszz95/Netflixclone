import Head from 'next/head'

import ErrorPage from '../components/errorPages/ErrorPage'

const ErrorPage500 = () => {
    return (
        <>
            <Head>
                <title>500 error | Netflix</title>
                <meta name="description" content="500 error page" />
            </Head>
            <ErrorPage
                errorTitle="Something went wrong :<"
                errorText="Sorry, we're having trouble with your request. You'll find lots to explore on the home page."
            />
        </>
    )
}

export default ErrorPage500
