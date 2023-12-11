import Head from 'next/head'

import ChooseUserView from '../../components/users/ChooseUserView'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'

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
                <ChooseUserView />
            </ReactProviderCookiesData>
        </>
    )
}

export default ProfilGateSite
