import Head from 'next/head'

import AddProfileView from '../../components/profile/AddProfileView'

import ReactProviderCookiesData from '../../helpers/ReactProviderCookiesData'
import WithoutAuth from '../../components/layouts/WithoutAuth'

const AddProfileSite = () => {
    return (
        <>
            <Head>
                <title>Add New Profile | Netflix</title>
                <meta name="description" content="Add New Profile page" />
            </Head>
            <ReactProviderCookiesData>
                <WithoutAuth />
                <AddProfileView />
            </ReactProviderCookiesData>
        </>
    )
}

export default AddProfileSite
