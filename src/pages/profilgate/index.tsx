import Head from 'next/head'

import UserView from '../../components/profile/users/UserView'
import ReactProviderCookiesData from '../../components/layouts/ReactProviderCookiesData'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const ProfilGateSite = () => {
    return (
        <>
            <Head>
                <title>Choose profil | Netflix</title>
                <meta name="description" content="Choose profil page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <UserView manage={false}/>
            </ReactProviderCookiesData>
        </>
    )
}

export default ProfilGateSite
