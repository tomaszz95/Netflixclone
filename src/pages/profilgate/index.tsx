import ChooseUserView from '../../components/users/ChooseUserView'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'

const ProfilGateSite = () => {
    return (
        <ReactProviderCookiesData>
            <ChooseUserView />
        </ReactProviderCookiesData>
    )
}

export default ProfilGateSite
