import SignupLayout from '../../components/layouts/SignupLayout'
import RegformView from '../../components/signup/RegformView'

import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'

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
