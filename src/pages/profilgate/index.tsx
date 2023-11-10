import ChooseUserView from '../../components/users/ChooseUserView'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../components/layouts/WithoutAuth'

const ProfilGateSite = () => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <ChooseUserView />
        </ReactProviderCookiesData>
    )
}

export default ProfilGateSite
