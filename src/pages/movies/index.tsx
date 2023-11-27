import { fetchedMainWholeObj } from '../../components/helpers/types'

import ReactProviderCookiesData from '../../components/helpers/ReactProviderCookiesData'
import LoggedMainSiteView from '../../components/loggedMainSite/LoggedMainSiteView'
import { getAllAPIFetchedDataMovies } from '../api/fetchMainSitesApiData'

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
    const fetchedData = await getAllAPIFetchedDataMovies()
    return {
        props: {
            fetchedData,
        },
        revalidate: 21600,
    }
}
