import Head from 'next/head'

import ReactProviderCookiesData from '../../../components/layouts/ReactProviderCookiesData'

import UserView from '../../../components/profile/users/UserView'
import WithoutAuth from '../../../components/layouts/WithoutAuth'

const ManageProfileSite = () => {
    return (
        <>
            <Head>
                <title>Manage Profile | Netflix</title>
                <meta name="description" content="Manage Profile page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <UserView manage={true} />
            </ReactProviderCookiesData>
        </>
    )
}

export default ManageProfileSite
