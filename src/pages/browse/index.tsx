import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllAPIFetchedData } from '../api/fetchMainSitesApiData'
import { fetchedMainWholeObj } from '../../components/helpers/types'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const BrowsePage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <LoggedMainSiteView fetchedData={fetchedData} />
        </ReactProviderCookiesData>
    )
}

export default BrowsePage

export async function getStaticProps() {
    const fetchedData = await getAllAPIFetchedData()

    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
