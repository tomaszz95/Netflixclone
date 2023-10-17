import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import RegformView from '../../components/signup/RegformView'
import SignupLayout from '../../components/layouts/SignupLayout'

const RegformPage = () => {
    return (
        <ReactProviderCookiesData>
            <SignupLayout>
                <RegformView />
            </SignupLayout>
        </ReactProviderCookiesData>
    )
}

export default RegformPage
