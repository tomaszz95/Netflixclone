import Head from 'next/head'

import LoginView from '../../components/login/LoginView'
import LogLayout from '../../components/layouts/LogLayout'

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>Login | Netflix</title>
                <meta name="description" content="Login page" />
            </Head>
            <LogLayout>
                <LoginView />
            </LogLayout>
        </>
    )
}

export default LoginPage
