import ReactProviderCookiesData from '../../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../../components/layouts/WithoutAuth'
import YourAccountView from '../../../components/profile/account/YourAccountView'

const AccountSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <YourAccountView />
        </ReactProviderCookiesData>
    )
}

export default AccountSite
