import { fetchedMainWholeObj } from '../../components/helpers/types'

import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'
import { getAllAPIFetchedDataShows } from '../api/allTvSeries'

type ComponentType = {
    fetchedData: fetchedMainWholeObj
}

const MoviesPage: React.FC<ComponentType> = ({ fetchedData }) => {
    return (
        <ReactProviderCookiesData>
            <LoggedMainSiteView fetchedData={fetchedData} />
        </ReactProviderCookiesData>
    )
}

export default MoviesPage

export async function getStaticProps() {
    const fetchedData = await getAllAPIFetchedDataShows()

    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
