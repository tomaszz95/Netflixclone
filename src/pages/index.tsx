import CookiesModal from '../components/cookies/CookiesModal'
import MainView from '../components/mainSite/MainView'
import ReactProviderCookiesData from '../components/helpers/ReactProviderCookiesData'

const HomePage = () => {
    return (
        <ReactProviderCookiesData>
            <CookiesModal />
            <MainView />
        </ReactProviderCookiesData>
    )
}

export default HomePage
