import Head from 'next/head'
import LogoutView from '../../components/login/LogoutView'
import LogLayout from '../../components/layouts/LogLayout'

const LogoutPage = () => {
    return (
        <>
            <Head>
                <title>Logout | Netflix</title>
                <meta name="description" content="Logout page" />
            </Head>
            <LogLayout>
                <LogoutView />
            </LogLayout>
        </>
    )
}

export default LogoutPage
