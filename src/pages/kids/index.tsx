import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'
import { fetchedMainWholeObj } from '../../components/helpers/types'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const BrowsePage: React.FC<ComponentType> = ({ fetchedData }) => {
    return <ReactProviderCookiesData>{/* <LoggedMainSiteView /> */}</ReactProviderCookiesData>
}

export default BrowsePage
