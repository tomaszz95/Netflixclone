import Head from 'next/head'

import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'
import NewProfilesView from '../../components/simpleSetup/NewProfilesView'

const NewProfilesPage = () => {
    return (
        <>
            <Head>
                <title>Create New Profiles | Netflix</title>
                <meta name="description" content="Create new profiles page" />
            </Head>
            <SignupLayout>
                <NewProfilesView />
            </SignupLayout>
        </>
    )
}

export default NewProfilesPage
