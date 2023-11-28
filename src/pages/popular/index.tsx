import { fetchedMainWholeObj } from '../../components/helpers/types'

import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'
import { getAllAPIFetchedPopularAndNewestData } from '../api/fetchMainSitesApiData'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const NewAndPopularPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <LoggedMainSiteView fetchedData={fetchedData} />
        </ReactProviderCookiesData>
    )
}

export default NewAndPopularPage

export async function getStaticProps() {
    const fetchedData = await getAllAPIFetchedPopularAndNewestData()

    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
