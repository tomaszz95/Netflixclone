import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import RegistrationView from '../../components/signup/RegistrationView'
import SignupLayout from '../../components/signup/SignupLayout'

const RegistrationPage = () => {
    return (
        <ReactProviderCookiesData>
            <SignupLayout>
                <RegistrationView />
            </SignupLayout>
        </ReactProviderCookiesData>
    )
}

export default RegistrationPage
