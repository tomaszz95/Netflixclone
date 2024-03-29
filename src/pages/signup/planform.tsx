import Head from 'next/head'

import PlanFormView from '../../components/signup/plan/PlanFormView'
import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const PlanPage = () => {
    return (
        <>
            <Head>
                <title>Form Plan | Netflix</title>
                <meta name="description" content="Form Plan page" />
            </Head>
            <SignupLayout>
                <WithoutAuth />
                <PlanFormView />
            </SignupLayout>
        </>
    )
}

export default PlanPage
