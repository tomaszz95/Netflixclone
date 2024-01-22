import Head from 'next/head'
import SignupLayout from '../../components/layouts/SignupLayout/SignupLayout'
import DeviceSurveyView from '../../components/simpleSetup/DeviceSurveyView'

const DevicesSurveyPage = () => {
    return (
        <>
            <Head>
                <title>Devices Survey | Netflix</title>
                <meta name="description" content="Devices survey page" />
            </Head>
            <SignupLayout>
                <DeviceSurveyView />
            </SignupLayout>
        </>
    )
}

export default DevicesSurveyPage
