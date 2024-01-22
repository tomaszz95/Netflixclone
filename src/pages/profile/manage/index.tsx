import Head from 'next/head'

import ManageProfilesView from '../../../components/profile/ManageProfilesView'

import ReactProviderCookiesData from '../../../components/layouts/ReactProviderCookiesData'
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
                <ManageProfilesView />
            </ReactProviderCookiesData>
        </>
    )
}

export default ManageProfileSite
