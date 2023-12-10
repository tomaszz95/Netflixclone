import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllAPIFetchedPopularAndNewestData } from '../api/fetchMainSitesApiData'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import { fetchedMainWholeObj } from '../../components/helpers/types'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const NewAndPopularPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
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
