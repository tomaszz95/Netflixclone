import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'

import { getAllAPIFetchedDataShows } from '../api/fetchMainSitesApiData'
import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import { fetchedMainWholeObj } from '../../components/helpers/types'
import WithoutAuth from '../../components/layouts/WithoutAuth'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const TVShowsPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <WithoutAuth />
            <LoggedMainSiteView fetchedData={fetchedData} />
        </ReactProviderCookiesData>
    )
}

export default TVShowsPage

export async function getStaticProps() {
    const fetchedData = await getAllAPIFetchedDataShows()

    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
