import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

const BrowsePage = () => {
    return (
        <ReactProviderCookiesData>
            <LoggedMainSiteView />
        </ReactProviderCookiesData>
    )
}

export default BrowsePage
