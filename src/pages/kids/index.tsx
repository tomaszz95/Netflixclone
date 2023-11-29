import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'
import { fetchedMainWholeObj } from '../../components/helpers/types'
import { getAllKidsAPIFetchedData } from '../api/fetchMainSitesApiData'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const KidsPage: React.FC<ComponentType> = ({ fetchedData }) => {

    return (
        <ReactProviderCookiesData>
            <LoggedMainSiteView fetchedData={fetchedData} />
        </ReactProviderCookiesData>
    )
}

export default KidsPage

export async function getStaticProps() {
    const fetchedData = await getAllKidsAPIFetchedData()

    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
