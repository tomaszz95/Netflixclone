import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllKidsAPIFetchedData } from '../api/fetchMainSitesApiData'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import { fetchedMainWholeObj } from '../../components/helpers/types'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const KidsPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
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
