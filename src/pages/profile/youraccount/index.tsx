import YourAccountView from '../../../components/profile/account/YourAccountView'

import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/WithoutAuth'

const AccountSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <YourAccountView />
        </ReactProviderCookiesData>
    )
}

export default AccountSite
