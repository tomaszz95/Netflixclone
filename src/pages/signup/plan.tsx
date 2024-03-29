import Head from 'next/head'

import PlanView from '../../components/signup/plan/PlanView'
import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'

import WithoutAuth from '../../components/layouts/WithoutAuth'

const PlanPage = () => {
    return (
        <>
            <Head>
                <title>Choose Plan | Netflix</title>
                <meta name="description" content="Choose Plan page" />
            </Head>
            <SignupLayout>
                <WithoutAuth />
                <PlanView />
            </SignupLayout>
        </>
    )
}

export default PlanPage
